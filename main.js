var last_position_of_x, last_position_of_y;
var width = screen.width;
var height = screen.height;
var new_width = width - 70;
var new_height = height-300;

    canvas = document.getElementById('boogle3');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;
    if(width < 992){
        document.getElementById("boogle3").width = new_width;
        document.getElementById("boogle3").height = new_height;
        document.body.style.overflow = "hidden";
    }

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
         last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
    canvas.addEventListener("touchmove", my_touchmove);

    function my_touchmove(e)
    {

         current_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_x, current_position_of_y, 40, 0, 2 * Math.PI);

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.arc(last_position_of_x, last_position_of_y, 40, 0, 2 * Math.PI);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_x + "y = " + current_position_of_y);
        ctx.arc(current_position_of_x, current_position_of_y, 40, 0, 2 * Math.PI);
        ctx.stroke();

        last_position_of_x = current_position_of_x; 
        last_position_of_y = current_position_of_y;
    }
}