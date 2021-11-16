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


    //draws a circle
    //requires a context.beginPath(), then context.arc(x, y, radius, start angle, end angle, counterclockwise or not)
    //x starting x and y is the center of the circle, radius is center to outside
    //isCounterClockwise is a boolean (true/false)
    ctx.beginPath()
    ctx.arc(400, 300, 50, 0, (2*Math.PI), false)
    ctx.lineTo(450, 250)
    ctx.closePath()
    ctx.fill()  //fills above shape

    //draw irregular shape
    //set up the styling first
    ctx.fillStyle="#55ddef"
    ctx.strokeStyle="yellow"
    ctx.lineWidth="2"

    ctx.beginPath()  //begon for new shape
    ctx.moveTo(650,100)//starting point of shape
    ctx.lineTo(700,140)//draws line tothis next point
    ctx.lineTo(675,200)
    ctx.lineTo(625,200) 
    ctx.lineTo(600,140)
    ctx.closePath()   //reunites precious end point with starting point
    ctx.fill()
    ctx.stroke()

    //draw another image to canvas
    //creates an instance of the image
    var mario = new Image()
    //links to source of image file
    mario.src="images/mario.png"

    //callback function leads the image and draws is to the canveas each time the page loads
    mario.onload=function(){
        ctx.drawImage(mario, 625, 120, 40, 80)
    }
}