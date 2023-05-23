let homeResult = document.getElementById("home-score");
let homeScore = 0;

function add1Home() {
    homeScore += 1;
    homeResult.textContent = homeScore
}

function add2Home() {
    homeScore += 2;
    homeResult.textContent = homeScore
}

function add3Home() {
    homeScore += 3;
    homeResult.textContent = homeScore
}

let guestResult = document.getElementById("guest-score");
let guestScore = 0;

function add1Guest() {
    guestScore += 1;
    guestResult.textContent = guestScore
}

function add2Guest() {
    guestScore += 2;
    guestResult.textContent = guestScore
}

function add3Guest() {
    guestScore += 3;
    guestResult.textContent = guestScore
}

function newGame() {
    guestResult.textContent = 0;
    guestScore = 0;
    homeResult.textContent = 0;
    homeScore = 0;
}