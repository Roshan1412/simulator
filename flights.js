/**
Name : Neelu Chawla
id: 0996117
Stage 1
*/
var canvas;
var width;
var height;
var ctx;
var foreground;
var arrFlights ;
var nbSteps =100;
window.onload=startDraw;
$(document).ready(function(){
	canvas = document.getElementById("myCanvas");
	var image;
	width = canvas.width;
	height = canvas.height;
	var ctx = canvas.getContext("2d");

$("#myCanvas").click(function(){
     var flight1={"departure":"Ottawa","departureX":"685","departureY":"459","departureTime":"12","arrival":"Regina","arrivalX":"145","arrivalY":"265","duration":"6"};
		foreground = new Image();
		foreground.src = "plane.jpg";
        var c = new flight(foreground,Number(flight1.departureX),Number(flight1.departureY),flight1.arrivalX,flight1.arrivalY);
		c.drawItself(ctx);
	
});

});

function flight(image,departureX,departureY,arrivalX,arrivalY){
	this.originX=departureX;
    this.originY=departureY;
    this.destinationX=arrivalX;
    this.destinationY=arrivalY;
	this.image=image;
    this.currentStep;
    this.height=40;
    this.width=40;
	this.drawItself=function(ctx){
            ctx.beginPath();
        drawLines(this.originX,this.originY,this.destinationX,this.destinationY);
            ctx.drawImage(image, this.originX, this.originY,this.width, this.height);
        for(var i=10;i<this.destinationY;i++){
            console.log(Number(this.originX-i)+":"+Number(this.originY-i));
            ctx.drawImage(image, this.originX-i, this.originY-i,this.width, this.height);
        }
            ctx.drawImage(image, this.destinationX, this.destinationY,this.width, this.height);
	};
}
    function drawLines(x1,y1,x2,y2){
	ctx.beginPath();
	ctx.moveTo(x1,y1);
	ctx.lineTo(x2, y2);
        ctx.stroke();
    }
function startDraw(){
    canvas = document.getElementById("myCanvas");
	ctx = canvas.getContext("2d");
	var background = new Image();
	background.src = "Canada-1280-1107.png";
	background.onload = function(){
		ctx.drawImage(background, 0, 0,width,height);
	};
}