// ==UserScript==
// @name           BakaStyl
// @namespace      Wutter
// @include        */bakaweb/*
// XXinclude       */bakaweb/*
// ==/UserScript==
document.body.innerHTML= document.body.innerHTML.replace('images/nilogo.gif','data:image/png;base64,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');

function replaceStyleSheet(oldCSS, newCSS) {
    document.evaluate('//link[@rel="stylesheet" and @href="'+oldCSS+'"]', document, null, 
		      XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.href = newCSS;
}

 replaceStyleSheet("App_Themes/kancelarTheme/kancelarstyl.css", "http://hra.neserme.com/data/bakaproject/styl.css");