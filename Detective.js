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

gameCode = ""

var bn1 = ["Start"]
var bn2 = ["Start"]
var bn3 = ["Start"]
var bn4 = ["Start"]
var bn5 = ["Start"]

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
var commSabotage = 0
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
    bn1.shift()
    bn2.shift()
    bn3.shift()
    bn4.shift()
    bn5.shift()
    //Unoffical
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
        bn1=["Go to Admin"]
        bn2=["Go to Electical"]
        bn3=["Go to Secutiy"]
        bn4=["Go to Storage"]
        bn5=["Go to Weapons"]
    }
    //start
    if(mapImage === 1){
        if(chosenAction===1){
            mapedImage = 4
            gameMessage = "You walk in Admin you know that you can see where everyone is or you can do other options"
            doAction = "What do you want to do in Admin"
            bn1=["Access Admin Panel"]
            bn2=["Search For Body"]
            bn3=["Return to Caffetteria"]
            bn4=["Go to Storage"]
            bn5=["Watch the Vent"]
        }
        if(chosenAction===2){
            mapedImage = 28
            gameMessage = "You walk to The Entance of Electrical but wait in the hallway, The lights just turned off do you flee or go in"
            doAction = "What do you want to do at Electrical"
            bn1=["Fix Lights"]
            bn2=["Go to Storage"]
            bn3=["Go to Caffeteria"]
            bn4=["Go to Reactor"]
            bn5=["Watch the Vent"]
        }
        if(chosenAction===3){
            mapedImage = 19
            gameMessage = "You walk into Security and You see the camera monitors but you can't see what they display"
            doAction = "What do you do in Security"
            bn1=["Watch Cameras"]
            bn2=["Watch Vent"]
            bn3=["Go to Caffetteria"]
            bn4=["Go to Reactor"]
            bn5=["Go to Medbay"]
        }
        if(chosenAction===4){
            mapedImage = 23
            gameMessage = "Your in storage you see no one nearbye"
            doAction = "What should You do"
            bn1=["Go to Comms"]
            bn2=["Go to Electical"]
            bn3=["Go to Secutiy"]
            bn4=["Go to Caffeteria"]
            bn5=["Go to Admin"]
        }
        if(chosenAction===5){
            mapedImage = 6
            gameMessage = "5"
            doAction = "5"
        }
        
    }
    //admin
    if(mapImage === 4){
        if(chosenAction===1){
            mapedImage = 2
            gameMessage = "You open the admin screen"
            doAction = "What should you do"
            bn1=["Continue to Watch Admin"]
            bn2=["Go to Navigation"]
            bn3=["Watch Vent"]
            bn4=["Go to Medbay"]
            bn5=["Go to Security"]
        }
        if(chosenAction===2){
            mapedImage = 3
            gameMessage = "You find no body there is nothing of interest but someone just ran out"
            doAction = "What should you do"
            bn1=["Access Admin Panel"]
            bn2=["Go to Comms"]
            bn3=["Return to Caffetteria"]
            bn4=["Go to Storage"]
            bn5=["Watch the Vent"]            
        }
        if(chosenAction===3){
            mapedImage = 4
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===4){
            mapedImage = 5
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===5){
            mapedImage = 6
            gameMessage = ""
            doAction = ""
        }
    }
    //Storage
    if(mapImage === 23){
            if(chosenAction===1){
                mapedImage = 8
                gameMessage = "You open the admin screen"
                console.log("action");
                doAction = "What should you do"
                bn1=["Continue to Watch Admin"]
                bn2=["Go to Navigation"]
                bn3=["Watch Vent"]
                bn4=["Go to Medbay"]
                bn5=["Go to Security"]
            }
            if(chosenAction===2){
                mapedImage = 3
                gameMessage = "The"
                doAction = ""
            }
            if(chosenAction===3){
                mapedImage = 19
                gameMessage = "You walk into security but the comms shut down you can't use the cameras"
                doAction = "What should you do"

            }
            if(chosenAction===4){
                mapedImage = 5
                gameMessage = ""
                doAction = ""
            }
            if(chosenAction===5){
                mapedImage = 6
                gameMessage = ""
                doAction = ""
            }
        }
    //admin screen
    if(mapImage === 2){
        if(chosenAction===1){
            mapedImage = 2
            gameMessage = "You open the admin screen"
            doAction = "What should you do"
            bn1=["Continue to Watch Admin"]
            bn2=["Go to Navigation"]
            bn3=["Watch Vent"]
            bn4=["Go to Medbay"]
            bn5=["Go to Security"]
        }
        if(chosenAction===2){
            mapedImage = 3
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===3){
            mapedImage = 4
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===4){
            mapedImage = 5
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===5){
            mapedImage = 6
            gameMessage = ""
            doAction = ""
        }
    }
    // Electical
    if(mapImage === 3){
        if(chosenAction===1){
            mapedImage = 2
            gameMessage = "You open the admin screen"
            doAction = "What should you do"
            bn1=["Continue to Watch Admin"]
            bn2=["Go to Navigation"]
            bn3=["Watch Vent"]
            bn4=["Go to Medbay"]
            bn5=["Go to Security"]
        }
        if(chosenAction===2){
            mapedImage = 3
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===3){
            mapedImage = 4
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===4){
            mapedImage = 5
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===5){
            mapedImage = 6
            gameMessage = ""
            doAction = ""
        }
    }
    //Admin L
    if(mapImage === 5){
        if(chosenAction===1){
            mapedImage = 2
            gameMessage = "You open the admin screen"
            doAction = "What should you do"
            bn1=["Continue to Watch Admin"]
            bn2=["Go to Navigation"]
            bn3=["Watch Vent"]
            bn4=["Go to Medbay"]
            bn5=["Go to Security"]
        }
        if(chosenAction===2){
            mapedImage = 3
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===3){
            mapedImage = 4
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===4){
            mapedImage = 5
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===5){
            mapedImage = 6
            gameMessage = ""
            doAction = ""
        }
    }
    //Caffetteria
    if(mapImage === 6){
        if(chosenAction===1){
            mapedImage = 2
            gameMessage = "You open the admin screen"
            doAction = "What should you do"
            bn1=["Continue to Watch Admin"]
            bn2=["Go to Navigation"]
            bn3=["Watch Vent"]
            bn4=["Go to Medbay"]
            bn5=["Go to Security"]
        }
        if(chosenAction===2){
            mapedImage = 3
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===3){
            mapedImage = 4
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===4){
            mapedImage = 5
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===5){
            mapedImage = 6
            gameMessage = ""
            doAction = ""
        }
    }
    //Caffetteria L
    if(mapImage === 7){
        if(chosenAction===1){
            mapedImage = 2
            gameMessage = "You open the admin screen"
            doAction = "What should you do"
            bn1=["Continue to Watch Admin"]
            bn2=["Go to Navigation"]
            bn3=["Watch Vent"]
            bn4=["Go to Medbay"]
            bn5=["Go to Security"]
        }
        if(chosenAction===2){
            mapedImage = 3
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===3){
            mapedImage = 4
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===4){
            mapedImage = 5
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===5){
            mapedImage = 6
            gameMessage = ""
            doAction = ""
        }
    }
    //Cams
    if(mapImage === 8){
        if(chosenAction===1){
            mapedImage = 2
            gameMessage = "You open the admin screen"
            doAction = "What should you do"
            bn1=["Continue to Watch Admin"]
            bn2=["Go to Navigation"]
            bn3=["Watch Vent"]
            bn4=["Go to Medbay"]
            bn5=["Go to Security"]
        }
        if(chosenAction===2){
            mapedImage = 3
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===3){
            mapedImage = 4
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===4){
            mapedImage = 5
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===5){
            mapedImage = 6
            gameMessage = ""
            doAction = ""
        }
    }
    //Comms
    if(mapImage === 9){
        if(chosenAction===1){
            mapedImage = 2
            gameMessage = "You open the admin screen"
            doAction = "What should you do"
            bn1=["Continue to Watch Admin"]
            bn2=["Go to Navigation"]
            bn3=["Watch Vent"]
            bn4=["Go to Medbay"]
            bn5=["Go to Security"]
        }
        if(chosenAction===2){
            mapedImage = 3
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===3){
            mapedImage = 4
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===4){
            mapedImage = 5
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===5){
            mapedImage = 6
            gameMessage = ""
            doAction = ""
        }
    }
    //comms L
    if(mapImage === 10){
        if(chosenAction===1){
            mapedImage = 2
            gameMessage = "You open the admin screen"
            doAction = "What should you do"
            bn1=["Continue to Watch Admin"]
            bn2=["Go to Navigation"]
            bn3=["Watch Vent"]
            bn4=["Go to Medbay"]
            bn5=["Go to Security"]
        }
        if(chosenAction===2){
            mapedImage = 3
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===3){
            mapedImage = 4
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===4){
            mapedImage = 5
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===5){
            mapedImage = 6
            gameMessage = ""
            doAction = ""
        }
    }
    //Madbay
    if(mapImage === 11){
        if(chosenAction===1){
            mapedImage = 2
            gameMessage = "You open the admin screen"
            doAction = "What should you do"
            bn1=["Continue to Watch Admin"]
            bn2=["Go to Navigation"]
            bn3=["Watch Vent"]
            bn4=["Go to Medbay"]
            bn5=["Go to Security"]
        }
        if(chosenAction===2){
            mapedImage = 3
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===3){
            mapedImage = 4
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===4){
            mapedImage = 5
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===5){
            mapedImage = 6
            gameMessage = ""
            doAction = ""
        }
    }
    //medbay L
    if(mapImage === 12){
        if(chosenAction===1){
            mapedImage = 2
            gameMessage = "You open the admin screen"
            doAction = "What should you do"
            bn1=["Continue to Watch Admin"]
            bn2=["Go to Navigation"]
            bn3=["Watch Vent"]
            bn4=["Go to Medbay"]
            bn5=["Go to Security"]
        }
        if(chosenAction===2){
            mapedImage = 3
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===3){
            mapedImage = 4
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===4){
            mapedImage = 5
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===5){
            mapedImage = 6
            gameMessage = ""
            doAction = ""
        }
    }
    //Nav
    if(mapImage === 13){
        if(chosenAction===1){
            mapedImage = 2
            gameMessage = "You open the admin screen"
            doAction = "What should you do"
            bn1=["Continue to Watch Admin"]
            bn2=["Go to Navigation"]
            bn3=["Watch Vent"]
            bn4=["Go to Medbay"]
            bn5=["Go to Security"]
        }
        if(chosenAction===2){
            mapedImage = 3
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===3){
            mapedImage = 4
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===4){
            mapedImage = 5
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===5){
            mapedImage = 6
            gameMessage = ""
            doAction = ""
        }
    }
    //Nav L
    if(mapImage === 14){
        if(chosenAction===1){
            mapedImage = 2
            gameMessage = "You open the admin screen"
            doAction = "What should you do"
            bn1=["Continue to Watch Admin"]
            bn2=["Go to Navigation"]
            bn3=["Watch Vent"]
            bn4=["Go to Medbay"]
            bn5=["Go to Security"]
        }
        if(chosenAction===2){
            mapedImage = 3
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===3){
            mapedImage = 4
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===4){
            mapedImage = 5
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===5){
            mapedImage = 6
            gameMessage = ""
            doAction = ""
        }
    }
    //o2
    if(mapImage === 15){
        if(chosenAction===1){
            mapedImage = 2
            gameMessage = "You open the admin screen"
            doAction = "What should you do"
            bn1=["Continue to Watch Admin"]
            bn2=["Go to Navigation"]
            bn3=["Watch Vent"]
            bn4=["Go to Medbay"]
            bn5=["Go to Security"]
        }
        if(chosenAction===2){
            mapedImage = 3
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===3){
            mapedImage = 4
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===4){
            mapedImage = 5
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===5){
            mapedImage = 6
            gameMessage = ""
            doAction = ""
        }
    }
    //o2 L
    if(mapImage === 16){
        if(chosenAction===1){
            mapedImage = 2
            gameMessage = "You open the admin screen"
            doAction = "What should you do"
            bn1=["Continue to Watch Admin"]
            bn2=["Go to Navigation"]
            bn3=["Watch Vent"]
            bn4=["Go to Medbay"]
            bn5=["Go to Security"]
        }
        if(chosenAction===2){
            mapedImage = 3
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===3){
            mapedImage = 4
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===4){
            mapedImage = 5
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===5){
            mapedImage = 6
            gameMessage = ""
            doAction = ""
        }
    }
    //Reactor
    if(mapImage === 17){
        if(chosenAction===1){
            mapedImage = 2
            gameMessage = "You open the admin screen"
            doAction = "What should you do"
            bn1=["Continue to Watch Admin"]
            bn2=["Go to Navigation"]
            bn3=["Watch Vent"]
            bn4=["Go to Medbay"]
            bn5=["Go to Security"]
        }
        if(chosenAction===2){
            mapedImage = 3
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===3){
            mapedImage = 4
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===4){
            mapedImage = 5
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===5){
            mapedImage = 6
            gameMessage = ""
            doAction = ""
        }
    }
    //Reactor L 
    if(mapImage === 18){
        if(chosenAction===1){
            mapedImage = 2
            gameMessage = "You open the admin screen"
            doAction = "What should you do"
            bn1=["Continue to Watch Admin"]
            bn2=["Go to Navigation"]
            bn3=["Watch Vent"]
            bn4=["Go to Medbay"]
            bn5=["Go to Security"]
        }
        if(chosenAction===2){
            mapedImage = 3
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===3){
            mapedImage = 4
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===4){
            mapedImage = 5
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===5){
            mapedImage = 6
            gameMessage = ""
            doAction = ""
        }
    }
    //Security
    if(mapImage === 19){
        if (commSabotage === 1){
            if(chosenAction===1){
                mapedImage = 
                gameMessage = "You open the admin screen"
                doAction = "What should you do"
                bn1=["Watch Vent"]
                bn2=["Go to Reactor"]
                bn3=["Go to Electrical"]
                bn4=["Go to Medbay"]
                bn5=["Go to Caffetteria"]
            }
            if(chosenAction===2){
                mapedImage = 3
                gameMessage = ""
                doAction = ""
            }
            if(chosenAction===3){
                mapedImage = 4
                gameMessage = ""
                doAction = ""
            }
            if(chosenAction===4){
                mapedImage = 5
                gameMessage = ""
                doAction = ""
            }
            if(chosenAction===5){
                mapedImage = 6
                gameMessage = ""
                doAction = ""
            }
        } else {
            if(chosenAction===1){
                mapedImage = 8
                gameMessage = "You open the admin screen"
                doAction = "What should you do"
                bn1=["Continue to Watch Admin"]
                bn2=["Go to Navigation"]
                bn3=["Watch Vent"]
                bn4=["Go to Medbay"]
                bn5=["Go to Security"]
            }
            if(chosenAction===2){
                mapedImage = 3
                gameMessage = ""
                doAction = ""
            }
            if(chosenAction===3){
                mapedImage = 4
                gameMessage = ""
                doAction = ""
            }
            if(chosenAction===4){
                mapedImage = 5
                gameMessage = ""
                doAction = ""
            }
            if(chosenAction===5){
                mapedImage = 6
                gameMessage = ""
                doAction = ""
            }
        }
    }
    //Security L
    if(mapImage === 20){
        if(chosenAction===1){
            mapedImage = 2
            gameMessage = "You open the admin screen"
            doAction = "What should you do"
            bn1=["Continue to Watch Admin"]
            bn2=["Go to Navigation"]
            bn3=["Watch Vent"]
            bn4=["Go to Medbay"]
            bn5=["Go to Security"]
        }
        if(chosenAction===2){
            mapedImage = 3
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===3){
            mapedImage = 4
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===4){
            mapedImage = 5
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===5){
            mapedImage = 6
            gameMessage = ""
            doAction = ""
        }
    }
    //shields
    if(mapImage === 21){
        if(chosenAction===1){
            mapedImage = 2
            gameMessage = "You open the admin screen"
            doAction = "What should you do"
            bn1=["Continue to Watch Admin"]
            bn2=["Go to Navigation"]
            bn3=["Watch Vent"]
            bn4=["Go to Medbay"]
            bn5=["Go to Security"]
        }
        if(chosenAction===2){
            mapedImage = 3
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===3){
            mapedImage = 4
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===4){
            mapedImage = 5
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===5){
            mapedImage = 6
            gameMessage = ""
            doAction = ""
        }
    }
    //Shields L
    if(mapImage === 22){
        if(chosenAction===1){
            mapedImage = 2
            gameMessage = "You open the admin screen"
            doAction = "What should you do"
            bn1=["Continue to Watch Admin"]
            bn2=["Go to Navigation"]
            bn3=["Watch Vent"]
            bn4=["Go to Medbay"]
            bn5=["Go to Security"]
        }
        if(chosenAction===2){
            mapedImage = 3
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===3){
            mapedImage = 4
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===4){
            mapedImage = 5
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===5){
            mapedImage = 6
            gameMessage = ""
            doAction = ""
        }
    }
    //storage L
    if(mapImage === 24){
        if(chosenAction===1){
            mapedImage = 2
            gameMessage = "You open the admin screen"
            doAction = "What should you do"
            bn1=["Continue to Watch Admin"]
            bn2=["Go to Navigation"]
            bn3=["Watch Vent"]
            bn4=["Go to Medbay"]
            bn5=["Go to Security"]
        }
        if(chosenAction===2){
            mapedImage = 3
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===3){
            mapedImage = 4
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===4){
            mapedImage = 5
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===5){
            mapedImage = 6
            gameMessage = ""
            doAction = ""
        }
    }
    //weapons
    if(mapImage === 25){
        if(chosenAction===1){
            mapedImage = 2
            gameMessage = "You open the admin screen"
            doAction = "What should you do"
            bn1=["Continue to Watch Admin"]
            bn2=["Go to Navigation"]
            bn3=["Watch Vent"]
            bn4=["Go to Medbay"]
            bn5=["Go to Security"]
        }
        if(chosenAction===2){
            mapedImage = 3
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===3){
            mapedImage = 4
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===4){
            mapedImage = 5
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===5){
            mapedImage = 6
            gameMessage = ""
            doAction = ""
        }
    }
    //weapons L
    if(mapImage === 26){
        if(chosenAction===1){
            mapedImage = 2
            gameMessage = "You open the admin screen"
            doAction = "What should you do"
            bn1=["Continue to Watch Admin"]
            bn2=["Go to Navigation"]
            bn3=["Watch Vent"]
            bn4=["Go to Medbay"]
            bn5=["Go to Security"]
        }
        if(chosenAction===2){
            mapedImage = 3
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===3){
            mapedImage = 4
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===4){
            mapedImage = 5
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===5){
            mapedImage = 6
            gameMessage = ""
            doAction = ""
        }
    }
    //electrical L
    if(mapImage === 27){
        if(chosenAction===1){
            mapedImage = 2
            gameMessage = "You open the admin screen"
            doAction = "What should you do"
            bn1=["Continue to Watch Admin"]
            bn2=["Go to Navigation"]
            bn3=["Watch Vent"]
            bn4=["Go to Medbay"]
            bn5=["Go to Security"]
        }
        if(chosenAction===2){
            mapedImage = 3
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===3){
            mapedImage = 4
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===4){
            mapedImage = 5
            gameMessage = ""
            doAction = ""
        }
        if(chosenAction===5){
            mapedImage = 6
            gameMessage = ""
            doAction = ""
        }
    }
    
    gameCode = gameCode + chosenAction
    console.log(gameCode);
    mapImage = mapedImage

    document.querySelector('#btn1').textContent = bn1[0]
    document.querySelector('#btn2').textContent = bn2[0]
    document.querySelector('#btn3').textContent = bn3[0]
    document.querySelector('#btn4').textContent = bn4[0]
    document.querySelector('#btn5').textContent = bn5[0]
    gameMessageDiv.innerHTML = "<br><em>" + gameMessage + "</em>";
    whatToDoDiv.innerHTML = "<br><em>" + doAction + "</em>";
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
// output.innerHTML = actions[actionsPossible];

mapImage = mapedImage