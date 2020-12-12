// this is where the arrays go
var imageArray = []
imageArray[0] = "Disclamer.png"
imageArray[1] = "startingScreen.jpg"
imageArray[2] = "Admin Screen.jpg"

var bn1 = ["start", "Go to Admin"]
var bn2 = ["start", "Go to Weapons"]
var bn3 = ["start", "Go to Security"]
var bn4 = ["start", "Go to Storage"]
var bn5 = ["start", "Go to Electrical"]

var imposterBoard = ["Red", "Blue"]
//

// This is where the html links go
var image = document.querySelector("img");
var gameMessageDiv = document.querySelector("#output");
var whatToDoDiv = document.querySelector("#what");
var input = document.querySelector("#input");
var board = document.querySelector("#ImposterBoard");
var button1 = document.querySelector("#btn1");
var button2 = document.querySelector("#btn2");
var button3 = document.querySelector("#btn3");
var button4 = document.querySelector("#btn4");
var button5 = document.querySelector("#btn5");
//

// All the different vars
var mapImage = 0
var chosenAction = 0
var bns = 0
var blackSus = 1
var blueSus = 1
var brownSus = 1
var cyanSus = 1
var greenSus = 1
var limeSus = 1
var orangeSus = 1
var pinkSus = 1
var purpleSus = 1
var redSus = 1
var yellowSus = 1
var whiteSus = 1
var gameMessage = "Press Start to begin"
var doAction = "Start"
//

// This is where the randomised color selector will go based on what colors arn't being used
var colorSelected
var imposterColor = colorSelected
//

function btn1(){
    chosenAction = 1
    click()
}

function btn2(){
    chosenAction = 2
    click()
}
function btn3(){
    chosenAction = 3
    click()
}

function btn4(){
    chosenAction = 4
    click()
}

function btn5(){
    chosenAction = 5
    click()
}

function click(){
    if(mapImage === 0){
        if(chosenAction === 1){
            mapImage = 1
            gameMessage = "You are in the caffeteria it seems that everyone has gone off to do there tasks but you don't know where they went"
        }
        bns = 1
    }
    if(chosenAction === 1){
        if(mapImage === 0){
            mapImage = 1
            bns = 1
        }
    }
    
    if(chosenAction === 2){
        if(mapImage === 0){
            mapImage = 1
            bns = 1
        }
    }
    
    if(chosenAction === 3){
        if(mapImage === 0){
            mapImage = 1
            bns = 1
        }
    }
    
    if(chosenAction === 4){
        if(mapImage === 0){
            mapImage = 1
            bns = 1
        }
    }
    
    if(chosenAction === 5){
        if(mapImage === 0){
            mapImage = 1
            bns = 1
        }
    }
    document.querySelector('#btn1').textContent = bn1[bns]
    document.querySelector('#btn2').textContent = bn2[bns]
    document.querySelector('#btn3').textContent = bn3[bns]
    document.querySelector('#btn4').textContent = bn4[bns]
    document.querySelector('#btn5').textContent = bn5[bns]
    gameMessageDiv.innerHTML = "<br><em>" + gameMessage + "</em>";
    whatToDoDiv.innerHTML = "<br><em>" + doAction + "</em>";
    image.src = "images/" + imageArray[mapImage];
}

document.querySelector('#btn1').textContent = bn1[bns]
document.querySelector('#btn2').textContent = bn2[bns]
document.querySelector('#btn3').textContent = bn3[bns]
document.querySelector('#btn4').textContent = bn4[bns]
document.querySelector('#btn5').textContent = bn5[bns]
image.src = "images/" + imageArray[mapImage];
gameMessageDiv.innerHTML = "<br><em>" + gameMessage + "</em>";
whatToDoDiv.innerHTML = "<br><em>" + doAction + "</em>";
// output.innerHTML = actions[actionsPossible];