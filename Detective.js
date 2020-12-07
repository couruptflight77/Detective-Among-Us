// this is where the arrays go
var imageArray = []
imageArray[0] = "Disclamer.png"
imageArray[1] = "startingScreen.jpg"

var colorArray = []
colorArray[0] = "Red"
colorArray[1] = "Blue"
colorArray[2] = "Green"
colorArray[3] = "Pink"
colorArray[4] = "Orange"
colorArray[5] = "Yellow"
colorArray[6] = "Black"
colorArray[7] = "White"
colorArray[8] = "Purple"
colorArray[9] = "Bronw"
colorArray[10] = "Cyan"
colorArray[11] = "Lime"

var bn1 = ["start", "Go to Admin"]
var bn2 = ["start", "Go to Weapons"]
var bn3 = ["start", "Go to Security"]
var bn4 = ["start", "Go to Storage"]
var bn5 = ["start", "Go to Electrical"]
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
//

// All the different vars
var mapImage = 0
var chosenAction = 0
var bns = 0
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
    document.querySelector('#btn4').textContent = bn1[bns]
    document.querySelector('#btn5').textContent = bn1[bns]
    
        
    image.src = "images/" + imageArray[mapImage];
}

document.querySelector('#btn1').textContent = bn1[bns]
document.querySelector('#btn2').textContent = bn2[bns]
document.querySelector('#btn3').textContent = bn3[bns]
document.querySelector('#btn4').textContent = bn1[bns]
document.querySelector('#btn5').textContent = bn1[bns]
image.src = "images/" + imageArray[mapImage];
// output.innerHTML = actions[actionsPossible];