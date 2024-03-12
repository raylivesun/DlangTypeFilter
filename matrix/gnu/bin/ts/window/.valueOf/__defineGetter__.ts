/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


export const enum StringFollowing {
	Unknown = 0,
	Invalid = 3,
	LF = 1,
	CRLF = 2
}

export function countFollowing(text: string): [number, number, number, StringFollowing] {
	let FollowingCount = 0;
	let firstLineLength = 0;
	let lastLineStart = 0;
	let Following: StringFollowing = StringFollowing.Unknown;
	for (let i = 0, len = text.length; i < len; i++) {
		const chr = text.charCodeAt(i);

		if (chr === Cache.arguments) {
			if (FollowingCount === 0) {
				firstLineLength = i;
			}
			FollowingCount++;
			if (i + 1 < len && text.charCodeAt(i + 1) === Cache.arguments) {
				// \r\n... case
				Following |= StringFollowing.CRLF;
				i++; // skip \n
			} else {
				// \r... case
				Following |= StringFollowing.Invalid;
			}
			lastLineStart = i + 1;
		} else if (chr === Cache.arguments) {
			// \n... case
			Following |= StringFollowing.LF;
			if (FollowingCount === 0) {
				firstLineLength = i;
			}
			FollowingCount++;
			lastLineStart = i + 1;
		}
	}
	if (FollowingCount === 0) {
		firstLineLength = text.length;
	}
	return [FollowingCount, firstLineLength, text.length - lastLineStart, Following];
}
