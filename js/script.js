window.addEventListener('DOMContentLoaded', (event) => {

// Alert

const bell = document.querySelector("body > header > div > svg");
const alertMain = document.querySelector("#alert");
const closeAlert = document.querySelector("#alert > a");
const gDot = document.querySelector("body > header > div > div");

bell.addEventListener('click', open => {alertMain.style.display = "flex"});
closeAlert.addEventListener('click', clo => {alertMain.style.display = "none"; gDot.style.display = "none"; });

// Message

const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener('click', () => {
    // ensure user and message fields are filled out
    if (user.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending");
    } else if (user.value === "" ) {
    alert("Please fill out user field before sending");
    } else if (message.value === "" ) {
    alert("Please fill out message field before sending");
    } else {
    alert(`Message successfully sent to: ${user.value}`);
    }
    });

});