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
var arrFlights=[] ;
var nbSteps =100;
var i=0;

$(document).ready(function(){
canvas = document.getElementById("myCanvas");
var image;
width = canvas.width;
height = canvas.height;
var ctx = canvas.getContext("2d");
startDraw();
$("#myCanvas").click(function(){
    console.log("test");
     var flight1={"departure":"Ottawa","departureX":"685","departureY":"459","departureTime":"12","arrival":"Regina","arrivalX":"145","arrivalY":"265","duration":"6"};
foreground = new Image();
    
foreground.src = "plane.jpg";
        var c = new flight(foreground,Number(flight1.departureX),Number(flight1.departureY),flight1.arrivalX,flight1.arrivalY,flight.departure);
    setInterval(function() { UpdateFlight(c) }, 75); 


});

    
});

function UpdateFlight(flight){
    if(i==0 || flight.currentStep>=1){
    arrFlights.push(flight);
    flight.drawItself(ctx);
        console.log("Push:"+Number(flight.currentStep)+":"+Number(arrFlights.length));
    }
    else{
        if(arrFlights.length>=1){
       arrFlights.pop();  
            console.log("Pop:"+Number(flight.currentStep)+":"+Number(arrFlights.length));
        }
    }
     
}
function flight(image,departureX,departureY,arrivalX,arrivalY,origin){
    this.departure=origin;
    this.originX=departureX;
    this.originY=departureY;
    this.destinationX=arrivalX;
    this.destinationY=arrivalY;
    this.currentX;
    this.currentY;
    this.currentStep=nbSteps;
    this.image=image;
    this.height=40;
    this.width=40;
this.drawItself=function(ctx){
var a = this.destinationX - this.destinationY;
var b = this.originX - this.originY;

var c = Math.sqrt( a*a + b*b );
console.log("distance:"+c);
var steps=c/nbSteps;
console.log("Steps:"+Math.round(steps));
            ctx.beginPath();
    
            if(this.originY>this.destinationY){
                this.currentX=this.originX-(i*Math.round(steps));
                this.currentY=this.originY-i;
                this.currentStep=this.currentStep-1;
                console.log("i:"+i);
                console.log("CurrentX:"+this.currentX);
                console.log("CurrentY:"+this.currentY);
                console.log("CurrentStep:"+this.currentStep);
                console.log(Number(this.originX-(i*Math.round(steps)))+":"+Number(this.originY-i));
                ctx.drawImage(image, this.currentX, this.currentY,this.width, this.height);
                i=i+2;
         
            }

};
}
    function drawLines(x1,y1,x2,y2){
ctx.beginPath();
ctx.moveTo(x1,y1);
ctx.lineTo(x2, y2);
       // ctx.stroke();
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
