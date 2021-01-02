// this is where the arrays go
var imageArray = []
imageArray[0] = "Disclamer.png"
imageArray[1] = "startingScreen.jpg"
imageArray[2] = "Admin Screen.jpg"
imageArray[3] = "Electrical.jpg"
imageArray[4] = "Admin.png"
imageArray[5] = "AdminL.png"
imageArray[6] = "Caffetteria.png"
imageArray[7] = "CaffetteriaL.png"
imageArray[8] = "Cams.png"
imageArray[9] = "Comms.png"
imageArray[10] = "CommsL.png"
imageArray[11] = "Medbay.png"
imageArray[12] = "MedbayL.png"
imageArray[13] = "Nav.png"
imageArray[14] = "NavL.png"
imageArray[15] = "o2.png"
imageArray[16] = "o2L.png"
imageArray[17] = "Reactor.png"
imageArray[18] = "ReactorL.png"
imageArray[19] = "Security.png"
imageArray[20] = "SecurityL.png"
imageArray[21] = "Shields.png"
imageArray[22] = "ShieldsL.png"
imageArray[23] = "Storage.png"
imageArray[24] = "StorageL.png"
imageArray[25] = "Weapons.png"
imageArray[26] = "WeaponsL.png"
imageArray[27] = "ElectricalL.png"
imageArray[28] = "ElectricalL.png"

var bn1 = []
var bn2 = []
var bn3 = []
var bn4 = []
var bn5 = []
// Start
bn1[0] = "Start"
bn2[0] = "Start"
bn3[0] = "Start"
bn4[0] = "Start"
bn5[0] = "Start"
// Begining
bn1[1] = "Admin"
bn2[1] = "Electrical"
bn3[1] = "Security"
bn4[1] = "Storage"
bn5[1] = "Weapons"
// Admin
bn1[2] = "Access Admin Panel"
bn2[2] = "Search For Body"
bn3[2] = "Return to Caffetteria"
bn4[2] = "Go to Storage"
bn5[2] = "Watch the Vent"
// Electrical
bn1[3] = "Return to Caffetteria"
bn2[3] = "Fix Lights"
bn3[3] = "Go to Security"
bn4[3] = "Go to Storage"
bn5[3] = "Watch the Vent"
// Security
bn1[4] = "Return to Caffetteria"
bn2[4] = "Watch Cams"
bn3[4] = ""
bn4[4] = ""
bn5[4] = ""
// Storage
bn1[5] = ""
bn2[5] = ""
bn3[5] = ""
bn4[5] = ""
bn5[5] = ""
//Weapons
bn1[6] = ""
bn2[6] = ""
bn3[6] = ""
bn4[6] = ""
bn5[6] = ""

var imposterBoard = ["Red", " Blue", " Green", " Yellow", " Orange", " Black", " White", " Purple", " Cyan", " Brown", " Lime", " Pink"]
var susBoard = ["Red", " Blue", " Green", " Yellow", " Orange", " Black", " White", " Purple", " Cyan", " Brown", " Lime", " Pink"]
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
var random = getRandomInt(13);
var imposter = imposterBoard[random - 1]
imposterBoard.splice(random - 1, 1)
//

function master(){
    console.log(imposter);
}

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
        ;
        bns = 1
    }
    
    if(mapImage === 1){
        if(chosenAction===1){
            mapedImage = 4
            gameMessage = "You walk in Admin you know that you can see where everyone is or you can do other options"
            doAction = "What do you want to do in Admin"
            bns = 2
            ;
        }
        if(chosenAction===2){
            mapedImage = 28
            gameMessage = "You walk to The Entance of Electrical but wait in the hallway, The lights just turned off do you flee or go in"
            doAction = "What do you want to do at Electrical"
            bns = 3
            ;
        }
        if(chosenAction===3){
            mapedImage = 4
            gameMessage = "You walk into Security and You see the camera monitors but you can't see what they display"
            doAction = "What do you do in Security"
            bns = 1
            ;
        }
        if(chosenAction===4){
            mapedImage = 5
            gameMessage = "4"
            doAction = "4"
            bns = 1
            ;
        }
        if(chosenAction===5){
            mapedImage = 6
            gameMessage = "5"
            doAction = "5"
            bns = 1
            ;
        }
        ;
    }
    if(mapImage === 2){
        if(chosenAction===1){
            mapedImage = 2
            gameMessage = ""
            doAction = ""
            bns = 1
        }
        if(chosenAction===2){
            mapedImage = 3
            gameMessage = ""
            doAction = ""
            bns = 1
        }
        if(chosenAction===3){
            mapedImage = 4
            gameMessage = ""
            doAction = ""
            bns = 1
        }
        if(chosenAction===4){
            mapedImage = 5
            gameMessage = ""
            doAction = ""
            bns = 1
        }
        if(chosenAction===5){
            mapedImage = 6
            gameMessage = ""
            doAction = ""
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
    detectiveDiv.innerHTML = "<br><em>" + susBoard + "</em>";
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
detectiveDiv.innerHTML = "<br><em>" + susBoard + "</em>";
// output.innerHTML = actions[actionsPossible];

mapImage = mapedImage