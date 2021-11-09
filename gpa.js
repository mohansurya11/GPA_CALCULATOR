function sem1calc()
{


var a=document.getElementById('M1').value;
var b=document.getElementById('M2').value;
var c=document.getElementById('M3').value;
var d=document.getElementById('M4').value;
var e=document.getElementById('M5').value;
var f=document.getElementById('M6').value;
var g=document.getElementById('M7').value;



var cs1=3;
var cs2=3;
var cs3=3;
var cs4=4;
var cs5=3;
var cs6=1;
var cs7=2;

var p1,p2,p3,p4,p5,p6,p7;
var g1,g2,g3,g4,g5,g6,g7;

if(a>=50)
{
	g1=Math.floor((a/10)+1);
	p1=(g1)*cs1;
}
else{
	p1=0;
}


if(b>=50)
{
	g2=Math.floor((b/10)+1);
	p2=g2*cs2;
}
else{
	p2=0;
}


if(c>=50)
{
	g3=Math.floor((c/10)+1);
	p3=g3*cs3;
}
else{
	p3=0;
}


if(d>=50)
{
	g4=Math.floor((d/10)+1);
	p4=g4*cs4;
}
else{
	p4=0;
}

if(e>=50)
{
	g5=Math.floor((e/10)+1);
	p5=g5*cs5;
}
else{
	p5=0;
}

if(f>=50)
{
	g6=Math.floor((f/10)+1);
	p6=g6*cs6;

}
else{
	p6=0;
}

if(g>=50)
{
	g7=Math.floor((g/10)+1);
	p7=g7*cs7;
}
else{
	p7=0;
}



var cgpa=(p1+p2+p3+p4+p5+p6+p7)/(cs1+cs2+cs3+cs4+cs5+cs6+cs7);
document.getElementById("s3").innerHTML = "GPA : " + cgpa.toFixed(2);

}




function sem2calc()
{


var a=document.getElementById('M1').value;
var b=document.getElementById('M2').value;
var c=document.getElementById('M3').value;
var d=document.getElementById('M4').value;
var e=document.getElementById('M5').value;
var f=document.getElementById('M6').value;
var g=document.getElementById('M7').value;
var h=document.getElementById('M8').value;
var i=document.getElementById('M9').value;



var cs1=3;
var cs2=3;
var cs3=3;
var cs4=3;
var cs5=3;
var cs6=4;
var cs7=2;
var cs8=2;
var cs9=1;

var grade,p1,p2,p3,p4,p5,p6,p7,p8,p9;

var g1,g2,g3,g4,g5,g6,g7;

if(a>=50)
{
	g1=Math.floor((a/10)+1);
	p1=(g1)*cs1;
}
else{
	p1=0;
}


if(b>=50)
{
	g2=Math.floor((b/10)+1);
	p2=g2*cs2;
}
else{
	p2=0;
}


if(c>=50)
{
	g3=Math.floor((c/10)+1);
	p3=g3*cs3;
}
else{
	p3=0;
}


if(d>=50)
{
	g4=Math.floor((d/10)+1);
	p4=g4*cs4;
}
else{
	p4=0;
}

if(e>=50)
{
	g5=Math.floor((e/10)+1);
	p5=g5*cs5;
}
else{
	p5=0;
}

if(f>=50)
{
	g6=Math.floor((f/10)+1);
	p6=g6*cs6;

}
else{
	p6=0;
}


if(g>=50)
{
	g7=Math.floor((g/10)+1);
	p7=g7*cs7;
}
else{
	p7=0;
}

if(h>=50)
{
	g8=Math.floor((h/10)+1);
	p8=g8*cs8;

}
else{
	p8=0;
}


if(i>=50)
{
	g9=Math.floor((i/10)+1);
	p9=g9*cs9;
}
else{
	p9=0;
}


var cgpa=(p1+p2+p3+p4+p5+p6+p7+p8+p9)/(cs1+cs2+cs3+cs4+cs5+cs6+cs7+cs8+cs9);
document.getElementById("s3").innerHTML = "GPA: " + cgpa.toFixed(2);

}




function sem3calc()
{


var a=document.getElementById('M1').value;
var b=document.getElementById('M2').value;
var c=document.getElementById('M3').value;
var d=document.getElementById('M4').value;
var e=document.getElementById('M5').value;
var f=document.getElementById('M6').value;
var g=document.getElementById('M7').value;
var h=document.getElementById('M8').value;
var i=document.getElementById('M9').value;



var cs1=3;
var cs2=3;
var cs3=3;
var cs4=3;
var cs5=3;
var cs6=3;
var cs7=1;
var cs8=2;
var cs9=1;

var grade,p1,p2,p3,p4,p5,p6,p7,p8,p9;
var g1,g2,g3,g4,g5,g6,g7;

if(a>=50)
{
	g1=Math.floor((a/10)+1);
	p1=(g1)*cs1;
}
else{
	p1=0;
}


if(b>=50)
{
	g2=Math.floor((b/10)+1);
	p2=g2*cs2;
}
else{
	p2=0;
}


if(c>=50)
{
	g3=Math.floor((c/10)+1);
	p3=g3*cs3;
}
else{
	p3=0;
}


if(d>=50)
{
	g4=Math.floor((d/10)+1);
	p4=g4*cs4;
}
else{
	p4=0;
}

if(e>=50)
{
	g5=Math.floor((e/10)+1);
	p5=g5*cs5;
}
else{
	p5=0;
}

if(f>=50)
{
	g6=Math.floor((f/10)+1);
	p6=g6*cs6;

}
else{
	p6=0;
}


if(g>=50)
{
	g7=Math.floor((g/10)+1);
	p7=g7*cs7;
}
else{
	p7=0;
}

if(h>=50)
{
	g8=Math.floor((h/10)+1);
	p8=g8*cs8;

}
else{
	p8=0;
}


if(i>=50)
{
	g9=Math.floor((i/10)+1);
	p9=g9*cs9;
}
else{
	p9=0;
}


var cgpa=(p1+p2+p3+p4+p5+p6+p7+p8+p9)/(cs1+cs2+cs3+cs4+cs5+cs6+cs7+cs8+cs9);
document.getElementById("s3").innerHTML = "GPA: " + cgpa.toFixed(2);

}



function sem4calc()
{


var a=document.getElementById('M1').value;
var b=document.getElementById('M2').value;
var c=document.getElementById('M3').value;
var d=document.getElementById('M4').value;
var e=document.getElementById('M5').value;
var f=document.getElementById('M6').value;
var g=document.getElementById('M7').value;
var h=document.getElementById('M8').value;
var i=document.getElementById('M9').value;



var cs1=2;
var cs2=3;
var cs3=3;
var cs4=3;
var cs5=3;
var cs6=3;
var cs7=1;
var cs8=1;
var cs9=2;

var grade,p1,p2,p3,p4,p5,p6,p7,p8,p9;
var g1,g2,g3,g4,g5,g6,g7;

if(a>=50)
{
	g1=Math.floor((a/10)+1);
	p1=(g1)*cs1;
}
else{
	p1=0;
}


if(b>=50)
{
	g2=Math.floor((b/10)+1);
	p2=g2*cs2;
}
else{
	p2=0;
}


if(c>=50)
{
	g3=Math.floor((c/10)+1);
	p3=g3*cs3;
}
else{
	p3=0;
}


if(d>=50)
{
	g4=Math.floor((d/10)+1);
	p4=g4*cs4;
}
else{
	p4=0;
}

if(e>=50)
{
	g5=Math.floor((e/10)+1);
	p5=g5*cs5;
}
else{
	p5=0;
}

if(f>=50)
{
	g6=Math.floor((f/10)+1);
	p6=g6*cs6;

}
else{
	p6=0;
}


if(g>=50)
{
	g7=Math.floor((g/10)+1);
	p7=g7*cs7;
}
else{
	p7=0;
}

if(h>=50)
{
	g8=Math.floor((h/10)+1);
	p8=g8*cs8;

}
else{
	p8=0;
}


if(i>=50)
{
	g9=Math.floor((i/10)+1);
	p9=g9*cs9;
}
else{
	p9=0;
}



var cgpa=(p1+p2+p3+p4+p5+p6+p7+p8+p9)/(cs1+cs2+cs3+cs4+cs5+cs6+cs7+cs8+cs9);
document.getElementById("s3").innerHTML = "GPA: " + cgpa.toFixed(2);

}
