//define a variable to access canvas properties by id name from html
var canvas = document.getElementById("canvas")

//define the drawing context of the canvas element
var ctx = canvas.getContext("2d") //canvas var is the object

//create a new image to eventually add to the canvas (this is instead of using an image tag/<img> in html)
var shapes = new Image()

//galaxy is now an image object and we can access any of the image attributes/properties that we might need
shapes.src = "images/shapes.png" //we can access .src becayse galaxy is an image object


//now "write" the image to the canvas page, an event must occue for this to happen
shapes.onload = function() {
    //drawing an image to the canvas
    //context.drawImage(imgObject, x, y, width, height)
    ctx.drawImage(shapes, 0, 0, 800, 800)

    //draw a rectangle
    ctx.fillStyle = "yellow" //solid fill of the shape
    ctx.strokeStyle="black"       //outline color
    ctx.lineWidth="5"            //width in pixels of stroke

    //use .fillRect and .strokeRect once styles have been specified
    ctx.fillRect(85, 302, 100, 100)  //context.fill goes x y width height
    ctx.strokeRect(85, 302, 100, 100) //context.strokerect is the same as before but it must match the fillrect if being applied to the same rectangle

    ctx.strokeStyle="rgb(255,0,0)"       //outline color
    ctx.lineWidth="5"            //width in pixels of stroke
    ctx.moveTo(86,682) //start position
    //next draw a line to the ending point xy
    ctx.lineTo(278,550) //end position
    ctx.stroke() //drwas the line

    //circle
    ctx.fillStyle = "#fff00" //solid fill of the shape
    ctx.strokeStyle="red"       //outline color
    ctx.lineWidth="5"            //width in pixels of stroke

    ctx.beginPath()
    ctx.arc(386, 442, 68, 0, (2*Math.PI), false)
    //ctx.lineTo(450, 250)
    ctx.closePath()
    ctx.fill()  //fills above shape
    ctx.stroke()

    //pentagon
    ctx.fillStyle="#ff00ff"
    ctx.strokeStyle="00fff"
    ctx.lineWidth="5"

    ctx.beginPath()  //begon for new shape
    ctx.moveTo(560,310)
    ctx.lineTo(666,285)
    ctx.lineTo(723,380)
    ctx.lineTo(650,465)
    ctx.lineTo(548,421)
    ctx.closePath()   //reunites precious end point with starting point
    ctx.fill()
    ctx.stroke()

    //star
    ctx.fillStyle="#55ddef"
    ctx.strokeStyle="yellow"
    ctx.lineWidth="2"

    ctx.beginPath()  //begon for new shape
    ctx.moveTo(636,497)//starting point of shape
    ctx.lineTo(668,554)//draws line tothis next point
    ctx.lineTo(734,567)
    ctx.lineTo(689,615)
    ctx.lineTo(697,682)
    ctx.lineTo(636,654)
    ctx.lineTo(575,682)
    ctx.lineTo(583,615)
    ctx.lineTo(538,568)
    ctx.lineTo(602,554)
    ctx.closePath()   //reunites precious end point with starting point
    ctx.fill()
    ctx.stroke()
}