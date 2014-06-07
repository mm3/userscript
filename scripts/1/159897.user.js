// ==UserScript==
// @name           ATS Smileys by Kr0nZ
// @description    Script for AboveTopSecret.com
// @namespace      http://userscripts.org/
// @version        1.2
// @include        http://*abovetopsecret.com/forum/post.php*
// Add any library dependencies here, so they are loaded before your script is loaded.
// @require        https://ajax.googleapis.com/ajax/libs/jquery/1.6.0/jquery.min.js
// ==/UserScript==

$(document).ready(function(){
    var curUrl = document.URL;
    var regUrl = curUrl.match(/http\:\/\/www.abovetopsecret.com\/forum\/post.php/);
    
    if (regUrl)
    {
        var newSmiles = [
            ['[img]http://files.abovetopsecret.com/images/smilies/ats2513_STFU.gif[/img]','http://files.abovetopsecret.com/images/smilies/ats2513_STFU.gif'],
            ['[img][/img]','http://files.abovetopsecret.com/images/smilies/ats2511_heyhowyadoin.gif'],
            ['[img][/img]','http://files.abovetopsecret.com/images/smilies/ats2510_hammertime.gif'],
            ['[img][/img]','http://files.abovetopsecret.com/images/smilies/ats2509_drunk.gif'],
            ['[img][/img]','http://files.abovetopsecret.com/images/smilies/ats2508_cheers.gif'],
            ['[img][/img]','http://files.abovetopsecret.com/images/smilies/ats2506_whisky.gif'],
            ['[img][/img]','http://files.abovetopsecret.com/images/smilies/ats2505_uzi.gif'],
            ['[img][/img]','http://files.abovetopsecret.com/images/smilies/ats2504_sshakehead.gif'],
            ['[img][/img]','http://files.abovetopsecret.com/images/smilies/ats2503_spam.gif'],
            ['[img][/img]','http://files.abovetopsecret.com/images/smilies/ats2502_sgomods.gif'],
            ['[img][/img]','http://files.abovetopsecret.com/images/smilies/ats2501_puke.gif'],
            ['[img][/img]','http://files.abovetopsecret.com/images/smilies/ats2500_new_shocked.gif'],
            ['[img][/img]','http://files.abovetopsecret.com/images/smilies/ats2499_monkey.gif'],
            ['[img][/img]','http://files.abovetopsecret.com/images/smilies/ats2498_livid.gif'],
            ['[img][/img]','http://files.abovetopsecret.com/images/smilies/ats2497_icon_clown.gif'],
            ['[img][/img]','http://files.abovetopsecret.com/images/smilies/ats2496_icon_banned.gif'],
            ['[img][/img]','http://files.abovetopsecret.com/images/smilies/ats2495_hail.gif'],
            ['[img][/img]','http://files.abovetopsecret.com/images/smilies/ats2494_flame.gif'],
            ['[img][/img]','http://files.abovetopsecret.com/images/smilies/ats2493_cussing.gif'],
            ['[img][/img]','http://files.abovetopsecret.com/images/smilies/ats2492_crybaby2.gif'],
            ['[img][/img]','http://files.abovetopsecret.com/images/smilies/ats2490_clowndance.gif'],
            ['[img][/img]','http://files.abovetopsecret.com/images/smilies/ats2488_breakdance.gif'],
            ['[img][/img]','http://files.abovetopsecret.com/images/smilies/ats2487_bash.gif'],
            ['[img][/img]','http://files.abovetopsecret.com/images/smilies/ats2486_banghead.gif'],
            ['[img][/img]','http://files.abovetopsecret.com/images/smilies/ats2485_banana.gif'],
            ['[img][/img]','http://files.abovetopsecret.com/images/smilies/ats2484_afroman.gif'],
            ['[img][/img]','http://files.abovetopsecret.com/images/smilies/ats2561_chairshot.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/a289bcfa0734.gif[/img]','http://files.abovetopsecret.com/images/member/a289bcfa0734.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/b2a540e4acd7.gif[/img]','http://files.abovetopsecret.com/images/member/b2a540e4acd7.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/97ae15015ba9.gif[/img]','http://files.abovetopsecret.com/images/member/97ae15015ba9.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/4513b79921bc.gif[/img]','http://files.abovetopsecret.com/images/member/4513b79921bc.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/e3ad2cc1a91f.gif[/img]','http://files.abovetopsecret.com/images/member/e3ad2cc1a91f.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/9f9a70539e94.gif[/img]','http://files.abovetopsecret.com/images/member/9f9a70539e94.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/c41e301daeb4.gif[/img]','http://files.abovetopsecret.com/images/member/c41e301daeb4.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/f37561fe604f.gif[/img]','http://files.abovetopsecret.com/images/member/f37561fe604f.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/45cc22b680c9.gif[/img]','http://files.abovetopsecret.com/images/member/45cc22b680c9.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/aa8184d71425.gif[/img]','http://files.abovetopsecret.com/images/member/aa8184d71425.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/b63d6dd39615.gif[/img]','http://files.abovetopsecret.com/images/member/b63d6dd39615.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/fec2b20f8d16.gif[/img]','http://files.abovetopsecret.com/images/member/fec2b20f8d16.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/afb2f22f6a8d.gif[/img]','http://files.abovetopsecret.com/images/member/afb2f22f6a8d.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/5af68e41a648.gif[/img]','http://files.abovetopsecret.com/images/member/5af68e41a648.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/0e6e18cf33b8.gif[/img]','http://files.abovetopsecret.com/images/member/0e6e18cf33b8.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/bfa573ac18c1.gif[/img]','http://files.abovetopsecret.com/images/member/bfa573ac18c1.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/c2bd68405146.gif[/img]','http://files.abovetopsecret.com/images/member/c2bd68405146.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/402125207125.gif[/img]','http://files.abovetopsecret.com/images/member/402125207125.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/2b3485aaab69.gif[/img]','http://files.abovetopsecret.com/images/member/2b3485aaab69.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/ca03043b7d74.gif[/img]','http://files.abovetopsecret.com/images/member/ca03043b7d74.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/fd60b1d73c6d.gif[/img]','http://files.abovetopsecret.com/images/member/fd60b1d73c6d.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/33b5895da87d.gif[/img]','http://files.abovetopsecret.com/images/member/33b5895da87d.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/6ae088c9c1ce.gif[/img]','http://files.abovetopsecret.com/images/member/6ae088c9c1ce.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/584f6b015255.gif[/img]','http://files.abovetopsecret.com/images/member/584f6b015255.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/8b20c917ee2b.gif[/img]','http://files.abovetopsecret.com/images/member/8b20c917ee2b.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/6b209fc9bd64.gif[/img]','http://files.abovetopsecret.com/images/member/6b209fc9bd64.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/86e75b6ee058.gif[/img]','http://files.abovetopsecret.com/images/member/86e75b6ee058.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/b2bedf164039.gif[/img]','http://files.abovetopsecret.com/images/member/b2bedf164039.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/e7171e9cb816.gif[/img]','http://files.abovetopsecret.com/images/member/e7171e9cb816.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/b5d4e8c68168.gif[/img]','http://files.abovetopsecret.com/images/member/b5d4e8c68168.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/d42c2b8088a6.gif[/img]','http://files.abovetopsecret.com/images/member/d42c2b8088a6.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/a9e533a80df0.gif[/img]','http://files.abovetopsecret.com/images/member/a9e533a80df0.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/ba5bcbd16b68.gif[/img]','http://files.abovetopsecret.com/images/member/ba5bcbd16b68.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/5a512f89c2dd.gif[/img]','http://files.abovetopsecret.com/images/member/5a512f89c2dd.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/44072d658457.gif[/img]','http://files.abovetopsecret.com/images/member/44072d658457.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/35a6400e44c4.gif[/img]','http://files.abovetopsecret.com/images/member/35a6400e44c4.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/09b93faf39de.gif[/img]','http://files.abovetopsecret.com/images/member/09b93faf39de.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/eed4a1706bb7.gif[/img]','http://files.abovetopsecret.com/images/member/eed4a1706bb7.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/2b88c79ee763.gif[/img]','http://files.abovetopsecret.com/images/member/2b88c79ee763.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/45ba5d925df2.gif[/img]','http://files.abovetopsecret.com/images/member/45ba5d925df2.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/020da7e99a9f.gif[/img]','http://files.abovetopsecret.com/images/member/020da7e99a9f.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/3a53e0b8d905.gif[/img]','http://files.abovetopsecret.com/images/member/3a53e0b8d905.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/10aa8988b4db.gif[/img]','http://files.abovetopsecret.com/images/member/10aa8988b4db.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/214458cb2936.gif[/img]','http://files.abovetopsecret.com/images/member/214458cb2936.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/231d66a0f5cb.gif[/img]','http://files.abovetopsecret.com/images/member/231d66a0f5cb.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/5dcdbfe37c14.gif[/img]','http://files.abovetopsecret.com/images/member/5dcdbfe37c14.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/34cd2316e106.gif[/img]','http://files.abovetopsecret.com/images/member/34cd2316e106.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/f4e89c880313.gif[/img]','http://files.abovetopsecret.com/images/member/f4e89c880313.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/912539ca14f1.gif[/img]','http://files.abovetopsecret.com/images/member/912539ca14f1.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/7d325d84c04e.gif[/img]','http://files.abovetopsecret.com/images/member/7d325d84c04e.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/516bdf6f6a65.gif[/img]','http://files.abovetopsecret.com/images/member/516bdf6f6a65.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/59d8a0a45114.gif[/img]','http://files.abovetopsecret.com/images/member/59d8a0a45114.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/f5bbf4b1d2cd.gif[/img]','http://files.abovetopsecret.com/images/member/f5bbf4b1d2cd.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/c71c5366b000.gif[/img]','http://files.abovetopsecret.com/images/member/c71c5366b000.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/765e124744e2.gif[/img]','http://files.abovetopsecret.com/images/member/765e124744e2.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/571cd3fe29e3.gif[/img]','http://files.abovetopsecret.com/images/member/571cd3fe29e3.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/c9d3dd98fdfd.gif[/img]','http://files.abovetopsecret.com/images/member/c9d3dd98fdfd.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/a30c1b953df0.gif[/img]','http://files.abovetopsecret.com/images/member/a30c1b953df0.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/b757bf0e4f67.gif[/img]','http://files.abovetopsecret.com/images/member/b757bf0e4f67.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/3b1362227119.gif[/img]','http://files.abovetopsecret.com/images/member/3b1362227119.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/c1a49a101ab5.gif[/img]','http://files.abovetopsecret.com/images/member/c1a49a101ab5.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/a8ecb941f491.gif[/img]','http://files.abovetopsecret.com/images/member/a8ecb941f491.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/b8f18bdd3269.gif[/img]','http://files.abovetopsecret.com/images/member/b8f18bdd3269.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/3ce22eaac814.gif[/img]','http://files.abovetopsecret.com/images/member/3ce22eaac814.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/fe2800829cbb.gif[/img]','http://files.abovetopsecret.com/images/member/fe2800829cbb.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/d5f1e9e880e2.jpg[/img]','http://files.abovetopsecret.com/images/member/d5f1e9e880e2.jpg'],
            ['[img]http://files.abovetopsecret.com/images/member/8f9e57e278a7.gif[/img]','http://files.abovetopsecret.com/images/member/8f9e57e278a7.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/cab9301739f5.gif[/img]','http://files.abovetopsecret.com/images/member/cab9301739f5.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/741783e9d2fa.gif[/img]','http://files.abovetopsecret.com/images/member/741783e9d2fa.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/4b764469c172.gif[/img]','http://files.abovetopsecret.com/images/member/4b764469c172.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/14216b1b3175.gif[/img]','http://files.abovetopsecret.com/images/member/14216b1b3175.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/058cf3c2f4ad.gif[/img]','http://files.abovetopsecret.com/images/member/058cf3c2f4ad.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/7d896bf91f76.gif[/img]','http://files.abovetopsecret.com/images/member/7d896bf91f76.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/9335cf86d4b8.gif[/img]','http://files.abovetopsecret.com/images/member/9335cf86d4b8.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/f3ff32096f83.gif[/img]','http://files.abovetopsecret.com/images/member/f3ff32096f83.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/e8f2ddea378d.gif[/img]','http://files.abovetopsecret.com/images/member/e8f2ddea378d.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/9a524193ac9e.gif[/img]','http://files.abovetopsecret.com/images/member/9a524193ac9e.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/d0372749e9e6.gif[/img]','http://files.abovetopsecret.com/images/member/d0372749e9e6.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/3cda06fc1177.gif[/img]','http://files.abovetopsecret.com/images/member/3cda06fc1177.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/331dd2f81ea8.gif[/img]','http://files.abovetopsecret.com/images/member/331dd2f81ea8.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/067dcb35a06b.gif[/img]','http://files.abovetopsecret.com/images/member/067dcb35a06b.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/20e3368dbd13.gif[/img]','http://files.abovetopsecret.com/images/member/20e3368dbd13.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/bc01112f0674.gif[/img]','http://files.abovetopsecret.com/images/member/bc01112f0674.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/9ce520f66226.gif[/img]','http://files.abovetopsecret.com/images/member/9ce520f66226.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/8f62c81e2daa.gif[/img]','http://files.abovetopsecret.com/images/member/8f62c81e2daa.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/60608f475375.gif[/img]','http://files.abovetopsecret.com/images/member/60608f475375.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/1e3cb3cd9143.gif[/img]','http://files.abovetopsecret.com/images/member/1e3cb3cd9143.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/b34826033149.gif[/img]','http://files.abovetopsecret.com/images/member/b34826033149.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/c97ba1d17424.gif[/img]','http://files.abovetopsecret.com/images/member/c97ba1d17424.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/39f24ad6759c.gif[/img]','http://files.abovetopsecret.com/images/member/39f24ad6759c.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/3b237d2c49cd.gif[/img]','http://files.abovetopsecret.com/images/member/3b237d2c49cd.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/9e3ba6e49f5f.gif[/img]','http://files.abovetopsecret.com/images/member/9e3ba6e49f5f.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/056ffbebd970.gif[/img]','http://files.abovetopsecret.com/images/member/056ffbebd970.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/4043ec3447c4.gif[/img]','http://files.abovetopsecret.com/images/member/4043ec3447c4.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/bd38e0e670fe.gif[/img]','http://files.abovetopsecret.com/images/member/bd38e0e670fe.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/b2bce957cb45.gif[/img]','http://files.abovetopsecret.com/images/member/b2bce957cb45.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/01a4a30f1987.gif[/img]','http://files.abovetopsecret.com/images/member/01a4a30f1987.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/aed938aef933.gif[/img]','http://files.abovetopsecret.com/images/member/aed938aef933.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/3a5bed12e940.gif[/img]','http://files.abovetopsecret.com/images/member/3a5bed12e940.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/f2f4d42622c6.gif[/img]','http://files.abovetopsecret.com/images/member/f2f4d42622c6.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/610c83ef62ab.gif[/img]','http://files.abovetopsecret.com/images/member/610c83ef62ab.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/fcccdd269050.gif[/img]','http://files.abovetopsecret.com/images/member/fcccdd269050.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/819968b2072c.gif[/img]','http://files.abovetopsecret.com/images/member/819968b2072c.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/5666611dd36b.gif[/img]','http://files.abovetopsecret.com/images/member/5666611dd36b.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/dde3a658c63b.gif[/img]','http://files.abovetopsecret.com/images/member/dde3a658c63b.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/fbb5382ca562.gif[/img]','http://files.abovetopsecret.com/images/member/fbb5382ca562.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/f93f28df493c.gif[/img]','http://files.abovetopsecret.com/images/member/f93f28df493c.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/c2cdb98d4da3.gif[/img]','http://files.abovetopsecret.com/images/member/c2cdb98d4da3.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/09a15844127d.gif[/img]','http://files.abovetopsecret.com/images/member/09a15844127d.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/8d16d4701082.gif[/img]','http://files.abovetopsecret.com/images/member/8d16d4701082.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/737d18217c1a.gif[/img]','http://files.abovetopsecret.com/images/member/737d18217c1a.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/948d5b396c1e.gif[/img]','http://files.abovetopsecret.com/images/member/948d5b396c1e.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/6394dd5acc8a.gif[/img]','http://files.abovetopsecret.com/images/member/6394dd5acc8a.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/f340226daf76.gif[/img]','http://files.abovetopsecret.com/images/member/f340226daf76.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/efa76736a6df.gif[/img]','http://files.abovetopsecret.com/images/member/efa76736a6df.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/cace2f40d6a8.gif[/img]','http://files.abovetopsecret.com/images/member/cace2f40d6a8.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/092dba1533c1.gif[/img]','http://files.abovetopsecret.com/images/member/092dba1533c1.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/a0b6072a6510.gif[/img]','http://files.abovetopsecret.com/images/member/a0b6072a6510.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/b9034f2f39b8.gif[/img]','http://files.abovetopsecret.com/images/member/b9034f2f39b8.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/430a0486a2b8.gif[/img]','http://files.abovetopsecret.com/images/member/430a0486a2b8.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/8b9316169eaf.gif[/img]','http://files.abovetopsecret.com/images/member/8b9316169eaf.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/7474a7c47c62.gif[/img]','http://files.abovetopsecret.com/images/member/7474a7c47c62.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/01d4c0170206.gif[/img]','http://files.abovetopsecret.com/images/member/01d4c0170206.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/aff1ecd9e3ea.gif[/img]','http://files.abovetopsecret.com/images/member/aff1ecd9e3ea.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/627e50ac6244.gif[/img]','http://files.abovetopsecret.com/images/member/627e50ac6244.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/96c049be67de.gif[/img]','http://files.abovetopsecret.com/images/member/96c049be67de.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/a025c38efc70.gif[/img]','http://files.abovetopsecret.com/images/member/a025c38efc70.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/7b91691aba4f.gif[/img]','http://files.abovetopsecret.com/images/member/7b91691aba4f.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/21e80f950cb3.gif[/img]','http://files.abovetopsecret.com/images/member/21e80f950cb3.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/8e0be9a8b361.gif[/img]','http://files.abovetopsecret.com/images/member/8e0be9a8b361.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/bc52e92942b7.gif[/img]','http://files.abovetopsecret.com/images/member/bc52e92942b7.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/74f6f1a9558c.gif[/img]','http://files.abovetopsecret.com/images/member/74f6f1a9558c.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/e15a883d1d94.gif[/img]','http://files.abovetopsecret.com/images/member/e15a883d1d94.gif'],
            ['[img]http://files.abovetopsecret.com/files/img/of4ebb2b05.gif[/img]','http://files.abovetopsecret.com/files/img/of4ebb2b05.gif'],
            ['[img]http://files.abovetopsecret.com/files/img/pw4eefa0ff.gif[/img]','http://files.abovetopsecret.com/files/img/pw4eefa0ff.gif'],
            ['[img]http://files.abovetopsecret.com/files/img/tw4eefa106.gif[/img]','http://files.abovetopsecret.com/files/img/tw4eefa106.gif'],
            ['[img]http://files.abovetopsecret.com/files/img/gc4eefa10e.gif[/img]','http://files.abovetopsecret.com/files/img/gc4eefa10e.gif'],
            ['[img]http://files.abovetopsecret.com/files/img/np4eefa117.gif[/img]','http://files.abovetopsecret.com/files/img/np4eefa117.gif'],
            ['[img]http://files.abovetopsecret.com/files/img/nq4eefa135.gif[/img]','http://files.abovetopsecret.com/files/img/nq4eefa135.gif'],
            ['[img]http://files.abovetopsecret.com/files/img/ru4eefa13f.gif[/img]','http://files.abovetopsecret.com/files/img/ru4eefa13f.gif'],
            ['[img]http://files.abovetopsecret.com/files/img/on4eefa120.gif[/img]','http://files.abovetopsecret.com/files/img/on4eefa120.gif'],
            ['[img]http://files.abovetopsecret.com/images/member/125dfd815577.gif[/img]','http://files.abovetopsecret.com/images/member/125dfd815577.gif'],
            ['[img]http://files.abovetopsecret.com/files/img/yt4eefe4b8.gif[/img]','http://files.abovetopsecret.com/files/img/yt4eefe4b8.gif'],
            [':uzi:','http://files.abovetopsecret.com/images/smilies/ats2505_uzi.gif'],
            [':pbjtime:','http://files.abovetopsecret.com/images/smilies/ats2485_banana.gif']
        ];
        var smiles = $('div [id="postsmilerow"]');
        for (i=0;i<newSmiles.length;i++)
  		{
            $(smiles).append('<a href="javascript:icon(\'[img]'+newSmiles[i][1]+'[/img]\')"><img src="'+newSmiles[i][1]+'" border="0"></a>');
        }
        $(smiles).css({'height':'350px', 'overflow':'scroll'});
        console.log($(smiles).offset().top + $(smiles).height())
        
        //$(smiles).remove();
        //$('div [id="postformrow"]').append(smiles);
        //$(smiles).css({'width':'850px'});
        
        
        
    }
    
});