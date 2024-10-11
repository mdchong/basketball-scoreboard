// Variables
const homeEl = document.getElementById("home-el");
const guestEl = document.getElementById("guest-el");
let sumHome = 0;
let sumGuest = 0;


// Functions
function incrementOneHome() {
    sumHome += 1;
    homeEl.textContent = sumHome;
}

function incrementTwoHome() {
    sumHome += 2;
    homeEl.textContent = sumHome;
}

function incrementThreeHome() {
    sumHome += 3;
    homeEl.textContent = sumHome;
}

function incrementOneGuest() {
    sumGuest += 1;
    guestEl.textContent = sumGuest;
}

function incrementTwoGuest() {
    sumGuest += 2;
    guestEl.textContent = sumGuest;
}

function incrementThreeGuest() {
    sumGuest += 3;
    guestEl.textContent = sumGuest;
}
