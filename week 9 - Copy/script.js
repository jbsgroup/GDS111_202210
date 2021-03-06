//week 9 asteroid avoidance shell build

//set up starting elements (nessecary)
//these are global values and will be accessible to every function in the file

var c = document.querySelector("canvas") //grabs element type instead of ID
//var c = document.getElementById("canvas")
var context = c.getContext("2d")
var timer = requestAnimationFrame(main)
var gravity = 1
var asteroids = new Array()
var numAsteroids = 10
var gameOver = true
var score = 0

var gameStates = []
var currentState = 0
var ship

//random value generator function
function randomRange(high, low){

    return Math.random() * (high-low) + low

}//randomRange close

//function/class for the asteroids
function Asteroid(){

    this.radius = randomRange(10,2)
    this.x = randomRange(c.width - this.radius, 0 + this.radius)
    this.y = randomRange(c.height - this.radius, 0 + this.radius) - c.height
    this.vx = randomRange(-5, -10) //horizontal velocity
    this.vy = randomRange(10, 5)  //vertical velocity
    this.color = "white"
    this.draw = function (){  //draw asteroid to canvas
        context.save()
        context.beginPath()
        context.fillStyle = this.color
        context.arc(this.x, this.y, this.radius,0, 2*Math.PI, true)
        context.closePath()
        context.fill()
        context.restore()
    }

}  //asteroid


function gameStart(){
    //for loop to make lots of asteroids
    for(var i = 0; i < numAsteroids; i++){
        //i is the index of the array, this is a loop that runs while i is less than the value stored to numasteroids, i++ means i grows +1 each time through the loop

        asteroids[i] = new Asteroid()
        //each time through the loop a new asteroid is created and saved in the asteroids array

        //create instance of the ship for the game
        ship = new PlayerShip()
    }//for close
}//gameStart close

//function for the players ship
function PlayerShip(){

    this.x = c.width / 2
    this.y = c.height / 2

    this.w = 20 //width
    this.h = 20 //height

    this.vx = 0
    this.vy = 0

    this.up = false
    this.down = false
    this.left = false
    this.right = false

    this.flamelength = 30

    //draw the sjip and flame
    this.draw = function(){
        context.save()
        context.translate(this.x, this.y)

        //flame for the ship
        if(this.up == true){
            context.save()
            //adjust flame length for flicker effect
            if(this.flamelength == 30){
                this.flamelength = 10
            }
            else{
                this.flamelength = 30
            }

            context.fillStyle = "lime" //flame color
            context.beginPath()
            context.moveTo(0, this.flamelength)
            context.lineTo(5, 5)
            context.lineTo(-5,5)
            context.lineTo(0,this.flamelength)
            context.closePath()
            context.fill()
            context.restore()

        }

        /*context.beginPath()

        context.fillStyle = "hotpink" //ship color
        context.moveTo(0,-13)
        context.lineTo(10,10)
        context.lineTo(-10,10)
        context.lineTo(0,-13)
        context.closePath()
        context.fill()
        context.restore()*/
        var imageObj = new Image()
        imageObj.src = "images/shrek.png" //png for transparency
        imageObj.x = 400
        imageObj.y = 300
        console.dir(imageObj)
    }
    
    this.move = function(){
        this.x+= this.vx
        this.y+= this.vy

        //adding boundaries to keep ship on screen
        if(this.y > c.height - 20){
            this.y = c.height - 20
            this.vy = 0
        }
        //checks to see if we are past top of canvas
        if(this.y < 0 - 13){
            this.y=13
            this.vy=0
        }
    
        //check to see if we are past right or left side of canvas
        //right
        if(this.x > c.width - 10){
        this.x = c.width - 10
        this.vx = 0
        }
        //left
        if(this.x < 0+10){
        this.x = 10
        this.vx = 0
        }
    }
}//ship close

//create the instance of the ship for the game
//var ship = new PlayerShip()--------------------------------commented out since now its in gamestart

document.addEventListener("keydown", keyPressDown)
document.addEventListener("keyup", keyPressUp)

//functions for the controls
function keyPressDown(e){
    console.log("key press down()")
    //console.log("Key Down" + e.keycode) //tells you the keycodes

    if(gameOver == false){
        if(e.keyCode === 38){
            ship.up = true
        }
        if(e.keyCode === 37){
            ship.left = true
        }
        if(e.keyCode === 39){
            ship.right = true
        }
        if (e.keyCode === 40){
            ship.down === true
        }
    }//ifgameover = false close

    if(gameOver == true){
        console.log("gameOver === true")

        if(e.keyCode === 13){  //13=enter key
            console.log("recog enter key")
            console.log("current state is 2")

            if(currentState == 2){
                score=0
                numAsteroids=10
                asteroids=[]
                gameStart()
                currentState=0
             }

            else{
                gameStart()
                gameOver = false
                currentState=1
                setTimeout(scoreTimer,1000)
            }

        }
    }
} //keypressdown

function keyPressUp(e){

    //console.log("Key Up" + e.keycode) //tells you the keycodes
    if(e.keyCode === 38){
        ship.up = false
    }
    if(e.keyCode === 37){
        ship.left = false
    }
    if(e.keyCode === 39){
        ship.right = false
    }
    //not coding for down because ship doesnt go that way

} //keypressup

//GAME STATES FOR START MENU< GAMEPLAY< AND GAME OVER

gameStates[0] = function(){//start screen
    context.save()
    context.font = "30px Comic Sans MS"
    context.fillStyle = "cyan"
    context.textAlign = "center"
    context.fillText("Asteroid Avoidance", c.width/2, c.height/2 - 30)
    context.font = "15px Comic Sans MS"
    context.fillText("Press ENTER to start!", c.width/2, c.height/2+20)
    context.restore()
}

gameStates[1] = function(){ //gameplay state
    //pasted code from main()
    //display score
    context.save()

    context.font = "15px Arial" //make your own later
    context.fillStyle = "white" 
    context.fillText("Score: " + score.toString(), c.width-150, 30)
    context.restore()

    //w9d2 show gravity stuff

    if(ship.up == true){
        ship.vy = -10
    }
    else{
        ship.vy = 3
    }

    if(ship.left == true){
        ship.vx = -3
    }
    else if(ship.right == true){
        ship.vx = 3
    }
    else{
        ship.vx = 0
    }


    for(var i = 0; i < asteroids.length; i++){
        //using the distance formula to find the distance between ship and asteroid
        var dX = ship.x - asteroids[i].x
        var dY = ship.y - asteroids[i].y
        var dist = Math.sqrt((dX*dX) + (dY*dY))

        //check for collision and if so end game
        if(detectCollision(dist, (ship.h/2 + asteroids[i].radius))){
            //console.log(secret stuff for w9d2")
            gameOver = true
            currentState = 2  //replaces removeEventListener needs
            //document.removeEventListener("keydown", keyPressDown)
            //document.removeEventListener("keyup", keyPressUp)
        }

        //check to see if asteroid is offscreen
        if(asteroids[i].y > c.height + asteroids[i].radius){
            //reset asteroid position
            asteroids[i].y = randomRange(c.height-asteroids[i].radius, 0 + asteroids [i].radius) - c.height
            asteroids[i].x = randomRange(c.width - asteroids[i].radius, 0 + asteroids[i].radius)
        }

        if(gameOver == false){
            asteroids[i].y += asteroids[i].vy
        }
        asteroids[i].draw()
    }

    ship.draw()
    console.log("past ship.draw()")
    if(gameOver == false){
        ship.move()
    }

    while(asteroids.length < numAsteroids){
        //add new asteroid to array
        asteroids.push(new Asteroid())
    }
}

gameStates[2] = function(){ //game over

    context.save()
    context.font = "30px Comic Sans MS"
    context.fillStyle = "white"
    context.textAlign = "center"
    context.fillText("ur bad lmao ur puny score was "+score.toString(), c.width/2, c.height/2 - 30)
    context.font = "15px Comic Sans MS"
    context.fillText("Press ENTER to play again", c.width/2, c.height/2+20)
    context.restore()

}

//main function, makes it all happen
function main(){


    context.clearRect(0, 0, c.width, c.height)

    /*
        where original gameplay code was
    */
   gameStates[currentState]() //allows screen to follor appropriate state

    timer = requestAnimationFrame(main)

}//main close

function scoreTimer(){
    if(gameOver==false){
        score++ //adds +1 to game score on screen
        if(score % 5 == 0){ //if socre /5 has a remainer of 0

            numAsteroids += 5 //add more asteroids
            console.log(numAsteroids)
        }
        setTimeout(scoreTimer, 1000)
    }
}//scoreTimer close
//scoreTimer()

function detectCollision(distance, calcDistance){
    return distance < calcDistance //will return true or false falue
}