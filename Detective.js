// this is where the arrays go
var imageArray = []
imageArray[0] = "Disclamer.png"
imageArray[1] = "startingScreen.jpg"
imageArray[2] = "Admin Screen.jpg"
imageArray[3] = "Electrical.jpg"

var bn1 = ["start", "Go to Admin", "Use Admin Screen", "Return to Caffetteria"]
var bn2 = ["start", "Go to Electrical", "Search for Body", "Fix Lights"]
var bn3 = ["start", "Go to Security", "Return to Caffetteria", "Go to Security"]
var bn4 = ["start", "Go to Storage", "Go to Storage", " Go to Storage"]
var bn5 = ["start", "Go to Weapons", "Watch Vent", "Watch Vent"]

var imposterBoard = ["Red", " Blue", " Green", " Yellow", " Orange", " Black", " White", " Purple", " Cyan", " Brown", " Lime", " Pink"]
//
// This is where the html links go
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

var image = document.querySelector("img");
var gameMessageDiv = document.querySelector("#output");
var whatToDoDiv = document.querySelector("#what");
var input = document.querySelector("#input");
var detectiveDiv = document.querySelector("#detective")
var button1 = document.querySelector("#btn1");
var button2 = document.querySelector("#btn2");
var button3 = document.querySelector("#btn3");
var button4 = document.querySelector("#btn4");
var button5 = document.querySelector("#btn5");
random = getRandomInt(13);
var imposter = imposterBoard[random - 1]
//

// All the different vars
var mapImage = 0
var mapedImage = 0
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
            mapedImage = 1
            gameMessage = "You are in the caffeteria it seems that everyone has gone off to do there tasks but you don't know where they went"
        }
        if(chosenAction === 2){
            mapedImage = 1
            gameMessage = "You are in the caffeteria it seems that everyone has gone off to do there tasks but you don't know where they went"
        }
        if(chosenAction === 3){
            mapedImage = 1
            gameMessage = "You are in the caffeteria it seems that everyone has gone off to do there tasks but you don't know where they went"
        }
        if(chosenAction === 4){
            mapedImage = 1
            gameMessage = "You are in the caffeteria it seems that everyone has gone off to do there tasks but you don't know where they went"
        }
        if(chosenAction === 5){
            mapedImage = 1
            gameMessage = "You are in the caffeteria it seems that everyone has gone off to do there tasks but you don't know where they went"
        }
        console.log("Game message");
        bns = 1
    }
    
    if(mapImage === 1){
        if(chosenAction===1){
            mapedImage = 2
            gameMessage = "You walk in Admin you know that you can see where everyone is or you can do other options"
            doAction = "What do you want to do in Admin"
            bns = 2
            console.log("action");
        }
        if(chosenAction===2){
            mapedImage = 3
            gameMessage = "You walk to The Entance of Electrical but wait in the hallway, The lights just turned off do you flee or go in"
            doAction = "What do you want to do at Electrical"
            bns = 1
            console.log("action");
        }
        if(chosenAction===3){
            mapedImage = 4
            gameMessage = "3"
            doAction = "3"
            bns = 1
            console.log("action");
        }
        if(chosenAction===4){
            mapedImage = 5
            gameMessage = "4"
            doAction = "4"
            bns = 1
            console.log("action");
        }
        if(chosenAction===5){
            mapedImage = 6
            gameMessage = "5"
            doAction = "5"
            bns = 1
            console.log("action");
        }
        console.log("Game message");
    }
    if(mapImage === 2){
        if(chosenAction===1){
            mapedImage = 2
            gameMessage = "6"
            doAction = "6"
            bns = 1
        }
        if(chosenAction===2){
            mapedImage = 3
            gameMessage = "7"
            doAction = "7"
            bns = 1
        }
        if(chosenAction===3){
            mapedImage = 4
            gameMessage = "8"
            doAction = "8"
            bns = 1
        }
        if(chosenAction===4){
            mapedImage = 5
            gameMessage = "9"
            doAction = "9"
            bns = 1
        }
        if(chosenAction===5){
            mapedImage = 6
            gameMessage = "10"
            doAction = "10"
            bns = 1
        }
    }

    mapImage = mapedImage

    document.querySelector('#btn1').textContent = bn1[bns]
    document.querySelector('#btn2').textContent = bn2[bns]
    document.querySelector('#btn3').textContent = bn3[bns]
    document.querySelector('#btn4').textContent = bn4[bns]
    document.querySelector('#btn5').textContent = bn5[bns]
    gameMessageDiv.innerHTML = "<br><em>" + gameMessage + "</em>";
    whatToDoDiv.innerHTML = "<br><em>" + doAction + "</em>";
    detectiveDiv.innerHTML = "<br><em>" + imposterBoard + "</em>";
    image.src = "images/" + imageArray[mapImage];
    console.log(gameMessage);
    console.log(doAction);
}

document.querySelector('#btn1').textContent = bn1[bns]
document.querySelector('#btn2').textContent = bn2[bns]
document.querySelector('#btn3').textContent = bn3[bns]
document.querySelector('#btn4').textContent = bn4[bns]
document.querySelector('#btn5').textContent = bn5[bns]
image.src = "images/" + imageArray[mapImage];
gameMessageDiv.innerHTML = "<br><em>" + gameMessage + "</em>";
whatToDoDiv.innerHTML = "<br><em>" + doAction + "</em>";
detectiveDiv.innerHTML = "<br><em>" + imposterBoard + "</em>";
// output.innerHTML = actions[actionsPossible];

mapImage = mapedImage