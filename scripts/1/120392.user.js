// ==UserScript==
// @name          Facebook için Twitter Teması
// @namespace     [DoctoR.Ossi]
// @description	  Facebook görünümünü Twitter'a çevirir.
// @version       1.1
// @include       http://facebook.com/*
// @include       https://facebook.com/*
// @include       http://*.facebook.com/*
// @include       https://*.facebook.com/*
// @require       http://sizzlemctwizzle.com/updater.php?id=120392
// @run-at        document-start
// ==/UserScript==
(function() {
var css = "body { \nbackground-color: transparent !important; \nbackground-image: url(\"http://img52.imageshack.us/img52/1096/32021634.png\") !important;\nbackground-attachment: fixed !important;\nbackground-repeat: no-repeat !important;\nbackground-position: top center !important;\nbackground-color: #C0DEED !important;\ncolor: #BABABA !important;\n     }\n\n\n\n#pageHead {z-index: 10 !important; }\n#pageHead, body:not(.UIPage_LoggedOut):not(.fbIndex)\n#blueBar {\n    background: -moz-linear-gradient(center top , #333333, #111111) repeat scroll 0 0 transparent !important;\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5) !important;\n    z-index : 5 !important;\n    padding-left:0px;\n}\n    body:not(.fixedBody) \n\n#content {margin-top: 20px !important;}\n.ptm {margin-top: -6px !important;}\n\n#blueBarHolder {\n    background: -moz-linear-gradient(center top , #333333, #111111) repeat scroll 0 0 transparent !important;\n}\n.loggedout_menubar_container{height:900px !important;}\n.loggedout_menubar{padding-top: 100px !important;}\n\n\n#mainContainer{\n-moz-box-shadow: 20px 40px 40px rgba(0,0,0,.25);\nborder: 8px solid white !important;\n-moz-border-radius: 15px;\nborder-radius: 15px;\n\n}\n\nuiHeaderSection, .uiSideHeader {\nbackground: -moz-linear-gradient(top, #c0deed 40%, #ffffff 100%);\n-moz-border-radius: 10px;\nborder-radius: 10px;\n}\n\n\n.uiScrollableAreaBody {\n    padding-top: 40px;}\n\n\n.profile-picture {\nborder: 8px solid white;\n-webkit-transform: rotate(-2deg);\n-moz-transform: rotate(-2deg);\n-moz-box-shadow: 0 3px 6px rgba(0,0,0,.25);\nmargin-left: -20px;\n}\n\n.profile-picture:hover {\n-webkit-transform: scale(1.1);\n-moz-transform: scale(1.1);\nposition: relative;\nz-index: 5;\n}\n\n\n.profile-friends li:hover {\n-webkit-transform: scale(1.1);\n-moz-transform: scale(1.1);\nposition: relative;\nz-index: 5;\n}\n\n.UIImageBlock_MED_Image{\nborder: 4px solid white;\n-webkit-transform: rotate(1deg) !important;\n-moz-transform: rotate(1deg) !important;\nmargin-top: -10px;\nmargin-bottom: 8px;\n}\n\n.uiProfilePhotoMedium{\nborder: 4px solid white !important;\n-moz-box-shadow: 0 3px 6px rgba(0,0,0,.25);\nmargin: 2px;\n}\n\n.event_profile .event_upload_image {\n    width: 179px;\nborder: 8px solid white !important;\n-webkit-transform: rotate(-2deg);\n-moz-transform: rotate(-2deg);\n-moz-box-shadow: 0 3px 6px rgba(0,0,0,.25);\nmargin-left: -40px;\n}\n\n.MessagingContentBorder {\n    position: absolute !important;\n}\n\n\n\n.MessagingReadHeader {\nmargin-left: -20px;\n    width: 800px !important;\n    margin-top: -23px !important;\n}\n\n\n.storyContent{\nwidth: 490px;\npadding-top: 5px;\n\npadding-bottom:20px;\npadding-right: 5px;\nmargin-left: -8px;\n-moz-border-radius: 1em 4em 1em 4em;\nborder-radius: 1em 4em 1em 4em;\nbackground: #c0deed;\nbackground: -moz-linear-gradient(top, #c0deed 0%, #ffffff 100%);\n}\n\n.uiStreamMinistoryGroup {\n    padding: 15px 0 10px 25px !important;\n}\n\n.fbNubFlyoutTitlebar{\n-moz-border-radius-topright: 10px;\n}\n\n#fbDockChat{\n-moz-box-shadow: 6px -4px 12px rgba(0,0,0,.25);\n}\n\n\n\nelement.style {\n    min-height: 100px !important;\n}\n.hasLeftCol #contentCol {\n    border-left: 1px solid #B3B3B3 !important;\n\n}\n#contentCol {\n    background-color: #DBEDF5 !important;\n    padding-top: 15px !important;\n}\n\n\n#headNav {\n    background: -moz-linear-gradient(center top , #333333, #111111) repeat scroll 0 0 transparent !important;\n    border-color: #404040 #404040 -moz-use-text-color !important;\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5) !important;\n}\n\n.uiLinkButton:hover, .uiLinkButton input:hover, .uiLinkButton input:focus, .uiLinkButton input:active {\n    color: #FFFFFF !important;\n}\n\n.openToggler #navAccountLink, .no_js #navAccount:hover #navAccountLink {\n    background-color: #404040 !important;\n    color: #FFFFFF !important;\n}\n\n#pageNav a {\n    color: #FFFFFF !important;\n}\n\n\n#navAccount ul {\n    background: none repeat scroll 0 0 #2a2a2a !important;\n    border-color: #333333 #333333 #2a2a2a !important;\n}\n\n#navAccount ul a:hover, #navAccount ul a:focus, #navAccount ul a:active, #navAccount .logoutButton:hover input, #navAccount .logoutButton input:active, #navAccount .logoutButton input:focus {\n    background: none repeat scroll 0 0 #404040 !important;\n    border-bottom: 1px solid #404040 !important ;\n    border-top: 1px solid #404040 !important ;\n    color: #FFFFFF !important;\n}\n\n\n\n#pageNav a:hover, #pageNav a:focus, #pageNav a:active {\n    background-color: #474747 !important;\n}\n\n#navAccount ul a, #navAccount ul .logoutButton input {\n    color: #BABABA !important;\n}\n\n#pageNav a {\n    color: #7DD3FE !important;\n}\n\n\n\n\n#pageNav a:hover, #pageNav a:focus, #pageNav a:active {\n    color: #FFFFFF !important;\n}\n\n\n\n#pageLogo a:hover, #pageLogo a:focus, #pageLogo a:active {\n    background: -moz-linear-gradient(center top , #333333, #111111) repeat scroll 0 0 transparent !important;\n    background-image: url(\"http://img864.imageshack.us/img864/60/zzzzzzz.png\") !important;\n}\n#pageLogo a {\n    background: -moz-linear-gradient(center top , #333333, #111111) repeat scroll 0 0 transparent !important;\n    background-image: url(\"http://img864.imageshack.us/img864/60/zzzzzzz.png\") !important;\n}\n\n\n\n#jewelRequest:hover, #jewelRequest:focus, #jewelRequest:active {\n    background-image: url(\"http://img864.imageshack.us/img864/60/zzzzzzz.png\") !important;\n    background-color: #2a2a2a !important;\n}\n\n#jewelRequest {\n    background-image: url(\"http://img864.imageshack.us/img864/60/zzzzzzz.png\") !important;\n}\n\n.jewelToggler:active, .jewelToggler:focus, .jewelToggler:hover {\n    background-color: #474747 !important;\n}\n\n#jewelMail:hover, #jewelMail:focus, #jewelMail:active {\n    background-image: url(\"http://img864.imageshack.us/img864/60/zzzzzzz.png\") !important;\n}\n\n#jewelMail {\n    background-image: url(\"http://img864.imageshack.us/img864/60/zzzzzzz.png\") !important;\n}\n\n.jewelToggler:active, .jewelToggler:focus, .jewelToggler:hover {\n    background-color: #474747 !important;\n}\n\n#jewelNotif:hover, #jewelNotif:focus, #jewelNotif:active {\n    background-image: url(\"http://img864.imageshack.us/img864/60/zzzzzzz.png\") !important;\n}\n\n#jewelNotif {\n    background-image: url(\"http://img864.imageshack.us/img864/60/zzzzzzz.png\") !important;\n    \n}\n\n.jewelToggler:active, .jewelToggler:focus, .jewelToggler:hover {\n    background-color: #474747 !important;\n    }\n\n\n\n.jewelToggler:active, .jewelToggler:focus, .jewelToggler:hover {\n    background-color: #474747 !important;\n    \n}\n\n#jewelCase .jewelBox {\n    \n    background-color: #2a2a2a !important;\n    border-color: #333333 #333333 #2a2a2a !important;\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5) !important;\n}\n\n.jewelBox ul {\n    background-color: #2a2a2a !important;\n}\n\n.uiHeaderSection, .uiSideHeader {\n    background-color: #b3ceff !important;\n}\n\n#jewelCase .jewelFooter a:hover, #jewelCase .jewelFooter a:active, #jewelCase .jewelFooter a:focus {\n    background-color: #474747 !important;\n    border-top: 1px solid #E0E0E0 !important;\n    color: #FFFFFF !important;\n}\n\n#jewelCase .jewelFooter a {\n    background-color: #404040 !important;\n    color: #BABABA !important;\n}\n\n#jewelBoxMail .subject {\n    color: #BABABA !important;\n}\n\n#jewelBoxNotif .blueName {\n    color: #BABABA !important;\n}\n\n#jewelBoxNotif li a {\n    color: #808080 !important;\n}\n\n#jewelCase .jewelHighlightItem li {\n    border-top: 1px solid #404040 !important;\n}\n#jewelCase .jewelItemNew {\n    background: none repeat scroll 0 0 #4F4F4F !important;\n}\n\n#jewelCase .jewelHighlightItem li a:hover, #jewelCase .jewelHighlightItem li a:active, #jewelCase .jewelHighlightItem li a:focus {\n    background-color: #474747 !important;\n    border-bottom: 1px solid #474747 !important;\n    border-top: 1px solid #474747 !important;\n}\n\n#jewelBoxMail .author {\n    color: #BABABA !important;\n}\n#jewelCase .jewelHeader a {\n    color: #BABABA !important;\n}\n\nelement.style {\n    background-color: #2a2a2a !important;\n}\n.jewelBox ul {\n    background-color: #2a2a2a !important;\n}\n\n\n\n.fbDock .rNubContainer {\n    float: right;\n}\n\n.clearfix {\n    display: block;\n}\n\n.fbNubButton {\n    border-style: solid;\n    background:none !important;\n    font-weight: bold;\n}\n\n.fbNubButton:hover {\n    background-color: #474747 !important;\n    border-style: solid;\n    color: #BABABA !important;\n    font-weight: bold;\n}\n\n.fbDockChatBuddyListNub .label .count strong {\n    color: #BABABA !important;\n}\n\n.fbNubFlyoutTitlebar {\n    -moz-border-bottom-colors: none;\n    -moz-border-image: none;\n    -moz-border-left-colors: none;\n    -moz-border-right-colors: none;\n    -moz-border-top-colors: none;\n    background-color: #2a2a2a !important;\n    border-color: #254588 #254588 -moz-use-text-color;\n    border-style: solid solid none;\n    border-width: 1px 1px 0;\n    color: #FFFFFF;\n    cursor: pointer;\n    font-size: 11px;\n    font-weight: bold;\n    line-height: 14px;\n    padding: 3px 3px 3px 5px;\n}\n\n.fbNubFlyout {\n    background-color: #F5F5F5 !important;\n    border-bottom: 1px solid #777777;\n    bottom: 25px;\n    position: absolute;\n}\n.friendlist_name {\n    background-color: #F5F5F5 !important;\n    color: #888888;\n    float: left;\n    padding: 0 5px 0 6px;\n}\n.switch {\n    background-color: #F5F5F5 !important;\n    display: block;\n    float: right;\n    padding: 3px 6px;\n    position: relative;\n}\n\n.openToggler .fbNubButton {\n    background: none repeat scroll 0 0 #2a2a2a !important;\n    border-color: #777777;\n    border-right-width: 1px;\n    border-top-width: 0;\n    margin-right: -1px;\n    padding: 5px;\n}\n\n.fbChatMessage {\n    margin-bottom: 3px;\n    white-space: pre-wrap;\n    word-wrap: break-word;\n    color: #2a2a2a !important;\n}\n\n.fbNubButton .rule {\n    border-top: 1px solid #474747 !important;\n    margin-top: -5px;\n    padding-top: 4px;\n    position: relative;\n}\n\nelement.style {\n    background-color: #2a2a2a !important;\n}\n\n.fbNubButton {\n    border-color: #474747 !important;\n    border-style: solid;\n    border-width: 1px 0 0 1px;\n    color: #333333;\n    display: block;\n    font-weight: bold;\n    height: 16px;\n    padding: 4px 5px;\n    position: relative;\n    z-index: 1;\n}\n\n.no-titan .fbDockChatTab.disabled .fbNubButton {\n    background-color: #9A9A9A !important;\n    color: #454545 !important;\n}\n\n.fbNubButton {\n    border-color: #999999;\n    border-style: solid;\n    border-width: 1px 0 0 1px;\n    color: #333333;\n    display: block;\n    font-weight: bold;\n    height: 16px;\n    padding: 4px 5px;\n    position: relative;\n    z-index: 1;\n}\n\na {\n    color: #3B5998;\n    cursor: pointer;\n    text-decoration: none;\n}\n\n.fbNubButton {\n    border-color: #474747 !important;\n    border-style: solid;\n    border-width: 1px 0 0 1px;\n    color: #333333;\n    display: block;\n    font-weight: bold;\n    height: 16px;\n    padding: 4px 5px;\n    position: relative;\n    z-index: 1;\n}\n\n.fbNubButton {\n    border-style: solid;\n    color: #BABABA !important;\n    font-weight: bold;\n}\n\na {\n    color: #3B5998;\n    cursor: pointer;\n    text-decoration: none;\n}\n\na {\n    color: #3B5998;\n    cursor: pointer;\n    text-decoration: none;\n}\n\n\n.uiUfiComment .commentContent {\n    color: #2a2a2a !important;\n}\n\n.uiUfi .ufiItem {\n    color: #2a2a2a !important;\n}\n\n\n\n\n.UIWell {\n    background: none !important;\n}\n\n.GBUndoAction_notification_text {\n    color: #2a2a2a !important;\n}\n\n.sp_a2jb2c {\n    background-image: url(\"http://img801.imageshack.us/img801/7007/lokuj.png\") !important;\n}\n\n.fbDockChatBuddyListNub .icon {\n    background-image: url(\"http://img829.imageshack.us/img829/9741/jiohoho.gif\") !important;\n}\n\n\n\n.loggedout_menubar_container {\n    background: -moz-linear-gradient(center top , #333333, #111111) repeat scroll 0 0 transparent !important;\nbox-shadow: 0 1px 2px rgba(0, 0, 0, 0.5) !important;\n}\n\n.uiWashLayoutGradientWash, .uiWashLayoutEmptyGradientWash {\n    background-color: transparent !important; \nbackground-image: url(\"http://img52.imageshack.us/img52/1096/32021634.png\") !important;\nbackground-attachment: fixed !important;\nbackground-repeat: no-repeat !important;\nbackground-position: top center !important;\nbackground-color: #C0DEED !important;\n}\n\n#contentCurve {\n    background-color: transparent !important;\n}\n\n#photoborder {\n    background-color: transparent !important;\n}\n\n.photo_metadata {\n    color: #2a2a2a !important;\n}\n\n.fbDockChatTab.highlight .fbNubButton {\n    background: url(\"http://img822.imageshack.us/img822/7574/aaabbb.png\") repeat-x scroll 0 0 #6D84B4 !important;\n    color: #FFFFFF !important;\n}\n.uiSideNav .item, .uiSideNav .subitem {\n    border-bottom: 1px solid #2A2A2A !important;\n}\n\n.uiSideNav .selectedItem .item, .uiSideNav .selectedItem .item:hover, .uiSideNav ul .selectedItem .subitem, .uiSideNav ul .selectedItem .subitem:hover {\n    background-color: #DBEDF5 !important;\n}\n\ntd, td.label {\n    color: #2a2a2a !important;\n}\n\n.openToggler .jewelToggler {\n    background-color: #2a2a2a !important;\n}\n\n.mvs {\n    color: #2a2a2a !important;\n}\n\n#pageFooter {\n    background-color: transparent !important;\n}\n\n.uiSideNav .item, .uiSideNav .subitem {\n    border-bottom: 1px solid transparent !important;\n}\n\n ul #navAccountInfo a:hover, ul #navAccountInfo a:focus, ul #navAccountInfo a:active {\n    text-decoration: none !important;    \n}\n\nul #navAccountPic a:hover, ul #navAccountPic a:focus, ul #navAccountPic a:active {\n    padding: 3px 5px 8px !important;\n}\n\n.uiNumberGiant {\n    color: #666666 !important;\n}\n\n.fsm {\n    color: #666666 !important;\n}\n\n.uiBlingBox {\n    border-bottom: 0 !important;\n}\n\n.uiSideNav .item, .uiSideNav .subitem {\n    border-bottom: 1px solid #888888 !important;\n}\n\n#contentArea {\n    color: #666666 !important;\n}\n\n.uiSideNav .selectedItem .item, .uiSideNav .selectedItem .item:hover, .uiSideNav ul .selectedItem .subitem, .uiSideNav ul .selectedItem .subitem:hover {\n    background-color: #333333 !important;\n    color: #BABABA !important;\n}\n\n.uiSideNav .item:hover, .uiSideNav .item:active, .uiSideNav .item:focus, .uiSideNav .subitem:hover, .uiSideNav .subitem:active, .uiSideNav .subitem:focus {\n    background-color: #AAAAAA !important;\n    color: #2A2A2A !important;}\n\n.placePageStats {\n    color: #666666 !important;\n}\n\n.uiHeader h3, .uiHeader h4 {\n    color: #666666 !important;\n}\n\n#navSearch .uiTypeahead, #navSearch .uiTypeahead .wrap {\n    border-color: #666666 !important;\n}\n\n.pop_content h2.dialog_title {\n    background: -moz-linear-gradient(center top , #333333, #111111) repeat scroll 0 0 transparent !important;\n    border-color: #2A2A2A #2A2A2A -moz-use-text-color !important;\n    color: #BABABA !important;\n}\n\n.pop_content .dialog_content {\n    background: none repeat scroll 0 0 #DBEDF5 !important;\n}\n\n.uiLinkButton:hover, .uiLinkButton input:hover, .uiLinkButton input:focus, .uiLinkButton input:active {\n    color: #474747 !important;\n}\n\n.pop_content .dialog_content {\n    color: #474747 !important;\n}\n\n#video_info #video_metadata .video_title {\n    background: none repeat scroll 0 0 transparent !important;\n}\n\n#description {\n    color: #474747 !important;\n}\n\n.profile .blurb.owner .text_wrapper, .profile .blurb.owner .edit {\n    color: #474747 !important;\n}\n\n.profile .profile_color_bar {\n    background-color: #8EC1DA !important;\n    background-image: url(\"http://img52.imageshack.us/img52/1096/32021634.png\") !important;\n    background-position: 70px -41px !important;\n}";
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		var node = document.createElement("style");
		node.type = "text/css";
		node.appendChild(document.createTextNode(css));
		heads[0].appendChild(node); 
	}
}
})();