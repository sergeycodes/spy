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
let createBtn = document.querySelector("#create-button");
let revealBtn = document.querySelector("#reveal-button");
let hideBtn = document.querySelector("#hide-button");
let endBtn = document.querySelector("#end-game");

let spyPositions = [];

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

function revealGameOption() {
    gameOption.style.display = "block";
}

function locationSelected() {
    // Function body for locationSelected
}

function jobSelected() {
    // Function body for jobSelected
}

function renderGame() {
    currPlayer = 1;
    let userCount = document.querySelector("#number-of-players");
    let spyCount = document.querySelector("#number-of-spies");
    let numSpies = spyCount.value;
    playerCount = userCount.value;

    // Generate unique spy positions
    spyPositions = [];
    while (spyPositions.length < numSpies) {
        let position = getRandom(1, playerCount);
        if (!spyPositions.includes(position)) {
            spyPositions.push(position);
        }
    }

    // Reset arrayOfObjects
    arrayOfObjects.length = 0;

    // Add selected categories to arrayOfObjects
    if (catPlace.checked && catJob.checked) {
        arrayOfObjects.push(...place);
        arrayOfObjects.push(...job);
    } else if (catPlace.checked) {
        arrayOfObjects.push(...place);
    } else if (catJob.checked) {
        arrayOfObjects.push(...job);
    }

    // Set a random location or job for getLocation
    getLocation = getRandom(0, arrayOfObjects.length);

    hideCreateButton();
    revealRevealButton();
    hideGameOption();
    revealPlayerCard();
    revealCurrPlayer();
    revealEndGameButton();
}

function revealPlayerCard() {
    innerTxt.style.display = "block";
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

function revealCurrPlayer() {
    innerTxt.style.color = "white";
    innerTxt.textContent = "Reveal Player " + currPlayer + " Card";
}

function revealRevealButton() {
    revealBtn.style.display = "block";
}

function revealCard() {
    if (spyPositions.includes(currPlayer)) {
        showSpy();
    } else {
        showLocation();
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
    innerTxt.style.color = "#CF0A0A";
    innerTxt.textContent = "SPY";
}

function showLocation() {
    innerTxt.style.color = "white";
    innerTxt.textContent = arrayOfObjects[getLocation];
}

function hideCard() {
    currPlayer++;
    if (currPlayer > playerCount) {
        startCountDown();
    } else {
        // Set a new random location or job for getLocation
        getLocation = getRandom(0, arrayOfObjects.length);

        revealCurrPlayer();
        hideHideButton();
        revealRevealButton();
    }
}

function hideHideButton() {
    hideBtn.style.display = "none";
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function startCountDown() {
    innerTxt.style.display = "none";
    hideHideButton();
    revealEndScreen();
}

function revealEndScreen() {
    endScreen.style.display = "block";
    countdown();
}

function hideEndScreen() {
    endScreen.style.display = "none";
}

function endGame() {
    spy = null;
    getLocation = null;
    currPlayer = null;
    playerCount = null;
    hideEndGameButton();
    hideRevealButton();
    hideHideButton();
    hideEndScreen();
    endCountdown();
    startGame();

    document.getElementById("cdro").innerHTML = "";
    document.getElementById("timer").style.strokeDashoffset = 0;
}

function revealEndGameButton() {
    endBtn.style.display = "block";
}

function hideEndGameButton() {
    endBtn.style.display = "none";
}

var x;
var timer = document.getElementById("timer");
var circumfrence = 578;

function countdown() {
    var countdownDate = new Date().getTime() + 301000;
    x = setInterval(function() {
        // Get the current date and time
        var now = new Date().getTime();

        // Calculate the remaining time
        var distance = countdownDate - now;
        // Calculate the minutes and seconds remaining
        var minutes = Math.floor(distance / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        seconds = seconds.toString().padStart(2, "0");

        // Display the countdown in the element with id="countdown"
        document.getElementById("cdtext").innerHTML = minutes + ":" + seconds;

        var timeFraction = distance / 301000;
        var circleDashOffset = circumfrence - circumfrence * timeFraction;
        timer.style.strokeDashoffset = circleDashOffset;
        var cd = document.getElementById("cdtext");

        if (timeFraction <= 0.25) {
            timer.style.stroke = "red";
            cd.style.color = "red";
        } else if (timeFraction <= 0.5) {
            timer.style.stroke = "yellow";
            cd.style.color = "yellow";
        } else {
            timer.style.stroke = "green";
            cd.style.color = "green";
        }

        // If the countdown is finished, display "Expired"
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("cdtext").innerHTML = "";
            document.getElementById("cdro").innerHTML = "GAME OVER";
        }
    }, 1000);
}

function endCountdown() {
    clearInterval(x);
    document.getElementById("cdtext").innerHTML = "5:00";
}
