canvas=document.getElementById("can");
context=canvas.getContext("2d");
var color=document.getElementById("put").value;
context.beginPath();
context.strokeStyle=color;
context.lineWidth=2;
context.rect(100,100,50,70);

context.stroke();

var car="";

var prex;
var prey;
var cux;
var cuy;



canvas.addEventListener("mousedown",mo);
function mo(e){
  car="mousedown";
  var color=document.getElementById('put').value;
}


canvas.addEventListener("mouseup", up);
function up(e){
  car="mouseup"
}

canvas.addEventListener("mouseleave",le);
function le(e){
  car="mouseleave"
}

canvas.addEventListener("mousemove",mm);
function mm(e){
  cux=e.clientX- canvas.offsetLeft;
  cuy=e.clientY-canvas.offsetTop;
  if (car=="mousedown")
  {
    context.beginPath()
    context.strokeStyle= color;
    context.moveTo(prex,prey);
    context.lineTo(cux,cuy);
    context.stroke();
  }
  prex=cux;
  prey=cuy;
}

canvas.addEventListener("touchstart",ts);
function ts(e){
  prex= e.touches[0].clientX- canvas.offsetLeft;
  prey= e.touches[0].clientY- canvas.offsetTop;
}
canvas.addEventListener("touchmove",tm);
function tm(e){
  cux= e.touches[0].clientX- canvas.offsetLeft;
  cuy= e.touches[0].clientY- canvas.offsetTop;
  context.beginPath();
  context.strokeStyle = color;
  context.lineWidth=2;
  context.moveTo(prex, prey);
  context.lineTo(cux, cuy);
  context.stroke();
  prex=cux;
  prey=cuy;
}
