//start by declaring known variables with starting values
//variable is data storage/info

var totalAmmo=6 //ammo cache value
var maxAmmo=6 //gun capacity for ammo

//below ensnares the current gun capacity for ammo is ful before we start
var currentAmmo=maxAmmo

//shoot function -- handles updating the current ammo on screenas button is clicked current ammo goes down
function shoot() {
    //conditional statement checks for truch, uses rational (conditional) operators
    if (currentAmmo> 0) {
        //lower current ammo in gun by 1
        //long math way (right of = happens first, storage happens right to left)
        currentAmmo=currentAmmo-1
        //faster way is currentAmmo--, decrementation; minus 1
    }//if ends here

    //once the statement code has run, update the screen
    //call the updating screen function --> call by stating the name
    updateScreen()
} //shoot() end

//function to update the roral and current ammo values on screen
function updateScreen() {
    //first, connect the html elements holding the ammo values to your js, and write inside the elements to the current ammo value
    document.getElementById("total-ammo").innerHTML="" + totalAmmo
    document.getElementById("current-ammo").innerHTML="" + currentAmmo

}//updatescreen() close

//functions can also be passed values, these values are called parameters (a,b) and must be send to the funtion during the call in order for the function to work, function relied on this data to do its job
function getDiff(a,b) {
    var c=a-b
    //once c is calculated, the value will be returned to where the funtion was called
    return c
}

//reload function, reload currnet guns ammo to fire again
function reload(){
    //find difference by calling getDiff and sending ammo values
    //oncegetDiff does its job, it returns c to where it was called
    //remember, storage( = ) happens from right to left
    var difference = getDiff(maxAmmo,currentAmmo) //getDiff (a=maxAmmo, b=currentAmmo)
    if (totalAmmo >= difference){
        currentAmmo+=difference //currentammo=currentammo+difference
        totalAmmo-=difference //totalammo=totalammo-difference
    }

    else{
        //when the if condition is false, the else runs
        currentAmmo+=totalAmmo
        totalAmmo-=totalAmmo //or totalAmmo=0
    }

    updateScreen()

}