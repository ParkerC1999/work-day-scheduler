// Current Day
var todayEl = document.getElementById("currentDay");
var hourEl = document.getElementById("task");

var todayText = document.createElement("h4");
var today = moment().format("MMM Do YY");

todayText.textContent = today;

todayEl.appendChild(todayText);

// Hours (0-23)
var textArea = document.querySelectorAll(".textblock")
console.log(textArea);

var currentHour = moment().hour();
console.log(currentHour);

function hourFunc() {
    textArea.forEach(function(element) {
        if (currentHour == element.id) {
            element.classList.add("present");
        }
        if (currentHour < element.id) {
            element.classList.add("future");
        }
        if (currentHour > element.id) {
            element.classList.add("past");
        }
    })
}

// save buttons
var save = document.querySelector(".saveBtn");

document.querySelector(".container").addEventListener("click", function(event) {
if (event.target.nodeName === "SPAN") {
    console.log(this);
    var time = event.target.previousElementSibling.id;
    var task = event.target.previousElementSibling.value;
    localStorage.setItem(time, task);
}});

// load
document.getElementById("9").textContent = localStorage.getItem("9");
document.getElementById("10").textContent = localStorage.getItem("10");
document.getElementById("11").textContent = localStorage.getItem("11");
document.getElementById("12").textContent = localStorage.getItem("12");
document.getElementById("13").textContent = localStorage.getItem("13");
document.getElementById("14").textContent = localStorage.getItem("14");
document.getElementById("15").textContent = localStorage.getItem("15");
document.getElementById("16").textContent = localStorage.getItem("16");
document.getElementById("17").textContent = localStorage.getItem("17");


hourFunc();