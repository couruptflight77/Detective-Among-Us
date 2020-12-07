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

var colorArray = []
colorArray[0] = "Red Imposter.png"
colorArray[1] = "Not Red.png"
colorArray[2] = "Blue Imposter.png"
colorArray[3] = "Not Blue.png"
colorArray[4] = "Green Imposter.png"
colorArray[5] = "Not Green.png"
colorArray[6] = "Pink Imposter.png"
colorArray[7] = "Not Pink.png"
colorArray[8] = "Orange Imposter.png"
colorArray[9] = "Not Orange.png"
colorArray[10] = "Yellow Imposter.png"
colorArray[11] = "Not Yellow.png"
colorArray[12] = "Black Imposter.png"
colorArray[13] = "Not Black.png"
colorArray[14] = "White Imposter.png"
colorArray[15] = "Not White.png"
colorArray[16] = "Purple Imposter.png"
colorArray[17] = "Not Purple.png"
colorArray[18] = "Brown Imposter.png"
colorArray[19] = "Not Brown.png"
colorArray[20] = "Cyan Imposter.png"
colorArray[21] = "Not Cyan.png"
colorArray[22] = "Lime Imposter.png"
colorArray[23] = "Not Lime.png"
//

// This is where the html links go
var image = document.querySelector("img");
var output = document.querySelector("#output");
var input = document.querySelector("#input");
var button1 = document.querySelector("#btn1");
var button2 = document.querySelector("#btn2");
var button3 = document.querySelector("#btn3");
var button4 = document.querySelector("#btn4");
var button5 = document.querySelector("#btn5");
var Black = document.querySelector('#susBlack');
var Blue = document.querySelector('#susBlue');
var Blue = document.querySelector('#susBrown');
var Cyan = document.querySelector('#susCyan');
var Green = document.querySelector('#susGreen');
var Lime = document.querySelector('#susLime');
var Orange = document.querySelector('#susOrange');
var Pink = document.querySelector('#susPink');
var Purple = document.querySelector('#susPurple');
var Red = document.querySelector('#susRed');
var White = document.querySelector('#susWhite');
var Yellow = document.querySelector('#susYellow');
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
    image.src = "images/" + imageArray[mapImage];
    Black.src = "images/" + colorArray[13 - blackSus];
    Blue.src = "images/" + colorArray[3 - blueSus];
    Brown.src = "images/" + colorArray[19 - brownSus];
    Cyan.src = "images/" + colorArray[21 - cyanSus];
    Green.src = "images/" + colorArray[5 - greenSus];
    Lime.src = "images/" + colorArray[23 - limeSus];
    Orange.src = "images/" + colorArray[9 - orangeSus];
    Pink.src = "images/" + colorArray[7 - pinkSus];
    Purple.src = "images/" + colorArray[17 - purpleSus];
    Red.src = "images/" + colorArray[1 - redSus];
    White.src = "images/" + colorArray[15 - whiteSus];
    Yellow.src = "images/" + colorArray[11 - yellowSus];
}

document.querySelector('#btn1').textContent = bn1[bns]
document.querySelector('#btn2').textContent = bn2[bns]
document.querySelector('#btn3').textContent = bn3[bns]
document.querySelector('#btn4').textContent = bn4[bns]
document.querySelector('#btn5').textContent = bn5[bns]
image.src = "images/" + imageArray[mapImage];
// output.innerHTML = actions[actionsPossible];