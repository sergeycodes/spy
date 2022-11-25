let playerCount = 3;
let getLocation;
let spy;
let currPlayer;
const place = ["Airport","Bank","Beach","Circus","Church","Casino","Grocery Store"];

let innerTxt = document.querySelector("#inner");
let startBtn = document.querySelector("#start-button");
let revealBtn = document.querySelector("#reveal-button");
let hideBtn = document.querySelector("#hide-button");

function preview() {
    innerTxt.textContent = "Start Game";
    hideHideButton();
    revealStartButton();

}

function renderGame() {
    currPlayer = 1;
    spy = getRandom(1, playerCount);
    getLocation = getRandom(0, place.length);

    revealCurrPlayer();
    hideStartButton();
    revealRevealButton();
    
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
    endGame();
  }

  function endGame() {
    spy = null;
    getLocation = null;
    currPlayer = null;
    preview();
  }