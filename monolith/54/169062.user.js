// ==UserScript==
// @name			Ordenes de VALHALLA
// @version			1.2.3
// @author			Alain Echeverri
// @namespace		echile_VALHALLA
// @description		Plugin para visualizar las Ordenes de Batalla de VALHALLA.
// @require			https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require        	http://malsup.github.com/jquery.blockUI.js
// @require			http://hosting-files.googlecode.com/files/jquery.tipsy.js
// @require			http://jquery-json.googlecode.com/files/jquery.json-2.2.min.js
// @require http://update.sizzlemctwizzle.com/169062.js
// @require http://buzzy.260mb.com/AutoUpdater.js
// @include			http://*.erepublik.com/*
// @source http://userscripts.org/scripts/show/169062
// @updateURL		http://userscripts.org/scripts/source/169062.meta.js
// @downloadURL		http://userscripts.org/scripts/source/169062.user.js
// ==/UserScript==
function LL_carga() {
	//jQuery is already defined by eRep, waits for it to load
	if (typeof unsafeWindow.jQuery == 'undefined') {
		window.setTimeout(LL_waiting, 100);
	}
	else {
		if(document.getElementById('homepage_feed') != null) {
            var _paso = $;
            $ = unsafeWindow.jQuery;
            header();
            battles();
            link();
            message();
            message2();
            $ = _paso;
		}
    }    
}
function header() {
    //$('head').append('<style type="text/css"></style>');
    //var orders = '<h4>Ordenes de VALHALLA (Beta v1.1)</h4><div id="mod_orders"></div>';
    $('head').append('<style type="text/css">#battle_listing .prio_ma em{color:#aa8f48}#battle_listing .prio_ma li{border-color:#ffdc5d;background-color:#fff0c0}#battle_listing .prio_ma li .tank_img{background-position:left -14px}#battle_listing .prio_ma li a.county{background-position:left top}#battle_listing .prio_ma li a.county span{background-color:#f5df99;color:#8a560c}#battle_listing .prio_ma li a.county:hover{background-position:left top !important}#battle_listing .prio_ma li a{background-position:left -102px}#battle_listing .prio_ma li a span{background-position:right -102px;text-shadow:#a63301 0px -1px 0px}#battle_listing .prio_ma li a:hover{background-position:left -136px}#battle_listing .prio_ma li a:hover span{background-position:right -136px}#battle_listing .prio_ma li a:active{background-position:left -170px}#battle_listing .prio_ma li a:active span{color:#f49e9e;background-position:right -170px}#battle_listing .prio_ma strong{color:#8a560c}#battle_listing .prio_ma small{color:#b16a00}</style>');
    $('head').append('<style type="text/css">#battle_listing .prio_al em{color: #aa8f48;}#battle_listing .prio_al li{border-color: #ffdc5d;background-color: #fff0c0;}#battle_listing .prio_al li .tank_img{background-position: left -14px;}#battle_listing .prio_al li a.county{background-position:left top;}#battle_listing .prio_al li a.county span{background-color:#f5df99;color:#8a560c;}#battle_listing .prio_al li a.county:hover{background-position: left top !important;}#battle_listing .prio_al li a{background-position:left -102px;}#battle_listing .prio_al li a span{background-position: right -102px;text-shadow:#a63301 0px -1px 0px;}#battle_listing .prio_al li a:hover{background-position:left -136px;}#battle_listing .prio_al li a:hover span{background-position:right -136px;}#battle_listing .prio_al li a:active{background-position:left -170px;}#battle_listing .prio_al li a:active span{color:#f49e9e;background-position:right -170px;}#battle_listing .prio_al strong{color:#8a560c;}#battle_listing .prio_al small{color:#b16a00;}</style>');
    $('head').append('<style type="text/css">#battle_listing .prio_me em{color: #AEA944;}#battle_listing .prio_me li{border-color: #FEFA5F;background-color: #FFFEBF;}#battle_listing .prio_me li .tank_img{background-position: left -14px;}#battle_listing .prio_me li a.county{background-position: left top;}#battle_listing .prio_me li a.county span{background-color: #f5df99;color: #8a560c;}#battle_listing .prio_me li a.county:hover{background-position: left top !important;}#battle_listing .prio_me li a{background-position: left -102px;}#battle_listing .prio_me li a span{background-position: right -102px;text-shadow: #a63301 0px -1px 0px;}#battle_listing .prio_me li a:hover{background-position: left -136px;}#battle_listing .prio_me li a:hover span{background-position: right -136px;}#battle_listing .prio_me li a:active{background-position: left -170px;}#battle_listing .prio_me li a:active span{color: #f49e9e;background-position: right -170px;}#battle_listing .prio_me strong{color: #8a560c;}#battle_listing .prio_me small{color: #b16a00;}</style>');
    $('head').append('<script type="text/javascript" src="/js/jquery.tipsy.1334921039.js"></script>');
    var imageHeader = 'http://i.imgur.com/XRXtB4n.jpg';
    var orders = '<div id="mod_orders"><img src="'+ imageHeader + '" style="float: none; margin-top:-5px; margin-bottom:-2px" alt="Prioridades de Combate - MoD eChile (v1.1.95)"/></div>';
    $('#battle_listing').prepend(orders);
}

function link() {
	var x = division();
	var linkDiv = '';
    switch(x) {
        case 1: linkDiv = 'http://tinyurl.com/chat-valhalla'; break;
    case 2: linkDiv = 'http://tinyurl.com/chat-valhalla'; break;
    case 3: linkDiv = 'http://tinyurl.com/chat-valhalla'; break;
    case 4: linkDiv = 'http://tinyurl.com/chat-valhalla'; break;
    default: linkDiv = 'XX';
    }    
    var orders = '<div class="rest"><a href="http://goo.gl/s7rgi" title="" target="_blank">Ordenes VALHALLA</a><a href="' + linkDiv + '" title="" target="_blank">Canal VALHALLA</a></div>';
    $(orders).insertAfter('#mod_orders');

}


function division() {
    var div = $('#large_sidebar div.user_level').text();
    var x=-1;
    if (div > 36) { x=4;}
    else if (div > 29) { x=3; }
    else if (div > 24) { x=2; }
    else if (div > 0) { x=1; }
	else x=0;
    return x;
}
function nameprio(i) {
    var x = 'YY';
    switch(i) {
    case 1: x = 'ma'; break;
    case 2: x = 'al'; break;
    case 3: x = 'me'; break;
    case 4: x = 'ba'; break;
    case 5: x = 'se'; break;
    case 6: x = 'pe'; break;
    case 7: x = 'no'; break;
    default: x = 'XX';
    }    
	return x;
}
function nameprio2(i) {
    var x = 'YY';
    switch(i) {
    case 1: x = 'MAXIMA'; break;
    case 2: x = 'ALTA'; break;
    case 3: x = 'MEDIA'; break;
    case 4: x = 'BAJA'; break;
    case 5: x = 'SEGURA'; break;
    case 6: x = 'PERDIDA'; break;
    case 7: x = 'NO LUCHAR'; break;
    default: x = 'XX';
    }    
	return x;
}
function infoprio(i) {
    var x = 'prioridad ' + i + ' no seteada';
    switch(i) {
        case 1: x = 'MAXIMA: Campaña prioritaria y/o muy complicada de cerrar. Se requiere que el porcentaje de dominio (barra), en todas las batallas, este entre 52% y 55% para asegurar su victoría.'; break;
        case 2: x = 'ALTA: Campaña complicada de cerrar. Se requiere que el porcentaje de dominio (barra), en todas las batallas, este entre 52% y 55% para asegurar su victoría.'; break;
        case 3: x = 'MEDIA: Campaña de mediana prioridad. Se requiere que el porcentaje de dominio (barra), en todas las batallas, este entre 51% y 53% para asegurar su victoría.'; break;
        case 4: x = 'BAJA: Campaña avanzada en puntaje a favor o se requiere un minimo de daño para su victoría. Vigilar y combatir SOLO si las prioridades mayores están muy controladas (barras de las otras batallas sobre 52%).'; break;
        case 5: x = 'SEGURA: Campaña muy avanza en puntaje a favor. IMPORTANTE: muchas veces se necesita NO luchar para demorar el cierre de la camapaña, por asuntos estrategicos. NO luches en esta campaña. Otra(s) División(es) tiene(n) la misión cerrarla.'; break;
        case 6: x = 'PERDIDA: A pesar de todo el esfuerzo y lucha de nuestras tropas y aliados no es posible ganar esta campaña. NO luches en esta campaña, la perdimos.'; break;
        case 7: x = 'NO LUCHAR: Se necesita perder la campaña por asuntos estrategícos. NO luches en esta campaña, debemos perderla.'; break;
    default: x = 'prioridad ' + i + ' no definida en el complemento';
    }    
	return x;
}
function battles() {
	var x = division();
    $.get('https://docs.google.com/document/d/1awaDpvBOXcmbfCCuOsPeKWn7S471pDO089p5zG_KmO0/preview?pli=1', function(data) {
		//alert('Prioridades Cargadas.');
        var prios = data.substring(data.indexOf('╠')+1, data.indexOf('╣')).split('|');
        //alert(prios[x]);
        var battles = prios[x].split(';');
        for (var i = 1; i < battles.length; i++) {
            if (battles[i] != "" && battles[i].length > 0) {
            	//alert(i + ":" + battles[i]);
            	//$(bats[i]).find('a.county').replaceWith("<strong>"+$(bats[i]).find('a.county span').text()+"</strong>");
				var ico = '<img id="info_' + nameprio(i) + '" original-title="' + infoprio(i) + '" src="http://www.erepublik.com/images/modules/_icons/small_info_icon.png" style="position:relative;bottom: 5px;right: -5px;" alt="">';
                var _htmlBattles = '<h4>Prioridad : ' + nameprio2(i) + '</h4>' + ico + '<ul id="prio_' + nameprio(i) + '" class="prio_' + nameprio(i) + '"></ul>';
            	$('#mod_orders').append(_htmlBattles);
                $('#info_' + nameprio(i)).tipsy({gravity: $.fn.tipsy.autoNS});

            	battle('#prio_' + nameprio(i), battles[i]);
            }
        }
    });
}
function battle(prio, battles) {
    $(prio).load("/en/military/campaigns {"+battles.substring(0,battles.length - 1)+"}", function(response, status, xhr) {
        if (status == "success") {
            $(prio).find('strong').remove(); 
            $(prio).find('div.tank_img').replaceWith('<small>vs</small>');
            $(prio).find('div.tank_img').replaceWith('<small>vs</small>');
            //$(prio).find('li').css("style",_sr1);
            //$(prio).find('li a.county').replaceWith($(prio).find('li a.county  span'));
			var bats = battles.split(',');
            for (var i = 0; i < bats.length; i++) {
                //alert(bats[i]);
                $(bats[i]).find('a.county').replaceWith("<strong>"+$(bats[i]).find('a.county span').text()+"</strong>");
            }
        }
    });
}

function message() {
    var imageHeader = 'http://i.imgur.com/XRXtB4n.jpg';
    var order = '<h4 class="rest" style="text-align: center;"> <span style="color: #000000;">ATENCION A TODOS LOS VALHALLAS, actualizacion automatica? </span></h4>';
    $(order).insertAfter('#rw_pop');
    
}

function message2() {
    var order = '<h1 class="rest" style="text-align: center; margin-left:100px"> <span style="color: #8a232f;">MENSAJE VALHALLA</span></h1>';
    $(order).insertAfter('#rw_pop');
    
}
LL_carga();