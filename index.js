let homeEl = document.getElementById("home-el");
let guestEl = document.getElementById("guest-el");
let sumHome = 0;
let sumGuest = 0;

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