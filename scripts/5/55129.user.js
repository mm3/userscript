// ==UserScript==
// @name          jeremyollar
// @namespace      GLB
// @include        http://goallineblitz.com/game/forum*
// ==/UserScript==

function getElementsByClassName(classname, par){
   var a=[];
   var re = new RegExp('\\b' + classname + '\\b');
   var els = par.getElementsByTagName("*");
   for(var i=0,j=els.length; i<j; i++){
      if(re.test(els[i].className)){
         a.push(els[i]);
      }
   }
   return a;
};

function findName(test) {
    if (test.parentNode.parentNode.innerHTML.indexOf('href="/game/home.pl?user_id=221942"', 0)>=0) return 1;
  return 0;
}

var els = getElementsByClassName('post_content', document);
for(var i=0,j=els.length; i<j; i++) {
	if (findName(els[i])){
		els[i].innerHTML = 'If you do not change your name, I will change it for you, you sick son of a bitch.'
	}
}