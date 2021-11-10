//RPS part 1 javascript

//create an array that will store the images being used
//ARRAY: like a variable (stores data) but it can contain more than one value

var pics = new Array() //created an empty Array (must be capitalized)

//asign values to array --"population"
//[#] denoted index, like a house number and array is the street name, array name + index gives access to indiv value
pics[0] = "images/rock.jpg"
pics[1] = "images/paper.jpg"
pics[2] = "images/scissors.jpg"

var pics2 = new Array()

pics2[0] = "images/rock2.jpg"
pics2[1] = "images/paper2.jpg"
pics2[2] = "images/scissors2.jpg"

//create array holding the button elements
//document query elector all grabs all of one element type
var btn = document.querySelectorAll("button")

//check your stored data in the console
console.log(btn) //used for testing, requires dev tools to be open

//make buttons clickable and runnable also for the game
//add event listener to each button
btn[0].addEventListener("click", function (e) {play(0)})
btn[1].addEventListener("click", function (e) {play(1)})
btn[2].addEventListener("click", function (e) {play(2)})

//arrays that store the player and computer options, one array for each
//player ID-pId
var pId= new Array("rock_p", "paper_p", "scissors_p") 
//pId[1] = "paper_p"
//computer ID=cId
var cId= new Array("rock_c", "paper_c", "scissors_c") 

//create a function that will swap regular images with highlighted ones
function swap(id, image){
    //access the image elements by ID from the HTML document
    document.getElementById(id).src = image
}

//play function
function play(id){
    //setting up stored image paths (src) in js to match the html ones
    //swap calls the function, this gets its code to run
    //values supplies inside of () are passed into the parameter variables
    swap(pId[0], pics[0])
    swap(pId[1], pics[1])
    swap(pId[2], pics[2])

    swap(cId[0], pics[0])
    swap(cId[1], pics[1])
    swap(cId[2], pics[2])

    //store the choices to variables (player and computer)
    var p_choice = id

    //randomize the computers choice
    var c_choice = Math.floor(Math.random() * 2.9)

    //swap starting images with the highlighted ones
    swap(pId[p_choice], pics2[p_choice])
    swap(cId[c_choice], pics2[c_choice])

    //switch time - switch statements give us the option to determine a set of code to run based on a predetermined case value
    switch(p_choice){
        //cases need to be built for every option pchoice can be

        //rock
        case 0://case for when p_choice == 0
            if (c_choice == 0){
                //call ShowResults() and pass correct values for pchoice cchoice and results
                showResults("Rock!", "Rock", "its a draw")
            }
            else if (c_choice==1){
                showResults("Rock!", "Paper", "You Lost")
            }
            else{
                showResults("Rock!", "Scissors", "You ROCK hAh get it")
            }

        //break statements breaks us out of switch/case
        break

        //paper
        case 1:
            if (c_choice == 0){
                showResults("Paper", "Rock", "You won")
            }
            else if (c_choice==1){
                showResults("Paper", "Paper", "DRAW")
            }
            else{
                showResults("Scissors", "Paper", "you lose")
            }

        //break statements breaks us out of switch/case
        break

        //scissors
        case 2:
            if (c_choice == 0){
                //alert the user theres been a draw
                showResults("Scissors!", "Rock", "You lost")
            }
            else if (c_choice==1){
                showResults("Scissors", "Paper", "u win congrats")
            }
            else{
                showResults("Scissors", "Scissors", "DRAW")
            }

        //break statements breaks us out of switch/case
        break
    }//switch statement

}//play() close

//function that writes the results back to the html page
function showResults(pChoice, cChoice, results){
    document.getElementById("pChoice").innerHTML = pChoice
    document.getElementById("cChoice").innerHTML = cChoice
    document.getElementById("results").innerHTML = results

}