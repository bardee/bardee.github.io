var circles = [],
    canvas = document.getElementById("dot-canvas"),
    context = canvas.getContext("2d"),
    
    // SETTINGS 
    // opacity = 1,                                      // the opacity of the circles 0 to 1
    colors = ['rgba(255,255,255,'
             ],
    minSize = 1,                                        // the minimum size of the circles in px
    maxSize = 7,                                       // the maximum size of the circles in px
    numCircles = 30,                                   // the number of circles
    minSpeed = -2,                                     // the minimum speed, recommended: -maxspeed
    maxSpeed = 2,                                    // the maximum speed of the circles
    expandState = true;                                      // the direction of expansion
    fadeSpeed = .01;

function buildArray() {
    'use strict';
    
    for (var i =0; i < numCircles ; i++){
        var color = Math.floor(Math.random() * (colors.length - 1 + 1)) + 1,
            opacity = Number(Math.round(Math.random()+'e2')+'e-2'),
            revFaded = false,
            left = Math.floor(Math.random() * (canvas.width - 0 + 1)) + 0,
            top = Math.floor(Math.random() * (canvas.height - 0 + 1)) + 0,
            size = Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize,
            leftSpeed = (Math.floor(Math.random() * (maxSpeed - minSpeed + 1)) + minSpeed)/10,
            topSpeed = (Math.floor(Math.random() * (maxSpeed - minSpeed + 1)) + minSpeed)/10,
            expandState = expandState;
           
            while(leftSpeed == 0 || topSpeed == 0){
                leftSpeed = (Math.floor(Math.random() * (maxSpeed - minSpeed + 1)) + minSpeed)/10,
                topSpeed = (Math.floor(Math.random() * (maxSpeed - minSpeed + 1)) + minSpeed)/10;
            }
        var circle = {color:color, opacity:opacity, revFaded:revFaded, left:left, top:top, size:size, leftSpeed:leftSpeed, topSpeed:topSpeed, expandState:expandState };
        circles.push(circle);
    }
}

function build(){
    'use strict';
    
    for(var h = 0; h < circles.length; h++){
        var curCircle = circles[h];
        if(curCircle.opacity < 1 && !curCircle.revFaded){
            curCircle.opacity += fadeSpeed;
        }else if(curCircle.opacity > 0 && curCircle.revFaded){
            curCircle.opacity -= fadeSpeed;
        }else if (curCircle.opacity >= 1){
            curCircle.revFaded = true;
        }else if (curCircle.opacity <= 0){
            curCircle.revFaded = false;
        }
        context.fillStyle = colors[curCircle.color-1] + curCircle.opacity + ')';
        context.beginPath();
        if(curCircle.left > canvas.width+curCircle.size){
            curCircle.left = 0-curCircle.size;
            context.arc(curCircle.left, curCircle.top, curCircle.size, 0, 2 * Math.PI, false);
        }else if(curCircle.left < 0-curCircle.size){
            curCircle.left = canvas.width+curCircle.size;
            context.arc(curCircle.left, curCircle.top, curCircle.size, 0, 2 * Math.PI, false);
        }else{
            curCircle.left = curCircle.left+curCircle.leftSpeed;
            context.arc(curCircle.left, curCircle.top, curCircle.size, 0, 2 * Math.PI, false); 
        }
        
        if(curCircle.top > canvas.height+curCircle.size){
            curCircle.top = 0-curCircle.size;
            context.arc(curCircle.left, curCircle.top, curCircle.size, 0, 2 * Math.PI, false);

        }else if(curCircle.top < 0-curCircle.size){
            curCircle.top = canvas.height+curCircle.size;
            context.arc(curCircle.left, curCircle.top, curCircle.size, 0, 2 * Math.PI, false);
        }else{
            curCircle.top = curCircle.top+curCircle.topSpeed;
            if(curCircle.size != maxSize && curCircle.size != minSize && curCircle.expandState == false){
              curCircle.size = curCircle.size-0.1;
            }
            else if(curCircle.size != maxSize && curCircle.size != minSize && curCircle.expandState == true){
              curCircle.size = curCircle.size+0.1;
            }
            else if(curCircle.size == maxSize && curCircle.expandState == true){
              curCircle.expandState = false;
              curCircle.size = curCircle.size-0.1;
            }
            else if(curCircle.size == minSize && curCircle.expandState == false){
              curCircle.expandState = true;
              curCircle.size = curCircle.size+0.1;
            }
            context.arc(curCircle.left, curCircle.top, curCircle.size, 0, 2 * Math.PI, false); 
        }
        
        context.closePath();
        context.fill();
        context.ellipse;
    }
}


var xVal = 0;

window.requestAnimFrame = (function (callback) {
    'use strict';
    return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
        window.setTimeout(callback, 1000/60);
    };
})();

function animate() {
    'use strict';
    var canvas = document.getElementById("dot-canvas"),
        context = canvas.getContext("2d");

    // clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);


    // draw the next frame
    xVal++;
    build();

    //console.log("Prep: animate ==> requestAnimFrame");
    // request a new frame
    requestAnimFrame(function () {
        animate();
    });
}
window.onload = function () {
    'use strict';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    buildArray();
    animate();
};


window.onresize = function () {
    'use strict';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    animate();
};