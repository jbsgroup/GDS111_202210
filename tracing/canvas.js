var canvas = document.getElementById("canvas") //store canvas element as a js object
var ctx = canvas.getContext("2d") //set up the context object relative to canvas

var tracing = new Image()
tracing.src = "images/shapes.png"  //img src="filepath/filenaame"

tracing.onload = function() {

    ctx.drawImage(tracing, 0, 0, 800, 800)

    //set up styling(fill color, stroke color, line width of stroke) before actually drawing
    ctx.fillStyle = "rgba(255, 0, 0, 0.5)"
    //draw a rectangle
    //context object.fillRect(x, y, width, height)
    ctx.fillRect(66, 80, 119, 541)



    //line (use moveto to get the cursor to drop the first point then lineto to draw it)
    ctx.strokeStyle="rgba(0,0,255,0.5)"
    ctx.moveTo(588,222)
    ctx.lineTo(702,68)
    ctx.stroke()
    

    //circle made out of full arc
    ctx.fillStyle = "rgba(0, 255, 0, 0.5)"
    //contextobject.arc(x, y, radius ,startangle, endangle ,iscountercloclwise)
    ctx.beginPath()
    ctx.arc(422, 208, 86, 0, (2*Math.PI), false)
    ctx.lineTo(476,141)
    ctx.closePath()
    ctx.fill()

    //triangle
    //set up style
    ctx.fillStyle="rgba(0,0,255,0.5)"
    //gotta map each point
    ctx.beginPath()
    ctx.moveTo(362,448)
    ctx.lineTo(704,326)
    ctx.lineTo(639,683)
    ctx.closePath() //auto lines back to starting position
    ctx.fill()

    ctx.strokeStyle="rgba(180,0,180,0.5)"
    ctx.moveTo(41,749)
    ctx.lineTo(758,749)
    ctx.stroke()

}