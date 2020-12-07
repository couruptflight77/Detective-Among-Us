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

var docs = []
docs[0] = "C:\Users\brock\Coding\Text.exe\Actions path\Start.txt"
docs[1] = "C:\Users\brock\Coding\Text.exe\Actions path\Start\Admin\What do you do.txt"
docs[2] = ""
//

// This is where the html links go
var image = document.querySelector("img");
var output = document.querySelector("#output");
var input = document.querySelector("#input");
//

// This is where the different actions will go 5 per turn
var test = "first"
var action = [test]
//

// All the different vars
var mapImage = 0
var chosenAction = 0
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
        }
    }
    
    if(chosenAction === 2){
        if(mapImage === 0){
            mapImage = 1
        }
    }
    
    if(chosenAction === 3){
        if(mapImage === 0){
            mapImage = 1
        }
    }
    
    if(chosenAction === 4){
        if(mapImage === 0){
            mapImage = 1
        }
    }
    
    if(chosenAction === 5){
        if(mapImage === 0){
            mapImage = 1
        }
    }
    var lines = doc.split(/\r?\n/)
    
        
    image.src = "images/" + imageArray[mapImage];
    // output.innerHTML = map[mapLocation];
}


image.src = "images/" + imageArray[mapImage];
// output.innerHTML = actions[actionsPossible];