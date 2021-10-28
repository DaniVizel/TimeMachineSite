// GLOBAL VARIABLES
var mouseX;


//RUNNABLE CODE
document.onmousemove = getMousePos;


// FUNCTIONS

function getMousePos(event){
    // console.log(event.clientX);
    var mouseX = event.clientX;
    console.log(mouseX);

    $(".greenfill").css("height", mouseX/6 + "px");
    // how do i set percentage of vw to mouse X pos?
}

console.log("timemachine");
