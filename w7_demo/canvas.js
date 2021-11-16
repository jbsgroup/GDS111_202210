//define a variable to access canvas properties by id name from html
var canvas = document.getElementById("canvas")

//define the drawing context of the canvas element
var ctx = canvas.getContext("2d") //canvas var is the object

//create a new image to eventually add to the canvas (this is instead of using an image tag/<img> in html)
var galaxy = new Image()

//galaxy is now an image object and we can access any of the image attributes/properties that we might need
galaxy.src = "images/galaxy.jpeg" //we can access .src becayse galaxy is an image object


//now "write" the image to the canvas page, an event must occue for this to happen
galaxy.onload = function() {
    //drawing an image to the canvas
    //context.drawImage(imgObject, x, y, width, height)
    ctx.drawImage(galaxy, 0, 0, 800, 600)


    //draw a rectangle
    //start with styling choices
    ctx.fillStyle = "rgb(0,0,255)" //solid fill of the shape
    ctx.strokeStyle="white"       //outline color
    ctx.lineWidth="5"            //width in pixels of stroke

    //use .fillRect and .strokeRect once styles have been specified
    ctx.fillRect(30, 30, 100, 100)  //context.fill goes x y width height
    ctx.strokeRect(30, 30, 100, 100) //context.strokerect is the same as before but it must match the fillrect if being applied to the same rectangle

    //draw a line
    //first need to move the "drawing cursor" to the starting point (x,t) of the line
    ctx.moveTo(0,0) //start position
    //next draw a line to the ending point xy
    ctx.lineTo(800,600) //end position
    ctx.stroke() //drwas the line

    //draw an opposide line/making an X across the canvas
    ctx.moveTo(0,600) //start position
    ctx.lineTo(800,0) //end position
    ctx.stroke() //drwas the line
}