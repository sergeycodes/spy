let playerCount;
let getLocation;
let spy;
let currPlayer;
const place = ["Airport","Bank","Beach","Circus","Church","Casino","Grocery Store","Office","Salon","Hospital","Hotel","Train","Pirate Ship","Restaurant","Night Club","School","Gym","Gas Station","Space Station","Submarine","Zoo","Aquarium","Museum","Library","Prison","Wedding","World Cup","Super Bowl","NBA Finals"];
const job = ["Doctor","Nurse","Construction Worker","Programmer","Engineer","Unemployed","Basketball Player","Soccer Player","Athlete","Bartender","Lawyer","Therapist","Anesthesiologist","Veterinarian","Police Officer","Detective","Architect","Accountant","Teacher","Professor","Orthodontist","Chiropractor","Pharmacist","Electrician"];
const arrayOfObjects = [];
const catPlace = document.querySelector("#location-el");
const catJob = document.querySelector("#occupation-el");

let welcome = document.querySelector("#welcome");
let gameOption = document.querySelector("#game-option");
let innerTxt = document.querySelector("#inner");
let endScreen = document.querySelector("#end-screen");

let startBtn = document.querySelector("#start-button");
let createBtn = document.querySelector("#create-button")
let revealBtn = document.querySelector("#reveal-button");
let hideBtn = document.querySelector("#hide-button");
let endBtn = document.querySelector("#end-game");

function preview() {
    innerTxt.textContent = "Start Game";
    hideHideButton();
    revealStartButton();

}

function startGame() {
    hideStartButton();
    revealCreateButton();
    hideWelcome();
    revealGameOption();
}

function hideStartButton() {
    startBtn.style.display = "none";
}

function revealCreateButton() {
    createBtn.style.display = "block";
}

function hideWelcome() {
    welcome.style.display = "none";
}

function revealGameOption(){
    gameOption.style.display = "block";
}

function locationSelected() {

}

function jobSelected() {

}

function renderGame() {
    console.log(catPlace.checked);
    currPlayer = 1;
    let userCount = document.querySelector("#number-of-players");
    let spyCount = document.querySelector("#number-of-spies");
    if(catPlace.checked && catJob.checked) {
        //add both arrays to a bigger array
        console.log("BOTH OPTIONS CHECKED");
        for (let index = 0; index < place.length; index++) {
            arrayOfObjects[index] = place[index];
            console.log(arrayOfObjects[index]);
        }
        for (let index = arrayOfObjects.length; index < (job.length + arrayOfObjects.length; index++) {
            arrayOfObjects[index] = job[index];
            console.log(arrayOfObjects[index]);
        }
    }else if(catPlace.checked){
        console.log("Location Checked");
        
        for (let index = 0; index < place.length; index++) {
            arrayOfObjects[index] = place[index];
            console.log(arrayOfObjects[index]);
        }
    }else if(catJob.checked){
        console.log("Occupation Checked");
        for (let index = 0; index < job.length; index++) {
            arrayOfObjects[index] = job[index];
            console.log(arrayOfObjects[index]);
        }
    }

    spy = spyCount.value;
    playerCount = userCount.value;
    spy = getRandom(1, playerCount);
    getLocation = getRandom(0, arrayOfObjects.length);

    hideCreateButton();
    revealRevealButton();
    hideGameOption();
    revealPlayerCard();
    revealCurrPlayer();
    
    revealEndGameButton();
}

function revealPlayerCard() {
    innerTxt.style.display = "block"
}

function hideCreateButton() {
    createBtn.style.display = "none";
}

function hideGameOption() {
    gameOption.style.display = "none";
}

function revealStartButton() {
    startBtn.style.display = "block";
}

function hideStartButton() {
    startBtn.style.display = "none"
}

function revealCurrPlayer() {
    innerTxt.textContent = "Reveal Player " + currPlayer + " Card";
}

function revealRevealButton() {
    revealBtn.style.display = "block";
}

function revealCard() {
    if(currPlayer != spy){
        showLocation();
    }else{
        showSpy();
    }
    hideRevealButton();
    showHideButton();
}

function hideRevealButton() {
    revealBtn.style.display = "none";
}

function showHideButton() {
    hideBtn.style.display = "block";
}


function showSpy() {
    innerTxt.textContent = "SPY";
}

function showLocation() {
    innerTxt.textContent = arrayOfObjects[getLocation];
}

function hideCard() {
    currPlayer++;
    if(currPlayer > playerCount){
        startCountDown();
    }else{
        revealCurrPlayer();
        hideHideButton();
        revealRevealButton();

    }
}

function hideHideButton() {
    hideBtn.style.display = "none"
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  function startCountDown() {
    innerTxt.style.display = "none"
    hideHideButton();
    revealEndScreen();
  }

  function revealEndScreen() {
        endScreen.style.display = "block";
  }

  function hideEndScreen() {
    endScreen.style.display = "none"
  }

  function endGame() {
    spy = null;
    getLocation = null;
    currPlayer = null;
    playerCount = null;
    hideEndGameButton();
    hideRevealButton();
    hideEndScreen();
    startGame();
  }

  function revealEndGameButton() {
    endBtn.style.display = "block";
  }

  function hideEndGameButton() {
    endBtn.style.display = "none";
  }