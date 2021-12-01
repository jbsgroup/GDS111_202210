//this js is for key input controls

//set up variables for the key input switches
var up = false //boolean data type: holds a value of true or false
var down = false
var left = false
var right = false

//add a keywdown event listener using jquery
//pressing on a key will make a boolean value of tru and release will make a false

//true key binding
$(document).keydown(function(e){

    if(e.keyCode == 38){
        
        up = true
    }

    if(e.keyCode == 40){
        
        down = true
    }

    if(e.keyCode == 37){
        
        left = true
    }

    if(e.keyCode == 39){
        
        right = true
    }



})

//false key binding
$(document).keyup(function(e){

    if(e.keyCode == 38){
        
        up = false
    }

    if(e.keyCode == 40){
        
        down = false
    }

    if(e.keyCode == 37){
        
        left = false
    }

    if(e.keyCode == 39){
        
        right = false
    }
    


})