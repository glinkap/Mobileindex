$(document).ready(function () {
		more993 = ($(document).width() >= 975);
		less992 = ($(document).width() <= 974);		
	var globalscrollPos;


	
// Гамбургенр открытие меню
	
	$(".mi-button").click(function () {			
		$("#dispblock").slideToggle();	
//		$('body').attr('style', "backdrop-filter: grayscale(1) contrast(3) blur(1px);");
	});	
// --------------------- Resize Event -------------------------
	$(window).resize(function(){
		more993 = ($(document).width() >= 975);	
		less992 = ($(document).width() <= 974);	
		menuCleans();

	});

	function desktopSt() {
	// Открытие DROPDOWN на десктопе			
	$(".mi-dropdown").click(function () {	
		if (more993) {
//		$('.mi-dropdown-toggle').removeClass('mi-active-element');  //удаление залипашки
		$('.mi-dropdown-toggle',this).toggleClass('mi-active-element'); // залипашка
		$('.mi-dropdown-menu').not($(this).children('.mi-dropdown-menu')).removeClass('mi-open'); //закрытие всех кроме текущей
		$(this).children('.mi-dropdown-menu').toggleClass('mi-open'); //тоггл для планшета
			$('.mi-dropdown-menu').mouseleave(function(){    //мышка покидает ul 
			$('.mi-dropdown-menu').removeClass('mi-open');   // закрыти ul
			$('.mi-dropdown-toggle').removeClass('mi-active-element'); //удаление залипашки
			});
		$('#dispblock').children('li').mouseover(function(){ 
		$('.mi-dropdown-menu').not($(this).children('.mi-dropdown-menu')).removeClass('mi-open');
		$('.mi-dropdown-toggle').not($(this).children('.mi-dropdown-toggle')).removeClass('mi-active-element');	
		});			
		}
	});
				//для планшета  ЗАКРЫТИЕ ВНЕ ОБЛАСТИ меню		
		$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $("#dispblock"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			$('.mi-dropdown-toggle').removeClass('mi-active-element');  //удаление залипашки
			$('.mi-dropdown-menu').removeClass('mi-open');
		}
	});		
}
	function mobileSt() {
		// Открытие SLIDE
		$(".mi-dropdown").click(function () {
			if (less992) {
			$('.mi-dropdown-menu').not($(this).children('.mi-dropdown-menu')).slideUp();
			$(this).children('.mi-dropdown-menu').slideToggle();
			}
		});
		
		$(document).mouseup(function (e){ // событие клика по веб-документу
			if (less992)	{		
		var div = $("#dispblock"); // тут указываем ID элемента
		var checkbox = $('.checkbox-toggle');
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0
			&& (!checkbox.is(e.target))){ // и не по его дочерним элементам
			$('.mi-dropdown-menu').slideUp();
			$("#dispblock").slideUp();
			checkbox[0].checked = false;
		}
		}
	});
	}
	function menuCleans(){		
		//desktop cleans		
		//mobile cleans
		$('.mi-dropdown-menu').slideUp();
		$("#dispblock").stop(true);
		//события нав бара
		if (less992) {
		$('.mi-logo').css({"width":"100px"});
		$('#mi-menu-box').css("margin-top","25px");
		$('.mbr-navbar-fixed').css('background-color','transparent');
		}
		if (more993 && globalscrollPos >= 50) {

		$('.mi-logo').css({"width":"70px"});
		$('#mi-menu-box').css("margin-top","0px");
		// Покраска ШИРОКОГО МЕНЮ десктоп
		$('.mbr-navbar-fixed').css('background-color','rgba(20, 20, 20, 0.75)');	
		}		
	}	
// --------------------- Scroll Event -------------------------

			$(window).scroll(function(){
			var scrollPos = $(window).scrollTop();
			globalscrollPos = scrollPos;	
if (more993){	

if (scrollPos >= 50) {		
	//  МЕНЮ Уменьшение лого и удаление ТОП марджин десктоп
//	$('.mi-logo').css({"width":"70px"});
	$('.mi-logo svg').attr("width","70");
	$('#mi-menu-box').css("margin-top","0px");
	// Покраска ШИРОКОГО МЕНЮ десктоп
	$('.mbr-navbar-fixed').css('background-color','rgba(20, 20, 20, 0.75)');

} else {
//	$('.mi-logo').css({"width":"100px"});
	$('.mi-logo svg').attr("width","100");
	$('#mi-menu-box').attr('style','margin-top:25px !important;');
	$('.mbr-navbar-fixed').css('background-color','transparent');
	}
};
if (less992) {
	// Нав бар липнет к топ
	if (scrollPos >= 200) {
		$('.mi-menu').addClass('mi-menu-narrow'); $('.mi-logo svg').attr("width","80px"); } else 
		{ $('.mi-menu').removeClass('mi-menu-narrow'); $('.mi-logo svg').attr("width","100px");	
		};
}
});

	

desktopSt();
mobileSt();
	
	
	
	
	
	
//РУССКИЕ ПЕРЕНОСЫ
	
function is_hyphens ()
{
	function get_height (eItem)
	{
		var rect = eItem.getBoundingClientRect();
		return rect ? (rect.bottom - rect.top) : eItem.offsetHeight;
	}

	var eHyphens = document.createElement('DIV'),
		eNoHyphens = document.createElement('DIV');

	document.body.appendChild(eHyphens);
	document.body.appendChild(eNoHyphens);

	eHyphens.innerHTML = eNoHyphens.innerHTML = 'синхрофазотрон';
	// 1em не работало в Safari, а 2em на iPad
	eHyphens.style.width = eNoHyphens.style.width = '3em';
	eHyphens.className = 'hyphens';

	var result = parseInt(get_height(eHyphens) - get_height(eNoHyphens)) > 0;

	document.body.removeChild(eHyphens);
	document.body.removeChild(eNoHyphens);

	return result;
}

window.onload = function ()
{
	if (is_hyphens())
		document.body.className = 'is_hyphens';
}
	
//------------/РУССКИЕ ПЕРЕНОСЫ
	





//SEC 5 MOBILE <>




	
	
//sec5 2х ссылочные кнопки
$('.googlesearch-btn a, .yandexsearch-btn a').hover(function(){		
$(this).parent().children('a').toggleClass("mi-sec5-link-hover");
});
	

	


	
	
	
	
	/*------------------------- MODAL --------------------*/

	
		//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../php/mail.php", //Change
			data: th.serialize()
		}).done(function() {			
			 modal.css('display', 'none').animate({opacity: 0, top: '45%'}, 200); // modal1 прячем					  
                
			setTimeout(function() {
				//сюда спасибы
				spasibo.css('display', 'block').animate({opacity: 1, top: '50%'}, 400);// spasibo показываем
				th.trigger("reset");
				okbtn.click( function(){
				spasibo.css('display', 'none').animate({opacity: 0, top: '45%'}, 200);// spasibo прячем
				overlay.fadeOut(400);	
				});
				
			}, 1000);	
		});
		return false;
	});		
	
    var overlay = $('#overlay'); // пoдлoжкa, дoлжнa быть oднa нa стрaнице
    var open_modal = $('.open_modal'); // все ссылки, кoтoрые будут oткрывaть oкнa
    var close = $('.modal_close, #overlay');// все, чтo зaкрывaет мoдaльнoе oкнo, т.е. крестик и oверлэй-пoдлoжкa
    var modal = $('.modal_div'); // все скрытые мoдaльные oкнa
	var spasibo = $('#spasibo');
	var okbtn = $('.okbtn');
	var youtubemodal = $('youtubemodal'); 

     open_modal.click( function(event){ // лoвим клик пo ссылке с клaссoм open_modal
         event.preventDefault(); // вырубaем стaндaртнoе пoведение
         var div = $(this).attr('data-target'); // вoзьмем стрoку с селектoрoм у кликнутoй ссылки
		 overlay.fadeIn(400, //пoкaзывaем oверлэй
             function(){ // пoсле oкoнчaния пoкaзывaния oверлэя
                 $(div) // берем стрoку с селектoрoм и делaем из нее jquery oбъект
                     .css('display', 'block') 
                     .animate({opacity: 1}, 200); // плaвнo пoкaзывaем
         });
     });

     close.click( function(){ // лoвим клик пo крестику или oверлэю
//		 $(window).unbind('scroll');
            modal // все мoдaльные oкнa
             .animate({opacity: 0}, 200, // плaвнo прячем
                 function(){ // пoсле этoгo
                     $(this).css('display', 'none');
                     overlay.fadeOut(400); // прячем пoдлoжку
                 }
             );
     });
	
	
//function OffScroll() {
//	var winScrollTop = $(window).scrollTop();
//	$(window).bind('scroll', function () {
//		$(window).scrollTop(winScrollTop);
//	});
//}

	
	
	
	
	/*------------------------- /MODAL --------------------*/




	//------- ЛОГ ХЕЛПЕР ----------
	var consolelog = {};
	function log (zpush,zvar){
		consolelog[zpush] = zvar;
		$('.mi-status').clone();
		$('.mi-status').html("");
		for (var i in consolelog) {
		$('.mi-status').append(i+": "+consolelog[i]+'<br>');}	}

// ФУТЕР расширялка столбцов	
var footerexpand = $("#footerexpand");
	function ffooterexpand (){
	var docw = $(document).width();
	if ( docw >= 749 && docw <= 1020 ) {
footerexpand.removeClass("col-sm-6");
footerexpand.addClass("col-sm-9");
	} else {
footerexpand.removeClass("col-sm-9");
footerexpand.addClass("col-sm-6");		
	}
};
	ffooterexpand();
$(window).resize(function(){	
	ffooterexpand();
});
// ----------END ФУТЕР расширялка столбцов 
	var footerbtnaudit= $("#footerbtnaudit");
	var footerGreen= $("#footerGreen");
	var footerGray = $("#footerGray");			
	$(window).scroll(function(){
	

		var ifmobile =  $(document).width() <= 768;		 		
		var scrollPos = $(window).scrollTop()+$(window).height();
		var footerGrayYoffset = footerGreen.offset().top+footerGreen.height();
		var destination = footerGray.offset().top+footerGray.height();
/*		log("scrollPos",scrollPos);
		log("footerGrayYoffset",footerGrayYoffset);*/

		if (scrollPos+1 >= footerGrayYoffset) {
			setTimeout(ifscrolldown,200);
		} else if(scrollPos < footerGrayYoffset & !ifmobile)  {
			ifscrollup();}	
			function ifscrolldown() {
				if(footerGray.css('display')=='none') {
					footerGray.slideDown();
					$('body,html').animate({scrollTop: destination}, 400);
				setTimeout(function(){
				footerbtnaudit.css('visibility','visible').animate({
					top:"-100",
					opacity:1
				},{queue:false},50);},500);
				}
			}
			function ifscrollup() {		
				footerGray.slideUp();
				footerbtnaudit.animate({
					top:"-150",
					opacity:0					
				},{queue:false},20);				

			}
	// разводка блока если мобайл
	if (ifmobile) {
		footerGray.slideDown();
	}
});


	
	
	
	
	
	
	
	
	
	
	
});





	
	// Функция для добавления в закладки избранного 
function addFav() {
    var isWebkit, isMac;
    var UA = navigator.userAgent.toLowerCase();
    var title = document.title;
    var url = document.location;
         
    // Webkit (Chrome, Opera), Mac
    if ( (isMac = (UA.indexOf('mac') != -1)) || (isWebkit = (UA.indexOf('webkit') != -1)) ){
        document.getElementById('fav').innerHTML = 'Нажмите "' + (isMac ? 'Command/Cmd' : 'Ctrl') + ' + D" для добавления страницы в закладки';
        return false;
    }
 
    // IE
    if (window.external) {
    window.external.AddFavorite(url, title);
    return false;
    }
}  
