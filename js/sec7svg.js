	
 $(document).ready(function () {
var xAxis = new Array;
var xFluid = new Array;	
var yAxis = new Array;
var yFluid = new Array;	
var scaleXY = new Array();	
var less768 = ($(document).width() <= 768);	
var gWidth = $(window).width();	

//------- ЛОГ ХЕЛПЕР ----------	
function log (zpush,zvar){
var consolelog = new Object();	
//var consolelog = {gWidth1:gWidth	  };
//if (typeof zpush !== 'undefined' ) { consolelog[zpush] = zvar; }
consolelog[zpush] = zvar;	
//$('.mi-status').html("");	
for (var i in consolelog) {
$('.mi-status').append(i+": "+consolelog[i]+'<br>');}	};

	
function maxvalue(varible,value) {if (varible >= value) {varible = value; return varible;} return varible;}	
function minvalue(varible,value) {if (varible <= value) {varible = value; return varible;} return varible;}		
	
cor = new Array();	


	function responsiveScale (){
yFluid = [
		  300, //0
		  262,	 //1
		  224,	 //2
		  185, //3
		  150, 		//4
		  150, 	//5
		  145, //6
		  141, //7
		  138, //8
		  130, 		//9
		  120, //10
		  102, //11
		  84,  //12
		  66,  //13
		  48,  //14
		  30,  //15
		  0]; //16
		
		if (gWidth < 320) {
			cor = [
 0.6,  //1
 0.3,
 0.3,
 0.3,
 0.5, //2
 0.3,
 0.3,
 0.3257,
 0.3308,
 0.4,  //3
 0.3392,
 0.3425,
 0.3452,
 0.3465,
 0.3,  //4
 0.3497,
 0.35	
];
//yFluid = [300,260,264,246,150,210,192,174,156,138,120,102,84,66,48,30,12];	
//xFluid = [20,35,35.875,53.8125,71.75,89.6875,107.625,125.5625,143.5,161.4375,179.375,197.3125,215.25,233.1875,251.125,269.0625,287]			
		}
		if ( gWidth > 320 && gWidth < 768) {
		cor = [
 0.8,
 0.3,
 0.3,
 0.3,
 0.6, //2
 0.3,
 0.3,
 0.3257,
 0.3308,
 0.5353, //3
 0.3392,
 0.3425,
 0.3452,
 0.3465,
 0.4488, //4
 0.3497,
 0.35	
];
//yFluid = [300,220,264,250,150,210,192,174,100,138,120,102,84,66,48,30,12];	
//xFluid = [20,35,35,90,71.75,89.6875,107.625,125.5625,143.5,161.4375,179,197,215,233.1875,251.125,269.0625,287]	
		};
		if (gWidth > 768) {
			cor = [
 0.8, //1
 0.3,
 0.3,
 0.3,
 0.7,  //2
 0.3,
 0.3,
 0.3257,
 0.3308,
 0.5353,  //3
 0.3392,
 0.3425,
 0.3452,
 0.3465,
 0.4488,   //4
 0.3497,
 0.35	
];
		};		
	};
//responsiveScale ();
	
	
	
	
//	создать массив ID для каждого круга
//	Определить координаты для каждого круга и записать в массив
//	Нарисовать круг по одному с ID и положить по координатам X Y
//	Изменять положение каждого круга по X
	                                                                                                    
	var kpiCircles = new Object();
	kpiCircles.id = [];
	kpiCircles.idGenerator = function () {
			for (var i = 0; i <= 16; i++ ) {
			kpiCircles.id[i] = "sec7kpi-"+i;
				
				
		}
	}
	
//function cloneObject(source) {
//    for (i in source) {
//        if (typeof source[i] == 'source') {
//            this[i] = new cloneObject(source[i]);
//        }
//        else{
//            this[i] = source[i];
//    }
//    }
//}
//	function statusm(){
//		$('.mi-status').html('<br> Width: '+$(document).width()+
//							 '<br> Height: '+$(window).height());
//};
	
//	заполнение массива значениями по Х
var horizlines = $('.sec7-horizontal-lines');	
var auditline = $("#sec7-2line");	
	
	function horisontalline(){
	var width = $(window).width()*1.2;
	gWidth = $(window).width();	
	width = maxvalue(width, 1200);			
//	horizlines.attr("x2", width);
//	auditline.attr("x2", width/2.2-250);
//	auditline.attr("x1", xAxis[1]);
//		log("dsd",width/1.1-250);
		for ( var i = 0; i <= 16; i++) {
			xAxis[i] = width/16*i;
			
			if (gWidth <= 420) {

			xFluid[i] = gWidth/22*i;
				} 
			if (gWidth >= 420 && gWidth <= 768)	{
	
			xFluid[i] = gWidth/18*i;					
				}
			if (gWidth >= 768)	{
			gWidth = maxvalue(gWidth,1030);			
			xFluid[i] = gWidth/16*i;					
				}
//			xFluid[9] = gWidth/16*9;  //КОСТЫЛЬ
//			xFluid[i] = 50+0.0003*Math.pow((i-gWidth/50),5)+880;
//			log("9",xFluid[9]);
//			log('gWidth',gWidth);
			
				}
		
	};
	
//	horisontalline();
//	var xAxiscontent = new cloneObject(xAxis);
//		console.log(xAxiscontent);

	
//Запись в массив позиций  У, скэйла XY	
	kpiCircles.coord = [];
	kpiCircles.xy = function (){
		for (var i = 0; i <= 16; i++) {
		scaleXY[i] = [Math.abs( 1-i*0.0625),Math.abs(1-i*0.0625)];	
		yAxis [i] = 350-i*18;
        yFluid[i] = 300-i*18;
		kpiCircles.coord[i] = [kpiCircles.id[i],xAxis[i],yAxis [i],scaleXY[i]];		
		}
		
	};

	
var svgns = "http://www.w3.org/2000/svg";
var xlinkns = "http://www.w3.org/1999/xlink"; 
var groupCircles = document.getElementById("groupCircles");
var g = document.createElementNS(svgns, "g");	
var gui = document.getElementById("gui");	
var svg = document.getElementsByTagNameNS(svgns, 'svg')[0];
var use = document.createElementNS(svgns, "use");
var transform = document.createElementNS(svgns, "svg").createSVGTransform();
var matrix = document.createElementNS(svgns, "svg").createSVGMatrix();	
var circle = document.createElementNS(svgns, "circle");
var text = document.createElementNS(svgns, "text");	
var animateTransform1 = document.createElementNS(svgns, "animateTransform");
var animateTransform2 = document.createElementNS(svgns, "animateTransform");	 
	
//function btncircles(e) {
//
//	
//	var node = e.target;	
//	var x = node.getAttribute("transform");
//	var ctm = node.getCTM();
//	var transform = document.createElementNS(svgns, "svg").createSVGTransform();
//	var matrix = document.createElementNS(svgns, "svg").createSVGMatrix();
//	var sa = ctm.a;
//	var sd = ctm.d;
//
//	matrix.a = sa;
//	matrix.d = sd;
//	matrix.e = ctm.e;
//	matrix.f = ctm.f;
//
//	
//	transform.setMatrix(matrix);
//	node.transform.baseVal.initialize(transform);
//
//}
//	

function circlesC(id, matrix,txt) {
//	g = g.cloneNode(true);
//	circle = circle.cloneNode(true);
//	text = text.cloneNode(true);
//	animateTransform = animateTransform.cloneNode(true);
	
	
	
//	var svgDocument = evt.target.parentElement;
	transform.setMatrix(matrix);
	g.transform.baseVal.initialize(transform);
//	------------------   ГРУППА 1    ----------------------		
	g.setAttribute("id",id);
//	g.setAttribute("transform", "matrix(1 0 0 1 300 300)");
//	g.transform.baseVal.initialize(transform);
	groupCircles.appendChild(g);
	g = g.cloneNode(true);
	
//	------------------   ГРУППА 2    ----------------------	
	
	
	g.setAttribute("transform", "translate(0,0)");
	g.setAttribute("id",id+"-c");
	document.getElementById(id).appendChild(g);
	g = g.cloneNode(true);
//	------------------   КРУГ    ----------------------	
	
    circle.setAttribute("cx", 0);
    circle.setAttribute("cy", 0);
    circle.setAttribute("r",  71);
    circle.setAttribute("fill", "#372356");
    circle.setAttribute("stroke", "#27AE60");
	circle.setAttribute("stroke-width", "16");
	circle.setAttribute("stroke-miterlimit", "10");
	
    document.getElementById(id+"-c").appendChild(circle);
	circle = circle.cloneNode(true);
	
//	------------------   ТЕКСТ    ----------------------
	
	var data = document.createTextNode("KPI "+txt);   
    text.setAttribute("x", "0");
    text.setAttribute("y", "15");
    text.setAttribute("fill", "#27AE60");
    text.setAttribute("text-anchor", "middle");
	text.setAttribute("font-family", "Latobold");
	text.setAttribute("font-size", "35");	
    text.setAttribute("pointer-events","none");
	text.setAttribute("data-text", "bold");
	
    text.appendChild(data);
    document.getElementById(id+"-c").appendChild(text);
	text = text.cloneNode(true);

	
//	------------------   АНИМАЦИЯ    ----------------------	
	

 
    animateTransform1.setAttribute("attributeType", "XML");
	animateTransform1.setAttribute("attributeName", "transform");
    animateTransform1.setAttribute("type", "scale");
    animateTransform1.setAttribute("dur", "1000ms");
    animateTransform1.setAttribute("from", "1");
    animateTransform1.setAttribute("to", "1.5");   
	animateTransform1.setAttribute("begin", "mouseover"); 
	animateTransform1.setAttribute("calcMode", "spline"); 
	animateTransform1.setAttribute("values", "1;1.5"); 
	animateTransform1.setAttribute("keyTimes", "0;1"); 
	animateTransform1.setAttribute("keySplines", ".08,.73,.72,.98"); 
	animateTransform1.setAttribute("fill", "freeze"); 
	animateTransform1.setAttribute("restart", "whenNotActive"); 
	 
	animateTransform2.setAttribute("attributeType", "XML");
	animateTransform2.setAttribute("attributeName", "transform");
    animateTransform2.setAttribute("type", "scale");
    animateTransform2.setAttribute("dur", "1s");
    animateTransform2.setAttribute("from",  "");
    animateTransform2.setAttribute("to", "1");   
	animateTransform2.setAttribute("begin", "mouseout"); 
	animateTransform2.setAttribute("calcMode", "spline"); 
	animateTransform2.setAttribute("values", "1.5;1"); 
	animateTransform2.setAttribute("keyTimes", "0;1"); 
	animateTransform2.setAttribute("keySplines", ".11,.55,.61,.96"); 
	animateTransform2.setAttribute("fill", "freeze"); 
	animateTransform2.setAttribute("restart", "whenNotActive"); 

	
	
    document.getElementById(id+"-c").appendChild(animateTransform1);
	document.getElementById(id+"-c").appendChild(animateTransform2);
  	animateTransform1 = animateTransform1.cloneNode(true);
	animateTransform2 = animateTransform1.cloneNode(true);
	
	transform = document.createElementNS(svgns, "svg").createSVGTransform();
 	text = document.createElementNS(svgns, "text");
	
};
	

kpiCircles.svgDraw = function() {	
//var newCircle = document.createElementNS(svgns, 'g')	

var use = document.createElementNS(svgns, "use");
var transform = document.createElementNS(svgns, "svg").createSVGTransform();
var matrix = document.createElementNS(svgns, "svg").createSVGMatrix();	
//var textNode = document.createElementNS(svgns,'text');	
for (var i = 16; i >= 0; i--) {
	
var x = kpiCircles.coord[i][1];
var y = kpiCircles.coord[i][2];
var id = kpiCircles.coord[i][0];
responsiveScale ();	
var sx = cor[i];
var sy = cor[i];	
//use.setAttribute("id", id); 	
//use.setAttribute("class", "circles");	
//use.addEventListener("mouseover", btncircles);	
//transform.setMatrix( matrix.scale(scaleXY[z][0],scaleXY[z][1]));	
//matrix.scale(sx,sy);	
//matrix.translate(x,y);	
//var textNode = document.createElementNS(svgns,"text");
//var sec7text = document.getElementById("sec7text");	
//var textNode = document.createTextNode(z);
//sec7text.setAttribute("id", "text"+id);
//textNode = textNode.cloneNode(true);	
//sec7text.appendChild(textNode);	
//use.setAttributeNS(xlinkns, "href", "#sec7kpi");

//transform.setMatrix( matrix.scale(sx,sy) );	  
//transform.setMatrix( matrix.translate(x,y)  );
//matrix.scale(sx,sy)	;
//matrix.translate(x,y);	
matrix.a = sx;
matrix.d = sy;	
matrix.e = x;
matrix.f = y;	
	
	
	
circlesC(id,matrix,i+1);

	

	
//transform.setMatrix(matrix);	
//use.transform.baseVal.initialize(transform);
//log("1",matrix);	
//g.appendChild(use);	
//use = use.cloneNode(true);	
//var textElement = document.createElementNS(svgns,"text");
//textElement.setAttribute('id',"text"+id);
//textElement.textContent = i;
//$("sec7text").append(textElement);	
//	document.getElementById('sec7text').setAttribute('id',"text"+id);
//document.getElementById("sec7text").textContent = z;	
};	
};
	
//	node.transform.baseVal.appendItem(transform);
	
//var newText = svg_doc.createElementNS(svgNS,"text");
//    newText.setAttributeNS(null,"x",100);        
//    newText.setAttributeNS(null,"y",100);    
//    newText.setAttributeNS(null,"font-size","13px");
//    newText.setAttributeNS(null,"text-anchor","middle");
//    newText.setAttributeNS(null,"fill-opacity",Math.random());	
//newText.setAttributeNS(null,"fill","rgb("+ red +","+ green+","+blue+")");	
// var textNode = document.createTextNode("a new text");
//    newText.appendChild(textNode);	
	
	
//function SectionOrderChanger(first,second) {
//	var b1 = document.getElementById(first);
//	var b2 = document.getElementById(second);
//if (less992) {b1.parentNode.insertBefore(b2, b1);}
//if (more993) {b1.parentNode.insertBefore(b1, b2);}	
//}	
//	
	
	
//	var r, ctm, sx, sy, rotation;
//
//r   = document.querySelector('rect'); // access the first rect element
//ctm = r.getCTM();
//sx  = ctm.a;
//sy  = ctm.d;
//	
	
	
	
//var SVG, domElement, ...
//
//// setup
//SVG        = document.querySelector( 'svg' );
//domElement = SVG.querySelector( 'rect' );
//transform  = SVG.createSVGTransform();
//matrix     = SVG.createSVGMatrix();
//position   = SVG.createSVGPoint();
//rotation   = 0;
//scale      = 1;
//
//// do every update, continuous use
//matrix.a = scale;
//matrix.d = scale;
//matrix.e = position.x;
//matrix.f = position.y;
//
//transform.setMatrix( matrix.rotate( rotation ) );
//domElement.transform.baseVal.initialize( transform ); // clear then put	


	
	
//kpiCircles.svgDraw();	
	
	
	

	
	
	
	
	
	
	
	
	
//	ОТРИСОВКА СТАТИКИ
var use = document.createElementNS(svgns, "use");	
use.setAttribute("id", "sec7prodaji");	
use.setAttributeNS(xlinkns, "href", "#sec7prodaji");	
gui.appendChild(use);
use = use.cloneNode(true);	
use.setAttribute("id", "pervRezult");	
use.setAttributeNS(xlinkns, "href", "#pervRezult");	
gui.appendChild(use);	
	
	
	//КЭШ 
var sec7prodaji = document.getElementById("sec7prodaji");
var dnei30dot = $('#dnei30'); 
var txt30dnei = $('#txt30dnei');
var mes3 = $('#3mes');
var txt3mes = $('#txt3mes');
var pervObrash = $('#pervObrash');
var pervRezult = $('#pervRezult');
var gaudit = $("#gaudit");	
//	log("gWidth",gWidth);
	
	function matrixGrid () {
	var xpos = 	xAxis[8]*1;
	var ypos =  yAxis [3]-2;
	var scale = scaleXY[8][1];
		if (gWidth < 340) {
			xpos = 	xAxis[8]+15;
		}
		if ( gWidth < 768 && gWidth > 340) {
			xpos = 	xAxis[8]*1;
			scale = scaleXY[5][1];
			ypos =  yAxis [7]-5;
		};
		if (gWidth > 768) {
			xpos = 	xAxis[10];
			scale = scaleXY[5][1];
			ypos =  yAxis [7]-2;
		};
		xpos = maxvalue(xpos,906);		
		var matrixString ='matrix('+scale+' 0 0 '+scale+' '+xpos+' '+ypos+')';
		return matrixString;
	}
	
	function matrixGrid2 () {
	var xpos ;
	var ypos =  yAxis [16];
	var scale ;
		if (gWidth < 320) {
		xpos = 	xAxis[2]*1;
		scale = scaleXY[5][1];	
		}
		if ( gWidth < 768 && gWidth > 320) {
		scale = scaleXY[3][1];
		xpos = 	xAxis[2]*1;
		};
		if (gWidth > 768) {
		scale = scaleXY[0][1];
		ypos =  yAxis [16];	
		xpos = 	xAxis[4]*1;	
		};
		xpos = maxvalue(xpos,150);
//			log('x',xpos);	
//			log('y',ypos);	
//			log('scale',scale);		
		var matrixString ='matrix('+scale+' 0 0 '+scale+' '+xpos+' '+ypos+')';
		return matrixString;
	}
	
	function matrixGrid3 (number) {
		var x,y,sx,sy,matrixString;	
			x = xFluid[number]+120;
			y = yFluid [number]+100;
			sx = cor[number];
			sy = cor[number];	
			matrixString = 'matrix('+sx+' 0 0 '+sy+' '+x+' '+y+')';	
			return matrixString;
		}
	
	function sec7Redraw() {
		sec7prodaji.setAttribute('transform', matrixGrid());	
		pervRezult.attr('transform',matrixGrid2());
		less768 = ($(document).width() <= 768);
		for (var i = 0; i <= 16; i++) {			
		document.getElementById(kpiCircles.coord[i][0]).setAttribute("transform",matrixGrid3(i))		
		}
		
		
		if (gWidth >= 844) { $('#kpiinfo').attr("opacity","1") 	} else {$('#kpiinfo').attr("opacity","0");};
		
		mes3.attr("transform", 'translate('+xAxis[12]+',490)');
		auditline.attr("transform",'matrix(1 0 0 1 '+(xAxis[7]-25)+' 0)');
		gaudit.attr("transform",'matrix(0.7 0 0 0.7 '+xAxis[7]+' 75)'); 
//		log('gWidth',gWidth);
		if ($(window).width() < 1000) {
		dnei30dot.attr("x1", xFluid[0]+120);
		dnei30dot.attr("x2", xFluid[0]+120);
		txt30dnei.attr("transform",'matrix(1 0 0 1 '+xAxis[2]+' 559.9538)');   
		txt3mes.attr("x", xAxis[12]-50);	
		
			
			
			
//			log("d",dsafdas);
		}
		if (gWidth <= 741) {
	
			pervObrash.attr("opacity","0");
		} else {
			pervObrash.attr("opacity","1");
		}
		if (less768) {
				txt3mes.attr("font-size", "30");
				txt30dnei.attr("font-size", "30");
			} else {
				txt3mes.attr("font-size", "50");
				txt30dnei.attr("font-size", "50");
			}
	}
	
	
	
function drawLine (id,a,offx1,b,offy1,c,offx2,d,offy2) {	
  var line = document.createElementNS(svgns,'line');
	var g = document.getElementById("sec7lines");

		var x1 = xFluid[a]+offx1+120;
		var y1 = yFluid [b]+offy1+100;
		var x2 = xFluid[c]+offx2+120;		
		var y2 = yFluid [d]+offy2+100;
		
	line.setAttribute('x1',x1);
	line.setAttribute('x2',x2);
	line.setAttribute('y1',y1);
	line.setAttribute('y2',y2);
	line.setAttribute("id",id);
	line.setAttribute('stroke','#27AE60');
	line.setAttribute('stroke-width',"16");
	line.setAttribute('stroke-linecap','round');
	line.setAttribute('stroke-linejoin','round');
	line.setAttribute('stroke-miterlimit','10');
	
	g.appendChild(line);
	line.cloneNode(true);
	
	}

	
function linesTransform (lineObject,a,offx1,b,offy1,c,offx2,d,offy2) {
		var x1 = xFluid[a]+offx1+120;
		var y1 = yFluid [b]+offy1+100;
		var x2 = xFluid[c]+offx2+120;		
		var y2 = yFluid [d]+offy2+100;
		lineObject.setAttribute('x1',x1);
		lineObject.setAttribute('x2',x2);
		lineObject.setAttribute('y1',y1);
		lineObject.setAttribute('y2',y2);
		}	
	
	
function svghide() {
	
if (gWidth<768) {	
document.getElementById("sec7kpi-1").setAttribute("opacity","0");	

document.getElementById("sec7kpi-3").setAttribute("opacity","0");
document.getElementById("sec7kpi-5").setAttribute("opacity","0");
document.getElementById("sec7kpi-6").setAttribute("opacity","0");
document.getElementById("sec7kpi-8").setAttribute("opacity","0");
document.getElementById("sec7kpi-10").setAttribute("opacity","0");
document.getElementById("sec7kpi-11").setAttribute("opacity","0");	
document.getElementById("sec7kpi-13").setAttribute("opacity","0");	
document.getElementById("sec7kpi-15").setAttribute("opacity","0");	
	} else {
	document.getElementById("sec7kpi-1").setAttribute("opacity","1");	

document.getElementById("sec7kpi-3").setAttribute("opacity","1");
document.getElementById("sec7kpi-5").setAttribute("opacity","1");
document.getElementById("sec7kpi-6").setAttribute("opacity","1");
document.getElementById("sec7kpi-8").setAttribute("opacity","1");
document.getElementById("sec7kpi-10").setAttribute("opacity","1");
document.getElementById("sec7kpi-11").setAttribute("opacity","1");	
document.getElementById("sec7kpi-13").setAttribute("opacity","1");	
document.getElementById("sec7kpi-15").setAttribute("opacity","1");		
	}
if (gWidth<420) {	
document.getElementById("sec7kpi-7").setAttribute("opacity","0");	
document.getElementById("sec7kpi-2").setAttribute("opacity","0");
document.getElementById("sec7kpi-12").setAttribute("opacity","0");
document.getElementById("sec7kpi-16").setAttribute("opacity","0");
	} else {
	
document.getElementById("sec7kpi-2").setAttribute("opacity","1");
document.getElementById("sec7kpi-12").setAttribute("opacity","1");
document.getElementById("sec7kpi-16").setAttribute("opacity","1");	
document.getElementById("sec7kpi-7").setAttribute("opacity","1");		
	}
}	
	
	
	
	
	
	
//-----------------------------------------------------R E SI Z E   EVENT --------------------------------------------------

	
	$(window).resize(function(){
		horisontalline();
		
		kpiCircles.xy();
		responsiveScale ();  //нужно
		sec7Redraw();
		
		
		

		
		linesTransform (document.getElementById("line1"),0,0,0,0,4,0,4,0);
		linesTransform (document.getElementById("line2"),4,0,4,0,9,0,9,0);
		linesTransform (document.getElementById("line3"),9,0,9,0,14,0,14,0);
		linesTransform (document.getElementById("line4"),0,-78,0,81,0,0,0,0);
		linesTransform (document.getElementById("line5"),14,0,14,0,16,0,16,0);
        svghide();
	});	
//responsiveScale ();	
		
kpiCircles.idGenerator();
horisontalline();
kpiCircles.xy();	

	
kpiCircles.svgDraw();	
svghide();

//responsiveScale ();	
//	log('gWidth',gWidth);
//	log('xFluid',xFluid);
//	log("yfluid",yFluid);
	drawLine ("line1",0,0,0,0,4,0,4,0);
	drawLine ("line2",4,0,4,0,9,0,9,0);
	drawLine ("line3",9,0,9,0,14,0,14,0);
	drawLine ("line4",0,-78,0,81,0,0,0,0);
	drawLine ("line5",14,0,14,0,16,0,16,0);
sec7Redraw();	


	
	
	
}); 