var x=document.getElementById("can");
var ctx=x.getContext("2d");

function symbol()
{
var x=280;
var y=275;
color = "blue";
circle(x,y);

var x=400;
var y=275;
color = "black";
circle(x,y);

var x=520;
var y=275;
color = "red";
circle(x,y);

var x=340;
var y=325;
color = "yellow";
circle(x,y);

var x=460;
var y=325;
color = "green";
circle(x,y);

var x=180;
var y=175;
var l=440;
var b=250;
color="black"
rectangle(x,y,l,b);
}

function circle(x,y){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=4;
    ctx.arc(x,y,50,0,2*Math.PI);
    ctx.stroke();    
}

function rectangle(x,y,l,b)
{
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.rect(x,y,l,b);
    ctx.stroke();  
}
button1 = document.getElementById("buttonclick");
button1.addEventListener("click", clear);
function clear()
{
console.log("I am Clear Button");
document.getElementById("buttonclick").innerText = "Cleared";
ctx.clearRect(0, 0, x.width, x.height);
}