/**
Name : Neelu Chawla
id: 0996117
Stage 1
*/
var canvas;
var width;
var height;
var ctx;
var ctx1;
var foreground;
var arrFlights=[] ;
var nbSteps =100;

var j=0;

$(document).ready(function(){
canvas = document.getElementById("myCanvas");
var image;
width = canvas.width;
height = canvas.height;
ctx = canvas.getContext("2d");
startDraw();
    
$("#myCanvas").click(function(){
     var flight1={"departure":"Ottawa","departureX":"685","departureY":"459","departureTime":"12","arrival":"Regina","arrivalX":"145","arrivalY":"265","duration":"6"};
   //  var flight2={"departure":"Ottawa","departureX":"685","departureY":"459","departureTime":"12","arrival":"Regina","arrivalX":"245","arrivalY":"265","duration":"6"};
foreground = new Image();
    
foreground.src = "img/plane.jpg";
        var c = new flight(foreground,Number(flight1.departureX),Number(flight1.departureY),flight1.arrivalX,flight1.arrivalY,flight.departure);
     //   var c2 = new flight(foreground,Number(flight2.departureX),Number(flight2.departureY),flight2.arrivalX,flight2.arrivalY,flight2.departure);
        setInterval(function() { UpdateFlight(c) }, 75); 
      //  setInterval(function() { UpdateFlight(c2) }, 75); 


});

    
});

function UpdateFlight(flight){
    if(flight.counter==1||flight.nbStepsLeft>=1){
    arrFlights.push(flight);
    flight.drawItself(ctx);
        console.log("Push:"+Number(flight.nbStepsLeft)+":"+Number(arrFlights.length));
    }
    else{
        if(arrFlights.length>=1){
       arrFlights.pop();  
            console.log("Pop:"+Number(flight.nbStepsLeft)+":"+Number(arrFlights.length));
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
    this.currentStep;
    this.nbStepsLeft=nbSteps;
    this.image=image;
    this.height=40;
    this.width=40;
    this.counter=1;
    this.drawItself=function(ctx){
            var distanceX = this.destinationX - this.destinationY;
            var distanceY = this.originX - this.originY;
            var totalDistance = Math.sqrt( distanceX*distanceY + distanceY*distanceY );
            var steps=totalDistance/nbSteps;
            ctx.beginPath();
            if(this.originY>this.destinationY && this.originX>this.destinationX){
                this.currentX=this.originX-(this.counter*Math.round(steps));
                this.currentY=this.originY-this.counter;
                console.log("CurrentX:"+this.currentX);
                console.log("CurrentY:"+this.currentY);
                console.log("nbStepsLeft:"+this.nbStepsLeft);
                console.log(Number(this.originX-(this.counter*Math.round(steps)))+":"+Number(this.originY-this.counter));
                ctx.drawImage(image, this.currentX, this.currentY,this.width, this.height);
                //To remove the previous image   
                if(this.nbStepsLeft!=1){
                        console.log("Old:"+Number(this.currentX-(j*Math.round(steps)))+":"+Number(this.currentY-j));
                        startDraw(); 
                    }    
                this.nbStepsLeft=this.nbStepsLeft-1;
                this.counter=this.counter+2;
               }

    };
}
    
function startDraw(){
var background = new Image();
background.src = "img/Canada-1280-1107.png";
background.onload = function(){
ctx.drawImage(background, 0, 0,width,height);
};
}
