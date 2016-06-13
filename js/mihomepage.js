$(document).ready(function () {

var	more993 = ($(document).width() >= 975);
var	less992 = ($(document).width() <= 974);	

// --------------------- Resize Event -------------------------
	$(window).resize(function(){
		more993 = ($(document).width() >= 975);	
		less992 = ($(document).width() <= 974);	
		

	});

//------------ИЗМЕНЕНИЕ ПОСЛЕДОВАТЕЛЬНОСТИ ЭЛЕМЕНТОВ
function SectionOrderChanger(first,second) {
	var b1 = document.getElementById(first);
	var b2 = document.getElementById(second);
if (less992) {b1.parentNode.insertBefore(b2, b1);}
if (more993) {b1.parentNode.insertBefore(b1, b2);}	
}

	
$(window).resize(function () {
SectionOrderChanger("mi-sec5-changer-left","mi-sec5-changer-right");
});
	
SectionOrderChanger("mi-sec5-changer-left","mi-sec5-changer-right");
//------------/ИЗМЕНЕНИЕ ПОСЛЕДОВАТЕЛЬНОСТИ ЭЛЕМЕНТОВ	
















});