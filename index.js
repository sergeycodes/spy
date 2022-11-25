let playerCount;
let getLocation;
let spy;
let currPlayer;
const place = ["Airport","Bank","Beach","Circus","Church","Casino","Grocery Store"];


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

function renderGame() {
    currPlayer = 1;
    let userCount = document.querySelector("#number-of-players");
    let spyCount = document.querySelector("#number-of-spies");
    spy = spyCount.value;
    playerCount = userCount.value;
    spy = getRandom(1, playerCount);
    getLocation = getRandom(0, place.length);

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
    innerTxt.textContent = place[getLocation];
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