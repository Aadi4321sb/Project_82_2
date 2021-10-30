var mouseEvent = "empty";
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
color = ("blue");
width_of_line = 1;
radius = 10;
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{



mouseEvent = "mousedown";

}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{

    mouseEvent = "mouseleave";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{

    mouseEvent = "mouseUP";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{

    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

if (mouseEvent == "mousedown") {
console.log("Current position of x and y coordinates =");
console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = width_of_line;
ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, "0", 2*Math.PI);
ctx.stroke();
}
}

