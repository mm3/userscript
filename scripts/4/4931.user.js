// Last.fm Degayifier (Mine)
// version 1.0
// By Nathan Kowald - http://www.nathankowald.com
// 2006-06-28
// Released to the public domain.
//
// ==UserScript==
// @name          Last.fm Degayifier - Taran's Version
// @description   Makes your Last.fm page less gay by removing useless "eye candy"
// @include       http*://*last.fm/*
// ==/UserScript==


(function () { //EDIT ME
	var newstyle = "h3 a:hover { background: none !important; color: #000000 !important; text-decoration:underline !important; border-bottom:none !important; }body.black h3 a:hover { background: none !important; color: #000000 !important; text-decoration:underline !important; border-bottom:none !important;}.lastPanel a, .lastPanel a.lfmlight { border-bottom: none !important; text-decoration:underline !important;}.lastPanel a:hover, .lastPanel a.lfmlight:hover { color: #231F20 !important; border-bottom: none !important; text-decoration:underline !important; background-color: transparent !important; }#LastWebsite { background-image: none !important; background-color: #EFEFEF !important;}.imgWrapper { display:none !important;}div.chartWithSidebar { display:block !important; float:none !important; width:100% !important; height:100% !important; position:relative !important;}.chartWithSidebar .recenttracks { position:relative !important; padding-bottom: 0px !important; margin-bottom: 0px !important;}.lastChart table.recenttracks { background-color:#EDEDED !important ; position:relative !important;}.end { position:inline !important; margin-top:-20px !important;}.afterSBchart { padding-left:0% !important;}.tagBox { background: none !important ; }#LastHeadline { background:none #A5A5A5 !important; }body.black #LastHeadline { background:none #A5A5A5 !important; }#LastHeadline a:hover{ background-color:#A5A5A5 !important; color:#FFFFFF !important; text-decoration:underline !important; }body.black #LastHeadline a:hover{ background-color:#A5A5A5 !important; color:#FFFFFF !important; text-decoration:underline !important; }body { background-image: none !important; }#headerSearchbox { background: none !important; }#LastContent { background-image: url(none) !important; background-position: right top; background-repeat: repeat-y; margin-top: -1px; padding-left: 210px; padding-right: 245px; background-color: transparent; }#LastContent3 { background-image: none !important; background-color:#ffffff !important; border-top: 1px solid grey !important; border-right: 1px solid grey !important; border-left:1px solid grey !important ; border-bottom:none !important; padding-right:15px !important; margin-right:14px !important; }#LastContent3 a { border-bottom: none !important; }#LastContent3 a:hover { border-bottom: none !important; text-decoration:underline !important; }#list_tpanel a { text-decoration:none !important; }#list_tpanel a:hover { text-decoration:underline !important;}.end a { text-decoration:underline !important; }#musicloaded .imgWrapper { width: 100%; border:none;}.lastChart .afterchart, .afterSBchart { margin-top: -20px !important; padding-bottom: 5px; font-size: 11px; color: #A0A0A0 !important; }#SecondaryNav { background-image: url(none) !important; }#SecondaryNav li.last a { background-image: none !important; border-right:1px solid #808080 !important; padding-right: 22px;}.lastPanel .h { padding: 1px 3px 0px 10px !important; margin-right: 15px !important; line-height: 25px; height: 24px; overflow: hidden; background-image: none !important; background-color:#D01F3C !important; }/* Uncommenting this will unbold panel headings.lastPanel .h h2 { font-weight:normal !important; }*/body.black .lastPanel .h { background-image: none !important; background-color:#242424 !important;}.imgHolder { padding: 12px 0px 8px 0px; text-align: center; overflow: hidden; margin: 0 auto; }#LastHeader { background: none #D20039 !important ; }body.black #LastHeader { background: none #231F20 !important ; }#flCloud{ display:none !important ; }#footerLogo { margin-left:15px !important; }#LastFooter UL { border: none !important ; margin-left:15px !important;}.lastChart table.recenttracks { background: url(none) !important;}.lastChart table.recenttracks tr.now td.chartlabel { background: url('http://www.nathankowald.com/images/chart_note_red.gif') bottom left no-repeat !important; padding-bottom: 0px !important;}.lastChart table.recenttracks tr.now td.chartlabel div div { margin: 0; background: url('http://static.last.fm/matt/charts/red_end.gif') top right no-repeat #D20039 !important; padding-left: 10px; color:#FFFFFF !important; font-size:13px !important;}body.black .lastChart table.recenttracks tr.now td.chartlabel { background: url('http://www.nathankowald.com/images/chart_note_grey.gif') bottom left no-repeat !important; padding-bottom: 0px !important;}body.black .lastChart table.recenttracks tr.now td.chartlabel div div a:hover { border-bottom:1px solid #FFFFFF !important;}body.black .lastChart table.recenttracks tr.now td.chartlabel div div { margin: 0px; background: url('http://www.nathankowald.com/images/grey_end.gif') top right no-repeat #313131 !important; padding-left: 10px; color:#FFFFFF !important; font-size:13px !important;}.lastChart table.recenttracks tr.now td.chartlabel .date { color:#FFF752 !important; text-transform:capitalize; margin-left:5px;}.lastChart table.recenttracks tr.now td.chartlabel div div a{ color:#FFFFFF !important;}.lastChart table.recenttracks td.chartlabel { background: url('http://www.nathankowald.com/images/artist_alt.gif') bottom left no-repeat #ffffff !important; padding-bottom: 0px !important; background-color:#FFFFFF !important; height:20px !important; padding-right:0px; padding-left:20px;}.lastChart table.recenttracks td.chartlabel div { margin-top: 3px ; margin-bottom: 0px; padding-right: 0px; background: url('http://www.nathankowald.com/images/light_end.gif') top right no-repeat #DEDEDE !important;}.lastChart table.recenttracks tr.first td div { margin-top: 0px;}.lastPanel.noHeader .h, body.black .lastPanel.noHeader .h { background: url(none) #A4A4A4 !important; height:0px; }#recenttracks.lastChart { margin-bottom:-20px;}.lastPanel .f { background: url(none) #ffffff !important; clear: both; border-top:1px solid #A4A4A4; margin-right:16px !important; margin-bottom:0px !important; padding:0px !important;}.lastPanel .c { background: url(none) #ffffff !important; padding-left: 10px; padding-right:15px; margin-right: 15px; padding-bottom: 5px; border-right:1px solid #A4A4A4; border-left:1px solid #A4A4A4; }div.f p.more { margin: 0px 0px 0px 0px; padding-top:2px; background-color: #EFEFEF !important; }p.more a { text-decoration:none !important; margin-left: 2px !important;}.iesucks {background-color: #EFEFEF !important;} div div .date { font-family:Arial, Helvetica, sans-serif !important; color:#909090 !important;}.lastPanel ul.i li a { height:60px;}.lastPanel ul.i li a:hover { background-color:#FFFFFF; color:#000000; }body.black div.infoBox, body.black .instructBox h4 { color: #666 !important; background: url(none) !important;}.infoBox { font-weight:normal !important; }#navigation a { font-weight:normal !important;}.i a { text-decoration:none !important;}.i a:hover { text-decoration:none !important;}.shoutboxMsg div small a.lfmlight { text-decoration:none !important; }#h_npanel h2 a, #h_fpanel h2 a, #h_gpanel h2 a, #h_tpanel h2 a   { text-decoration:none !important;}.radioButton a { text-decoration:none !important;}.radioButton a:hover { text-decoration:none !important;}.h h2 a:hover { color:#FFFFFF !important; }#LastLogo #LogoImg a:hover { background-color:none !important; border-bottom:none !important; }#LastContent.LastContent2 #LastContent2 { background-image: url('http://www.nathankowald.com/images/whitePixel.gif') repeat !important; background-color:#FFFFFF !important; border-top:1px solid #959595 !important; }div .LastContent2 { background-image: url('http://www.nathankowald.com/images/bg-sidebar.gif')!important; background-color:#EFEFEF !important; background-repeat: repeat-y !important; background-position: left top !important; }div .sidebar { background-color:#EFEFEF !important; margin-left:0px !important; }div #LastContextSidebar { background-color:#EFEFEF !important; }body.black #LastContent.LastContent2 #LastContent2 { background-image: url(none) !important; background-color:#FFFFFF !important; border-top:1px solid #959595 !important; }body.black #SecondaryNav li.lastcurrent a { background-image: url(none) !important; border-right:1px solid #959595 !important; }#LastLogo a:hover { background-color: transparent !important; }body.widget { background-image: url('http://static.last.fm/depth/widgets/panel_widget_bottom.gif') !important; background-position: bottom center !important; background-repeat: no-repeat !important; padding: 0 0 10px 0 !important; margin: 0 !important; }#LastFooter { line-height:120%; border-top:1px solid #808080 !important; color:#D3D3D3; background: url(none) #818181 !important; }/* Dashboard Syles */#freestuff .end { margin-top:0px !important; }#freestuff .end a { text-decoration:none !important; }#freestuff .end a:hover { border-bottom:0 !important; text-decoration:underline !important;}.colContent a { text-decoration:none !important;}table.recenttracks td.user { padding-right: 30px !important;}table.recenttracks td.chartlabel { vertical-align: bottom !important;}table.recenttracks td.user span { display: block !important; margin-top: 20px !important; margin-right: 10px !important;}table.recenttracks tr.last td div{ margin-bottom: 0px !important;}"; //END EDIT ME

	var ss = document.createElement("style"); var t = document.createTextNode(newstyle); var HeaderImage = document.getElementById('LogoImg'); if ( HeaderImage )
	{HeaderImage.src = 'http://www.nathankowald.com/images/logo.png'; }
	var headline = document.getElementById('LastHeadline'); if ( headline )
			{headline.className = 'degayed'; }
    var root = (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]); ss.appendChild(t); root.appendChild(ss); })(); 