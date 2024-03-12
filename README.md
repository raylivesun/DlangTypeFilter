# AgsFluidIIRFilterUtil: Advanced Gtk+ Sequencer Audio Reference Manual

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html><head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="generator" content="DocBook XSL Stylesheets Vsnapshot">
<link rel="home" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/index.html" title="Advanced Gtk+ Sequencer Audio Reference Manual">
<link rel="up" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/audio-fluid.html" title="Utility functions from Fluidsynth">
<link rel="prev" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidInterpolate7thOrderUtil.html" title="AgsFluidInterpolate7thOrderUtil">
<link rel="next" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/libags-audio-AgsFLUIDPitchUtil.html" title="AgsFLUIDPitchUtil">
<meta name="generator" content="GTK-Doc V1.33.1 (XML mode)">
<link rel="stylesheet" href="README_files/style.css" type="text/css">
</head>
<body vlink="#840084" text="black" link="#0000FF" bgcolor="white" alink="#0000FF">
<table class="navigation" id="top" summary="Navigation header" width="100%" cellspacing="5" cellpadding="2"><tbody><tr valign="middle">
<td class="shortcuts" width="100%" align="left">
<a href="#" class="shortcut">Top</a><span id="nav_description">&nbsp;&nbsp;<span class="dim">|</span>&nbsp;
                  <a href="#AgsFluidIIRFilterUtil.description" class="shortcut">Description</a></span><span id="nav_hierarchy">&nbsp;&nbsp;<span class="dim">|</span>&nbsp;
                  <a href="#AgsFluidIIRFilterUtil.object-hierarchy" class="shortcut">Object Hierarchy</a></span>
</td>
<td><a accesskey="h" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/index.html"><img src="README_files/home.png" alt="Home" width="16" height="16" border="0"></a></td>
<td><a accesskey="u" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/audio-fluid.html"><img src="README_files/up.png" alt="Up" width="16" height="16" border="0"></a></td>
<td><a accesskey="p" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidInterpolate7thOrderUtil.html"><img src="README_files/left.png" alt="Prev" width="16" height="16" border="0"></a></td>
<td><a accesskey="n" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/libags-audio-AgsFLUIDPitchUtil.html"><img src="README_files/right.png" alt="Next" width="16" height="16" border="0"></a></td>
</tr></tbody></table>
<div class="refentry">
<a name="AgsFluidIIRFilterUtil"></a><div class="titlepage"></div>
<div class="refnamediv"><table width="100%"><tbody><tr>
<td valign="top">
<h2><span class="refentrytitle"><a name="AgsFluidIIRFilterUtil.top_of_page"></a>AgsFluidIIRFilterUtil</span></h2>
<p>AgsFluidIIRFilterUtil — util functions to fluid IIR filter</p>
</td>
<td class="gallery_image" valign="top" align="right"></td>
</tr></tbody></table></div>
<div class="refsect1">
<a name="AgsFluidIIRFilterUtil.stability-level"></a><h2>Stability Level</h2>
<acronym title="The intention of a Stable interface is to enable arbitrary third parties to
develop applications to these interfaces, release them, and have confidence that
they will run on all minor releases of the product (after the one in which the
interface was introduced, and within the same major release). Even at a major
release, incompatible changes are expected to be rare, and to have strong
justifications.
"><span class="acronym">Stable</span></acronym>, unless otherwise indicated
</div>
<div class="refsect1">
<a name="AgsFluidIIRFilterUtil.functions"></a><h2>Functions</h2>
<div class="informaltable"><table class="informaltable" width="100%" border="0">
<colgroup>
<col class="functions_proto_type" width="150px">
<col class="functions_proto_name">
</colgroup>
<tbody>
<tr>
<td class="define_keyword">#define</td>
<td class="function_name">
<a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#AGS-FLUID-IIR-FILTER:CAPS" title="AGS_FLUID_IIR_FILTER()">AGS_FLUID_IIR_FILTER</a><span class="c_punctuation">()</span>
</td>
</tr>
<tr>
<td class="function_type">
<a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html" title="AgsFluidIIRFilterUtil"><span class="returnvalue">AgsFluidIIRFilterUtil</span></a>&nbsp;*
</td>
<td class="function_name">
<a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#ags-fluid-iir-filter-util-alloc" title="ags_fluid_iir_filter_util_alloc&nbsp;()">ags_fluid_iir_filter_util_alloc</a>&nbsp;<span class="c_punctuation">()</span>
</td>
</tr>
<tr>
<td class="function_type">
<a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#gpointer"><span class="returnvalue">gpointer</span></a>
</td>
<td class="function_name">
<a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#ags-fluid-iir-filter-util-copy" title="ags_fluid_iir_filter_util_copy&nbsp;()">ags_fluid_iir_filter_util_copy</a>&nbsp;<span class="c_punctuation">()</span>
</td>
</tr>
<tr>
<td class="function_type">
<span class="returnvalue">void</span>
</td>
<td class="function_name">
<a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#ags-fluid-iir-filter-util-free" title="ags_fluid_iir_filter_util_free&nbsp;()">ags_fluid_iir_filter_util_free</a>&nbsp;<span class="c_punctuation">()</span>
</td>
</tr>
<tr>
<td class="function_type">
<a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#gpointer"><span class="returnvalue">gpointer</span></a>
</td>
<td class="function_name">
<a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#ags-fluid-iir-filter-util-get-source" title="ags_fluid_iir_filter_util_get_source&nbsp;()">ags_fluid_iir_filter_util_get_source</a>&nbsp;<span class="c_punctuation">()</span>
</td>
</tr>
<tr>
<td class="function_type">
<span class="returnvalue">void</span>
</td>
<td class="function_name">
<a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#ags-fluid-iir-filter-util-set-source" title="ags_fluid_iir_filter_util_set_source&nbsp;()">ags_fluid_iir_filter_util_set_source</a>&nbsp;<span class="c_punctuation">()</span>
</td>
</tr>
<tr>
<td class="function_type">
<a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#guint"><span class="returnvalue">guint</span></a>
</td>
<td class="function_name">
<a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#ags-fluid-iir-filter-util-get-source-stride" title="ags_fluid_iir_filter_util_get_source_stride&nbsp;()">ags_fluid_iir_filter_util_get_source_stride</a>&nbsp;<span class="c_punctuation">()</span>
</td>
</tr>
<tr>
<td class="function_type">
<span class="returnvalue">void</span>
</td>
<td class="function_name">
<a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#ags-fluid-iir-filter-util-set-source-stride" title="ags_fluid_iir_filter_util_set_source_stride&nbsp;()">ags_fluid_iir_filter_util_set_source_stride</a>&nbsp;<span class="c_punctuation">()</span>
</td>
</tr>
<tr>
<td class="function_type">
<a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#gpointer"><span class="returnvalue">gpointer</span></a>
</td>
<td class="function_name">
<a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#ags-fluid-iir-filter-util-get-destination" title="ags_fluid_iir_filter_util_get_destination&nbsp;()">ags_fluid_iir_filter_util_get_destination</a>&nbsp;<span class="c_punctuation">()</span>
</td>
</tr>
<tr>
<td class="function_type">
<span class="returnvalue">void</span>
</td>
<td class="function_name">
<a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#ags-fluid-iir-filter-util-set-destination" title="ags_fluid_iir_filter_util_set_destination&nbsp;()">ags_fluid_iir_filter_util_set_destination</a>&nbsp;<span class="c_punctuation">()</span>
</td>
</tr>
<tr>
<td class="function_type">
<a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#guint"><span class="returnvalue">guint</span></a>
</td>
<td class="function_name">
<a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#ags-fluid-iir-filter-util-get-destination-stride" title="ags_fluid_iir_filter_util_get_destination_stride&nbsp;()">ags_fluid_iir_filter_util_get_destination_stride</a>&nbsp;<span class="c_punctuation">()</span>
</td>
</tr>
<tr>
<td class="function_type">
<span class="returnvalue">void</span>
</td>
<td class="function_name">
<a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#ags-fluid-iir-filter-util-set-destination-stride" title="ags_fluid_iir_filter_util_set_destination_stride&nbsp;()">ags_fluid_iir_filter_util_set_destination_stride</a>&nbsp;<span class="c_punctuation">()</span>
</td>
</tr>
<tr>
<td class="function_type">
<a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#guint"><span class="returnvalue">guint</span></a>
</td>
<td class="function_name">
<a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#ags-fluid-iir-filter-util-get-buffer-length" title="ags_fluid_iir_filter_util_get_buffer_length&nbsp;()">ags_fluid_iir_filter_util_get_buffer_length</a>&nbsp;<span class="c_punctuation">()</span>
</td>
</tr>
<tr>
<td class="function_type">
<span class="returnvalue">void</span>
</td>
<td class="function_name">
<a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#ags-fluid-iir-filter-util-set-buffer-length" title="ags_fluid_iir_filter_util_set_buffer_length&nbsp;()">ags_fluid_iir_filter_util_set_buffer_length</a>&nbsp;<span class="c_punctuation">()</span>
</td>
</tr>
<tr>
<td class="function_type">
<a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#guint"><span class="returnvalue">guint</span></a>
</td>
<td class="function_name">
<a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#ags-fluid-iir-filter-util-get-format" title="ags_fluid_iir_filter_util_get_format&nbsp;()">ags_fluid_iir_filter_util_get_format</a>&nbsp;<span class="c_punctuation">()</span>
</td>
</tr>
<tr>
<td class="function_type">
<span class="returnvalue">void</span>
</td>
<td class="function_name">
<a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#ags-fluid-iir-filter-util-set-format" title="ags_fluid_iir_filter_util_set_format&nbsp;()">ags_fluid_iir_filter_util_set_format</a>&nbsp;<span class="c_punctuation">()</span>
</td>
</tr>
<tr>
<td class="function_type">
<a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#guint"><span class="returnvalue">guint</span></a>
</td>
<td class="function_name">
<a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#ags-fluid-iir-filter-util-get-samplerate" title="ags_fluid_iir_filter_util_get_samplerate&nbsp;()">ags_fluid_iir_filter_util_get_samplerate</a>&nbsp;<span class="c_punctuation">()</span>
</td>
</tr>
<tr>
<td class="function_type">
<span class="returnvalue">void</span>
</td>
<td class="function_name">
<a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#ags-fluid-iir-filter-util-set-samplerate" title="ags_fluid_iir_filter_util_set_samplerate&nbsp;()">ags_fluid_iir_filter_util_set_samplerate</a>&nbsp;<span class="c_punctuation">()</span>
</td>
</tr>
<tr>
<td class="function_type">
<a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#guint"><span class="returnvalue">guint</span></a>
</td>
<td class="function_name">
<a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#ags-fluid-iir-filter-util-get-filter-type" title="ags_fluid_iir_filter_util_get_filter_type&nbsp;()">ags_fluid_iir_filter_util_get_filter_type</a>&nbsp;<span class="c_punctuation">()</span>
</td>
</tr>
<tr>
<td class="function_type">
<span class="returnvalue">void</span>
</td>
<td class="function_name">
<a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#ags-fluid-iir-filter-util-set-filter-type" title="ags_fluid_iir_filter_util_set_filter_type&nbsp;()">ags_fluid_iir_filter_util_set_filter_type</a>&nbsp;<span class="c_punctuation">()</span>
</td>
</tr>
<tr>
<td class="function_type">
<a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#guint"><span class="returnvalue">guint</span></a>
</td>
<td class="function_name">
<a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#ags-fluid-iir-filter-util-get-flags" title="ags_fluid_iir_filter_util_get_flags&nbsp;()">ags_fluid_iir_filter_util_get_flags</a>&nbsp;<span class="c_punctuation">()</span>
</td>
</tr>
<tr>
<td class="function_type">
<span class="returnvalue">void</span>
</td>
<td class="function_name">
<a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#ags-fluid-iir-filter-util-set-flags" title="ags_fluid_iir_filter_util_set_flags&nbsp;()">ags_fluid_iir_filter_util_set_flags</a>&nbsp;<span class="c_punctuation">()</span>
</td>
</tr>
<tr>
<td class="function_type">
<a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#gboolean"><span class="returnvalue">gboolean</span></a>
</td>
<td class="function_name">
<a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#ags-fluid-iir-filter-util-get-filter-startup" title="ags_fluid_iir_filter_util_get_filter_startup&nbsp;()">ags_fluid_iir_filter_util_get_filter_startup</a>&nbsp;<span class="c_punctuation">()</span>
</td>
</tr>
<tr>
<td class="function_type">
<span class="returnvalue">void</span>
</td>
<td class="function_name">
<a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#ags-fluid-iir-filter-util-set-filter-startup" title="ags_fluid_iir_filter_util_set_filter_startup&nbsp;()">ags_fluid_iir_filter_util_set_filter_startup</a>&nbsp;<span class="c_punctuation">()</span>
</td>
</tr>
<tr>
<td class="function_type">
<a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#gdouble"><span class="returnvalue">gdouble</span></a>
</td>
<td class="function_name">
<a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#ags-fluid-iir-filter-util-get-q-lin" title="ags_fluid_iir_filter_util_get_q_lin&nbsp;()">ags_fluid_iir_filter_util_get_q_lin</a>&nbsp;<span class="c_punctuation">()</span>
</td>
</tr>
<tr>
<td class="function_type">
<span class="returnvalue">void</span>
</td>
<td class="function_name">
<a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#ags-fluid-iir-filter-util-set-q-lin" title="ags_fluid_iir_filter_util_set_q_lin&nbsp;()">ags_fluid_iir_filter_util_set_q_lin</a>&nbsp;<span class="c_punctuation">()</span>
</td>
</tr>
<tr>
<td class="function_type">
<a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#gdouble"><span class="returnvalue">gdouble</span></a>
</td>
<td class="function_name">
<a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#ags-fluid-iir-filter-util-get-filter-gain" title="ags_fluid_iir_filter_util_get_filter_gain&nbsp;()">ags_fluid_iir_filter_util_get_filter_gain</a>&nbsp;<span class="c_punctuation">()</span>
</td>
</tr>
<tr>
<td class="function_type">
<span class="returnvalue">void</span>
</td>
<td class="function_name">
<a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#ags-fluid-iir-filter-util-set-filter-gain" title="ags_fluid_iir_filter_util_set_filter_gain&nbsp;()">ags_fluid_iir_filter_util_set_filter_gain</a>&nbsp;<span class="c_punctuation">()</span>
</td>
</tr>
<tr>
<td class="function_type">
<span class="returnvalue">void</span>
</td>
<td class="function_name">
<a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#ags-fluid-iir-filter-util-calc" title="ags_fluid_iir_filter_util_calc&nbsp;()">ags_fluid_iir_filter_util_calc</a>&nbsp;<span class="c_punctuation">()</span>
</td>
</tr>
<tr>
<td class="function_type">
<span class="returnvalue">void</span>
</td>
<td class="function_name">
<a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#ags-fluid-iir-filter-util-process-s8" title="ags_fluid_iir_filter_util_process_s8&nbsp;()">ags_fluid_iir_filter_util_process_s8</a>&nbsp;<span class="c_punctuation">()</span>
</td>
</tr>
<tr>
<td class="function_type">
<span class="returnvalue">void</span>
</td>
<td class="function_name">
<a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#ags-fluid-iir-filter-util-process-s16" title="ags_fluid_iir_filter_util_process_s16&nbsp;()">ags_fluid_iir_filter_util_process_s16</a>&nbsp;<span class="c_punctuation">()</span>
</td>
</tr>
<tr>
<td class="function_type">
<span class="returnvalue">void</span>
</td>
<td class="function_name">
<a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#ags-fluid-iir-filter-util-process-s24" title="ags_fluid_iir_filter_util_process_s24&nbsp;()">ags_fluid_iir_filter_util_process_s24</a>&nbsp;<span class="c_punctuation">()</span>
</td>
</tr>
<tr>
<td class="function_type">
<span class="returnvalue">void</span>
</td>
<td class="function_name">
<a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#ags-fluid-iir-filter-util-process-s32" title="ags_fluid_iir_filter_util_process_s32&nbsp;()">ags_fluid_iir_filter_util_process_s32</a>&nbsp;<span class="c_punctuation">()</span>
</td>
</tr>
<tr>
<td class="function_type">
<span class="returnvalue">void</span>
</td>
<td class="function_name">
<a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#ags-fluid-iir-filter-util-process-s64" title="ags_fluid_iir_filter_util_process_s64&nbsp;()">ags_fluid_iir_filter_util_process_s64</a>&nbsp;<span class="c_punctuation">()</span>
</td>
</tr>
<tr>
<td class="function_type">
<span class="returnvalue">void</span>
</td>
<td class="function_name">
<a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#ags-fluid-iir-filter-util-process-float" title="ags_fluid_iir_filter_util_process_float&nbsp;()">ags_fluid_iir_filter_util_process_float</a>&nbsp;<span class="c_punctuation">()</span>
</td>
</tr>
<tr>
<td class="function_type">
<span class="returnvalue">void</span>
</td>
<td class="function_name">
<a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#ags-fluid-iir-filter-util-process-double" title="ags_fluid_iir_filter_util_process_double&nbsp;()">ags_fluid_iir_filter_util_process_double</a>&nbsp;<span class="c_punctuation">()</span>
</td>
</tr>
<tr>
<td class="function_type">
<span class="returnvalue">void</span>
</td>
<td class="function_name">
<a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#ags-fluid-iir-filter-util-process-complex" title="ags_fluid_iir_filter_util_process_complex&nbsp;()">ags_fluid_iir_filter_util_process_complex</a>&nbsp;<span class="c_punctuation">()</span>
</td>
</tr>
<tr>
<td class="function_type">
<span class="returnvalue">void</span>
</td>
<td class="function_name">
<a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#ags-fluid-iir-filter-util-process" title="ags_fluid_iir_filter_util_process&nbsp;()">ags_fluid_iir_filter_util_process</a>&nbsp;<span class="c_punctuation">()</span>
</td>
</tr>
<tr>
<td class="function_type">
<span class="returnvalue">void</span>
</td>
<td class="function_name">
<a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#ags-fluid-iir-filter-util-apply-s8" title="ags_fluid_iir_filter_util_apply_s8&nbsp;()">ags_fluid_iir_filter_util_apply_s8</a>&nbsp;<span class="c_punctuation">()</span>
</td>
</tr>
<tr>
<td class="function_type">
<span class="returnvalue">void</span>
</td>
<td class="function_name">
<a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#ags-fluid-iir-filter-util-apply-s16" title="ags_fluid_iir_filter_util_apply_s16&nbsp;()">ags_fluid_iir_filter_util_apply_s16</a>&nbsp;<span class="c_punctuation">()</span>
</td>
</tr>
<tr>
<td class="function_type">
<span class="returnvalue">void</span>
</td>
<td class="function_name">
<a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#ags-fluid-iir-filter-util-apply-s24" title="ags_fluid_iir_filter_util_apply_s24&nbsp;()">ags_fluid_iir_filter_util_apply_s24</a>&nbsp;<span class="c_punctuation">()</span>
</td>
</tr>
<tr>
<td class="function_type">
<span class="returnvalue">void</span>
</td>
<td class="function_name">
<a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#ags-fluid-iir-filter-util-apply-s32" title="ags_fluid_iir_filter_util_apply_s32&nbsp;()">ags_fluid_iir_filter_util_apply_s32</a>&nbsp;<span class="c_punctuation">()</span>
</td>
</tr>
<tr>
<td class="function_type">
<span class="returnvalue">void</span>
</td>
<td class="function_name">
<a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#ags-fluid-iir-filter-util-apply-s64" title="ags_fluid_iir_filter_util_apply_s64&nbsp;()">ags_fluid_iir_filter_util_apply_s64</a>&nbsp;<span class="c_punctuation">()</span>
</td>
</tr>
<tr>
<td class="function_type">
<span class="returnvalue">void</span>
</td>
<td class="function_name">
<a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#ags-fluid-iir-filter-util-apply-float" title="ags_fluid_iir_filter_util_apply_float&nbsp;()">ags_fluid_iir_filter_util_apply_float</a>&nbsp;<span class="c_punctuation">()</span>
</td>
</tr>
<tr>
<td class="function_type">
<span class="returnvalue">void</span>
</td>
<td class="function_name">
<a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#ags-fluid-iir-filter-util-apply-double" title="ags_fluid_iir_filter_util_apply_double&nbsp;()">ags_fluid_iir_filter_util_apply_double</a>&nbsp;<span class="c_punctuation">()</span>
</td>
</tr>
<tr>
<td class="function_type">
<span class="returnvalue">void</span>
</td>
<td class="function_name">
<a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#ags-fluid-iir-filter-util-apply-complex" title="ags_fluid_iir_filter_util_apply_complex&nbsp;()">ags_fluid_iir_filter_util_apply_complex</a>&nbsp;<span class="c_punctuation">()</span>
</td>
</tr>
<tr>
<td class="define_keyword">#define</td>
<td class="function_name">
<a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#AGS-FLUID-IIR-FILTER-UTIL:CAPS" title="AGS_FLUID_IIR_FILTER_UTIL()">AGS_FLUID_IIR_FILTER_UTIL</a><span class="c_punctuation">()</span>
</td>
</tr>
<tr>
<td class="function_type">
<a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/gobject/gobject-Type-Information.html#GType"><span class="returnvalue">GType</span></a>
</td>
<td class="function_name">
<a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#ags-fluid-iir-filter-util-get-type" title="ags_fluid_iir_filter_util_get_type&nbsp;()">ags_fluid_iir_filter_util_get_type</a>&nbsp;<span class="c_punctuation">()</span>
</td>
</tr>
</tbody>
</table></div>
</div>
<div class="refsect1">
<a name="AgsFluidIIRFilterUtil.other"></a><h2>Types and Values</h2>
<div class="informaltable"><table class="informaltable" width="100%" border="0">
<colgroup>
<col class="other_proto_type" width="150px">
<col class="other_proto_name">
</colgroup>
<tbody>
<tr>
<td class="datatype_keyword">enum</td>
<td class="function_name"><a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#AgsFluidIIRFilterType" title="enum AgsFluidIIRFilterType">AgsFluidIIRFilterType</a></td>
</tr>
<tr>
<td class="datatype_keyword">struct</td>
<td class="function_name"><a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#AgsFluidIIRFilter" title="struct AgsFluidIIRFilter">AgsFluidIIRFilter</a></td>
</tr>
<tr>
<td class="define_keyword">#define</td>
<td class="function_name"><a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#AGS-TYPE-FLUID-IIR-FILTER-UTIL:CAPS" title="AGS_TYPE_FLUID_IIR_FILTER_UTIL">AGS_TYPE_FLUID_IIR_FILTER_UTIL</a></td>
</tr>
<tr>
<td class="datatype_keyword">struct</td>
<td class="function_name"><a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#AgsFluidIIRFilterUtil-struct" title="struct AgsFluidIIRFilterUtil">AgsFluidIIRFilterUtil</a></td>
</tr>
</tbody>
</table></div>
</div>
<div class="refsect1">
<a name="AgsFluidIIRFilterUtil.object-hierarchy"></a><h2>Object Hierarchy</h2>
<pre class="screen">    <a href="https://www.gnu.org/usr/share/gtk-doc/html/gobject/gobject-Boxed-Types.html">GBoxed</a>
    <span class="lineart">╰──</span> AgsFluidIIRFilterUtil
</pre>
</div>
<div class="refsect1">
<a name="AgsFluidIIRFilterUtil.includes"></a><h2>Includes</h2>
<pre class="synopsis">#include &lt;ags/audio/ags_fluid_iir_filter_util.h&gt;
</pre>
</div>
<div class="refsect1">
<a name="AgsFluidIIRFilterUtil.description"></a><h2>Description</h2>
<p>These utility functions allow you to calc and apply fluid
IIR filter data.</p>
</div>
<div class="refsect1">
<a name="AgsFluidIIRFilterUtil.functions_details"></a><h2>Functions</h2>
<div class="refsect2">
<a name="AGS-FLUID-IIR-FILTER:CAPS"></a><h3>AGS_FLUID_IIR_FILTER()</h3>
<pre class="programlisting">#define AGS_FLUID_IIR_FILTER(ptr)              ((AgsFluidIIRFilter *)(ptr))
</pre>
</div>
<hr>
<div class="refsect2">
<a name="ags-fluid-iir-filter-util-alloc"></a><h3>ags_fluid_iir_filter_util_alloc&nbsp;()</h3>
<pre class="programlisting"><a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html" title="AgsFluidIIRFilterUtil"><span class="returnvalue">AgsFluidIIRFilterUtil</span></a>&nbsp;*
ags_fluid_iir_filter_util_alloc ();</pre>
<p>Allocate <a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#AgsFluidIIRFilterUtil-struct" title="struct AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a>.</p>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-alloc.returns"></a><h4>Returns</h4>
<p> the newly allocated <a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#AgsFluidIIRFilterUtil-struct" title="struct AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a></p>
</div>
<p class="since">Since: 3.9.6</p>
</div>
<hr>
<div class="refsect2">
<a name="ags-fluid-iir-filter-util-copy"></a><h3>ags_fluid_iir_filter_util_copy&nbsp;()</h3>
<pre class="programlisting"><a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#gpointer"><span class="returnvalue">gpointer</span></a>
ags_fluid_iir_filter_util_copy (<em class="parameter"><code><a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html" title="AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a> *ptr</code></em>);</pre>
<p>Create a copy of <em class="parameter"><code>ptr</code></em>
.</p>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-copy.parameters"></a><h4>Parameters</h4>
<div class="informaltable"><table class="informaltable" width="100%" border="0">
<colgroup>
<col class="parameters_name" width="150px">
<col class="parameters_description">
<col class="parameters_annotations" width="200px">
</colgroup>
<tbody><tr>
<td class="parameter_name"><p>ptr</p></td>
<td class="parameter_description"><p>the original <a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#AgsFluidIIRFilterUtil-struct" title="struct AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a></p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr></tbody>
</table></div>
</div>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-copy.returns"></a><h4>Returns</h4>
<p> a pointer of the new <a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#AgsFluidIIRFilterUtil-struct" title="struct AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a></p>
</div>
<p class="since">Since: 3.9.6</p>
</div>
<hr>
<div class="refsect2">
<a name="ags-fluid-iir-filter-util-free"></a><h3>ags_fluid_iir_filter_util_free&nbsp;()</h3>
<pre class="programlisting"><span class="returnvalue">void</span>
ags_fluid_iir_filter_util_free (<em class="parameter"><code><a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html" title="AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a> *ptr</code></em>);</pre>
<p>Free the memory of <em class="parameter"><code>ptr</code></em>
.</p>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-free.parameters"></a><h4>Parameters</h4>
<div class="informaltable"><table class="informaltable" width="100%" border="0">
<colgroup>
<col class="parameters_name" width="150px">
<col class="parameters_description">
<col class="parameters_annotations" width="200px">
</colgroup>
<tbody><tr>
<td class="parameter_name"><p>ptr</p></td>
<td class="parameter_description"><p>the <a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#AgsFluidIIRFilterUtil-struct" title="struct AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a></p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr></tbody>
</table></div>
</div>
<p class="since">Since: 3.9.6</p>
</div>
<hr>
<div class="refsect2">
<a name="ags-fluid-iir-filter-util-get-source"></a><h3>ags_fluid_iir_filter_util_get_source&nbsp;()</h3>
<pre class="programlisting"><a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#gpointer"><span class="returnvalue">gpointer</span></a>
ags_fluid_iir_filter_util_get_source (<em class="parameter"><code><a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html" title="AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a> *fluid_iir_filter_util</code></em>);</pre>
<p>Get source buffer of <em class="parameter"><code>fluid_iir_filter_util</code></em>
.</p>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-get-source.parameters"></a><h4>Parameters</h4>
<div class="informaltable"><table class="informaltable" width="100%" border="0">
<colgroup>
<col class="parameters_name" width="150px">
<col class="parameters_description">
<col class="parameters_annotations" width="200px">
</colgroup>
<tbody><tr>
<td class="parameter_name"><p>fluid_iir_filter_util</p></td>
<td class="parameter_description"><p>the <a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#AgsFluidIIRFilterUtil-struct" title="struct AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a></p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr></tbody>
</table></div>
</div>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-get-source.returns"></a><h4>Returns</h4>
<p> the source buffer</p>
</div>
<p class="since">Since: 3.9.6</p>
</div>
<hr>
<div class="refsect2">
<a name="ags-fluid-iir-filter-util-set-source"></a><h3>ags_fluid_iir_filter_util_set_source&nbsp;()</h3>
<pre class="programlisting"><span class="returnvalue">void</span>
ags_fluid_iir_filter_util_set_source (<em class="parameter"><code><a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html" title="AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a> *fluid_iir_filter_util</code></em>,
                                      <em class="parameter"><code><a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#gpointer"><span class="type">gpointer</span></a> source</code></em>);</pre>
<p>Set <em class="parameter"><code>source</code></em>
 buffer of <em class="parameter"><code>fluid_iir_filter_util</code></em>
.</p>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-set-source.parameters"></a><h4>Parameters</h4>
<div class="informaltable"><table class="informaltable" width="100%" border="0">
<colgroup>
<col class="parameters_name" width="150px">
<col class="parameters_description">
<col class="parameters_annotations" width="200px">
</colgroup>
<tbody>
<tr>
<td class="parameter_name"><p>fluid_iir_filter_util</p></td>
<td class="parameter_description"><p>the <a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#AgsFluidIIRFilterUtil-struct" title="struct AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a></p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
<tr>
<td class="parameter_name"><p>source</p></td>
<td class="parameter_description"><p>the source buffer</p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
</tbody>
</table></div>
</div>
<p class="since">Since: 3.9.6</p>
</div>
<hr>
<div class="refsect2">
<a name="ags-fluid-iir-filter-util-get-source-stride"></a><h3>ags_fluid_iir_filter_util_get_source_stride&nbsp;()</h3>
<pre class="programlisting"><a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#guint"><span class="returnvalue">guint</span></a>
ags_fluid_iir_filter_util_get_source_stride
                               (<em class="parameter"><code><a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html" title="AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a> *fluid_iir_filter_util</code></em>);</pre>
<p>Get source stride of <em class="parameter"><code>fluid_iir_filter_util</code></em>
.</p>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-get-source-stride.parameters"></a><h4>Parameters</h4>
<div class="informaltable"><table class="informaltable" width="100%" border="0">
<colgroup>
<col class="parameters_name" width="150px">
<col class="parameters_description">
<col class="parameters_annotations" width="200px">
</colgroup>
<tbody><tr>
<td class="parameter_name"><p>fluid_iir_filter_util</p></td>
<td class="parameter_description"><p>the <a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#AgsFluidIIRFilterUtil-struct" title="struct AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a></p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr></tbody>
</table></div>
</div>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-get-source-stride.returns"></a><h4>Returns</h4>
<p> the source buffer stride</p>
</div>
<p class="since">Since: 3.9.6</p>
</div>
<hr>
<div class="refsect2">
<a name="ags-fluid-iir-filter-util-set-source-stride"></a><h3>ags_fluid_iir_filter_util_set_source_stride&nbsp;()</h3>
<pre class="programlisting"><span class="returnvalue">void</span>
ags_fluid_iir_filter_util_set_source_stride
                               (<em class="parameter"><code><a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html" title="AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a> *fluid_iir_filter_util</code></em>,
                                <em class="parameter"><code><a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#guint"><span class="type">guint</span></a> source_stride</code></em>);</pre>
<p>Set <em class="parameter"><code>source</code></em>
 stride of <em class="parameter"><code>fluid_iir_filter_util</code></em>
.</p>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-set-source-stride.parameters"></a><h4>Parameters</h4>
<div class="informaltable"><table class="informaltable" width="100%" border="0">
<colgroup>
<col class="parameters_name" width="150px">
<col class="parameters_description">
<col class="parameters_annotations" width="200px">
</colgroup>
<tbody>
<tr>
<td class="parameter_name"><p>fluid_iir_filter_util</p></td>
<td class="parameter_description"><p>the <a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#AgsFluidIIRFilterUtil-struct" title="struct AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a></p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
<tr>
<td class="parameter_name"><p>source_stride</p></td>
<td class="parameter_description"><p>the source buffer stride</p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
</tbody>
</table></div>
</div>
<p class="since">Since: 3.9.6</p>
</div>
<hr>
<div class="refsect2">
<a name="ags-fluid-iir-filter-util-get-destination"></a><h3>ags_fluid_iir_filter_util_get_destination&nbsp;()</h3>
<pre class="programlisting"><a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#gpointer"><span class="returnvalue">gpointer</span></a>
ags_fluid_iir_filter_util_get_destination
                               (<em class="parameter"><code><a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html" title="AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a> *fluid_iir_filter_util</code></em>);</pre>
<p>Get destination buffer of <em class="parameter"><code>fluid_iir_filter_util</code></em>
.</p>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-get-destination.parameters"></a><h4>Parameters</h4>
<div class="informaltable"><table class="informaltable" width="100%" border="0">
<colgroup>
<col class="parameters_name" width="150px">
<col class="parameters_description">
<col class="parameters_annotations" width="200px">
</colgroup>
<tbody><tr>
<td class="parameter_name"><p>fluid_iir_filter_util</p></td>
<td class="parameter_description"><p>the <a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#AgsFluidIIRFilterUtil-struct" title="struct AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a></p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr></tbody>
</table></div>
</div>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-get-destination.returns"></a><h4>Returns</h4>
<p> the destination buffer</p>
</div>
<p class="since">Since: 3.9.6</p>
</div>
<hr>
<div class="refsect2">
<a name="ags-fluid-iir-filter-util-set-destination"></a><h3>ags_fluid_iir_filter_util_set_destination&nbsp;()</h3>
<pre class="programlisting"><span class="returnvalue">void</span>
ags_fluid_iir_filter_util_set_destination
                               (<em class="parameter"><code><a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html" title="AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a> *fluid_iir_filter_util</code></em>,
                                <em class="parameter"><code><a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#gpointer"><span class="type">gpointer</span></a> destination</code></em>);</pre>
<p>Set <em class="parameter"><code>destination</code></em>
 buffer of <em class="parameter"><code>fluid_iir_filter_util</code></em>
.</p>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-set-destination.parameters"></a><h4>Parameters</h4>
<div class="informaltable"><table class="informaltable" width="100%" border="0">
<colgroup>
<col class="parameters_name" width="150px">
<col class="parameters_description">
<col class="parameters_annotations" width="200px">
</colgroup>
<tbody>
<tr>
<td class="parameter_name"><p>fluid_iir_filter_util</p></td>
<td class="parameter_description"><p>the <a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#AgsFluidIIRFilterUtil-struct" title="struct AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a></p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
<tr>
<td class="parameter_name"><p>destination</p></td>
<td class="parameter_description"><p>the destination buffer</p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
</tbody>
</table></div>
</div>
<p class="since">Since: 3.9.6</p>
</div>
<hr>
<div class="refsect2">
<a name="ags-fluid-iir-filter-util-get-destination-stride"></a><h3>ags_fluid_iir_filter_util_get_destination_stride&nbsp;()</h3>
<pre class="programlisting"><a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#guint"><span class="returnvalue">guint</span></a>
ags_fluid_iir_filter_util_get_destination_stride
                               (<em class="parameter"><code><a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html" title="AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a> *fluid_iir_filter_util</code></em>);</pre>
<p>Get destination stride of <em class="parameter"><code>fluid_iir_filter_util</code></em>
.</p>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-get-destination-stride.parameters"></a><h4>Parameters</h4>
<div class="informaltable"><table class="informaltable" width="100%" border="0">
<colgroup>
<col class="parameters_name" width="150px">
<col class="parameters_description">
<col class="parameters_annotations" width="200px">
</colgroup>
<tbody><tr>
<td class="parameter_name"><p>fluid_iir_filter_util</p></td>
<td class="parameter_description"><p>the <a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#AgsFluidIIRFilterUtil-struct" title="struct AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a></p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr></tbody>
</table></div>
</div>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-get-destination-stride.returns"></a><h4>Returns</h4>
<p> the destination buffer stride</p>
</div>
<p class="since">Since: 3.9.6</p>
</div>
<hr>
<div class="refsect2">
<a name="ags-fluid-iir-filter-util-set-destination-stride"></a><h3>ags_fluid_iir_filter_util_set_destination_stride&nbsp;()</h3>
<pre class="programlisting"><span class="returnvalue">void</span>
ags_fluid_iir_filter_util_set_destination_stride
                               (<em class="parameter"><code><a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html" title="AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a> *fluid_iir_filter_util</code></em>,
                                <em class="parameter"><code><a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#guint"><span class="type">guint</span></a> destination_stride</code></em>);</pre>
<p>Set <em class="parameter"><code>destination</code></em>
 stride of <em class="parameter"><code>fluid_iir_filter_util</code></em>
.</p>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-set-destination-stride.parameters"></a><h4>Parameters</h4>
<div class="informaltable"><table class="informaltable" width="100%" border="0">
<colgroup>
<col class="parameters_name" width="150px">
<col class="parameters_description">
<col class="parameters_annotations" width="200px">
</colgroup>
<tbody>
<tr>
<td class="parameter_name"><p>fluid_iir_filter_util</p></td>
<td class="parameter_description"><p>the <a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#AgsFluidIIRFilterUtil-struct" title="struct AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a></p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
<tr>
<td class="parameter_name"><p>destination_stride</p></td>
<td class="parameter_description"><p>the destination buffer stride</p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
</tbody>
</table></div>
</div>
<p class="since">Since: 3.9.6</p>
</div>
<hr>
<div class="refsect2">
<a name="ags-fluid-iir-filter-util-get-buffer-length"></a><h3>ags_fluid_iir_filter_util_get_buffer_length&nbsp;()</h3>
<pre class="programlisting"><a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#guint"><span class="returnvalue">guint</span></a>
ags_fluid_iir_filter_util_get_buffer_length
                               (<em class="parameter"><code><a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html" title="AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a> *fluid_iir_filter_util</code></em>);</pre>
<p>Get buffer length of <em class="parameter"><code>fluid_iir_filter_util</code></em>
.</p>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-get-buffer-length.parameters"></a><h4>Parameters</h4>
<div class="informaltable"><table class="informaltable" width="100%" border="0">
<colgroup>
<col class="parameters_name" width="150px">
<col class="parameters_description">
<col class="parameters_annotations" width="200px">
</colgroup>
<tbody><tr>
<td class="parameter_name"><p>fluid_iir_filter_util</p></td>
<td class="parameter_description"><p>the <a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#AgsFluidIIRFilterUtil-struct" title="struct AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a></p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr></tbody>
</table></div>
</div>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-get-buffer-length.returns"></a><h4>Returns</h4>
<p> the buffer length</p>
</div>
<p class="since">Since: 3.9.6</p>
</div>
<hr>
<div class="refsect2">
<a name="ags-fluid-iir-filter-util-set-buffer-length"></a><h3>ags_fluid_iir_filter_util_set_buffer_length&nbsp;()</h3>
<pre class="programlisting"><span class="returnvalue">void</span>
ags_fluid_iir_filter_util_set_buffer_length
                               (<em class="parameter"><code><a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html" title="AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a> *fluid_iir_filter_util</code></em>,
                                <em class="parameter"><code><a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#guint"><span class="type">guint</span></a> buffer_length</code></em>);</pre>
<p>Set <em class="parameter"><code>buffer_length</code></em>
 of <em class="parameter"><code>fluid_iir_filter_util</code></em>
.</p>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-set-buffer-length.parameters"></a><h4>Parameters</h4>
<div class="informaltable"><table class="informaltable" width="100%" border="0">
<colgroup>
<col class="parameters_name" width="150px">
<col class="parameters_description">
<col class="parameters_annotations" width="200px">
</colgroup>
<tbody>
<tr>
<td class="parameter_name"><p>fluid_iir_filter_util</p></td>
<td class="parameter_description"><p>the <a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#AgsFluidIIRFilterUtil-struct" title="struct AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a></p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
<tr>
<td class="parameter_name"><p>buffer_length</p></td>
<td class="parameter_description"><p>the buffer length</p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
</tbody>
</table></div>
</div>
<p class="since">Since: 3.9.6</p>
</div>
<hr>
<div class="refsect2">
<a name="ags-fluid-iir-filter-util-get-format"></a><h3>ags_fluid_iir_filter_util_get_format&nbsp;()</h3>
<pre class="programlisting"><a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#guint"><span class="returnvalue">guint</span></a>
ags_fluid_iir_filter_util_get_format (<em class="parameter"><code><a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html" title="AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a> *fluid_iir_filter_util</code></em>);</pre>
<p>Get format of <em class="parameter"><code>fluid_iir_filter_util</code></em>
.</p>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-get-format.parameters"></a><h4>Parameters</h4>
<div class="informaltable"><table class="informaltable" width="100%" border="0">
<colgroup>
<col class="parameters_name" width="150px">
<col class="parameters_description">
<col class="parameters_annotations" width="200px">
</colgroup>
<tbody><tr>
<td class="parameter_name"><p>fluid_iir_filter_util</p></td>
<td class="parameter_description"><p>the <a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#AgsFluidIIRFilterUtil-struct" title="struct AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a></p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr></tbody>
</table></div>
</div>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-get-format.returns"></a><h4>Returns</h4>
<p> the format</p>
</div>
<p class="since">Since: 3.9.6</p>
</div>
<hr>
<div class="refsect2">
<a name="ags-fluid-iir-filter-util-set-format"></a><h3>ags_fluid_iir_filter_util_set_format&nbsp;()</h3>
<pre class="programlisting"><span class="returnvalue">void</span>
ags_fluid_iir_filter_util_set_format (<em class="parameter"><code><a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html" title="AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a> *fluid_iir_filter_util</code></em>,
                                      <em class="parameter"><code><a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#guint"><span class="type">guint</span></a> format</code></em>);</pre>
<p>Set <em class="parameter"><code>format</code></em>
 of <em class="parameter"><code>fluid_iir_filter_util</code></em>
.</p>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-set-format.parameters"></a><h4>Parameters</h4>
<div class="informaltable"><table class="informaltable" width="100%" border="0">
<colgroup>
<col class="parameters_name" width="150px">
<col class="parameters_description">
<col class="parameters_annotations" width="200px">
</colgroup>
<tbody>
<tr>
<td class="parameter_name"><p>fluid_iir_filter_util</p></td>
<td class="parameter_description"><p>the <a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#AgsFluidIIRFilterUtil-struct" title="struct AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a></p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
<tr>
<td class="parameter_name"><p>format</p></td>
<td class="parameter_description"><p>the format</p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
</tbody>
</table></div>
</div>
<p class="since">Since: 3.9.6</p>
</div>
<hr>
<div class="refsect2">
<a name="ags-fluid-iir-filter-util-get-samplerate"></a><h3>ags_fluid_iir_filter_util_get_samplerate&nbsp;()</h3>
<pre class="programlisting"><a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#guint"><span class="returnvalue">guint</span></a>
ags_fluid_iir_filter_util_get_samplerate
                               (<em class="parameter"><code><a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html" title="AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a> *fluid_iir_filter_util</code></em>);</pre>
<p>Get samplerate of <em class="parameter"><code>fluid_iir_filter_util</code></em>
.</p>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-get-samplerate.parameters"></a><h4>Parameters</h4>
<div class="informaltable"><table class="informaltable" width="100%" border="0">
<colgroup>
<col class="parameters_name" width="150px">
<col class="parameters_description">
<col class="parameters_annotations" width="200px">
</colgroup>
<tbody><tr>
<td class="parameter_name"><p>fluid_iir_filter_util</p></td>
<td class="parameter_description"><p>the <a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#AgsFluidIIRFilterUtil-struct" title="struct AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a></p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr></tbody>
</table></div>
</div>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-get-samplerate.returns"></a><h4>Returns</h4>
<p> the samplerate</p>
</div>
<p class="since">Since: 3.9.6</p>
</div>
<hr>
<div class="refsect2">
<a name="ags-fluid-iir-filter-util-set-samplerate"></a><h3>ags_fluid_iir_filter_util_set_samplerate&nbsp;()</h3>
<pre class="programlisting"><span class="returnvalue">void</span>
ags_fluid_iir_filter_util_set_samplerate
                               (<em class="parameter"><code><a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html" title="AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a> *fluid_iir_filter_util</code></em>,
                                <em class="parameter"><code><a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#guint"><span class="type">guint</span></a> samplerate</code></em>);</pre>
<p>Set <em class="parameter"><code>samplerate</code></em>
 of <em class="parameter"><code>fluid_iir_filter_util</code></em>
.</p>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-set-samplerate.parameters"></a><h4>Parameters</h4>
<div class="informaltable"><table class="informaltable" width="100%" border="0">
<colgroup>
<col class="parameters_name" width="150px">
<col class="parameters_description">
<col class="parameters_annotations" width="200px">
</colgroup>
<tbody>
<tr>
<td class="parameter_name"><p>fluid_iir_filter_util</p></td>
<td class="parameter_description"><p>the <a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#AgsFluidIIRFilterUtil-struct" title="struct AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a></p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
<tr>
<td class="parameter_name"><p>samplerate</p></td>
<td class="parameter_description"><p>the samplerate</p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
</tbody>
</table></div>
</div>
<p class="since">Since: 3.9.6</p>
</div>
<hr>
<div class="refsect2">
<a name="ags-fluid-iir-filter-util-get-filter-type"></a><h3>ags_fluid_iir_filter_util_get_filter_type&nbsp;()</h3>
<pre class="programlisting"><a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#guint"><span class="returnvalue">guint</span></a>
ags_fluid_iir_filter_util_get_filter_type
                               (<em class="parameter"><code><a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html" title="AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a> *fluid_iir_filter_util</code></em>);</pre>
<p>Get filter type of <em class="parameter"><code>fluid_iir_filter_util</code></em>
.</p>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-get-filter-type.parameters"></a><h4>Parameters</h4>
<div class="informaltable"><table class="informaltable" width="100%" border="0">
<colgroup>
<col class="parameters_name" width="150px">
<col class="parameters_description">
<col class="parameters_annotations" width="200px">
</colgroup>
<tbody><tr>
<td class="parameter_name"><p>fluid_iir_filter_util</p></td>
<td class="parameter_description"><p>the <a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#AgsFluidIIRFilterUtil-struct" title="struct AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a></p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr></tbody>
</table></div>
</div>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-get-filter-type.returns"></a><h4>Returns</h4>
<p> the filter type</p>
</div>
<p class="since">Since: 3.9.7</p>
</div>
<hr>
<div class="refsect2">
<a name="ags-fluid-iir-filter-util-set-filter-type"></a><h3>ags_fluid_iir_filter_util_set_filter_type&nbsp;()</h3>
<pre class="programlisting"><span class="returnvalue">void</span>
ags_fluid_iir_filter_util_set_filter_type
                               (<em class="parameter"><code><a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html" title="AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a> *fluid_iir_filter_util</code></em>,
                                <em class="parameter"><code><a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#guint"><span class="type">guint</span></a> filter_type</code></em>);</pre>
<p>Set <em class="parameter"><code>filter_type</code></em>
 of <em class="parameter"><code>fluid_iir_filter_util</code></em>
.</p>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-set-filter-type.parameters"></a><h4>Parameters</h4>
<div class="informaltable"><table class="informaltable" width="100%" border="0">
<colgroup>
<col class="parameters_name" width="150px">
<col class="parameters_description">
<col class="parameters_annotations" width="200px">
</colgroup>
<tbody>
<tr>
<td class="parameter_name"><p>fluid_iir_filter_util</p></td>
<td class="parameter_description"><p>the <a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#AgsFluidIIRFilterUtil-struct" title="struct AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a></p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
<tr>
<td class="parameter_name"><p>filter_type</p></td>
<td class="parameter_description"><p>the filter type</p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
</tbody>
</table></div>
</div>
<p class="since">Since: 3.9.7</p>
</div>
<hr>
<div class="refsect2">
<a name="ags-fluid-iir-filter-util-get-flags"></a><h3>ags_fluid_iir_filter_util_get_flags&nbsp;()</h3>
<pre class="programlisting"><a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#guint"><span class="returnvalue">guint</span></a>
ags_fluid_iir_filter_util_get_flags (<em class="parameter"><code><a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html" title="AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a> *fluid_iir_filter_util</code></em>);</pre>
<p>Get flags of <em class="parameter"><code>fluid_iir_filter_util</code></em>
.</p>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-get-flags.parameters"></a><h4>Parameters</h4>
<div class="informaltable"><table class="informaltable" width="100%" border="0">
<colgroup>
<col class="parameters_name" width="150px">
<col class="parameters_description">
<col class="parameters_annotations" width="200px">
</colgroup>
<tbody><tr>
<td class="parameter_name"><p>fluid_iir_filter_util</p></td>
<td class="parameter_description"><p>the <a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#AgsFluidIIRFilterUtil-struct" title="struct AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a></p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr></tbody>
</table></div>
</div>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-get-flags.returns"></a><h4>Returns</h4>
<p> the flags</p>
</div>
<p class="since">Since: 3.9.7</p>
</div>
<hr>
<div class="refsect2">
<a name="ags-fluid-iir-filter-util-set-flags"></a><h3>ags_fluid_iir_filter_util_set_flags&nbsp;()</h3>
<pre class="programlisting"><span class="returnvalue">void</span>
ags_fluid_iir_filter_util_set_flags (<em class="parameter"><code><a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html" title="AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a> *fluid_iir_filter_util</code></em>,
                                     <em class="parameter"><code><a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#guint"><span class="type">guint</span></a> flags</code></em>);</pre>
<p>Set <em class="parameter"><code>flags</code></em>
 of <em class="parameter"><code>fluid_iir_filter_util</code></em>
.</p>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-set-flags.parameters"></a><h4>Parameters</h4>
<div class="informaltable"><table class="informaltable" width="100%" border="0">
<colgroup>
<col class="parameters_name" width="150px">
<col class="parameters_description">
<col class="parameters_annotations" width="200px">
</colgroup>
<tbody>
<tr>
<td class="parameter_name"><p>fluid_iir_filter_util</p></td>
<td class="parameter_description"><p>the <a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#AgsFluidIIRFilterUtil-struct" title="struct AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a></p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
<tr>
<td class="parameter_name"><p>flags</p></td>
<td class="parameter_description"><p>the flags</p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
</tbody>
</table></div>
</div>
<p class="since">Since: 3.9.7</p>
</div>
<hr>
<div class="refsect2">
<a name="ags-fluid-iir-filter-util-get-filter-startup"></a><h3>ags_fluid_iir_filter_util_get_filter_startup&nbsp;()</h3>
<pre class="programlisting"><a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#gboolean"><span class="returnvalue">gboolean</span></a>
ags_fluid_iir_filter_util_get_filter_startup
                               (<em class="parameter"><code><a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html" title="AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a> *fluid_iir_filter_util</code></em>);</pre>
<p>Get filter startup of <em class="parameter"><code>fluid_iir_filter_util</code></em>
.</p>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-get-filter-startup.parameters"></a><h4>Parameters</h4>
<div class="informaltable"><table class="informaltable" width="100%" border="0">
<colgroup>
<col class="parameters_name" width="150px">
<col class="parameters_description">
<col class="parameters_annotations" width="200px">
</colgroup>
<tbody><tr>
<td class="parameter_name"><p>fluid_iir_filter_util</p></td>
<td class="parameter_description"><p>the <a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#AgsFluidIIRFilterUtil-struct" title="struct AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a></p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr></tbody>
</table></div>
</div>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-get-filter-startup.returns"></a><h4>Returns</h4>
<p> <a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Standard-Macros.html#TRUE:CAPS"><code class="literal">TRUE</code></a> if the filter does startup, otherwise <a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Standard-Macros.html#FALSE:CAPS"><code class="literal">FALSE</code></a></p>
</div>
<p class="since">Since: 3.9.7</p>
</div>
<hr>
<div class="refsect2">
<a name="ags-fluid-iir-filter-util-set-filter-startup"></a><h3>ags_fluid_iir_filter_util_set_filter_startup&nbsp;()</h3>
<pre class="programlisting"><span class="returnvalue">void</span>
ags_fluid_iir_filter_util_set_filter_startup
                               (<em class="parameter"><code><a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html" title="AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a> *fluid_iir_filter_util</code></em>,
                                <em class="parameter"><code><a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#gboolean"><span class="type">gboolean</span></a> filter_startup</code></em>);</pre>
<p>Set <em class="parameter"><code>filter_startup</code></em>
 of <em class="parameter"><code>fluid_iir_filter_util</code></em>
.</p>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-set-filter-startup.parameters"></a><h4>Parameters</h4>
<div class="informaltable"><table class="informaltable" width="100%" border="0">
<colgroup>
<col class="parameters_name" width="150px">
<col class="parameters_description">
<col class="parameters_annotations" width="200px">
</colgroup>
<tbody>
<tr>
<td class="parameter_name"><p>fluid_iir_filter_util</p></td>
<td class="parameter_description"><p>the <a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#AgsFluidIIRFilterUtil-struct" title="struct AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a></p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
<tr>
<td class="parameter_name"><p>filter_startup</p></td>
<td class="parameter_description"><p>the filter startup</p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
</tbody>
</table></div>
</div>
<p class="since">Since: 3.9.7</p>
</div>
<hr>
<div class="refsect2">
<a name="ags-fluid-iir-filter-util-get-q-lin"></a><h3>ags_fluid_iir_filter_util_get_q_lin&nbsp;()</h3>
<pre class="programlisting"><a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#gdouble"><span class="returnvalue">gdouble</span></a>
ags_fluid_iir_filter_util_get_q_lin (<em class="parameter"><code><a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html" title="AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a> *fluid_iir_filter_util</code></em>);</pre>
<p>Get q-lin of <em class="parameter"><code>fluid_iir_filter_util</code></em>
.</p>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-get-q-lin.parameters"></a><h4>Parameters</h4>
<div class="informaltable"><table class="informaltable" width="100%" border="0">
<colgroup>
<col class="parameters_name" width="150px">
<col class="parameters_description">
<col class="parameters_annotations" width="200px">
</colgroup>
<tbody><tr>
<td class="parameter_name"><p>fluid_iir_filter_util</p></td>
<td class="parameter_description"><p>the <a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#AgsFluidIIRFilterUtil-struct" title="struct AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a></p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr></tbody>
</table></div>
</div>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-get-q-lin.returns"></a><h4>Returns</h4>
<p> the q-lin</p>
</div>
<p class="since">Since: 3.9.7</p>
</div>
<hr>
<div class="refsect2">
<a name="ags-fluid-iir-filter-util-set-q-lin"></a><h3>ags_fluid_iir_filter_util_set_q_lin&nbsp;()</h3>
<pre class="programlisting"><span class="returnvalue">void</span>
ags_fluid_iir_filter_util_set_q_lin (<em class="parameter"><code><a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html" title="AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a> *fluid_iir_filter_util</code></em>,
                                     <em class="parameter"><code><a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#gdouble"><span class="type">gdouble</span></a> q_lin</code></em>);</pre>
<p>Set <em class="parameter"><code>q_lin</code></em>
 of <em class="parameter"><code>fluid_iir_filter_util</code></em>
.</p>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-set-q-lin.parameters"></a><h4>Parameters</h4>
<div class="informaltable"><table class="informaltable" width="100%" border="0">
<colgroup>
<col class="parameters_name" width="150px">
<col class="parameters_description">
<col class="parameters_annotations" width="200px">
</colgroup>
<tbody>
<tr>
<td class="parameter_name"><p>fluid_iir_filter_util</p></td>
<td class="parameter_description"><p>the <a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#AgsFluidIIRFilterUtil-struct" title="struct AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a></p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
<tr>
<td class="parameter_name"><p>q_lin</p></td>
<td class="parameter_description"><p>the q-lin</p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
</tbody>
</table></div>
</div>
<p class="since">Since: 3.9.7</p>
</div>
<hr>
<div class="refsect2">
<a name="ags-fluid-iir-filter-util-get-filter-gain"></a><h3>ags_fluid_iir_filter_util_get_filter_gain&nbsp;()</h3>
<pre class="programlisting"><a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#gdouble"><span class="returnvalue">gdouble</span></a>
ags_fluid_iir_filter_util_get_filter_gain
                               (<em class="parameter"><code><a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html" title="AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a> *fluid_iir_filter_util</code></em>);</pre>
<p>Get filter gain of <em class="parameter"><code>fluid_iir_filter_util</code></em>
.</p>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-get-filter-gain.parameters"></a><h4>Parameters</h4>
<div class="informaltable"><table class="informaltable" width="100%" border="0">
<colgroup>
<col class="parameters_name" width="150px">
<col class="parameters_description">
<col class="parameters_annotations" width="200px">
</colgroup>
<tbody><tr>
<td class="parameter_name"><p>fluid_iir_filter_util</p></td>
<td class="parameter_description"><p>the <a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#AgsFluidIIRFilterUtil-struct" title="struct AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a></p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr></tbody>
</table></div>
</div>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-get-filter-gain.returns"></a><h4>Returns</h4>
<p> the filter gain</p>
</div>
<p class="since">Since: 3.9.7</p>
</div>
<hr>
<div class="refsect2">
<a name="ags-fluid-iir-filter-util-set-filter-gain"></a><h3>ags_fluid_iir_filter_util_set_filter_gain&nbsp;()</h3>
<pre class="programlisting"><span class="returnvalue">void</span>
ags_fluid_iir_filter_util_set_filter_gain
                               (<em class="parameter"><code><a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html" title="AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a> *fluid_iir_filter_util</code></em>,
                                <em class="parameter"><code><a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#gdouble"><span class="type">gdouble</span></a> filter_gain</code></em>);</pre>
<p>Set <em class="parameter"><code>filter_gain</code></em>
 of <em class="parameter"><code>fluid_iir_filter_util</code></em>
.</p>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-set-filter-gain.parameters"></a><h4>Parameters</h4>
<div class="informaltable"><table class="informaltable" width="100%" border="0">
<colgroup>
<col class="parameters_name" width="150px">
<col class="parameters_description">
<col class="parameters_annotations" width="200px">
</colgroup>
<tbody>
<tr>
<td class="parameter_name"><p>fluid_iir_filter_util</p></td>
<td class="parameter_description"><p>the <a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#AgsFluidIIRFilterUtil-struct" title="struct AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a></p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
<tr>
<td class="parameter_name"><p>filter_gain</p></td>
<td class="parameter_description"><p>the filter gain</p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
</tbody>
</table></div>
</div>
<p class="since">Since: 3.9.7</p>
</div>
<hr>
<div class="refsect2">
<a name="ags-fluid-iir-filter-util-calc"></a><h3>ags_fluid_iir_filter_util_calc&nbsp;()</h3>
<pre class="programlisting"><span class="returnvalue">void</span>
ags_fluid_iir_filter_util_calc (<em class="parameter"><code><a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#AgsFluidIIRFilter" title="struct AgsFluidIIRFilter"><span class="type">AgsFluidIIRFilter</span></a> *iir_filter</code></em>,
                                <em class="parameter"><code><a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#gdouble"><span class="type">gdouble</span></a> output_rate</code></em>,
                                <em class="parameter"><code><a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#gdouble"><span class="type">gdouble</span></a> fres_mod</code></em>,
                                <em class="parameter"><code><a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#gint"><span class="type">gint</span></a> transition_samples</code></em>);</pre>
<p>Calc fluid IIR filter.</p>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-calc.parameters"></a><h4>Parameters</h4>
<div class="informaltable"><table class="informaltable" width="100%" border="0">
<colgroup>
<col class="parameters_name" width="150px">
<col class="parameters_description">
<col class="parameters_annotations" width="200px">
</colgroup>
<tbody>
<tr>
<td class="parameter_name"><p>iir_filter</p></td>
<td class="parameter_description"><p>the <span class="type">AgsFluidIIRFilter</span> containing filter parameters</p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
<tr>
<td class="parameter_name"><p>output_rate</p></td>
<td class="parameter_description"><p>the output rate</p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
<tr>
<td class="parameter_name"><p>fres_mod</p></td>
<td class="parameter_description"><p>the fres mod</p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
<tr>
<td class="parameter_name"><p>transition_samples</p></td>
<td class="parameter_description"><p>the transition samples</p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
</tbody>
</table></div>
</div>
<p class="since">Since: 3.8.12</p>
</div>
<hr>
<div class="refsect2">
<a name="ags-fluid-iir-filter-util-process-s8"></a><h3>ags_fluid_iir_filter_util_process_s8&nbsp;()</h3>
<pre class="programlisting"><span class="returnvalue">void</span>
ags_fluid_iir_filter_util_process_s8 (<em class="parameter"><code><a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html" title="AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a> *fluid_iir_filter_util</code></em>);</pre>
<p>Process <em class="parameter"><code>fluid_iir_filter_util</code></em>
 of signed 8 bit data.</p>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-process-s8.parameters"></a><h4>Parameters</h4>
<div class="informaltable"><table class="informaltable" width="100%" border="0">
<colgroup>
<col class="parameters_name" width="150px">
<col class="parameters_description">
<col class="parameters_annotations" width="200px">
</colgroup>
<tbody><tr>
<td class="parameter_name"><p>fluid_iir_filter_util</p></td>
<td class="parameter_description"><p>the <a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#AgsFluidIIRFilterUtil-struct" title="struct AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a></p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr></tbody>
</table></div>
</div>
<p class="since">Since: 3.9.7</p>
</div>
<hr>
<div class="refsect2">
<a name="ags-fluid-iir-filter-util-process-s16"></a><h3>ags_fluid_iir_filter_util_process_s16&nbsp;()</h3>
<pre class="programlisting"><span class="returnvalue">void</span>
ags_fluid_iir_filter_util_process_s16 (<em class="parameter"><code><a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html" title="AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a> *fluid_iir_filter_util</code></em>);</pre>
<p>Process <em class="parameter"><code>fluid_iir_filter_util</code></em>
 of signed 16 bit data.</p>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-process-s16.parameters"></a><h4>Parameters</h4>
<div class="informaltable"><table class="informaltable" width="100%" border="0">
<colgroup>
<col class="parameters_name" width="150px">
<col class="parameters_description">
<col class="parameters_annotations" width="200px">
</colgroup>
<tbody><tr>
<td class="parameter_name"><p>fluid_iir_filter_util</p></td>
<td class="parameter_description"><p>the <a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#AgsFluidIIRFilterUtil-struct" title="struct AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a></p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr></tbody>
</table></div>
</div>
<p class="since">Since: 3.9.7</p>
</div>
<hr>
<div class="refsect2">
<a name="ags-fluid-iir-filter-util-process-s24"></a><h3>ags_fluid_iir_filter_util_process_s24&nbsp;()</h3>
<pre class="programlisting"><span class="returnvalue">void</span>
ags_fluid_iir_filter_util_process_s24 (<em class="parameter"><code><a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html" title="AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a> *fluid_iir_filter_util</code></em>);</pre>
<p>Process <em class="parameter"><code>fluid_iir_filter_util</code></em>
 of signed 24 bit data.</p>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-process-s24.parameters"></a><h4>Parameters</h4>
<div class="informaltable"><table class="informaltable" width="100%" border="0">
<colgroup>
<col class="parameters_name" width="150px">
<col class="parameters_description">
<col class="parameters_annotations" width="200px">
</colgroup>
<tbody><tr>
<td class="parameter_name"><p>fluid_iir_filter_util</p></td>
<td class="parameter_description"><p>the <a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#AgsFluidIIRFilterUtil-struct" title="struct AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a></p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr></tbody>
</table></div>
</div>
<p class="since">Since: 3.9.7</p>
</div>
<hr>
<div class="refsect2">
<a name="ags-fluid-iir-filter-util-process-s32"></a><h3>ags_fluid_iir_filter_util_process_s32&nbsp;()</h3>
<pre class="programlisting"><span class="returnvalue">void</span>
ags_fluid_iir_filter_util_process_s32 (<em class="parameter"><code><a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html" title="AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a> *fluid_iir_filter_util</code></em>);</pre>
<p>Process <em class="parameter"><code>fluid_iir_filter_util</code></em>
 of signed 32 bit data.</p>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-process-s32.parameters"></a><h4>Parameters</h4>
<div class="informaltable"><table class="informaltable" width="100%" border="0">
<colgroup>
<col class="parameters_name" width="150px">
<col class="parameters_description">
<col class="parameters_annotations" width="200px">
</colgroup>
<tbody><tr>
<td class="parameter_name"><p>fluid_iir_filter_util</p></td>
<td class="parameter_description"><p>the <a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#AgsFluidIIRFilterUtil-struct" title="struct AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a></p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr></tbody>
</table></div>
</div>
<p class="since">Since: 3.9.7</p>
</div>
<hr>
<div class="refsect2">
<a name="ags-fluid-iir-filter-util-process-s64"></a><h3>ags_fluid_iir_filter_util_process_s64&nbsp;()</h3>
<pre class="programlisting"><span class="returnvalue">void</span>
ags_fluid_iir_filter_util_process_s64 (<em class="parameter"><code><a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html" title="AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a> *fluid_iir_filter_util</code></em>);</pre>
<p>Process <em class="parameter"><code>fluid_iir_filter_util</code></em>
 of signed 64 bit data.</p>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-process-s64.parameters"></a><h4>Parameters</h4>
<div class="informaltable"><table class="informaltable" width="100%" border="0">
<colgroup>
<col class="parameters_name" width="150px">
<col class="parameters_description">
<col class="parameters_annotations" width="200px">
</colgroup>
<tbody><tr>
<td class="parameter_name"><p>fluid_iir_filter_util</p></td>
<td class="parameter_description"><p>the <a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#AgsFluidIIRFilterUtil-struct" title="struct AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a></p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr></tbody>
</table></div>
</div>
<p class="since">Since: 3.9.7</p>
</div>
<hr>
<div class="refsect2">
<a name="ags-fluid-iir-filter-util-process-float"></a><h3>ags_fluid_iir_filter_util_process_float&nbsp;()</h3>
<pre class="programlisting"><span class="returnvalue">void</span>
ags_fluid_iir_filter_util_process_float
                               (<em class="parameter"><code><a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html" title="AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a> *fluid_iir_filter_util</code></em>);</pre>
<p>Process <em class="parameter"><code>fluid_iir_filter_util</code></em>
 of floating point data.</p>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-process-float.parameters"></a><h4>Parameters</h4>
<div class="informaltable"><table class="informaltable" width="100%" border="0">
<colgroup>
<col class="parameters_name" width="150px">
<col class="parameters_description">
<col class="parameters_annotations" width="200px">
</colgroup>
<tbody><tr>
<td class="parameter_name"><p>fluid_iir_filter_util</p></td>
<td class="parameter_description"><p>the <a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#AgsFluidIIRFilterUtil-struct" title="struct AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a></p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr></tbody>
</table></div>
</div>
<p class="since">Since: 3.9.7</p>
</div>
<hr>
<div class="refsect2">
<a name="ags-fluid-iir-filter-util-process-double"></a><h3>ags_fluid_iir_filter_util_process_double&nbsp;()</h3>
<pre class="programlisting"><span class="returnvalue">void</span>
ags_fluid_iir_filter_util_process_double
                               (<em class="parameter"><code><a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html" title="AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a> *fluid_iir_filter_util</code></em>);</pre>
<p>Process <em class="parameter"><code>fluid_iir_filter_util</code></em>
 of double precision floating point data.</p>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-process-double.parameters"></a><h4>Parameters</h4>
<div class="informaltable"><table class="informaltable" width="100%" border="0">
<colgroup>
<col class="parameters_name" width="150px">
<col class="parameters_description">
<col class="parameters_annotations" width="200px">
</colgroup>
<tbody><tr>
<td class="parameter_name"><p>fluid_iir_filter_util</p></td>
<td class="parameter_description"><p>the <a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#AgsFluidIIRFilterUtil-struct" title="struct AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a></p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr></tbody>
</table></div>
</div>
<p class="since">Since: 3.9.7</p>
</div>
<hr>
<div class="refsect2">
<a name="ags-fluid-iir-filter-util-process-complex"></a><h3>ags_fluid_iir_filter_util_process_complex&nbsp;()</h3>
<pre class="programlisting"><span class="returnvalue">void</span>
ags_fluid_iir_filter_util_process_complex
                               (<em class="parameter"><code><a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html" title="AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a> *fluid_iir_filter_util</code></em>);</pre>
<p>Process <em class="parameter"><code>fluid_iir_filter_util</code></em>
 of complex data.</p>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-process-complex.parameters"></a><h4>Parameters</h4>
<div class="informaltable"><table class="informaltable" width="100%" border="0">
<colgroup>
<col class="parameters_name" width="150px">
<col class="parameters_description">
<col class="parameters_annotations" width="200px">
</colgroup>
<tbody><tr>
<td class="parameter_name"><p>fluid_iir_filter_util</p></td>
<td class="parameter_description"><p>the <a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#AgsFluidIIRFilterUtil-struct" title="struct AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a></p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr></tbody>
</table></div>
</div>
<p class="since">Since: 3.9.7</p>
</div>
<hr>
<div class="refsect2">
<a name="ags-fluid-iir-filter-util-process"></a><h3>ags_fluid_iir_filter_util_process&nbsp;()</h3>
<pre class="programlisting"><span class="returnvalue">void</span>
ags_fluid_iir_filter_util_process (<em class="parameter"><code><a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html" title="AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a> *fluid_iir_filter_util</code></em>);</pre>
<p>Process <em class="parameter"><code>fluid_iir_filter_util</code></em>
.</p>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-process.parameters"></a><h4>Parameters</h4>
<div class="informaltable"><table class="informaltable" width="100%" border="0">
<colgroup>
<col class="parameters_name" width="150px">
<col class="parameters_description">
<col class="parameters_annotations" width="200px">
</colgroup>
<tbody><tr>
<td class="parameter_name"><p>fluid_iir_filter_util</p></td>
<td class="parameter_description"><p>the <a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#AgsFluidIIRFilterUtil-struct" title="struct AgsFluidIIRFilterUtil"><span class="type">AgsFluidIIRFilterUtil</span></a></p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr></tbody>
</table></div>
</div>
<p class="since">Since: 3.9.7</p>
</div>
<hr>
<div class="refsect2">
<a name="ags-fluid-iir-filter-util-apply-s8"></a><h3>ags_fluid_iir_filter_util_apply_s8&nbsp;()</h3>
<pre class="programlisting"><span class="returnvalue">void</span>
ags_fluid_iir_filter_util_apply_s8 (<em class="parameter"><code><a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#AgsFluidIIRFilter" title="struct AgsFluidIIRFilter"><span class="type">AgsFluidIIRFilter</span></a> *iir_filter</code></em>,
                                    <em class="parameter"><code><a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#gint8"><span class="type">gint8</span></a> *destination</code></em>,
                                    <em class="parameter"><code><a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#gint8"><span class="type">gint8</span></a> *source</code></em>,
                                    <em class="parameter"><code><a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#guint"><span class="type">guint</span></a> buffer_length</code></em>);</pre>
<div class="warning"><p><code class="literal">ags_fluid_iir_filter_util_apply_s8</code> is deprecated and should not be used in newly-written code.</p></div>
<p>Perform fluid IIR filter on <em class="parameter"><code>buffer</code></em>
 and return the result in <em class="parameter"><code>output_buffer</code></em>
.</p>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-apply-s8.parameters"></a><h4>Parameters</h4>
<div class="informaltable"><table class="informaltable" width="100%" border="0">
<colgroup>
<col class="parameters_name" width="150px">
<col class="parameters_description">
<col class="parameters_annotations" width="200px">
</colgroup>
<tbody>
<tr>
<td class="parameter_name"><p>iir_filter</p></td>
<td class="parameter_description"><p>the <span class="type">AgsFluidIIRFilter</span> containing filter parameters</p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
<tr>
<td class="parameter_name"><p>destination</p></td>
<td class="parameter_description"><p>the destination audio buffer</p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
<tr>
<td class="parameter_name"><p>source</p></td>
<td class="parameter_description"><p>the source audio buffer</p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
<tr>
<td class="parameter_name"><p>buffer_length</p></td>
<td class="parameter_description"><p>the buffer length</p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
</tbody>
</table></div>
</div>
<p class="since">Since: 3.8.12</p>
</div>
<hr>
<div class="refsect2">
<a name="ags-fluid-iir-filter-util-apply-s16"></a><h3>ags_fluid_iir_filter_util_apply_s16&nbsp;()</h3>
<pre class="programlisting"><span class="returnvalue">void</span>
ags_fluid_iir_filter_util_apply_s16 (<em class="parameter"><code><a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#AgsFluidIIRFilter" title="struct AgsFluidIIRFilter"><span class="type">AgsFluidIIRFilter</span></a> *iir_filter</code></em>,
                                     <em class="parameter"><code><a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#gint16"><span class="type">gint16</span></a> *destination</code></em>,
                                     <em class="parameter"><code><a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#gint16"><span class="type">gint16</span></a> *source</code></em>,
                                     <em class="parameter"><code><a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#guint"><span class="type">guint</span></a> buffer_length</code></em>);</pre>
<div class="warning"><p><code class="literal">ags_fluid_iir_filter_util_apply_s16</code> is deprecated and should not be used in newly-written code.</p></div>
<p>Perform fluid IIR filter on <em class="parameter"><code>buffer</code></em>
 and return the result in <em class="parameter"><code>output_buffer</code></em>
.</p>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-apply-s16.parameters"></a><h4>Parameters</h4>
<div class="informaltable"><table class="informaltable" width="100%" border="0">
<colgroup>
<col class="parameters_name" width="150px">
<col class="parameters_description">
<col class="parameters_annotations" width="200px">
</colgroup>
<tbody>
<tr>
<td class="parameter_name"><p>iir_filter</p></td>
<td class="parameter_description"><p>the <span class="type">AgsFluidIIRFilter</span> containing filter parameters</p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
<tr>
<td class="parameter_name"><p>destination</p></td>
<td class="parameter_description"><p>the destination audio buffer</p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
<tr>
<td class="parameter_name"><p>source</p></td>
<td class="parameter_description"><p>the source audio buffer</p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
<tr>
<td class="parameter_name"><p>buffer_length</p></td>
<td class="parameter_description"><p>the buffer length</p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
</tbody>
</table></div>
</div>
<p class="since">Since: 3.8.12</p>
</div>
<hr>
<div class="refsect2">
<a name="ags-fluid-iir-filter-util-apply-s24"></a><h3>ags_fluid_iir_filter_util_apply_s24&nbsp;()</h3>
<pre class="programlisting"><span class="returnvalue">void</span>
ags_fluid_iir_filter_util_apply_s24 (<em class="parameter"><code><a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#AgsFluidIIRFilter" title="struct AgsFluidIIRFilter"><span class="type">AgsFluidIIRFilter</span></a> *iir_filter</code></em>,
                                     <em class="parameter"><code><a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#gint32"><span class="type">gint32</span></a> *destination</code></em>,
                                     <em class="parameter"><code><a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#gint32"><span class="type">gint32</span></a> *source</code></em>,
                                     <em class="parameter"><code><a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#guint"><span class="type">guint</span></a> buffer_length</code></em>);</pre>
<div class="warning"><p><code class="literal">ags_fluid_iir_filter_util_apply_s24</code> is deprecated and should not be used in newly-written code.</p></div>
<p>Perform fluid IIR filter on <em class="parameter"><code>buffer</code></em>
 and return the result in <em class="parameter"><code>output_buffer</code></em>
.</p>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-apply-s24.parameters"></a><h4>Parameters</h4>
<div class="informaltable"><table class="informaltable" width="100%" border="0">
<colgroup>
<col class="parameters_name" width="150px">
<col class="parameters_description">
<col class="parameters_annotations" width="200px">
</colgroup>
<tbody>
<tr>
<td class="parameter_name"><p>iir_filter</p></td>
<td class="parameter_description"><p>the <span class="type">AgsFluidIIRFilter</span> containing filter parameters</p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
<tr>
<td class="parameter_name"><p>destination</p></td>
<td class="parameter_description"><p>the destination audio buffer</p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
<tr>
<td class="parameter_name"><p>source</p></td>
<td class="parameter_description"><p>the source audio buffer</p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
<tr>
<td class="parameter_name"><p>buffer_length</p></td>
<td class="parameter_description"><p>the buffer length</p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
</tbody>
</table></div>
</div>
<p class="since">Since: 3.8.12</p>
</div>
<hr>
<div class="refsect2">
<a name="ags-fluid-iir-filter-util-apply-s32"></a><h3>ags_fluid_iir_filter_util_apply_s32&nbsp;()</h3>
<pre class="programlisting"><span class="returnvalue">void</span>
ags_fluid_iir_filter_util_apply_s32 (<em class="parameter"><code><a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#AgsFluidIIRFilter" title="struct AgsFluidIIRFilter"><span class="type">AgsFluidIIRFilter</span></a> *iir_filter</code></em>,
                                     <em class="parameter"><code><a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#gint32"><span class="type">gint32</span></a> *destination</code></em>,
                                     <em class="parameter"><code><a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#gint32"><span class="type">gint32</span></a> *source</code></em>,
                                     <em class="parameter"><code><a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#guint"><span class="type">guint</span></a> buffer_length</code></em>);</pre>
<div class="warning"><p><code class="literal">ags_fluid_iir_filter_util_apply_s32</code> is deprecated and should not be used in newly-written code.</p></div>
<p>Perform fluid IIR filter on <em class="parameter"><code>buffer</code></em>
 and return the result in <em class="parameter"><code>output_buffer</code></em>
.</p>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-apply-s32.parameters"></a><h4>Parameters</h4>
<div class="informaltable"><table class="informaltable" width="100%" border="0">
<colgroup>
<col class="parameters_name" width="150px">
<col class="parameters_description">
<col class="parameters_annotations" width="200px">
</colgroup>
<tbody>
<tr>
<td class="parameter_name"><p>iir_filter</p></td>
<td class="parameter_description"><p>the <span class="type">AgsFluidIIRFilter</span> containing filter parameters</p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
<tr>
<td class="parameter_name"><p>destination</p></td>
<td class="parameter_description"><p>the destination audio buffer</p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
<tr>
<td class="parameter_name"><p>source</p></td>
<td class="parameter_description"><p>the source audio buffer</p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
<tr>
<td class="parameter_name"><p>buffer_length</p></td>
<td class="parameter_description"><p>the buffer length</p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
</tbody>
</table></div>
</div>
<p class="since">Since: 3.8.12</p>
</div>
<hr>
<div class="refsect2">
<a name="ags-fluid-iir-filter-util-apply-s64"></a><h3>ags_fluid_iir_filter_util_apply_s64&nbsp;()</h3>
<pre class="programlisting"><span class="returnvalue">void</span>
ags_fluid_iir_filter_util_apply_s64 (<em class="parameter"><code><a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#AgsFluidIIRFilter" title="struct AgsFluidIIRFilter"><span class="type">AgsFluidIIRFilter</span></a> *iir_filter</code></em>,
                                     <em class="parameter"><code><a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#gint64"><span class="type">gint64</span></a> *destination</code></em>,
                                     <em class="parameter"><code><a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#gint64"><span class="type">gint64</span></a> *source</code></em>,
                                     <em class="parameter"><code><a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#guint"><span class="type">guint</span></a> buffer_length</code></em>);</pre>
<div class="warning"><p><code class="literal">ags_fluid_iir_filter_util_apply_s64</code> is deprecated and should not be used in newly-written code.</p></div>
<p>Perform fluid IIR filter on <em class="parameter"><code>buffer</code></em>
 and return the result in <em class="parameter"><code>output_buffer</code></em>
.</p>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-apply-s64.parameters"></a><h4>Parameters</h4>
<div class="informaltable"><table class="informaltable" width="100%" border="0">
<colgroup>
<col class="parameters_name" width="150px">
<col class="parameters_description">
<col class="parameters_annotations" width="200px">
</colgroup>
<tbody>
<tr>
<td class="parameter_name"><p>iir_filter</p></td>
<td class="parameter_description"><p>the <span class="type">AgsFluidIIRFilter</span> containing filter parameters</p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
<tr>
<td class="parameter_name"><p>destination</p></td>
<td class="parameter_description"><p>the destination audio buffer</p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
<tr>
<td class="parameter_name"><p>source</p></td>
<td class="parameter_description"><p>the source audio buffer</p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
<tr>
<td class="parameter_name"><p>buffer_length</p></td>
<td class="parameter_description"><p>the buffer length</p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
</tbody>
</table></div>
</div>
<p class="since">Since: 3.8.12</p>
</div>
<hr>
<div class="refsect2">
<a name="ags-fluid-iir-filter-util-apply-float"></a><h3>ags_fluid_iir_filter_util_apply_float&nbsp;()</h3>
<pre class="programlisting"><span class="returnvalue">void</span>
ags_fluid_iir_filter_util_apply_float (<em class="parameter"><code><a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#AgsFluidIIRFilter" title="struct AgsFluidIIRFilter"><span class="type">AgsFluidIIRFilter</span></a> *iir_filter</code></em>,
                                       <em class="parameter"><code><a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#gfloat"><span class="type">gfloat</span></a> *destination</code></em>,
                                       <em class="parameter"><code><a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#gfloat"><span class="type">gfloat</span></a> *source</code></em>,
                                       <em class="parameter"><code><a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#guint"><span class="type">guint</span></a> buffer_length</code></em>);</pre>
<div class="warning"><p><code class="literal">ags_fluid_iir_filter_util_apply_float</code> is deprecated and should not be used in newly-written code.</p></div>
<p>Perform fluid IIR filter on <em class="parameter"><code>buffer</code></em>
 and return the result in <em class="parameter"><code>output_buffer</code></em>
.</p>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-apply-float.parameters"></a><h4>Parameters</h4>
<div class="informaltable"><table class="informaltable" width="100%" border="0">
<colgroup>
<col class="parameters_name" width="150px">
<col class="parameters_description">
<col class="parameters_annotations" width="200px">
</colgroup>
<tbody>
<tr>
<td class="parameter_name"><p>iir_filter</p></td>
<td class="parameter_description"><p>the <span class="type">AgsFluidIIRFilter</span> containing filter parameters</p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
<tr>
<td class="parameter_name"><p>destination</p></td>
<td class="parameter_description"><p>the destination audio buffer</p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
<tr>
<td class="parameter_name"><p>source</p></td>
<td class="parameter_description"><p>the source audio buffer</p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
<tr>
<td class="parameter_name"><p>buffer_length</p></td>
<td class="parameter_description"><p>the buffer length</p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
</tbody>
</table></div>
</div>
<p class="since">Since: 3.8.12</p>
</div>
<hr>
<div class="refsect2">
<a name="ags-fluid-iir-filter-util-apply-double"></a><h3>ags_fluid_iir_filter_util_apply_double&nbsp;()</h3>
<pre class="programlisting"><span class="returnvalue">void</span>
ags_fluid_iir_filter_util_apply_double
                               (<em class="parameter"><code><a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#AgsFluidIIRFilter" title="struct AgsFluidIIRFilter"><span class="type">AgsFluidIIRFilter</span></a> *iir_filter</code></em>,
                                <em class="parameter"><code><a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#gdouble"><span class="type">gdouble</span></a> *destination</code></em>,
                                <em class="parameter"><code><a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#gdouble"><span class="type">gdouble</span></a> *source</code></em>,
                                <em class="parameter"><code><a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#guint"><span class="type">guint</span></a> buffer_length</code></em>);</pre>
<div class="warning"><p><code class="literal">ags_fluid_iir_filter_util_apply_double</code> is deprecated and should not be used in newly-written code.</p></div>
<p>Perform fluid IIR filter on <em class="parameter"><code>buffer</code></em>
 and return the result in <em class="parameter"><code>output_buffer</code></em>
.</p>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-apply-double.parameters"></a><h4>Parameters</h4>
<div class="informaltable"><table class="informaltable" width="100%" border="0">
<colgroup>
<col class="parameters_name" width="150px">
<col class="parameters_description">
<col class="parameters_annotations" width="200px">
</colgroup>
<tbody>
<tr>
<td class="parameter_name"><p>iir_filter</p></td>
<td class="parameter_description"><p>the <span class="type">AgsFluidIIRFilter</span> containing filter parameters</p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
<tr>
<td class="parameter_name"><p>destination</p></td>
<td class="parameter_description"><p>the destination audio buffer</p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
<tr>
<td class="parameter_name"><p>source</p></td>
<td class="parameter_description"><p>the source audio buffer</p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
<tr>
<td class="parameter_name"><p>buffer_length</p></td>
<td class="parameter_description"><p>the buffer length</p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
</tbody>
</table></div>
</div>
<p class="since">Since: 3.8.12</p>
</div>
<hr>
<div class="refsect2">
<a name="ags-fluid-iir-filter-util-apply-complex"></a><h3>ags_fluid_iir_filter_util_apply_complex&nbsp;()</h3>
<pre class="programlisting"><span class="returnvalue">void</span>
ags_fluid_iir_filter_util_apply_complex
                               (<em class="parameter"><code><a class="link" href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/libags-audio/AgsFluidIIRFilterUtil.html#AgsFluidIIRFilter" title="struct AgsFluidIIRFilter"><span class="type">AgsFluidIIRFilter</span></a> *iir_filter</code></em>,
                                <em class="parameter"><code><span class="type">AgsComplex</span> *destination</code></em>,
                                <em class="parameter"><code><span class="type">AgsComplex</span> *source</code></em>,
                                <em class="parameter"><code><a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/glib/glib-Basic-Types.html#guint"><span class="type">guint</span></a> buffer_length</code></em>);</pre>
<div class="warning"><p><code class="literal">ags_fluid_iir_filter_util_apply_complex</code> is deprecated and should not be used in newly-written code.</p></div>
<p>Perform fluid IIR filter on <em class="parameter"><code>buffer</code></em>
 and return the result in <em class="parameter"><code>output_buffer</code></em>
.</p>
<div class="refsect3">
<a name="ags-fluid-iir-filter-util-apply-complex.parameters"></a><h4>Parameters</h4>
<div class="informaltable"><table class="informaltable" width="100%" border="0">
<colgroup>
<col class="parameters_name" width="150px">
<col class="parameters_description">
<col class="parameters_annotations" width="200px">
</colgroup>
<tbody>
<tr>
<td class="parameter_name"><p>iir_filter</p></td>
<td class="parameter_description"><p>the <span class="type">AgsFluidIIRFilter</span> containing filter parameters</p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
<tr>
<td class="parameter_name"><p>destination</p></td>
<td class="parameter_description"><p>the destination audio buffer</p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
<tr>
<td class="parameter_name"><p>source</p></td>
<td class="parameter_description"><p>the source audio buffer</p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
<tr>
<td class="parameter_name"><p>buffer_length</p></td>
<td class="parameter_description"><p>the buffer length</p></td>
<td class="parameter_annotations">&nbsp;</td>
</tr>
</tbody>
</table></div>
</div>
<p class="since">Since: 3.8.12</p>
</div>
<hr>
<div class="refsect2">
<a name="AGS-FLUID-IIR-FILTER-UTIL:CAPS"></a><h3>AGS_FLUID_IIR_FILTER_UTIL()</h3>
<pre class="programlisting">#define AGS_FLUID_IIR_FILTER_UTIL(ptr)         ((AgsFluidIIRFilterUtil *)(ptr))
</pre>
</div>
<hr>
<div class="refsect2">
<a name="ags-fluid-iir-filter-util-get-type"></a><h3>ags_fluid_iir_filter_util_get_type&nbsp;()</h3>
<pre class="programlisting"><a href="https://www.gnu.org/savannah-checkouts/non-gnu/gsequencer/api/3.13.4/gobject/gobject-Type-Information.html#GType"><span class="returnvalue">GType</span></a>
ags_fluid_iir_filter_util_get_type (<em class="parameter"><code><span class="type">void</span></code></em>);</pre>
</div>
</div>
<div class="refsect1">
<a name="AgsFluidIIRFilterUtil.other_details"></a><h2>Types and Values</h2>
<div class="refsect2">
<a name="AgsFluidIIRFilterType"></a><h3>enum AgsFluidIIRFilterType</h3>
<div class="refsect3">
<a name="AgsFluidIIRFilterType.members"></a><h4>Members</h4>
<div class="informaltable"><table class="informaltable" width="100%" border="0">
<colgroup>
<col class="enum_members_name" width="300px">
<col class="enum_members_description">
<col class="enum_members_annotations" width="200px">
</colgroup>
<tbody>
<tr>
<td class="enum_member_name"><p><a name="AGS-FLUID-IIR-DISABLED:CAPS"></a>AGS_FLUID_IIR_DISABLED</p></td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td class="enum_member_name"><p><a name="AGS-FLUID-IIR-LOWPASS:CAPS"></a>AGS_FLUID_IIR_LOWPASS</p></td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td class="enum_member_name"><p><a name="AGS-FLUID-IIR-HIGHPASS:CAPS"></a>AGS_FLUID_IIR_HIGHPASS</p></td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td class="enum_member_name"><p><a name="AGS-FLUID-IIR-LAST:CAPS"></a>AGS_FLUID_IIR_LAST</p></td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
</tbody>
</table></div>
</div>
</div>
<hr>
<div class="refsect2">
<a name="AgsFluidIIRFilter"></a><h3>struct AgsFluidIIRFilter</h3>
<pre class="programlisting">struct AgsFluidIIRFilter {
  guint filter_type;
  guint flags;
  gdouble b02;
  gdouble b1;
  gdouble a1;
  gdouble a2;
  gdouble b02_incr;
  gdouble b1_incr;
  gdouble a1_incr;
  gdouble a2_incr;
  gint filter_coeff_incr_count;
  gint compensate_incr;
  gdouble hist1;
  gdouble hist2;
  gboolean filter_startup;
  gdouble fres;
  gdouble last_fres;
  gdouble q_lin;
  gdouble filter_gain;
};
</pre>
</div>
<hr>
<div class="refsect2">
<a name="AGS-TYPE-FLUID-IIR-FILTER-UTIL:CAPS"></a><h3>AGS_TYPE_FLUID_IIR_FILTER_UTIL</h3>
<pre class="programlisting">#define AGS_TYPE_FLUID_IIR_FILTER_UTIL         (ags_fluid_iir_filter_util_get_type())
</pre>
</div>
<hr>
<div class="refsect2">
<a name="AgsFluidIIRFilterUtil-struct"></a><h3>struct AgsFluidIIRFilterUtil</h3>
<pre class="programlisting">struct AgsFluidIIRFilterUtil {
  gpointer source;
  guint source_stride;

  gpointer destination;
  guint destination_stride;

  guint buffer_length;
  guint format;
  guint samplerate;

  guint filter_type;

  guint flags;

  gdouble b02;
  gdouble b1;
  gdouble a1;
  gdouble a2;
  gdouble b02_incr;
  gdouble b1_incr;
  gdouble a1_incr;
  gdouble a2_incr;

  gint filter_coeff_incr_count;
  gint compensate_incr;

  gdouble hist1;
  gdouble hist2;

  gboolean filter_startup;

  gdouble fres;
  gdouble last_fres;

  gdouble q_lin;
  gdouble filter_gain;
};
</pre>
</div>
</div>
</div>
<div class="footer">
<hr>Generated by GTK-Doc V1.33.1</div>

</body></html>
