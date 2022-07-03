canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
var mouseEvent=""
var lastPositionOfX, lastPositionOfY
color="black"
widthofLine=1
canvas.addEventListener("mousedown",my_mousedown)
function my_mousedown(e){
    color=document.getElementById("color").value 
    widthofLine=document.getElementById("width").value 
    mouseEvent="mousedown"

}
canvas.addEventListener("mouseup",my_mouseup)
function my_mouseup(e){
    mouseEvent="mouseup"
}
canvas.addEventListener("mouseleave", mouse_leave)
function mouse_leave(e){
    mouseEvent="mouseleave"
}
canvas.addEventListener("mousemove", my_mousemove)
function my_mousemove(e){
    currentPositionOfMouseX=e.clientX-canvas.offsetLeft
    currentPositionOfMouseY=e.clientY-canvas.offsetTop
    if (mouseEvent=="mousedown"){
        ctx.beginPath()
        ctx.strokeStyle=color
        ctx.lineWidth=widthofLine
        console.log("last position of X and Y cordinates are ")
        console.log(" X= "+lastPositionOfX+" Y= "+ lastPositionOfY  )
        ctx.moveTo(lastPositionOfX,lastPositionOfY)
        console.log("current position of X and Y are ")
        console.log("x= "+ currentPositionOfMouseX+ " Y= "+ currentPositionOfMouseY)
        ctx.lineTo(currentPositionOfMouseX,currentPositionOfMouseY)
        ctx.stroke()

    }
    lastPositionOfX=currentPositionOfMouseX
    lastPositionOfY=currentPositionOfMouseY
}

function clear_area(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}