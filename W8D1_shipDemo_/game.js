//js file that runs the game and connects the functionality of ship,js and controls.js to html

var canvas
var context

//variable for the animation timer
var timer

var ship //the ship

var friction //slows down velocity

//function to ready the canvas and starting position of the ship
$(document).ready(function(e){

    //assign the canvas element to the canvas var
    canvas = $("#canvas")//jquery version of document.getElementById("#canvas")
    context = canvas.get(0).getContext("2d")

    ship = new Ship() //Ship() was defined in ship.sj

    //fricction and power
    friction = 0.95
    ship.power = 1
    timer - setInterval("animate();",33) //33 millisecond (1000 milliseconds in a second)

    

})//end of ready()

//animate the shiz
function animate(){

    context.clearRect(0,0,canvas.width(),canvas.height())

    //check to see if keyCode calues are up or down conects ro the controls.s
    if(up) { //if current value of up is true

        //when up key is true(being pressed)
        ship.vy -= ship.ax * ship.power
        //line 39 is saying ship.vy = ship.vy - (ship.ax*ship.power)
        //ships velocity of y axis is lowered by its current acceleration and power

    }

    if(down){ //current value of right is true

        ship.vy+= ship.ax * ship.power

    }

    if(right){

        //add acceleration, aka move right
        ship.vx += ship.ax * ship.power
    }

    if(left){

        //subtract acceleration, aka move left
        ship.vx -= ship.ax * ship.power
    }

    //apply friction to the velocity - realistic slowdown, speed increases/decreases never instant
    ship.vx *= friction
    ship.vy *= friction

    //move and redraw ship   .function() are from ship.js Ship()
    ship.move()
    ship.draw()

    //ship appears on left side of leaves on right
    if (ship.x > canvas.width() + 25){
        //if the current ship x coord is greater than beyond the canvas wisth + 25 (size of the ship)

        //move ship x coord
        ship.x = -25
    }

    //leaves top, appears at bottom
    if (ship.y > canvas.height() + 25){
        //if the current ship x coord is greater than beyond the canvas wisth + 25 (size of the ship)

        //move ship x coord
        ship.y = -25
    }

    //leaves left, appears at right
    if (ship.x < 0-25){ //0 is x coord of left margin, 25 is length of ship
        //if the current ship x coord is greater than beyond the canvas wisth + 25 (size of the ship)

        //move ship x coord
        ship.x = 825 //800 is x coord of right margin, 25 is length of ship
    }

        //leaves bottom, appears at right
        if (ship.y < 0-25){ //0 is x coord of top margin, 25 is height of ship
            //if the current ship x coord is greater than beyond the canvas wisth + 25 (size of the ship)
    
            //move ship x coord
            ship.y = 825 //800 is x coord of top margin, 25 is height of ship
        }

}///close of animate

