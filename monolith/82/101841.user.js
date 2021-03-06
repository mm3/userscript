// ==UserScript==
// @name          Inline Flash Player
// @author        Original--Adam Pash. Updated--Davey Jacobson.
// @description	  THIS IS AN UPDATED COPY OF THE ORIGINAL THAT I FOUND BACK IN '06!
// @namespace     http://about.me/daveyjacobson
// @include       *
// ==/UserScript==

(function() {

	var page_links = document.links;
	for (var i=0; i<page_links.length; i++){
		if (page_links[i].href.match(/\.mp3$/i)) {
			var span = document.createElement("span");
			var toggle = document.createElement("a");
			toggle.title = "togPlay" + i;
			toggle.innerHTML = " [Play]";
			toggle.style.cursor = "pointer";
			toggle.style.border = "none";
			var mp3_url = page_links[i].href;
			var width = 511
			var height = 25
			embed_code = '<embed type="application/x-shockwave-flash" src="http://img404.imageshack.us/img404/7740/audiouq4.swf?audioUrl='+mp3_url+'&autoPlay=true" width="300" height="27" allowscriptaccess="never" quality="best" bgcolor="#ffffff" wmode="window" flashvars="playerMode=embedded" />'
			span.innerHTML = "<br />"
			span.innerHTML += embed_code;
			span.style.display = "none";
			span.id = "togPlay" + i;
//			toggle.innerHTML = span;
			toggle.addEventListener("click", togglePlayer, true);
			page_links[i].parentNode.insertBefore(span, page_links[i].nextSibling)
			page_links[i].parentNode.insertBefore(toggle, page_links[i].nextSibling)
		}
	}

	function togglePlayer(event) {
		player = document.getElementById(this.title);
		if (player.style.display == "none") {
			player.style.display = "inline";
			this.innerHTML = " [Hide Player]";
		}
		else {
			player.style.display = "none";
			this.innerHTML = " [Play]";			
		}
	}

})();