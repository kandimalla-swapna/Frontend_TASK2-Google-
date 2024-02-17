
const btnEl = document.getElementById("apps");
let sectionEl = document.getElementsByClassName("header");
let cardEl = document.getElementById("cardBox");



function showMore() {
    cardEl.classList.toggle("card-display");
    sectionEl.append(cardEl);
}