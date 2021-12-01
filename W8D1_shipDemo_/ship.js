//js file to make a ship in html canvas
function Ship(){

    //the "this" keyword references the current object you are inside of (in the code block) everything in js is an object so when "this" is talking about ship

    this.x = 100 //x axis coord start position
    this.y = 100 //y axis coord start potition
    this.color = "black" //outline color
    this.fillStyle = "lime" //interior color

    //velocity variable for the x and y axis
    this.vx = 0
    this.vy = 0
     
    //acceleration variables for the x and y axis
    this.ax = 1
    this.ay = 1

    //function "move" that will add velocity to the position of the ship
    this.move = function(){
        this.x += this.vx //adds velocity value to x coord point
        this.y += this.vy //adds velocity value to y coord point
    }

    this.draw = function(){
        /*
        drawing the ship to the canvas (triangle)
        -----------------------------------------

        //save the current state of the canvas
        context.save()

        //move the point of origin 0,0 to the ships current x and y coords
        context.translate(this.x, this.y)

        //draw the ship
        context.lineStyle = this.color
        context.fillStyle = this.fillStyle

        //start point at current spot on line 34
        context.beginPath()

        //draw the triangle/ship
        context.moveTo(25,0) //relative to 100,100 not 0,0
        context.lineTo(-25,25)
        context.lineTo(-25,-25)

        context.closePath()

        context.stroke()
        context.fill()
        context.restore()

        */

        //image as the stip (x-wing)

        var imageObj = new Image()
        imageObj.src = "images/xwing.png" //png for transparency

        //save current state of canvas
        context.save()

        //move point of origin 0,0 to ships starting x and y coords
        context.translate(this.x, this.y)

        //draw the image to the canvas context
        //drawImage(image, x coord of top left corner, y coord of top left corner, width of image, height of image
        context.drawImage(imageObj, -100, -50, 100, 200)
        context.restore()

    }

}
