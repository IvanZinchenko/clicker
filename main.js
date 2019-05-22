var button = document.getElementById("btn");
var counter = document.getElementById("clikerItem");
var boosterCounter = document.getElementById("booster-counter");
var booster1 = document.getElementById("booster-x1");
var booster5 = document.getElementById("booster-x5");
var booster10 = document.getElementById("booster-x10");
var boost = 1;
var point = 0;

function addPoint(event) {
    point += boost;
    counter.innerHTML = point;
}

function boost1(event) {
    boost = 1;
    boosterCounter.innerHTML = "x" + boost;
}

function boost5(event) {
    boost = 5;
    boosterCounter.innerHTML = "x" + boost;
}

function boost10(event) {
    boost = 10;
    boosterCounter.innerHTML = "x" + boost;
}

button.addEventListener("click", addPoint);
booster1.addEventListener("click", boost1);
booster5.addEventListener("click", boost5);
booster10.addEventListener("click", boost10);