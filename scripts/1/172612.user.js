// ==UserScript==
// @include       http://flickr.com/*
// ==/UserScript==

(function() {
	
// remove the new body class for the eyebrow header to remove new tall top margin
document.getElementsByTagName("body")[0].className =
   document.getElementsByTagName("body")[0].className.replace
      ( /(?:^|\s)with-eyebrow(?!\S)/g , '' );

// remove the eyebrow header content itself
if (document.getElementById('eyebrow')) {
var ebElem = document.getElementById('eyebrow');
ebElem.parentNode.removeChild(ebElem);
} 
    
}
  
      

