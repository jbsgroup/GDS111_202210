//RIDDLES JAVASCRIPT file
//JS is a scripting language that can change stuff on the html page; it is not a markup language so it will follow more fundamental logic related to other computer programming

//VARIABLES - variables store data to be used in the script/program; they are friendly names to refer to info as

//each variable will store the answer to riddle question
//JS requires variables to be declared as such
var store1 = "the fuuuuuuutuuuuure" //answer to question 1
var store2 = "the post office" //answer to quesion 2
var store3 = "NOON" //answer to question 2

//VARIABLE NAMES MUST BE UNIQUE they are also case sensitive
//    total =/= Total =/= TOTAL

//FUNCTIONS - perform tasks; they hve a set of processes assigned to them, and when they are called their tassk are performed
//function below will talk to the HTML DOM(document object model) and get specific elements by their id, then push info to their inner HTML(inbetween open and close of tag)

function answer1() {
    document.getElementById("question1").innerHTML=store1;
}
function answer2() {
    document.getElementById("question2").innerHTML=store2;
}
function answer3() {
    document.getElementById("question3").innerHTML=store3;
}