window.addEventListener('DOMContentLoaded', (event) => {

// alert

const bell = document.querySelector(".bell-icon");
const alertMain = document.querySelector("#alert");
const closeAlert = document.querySelector("#alert > a");
const gDot = document.querySelector(".green-dot");

bell.addEventListener('click', open => {alertMain.style.display = "flex"});
closeAlert.addEventListener('click', clo => {alertMain.style.display = "none"; gDot.style.display = "none"; });

// message

const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener('click', () => {

    if (user.value === "" && message.value === "") {
    alert("User and Message fields are required");
    } else if (user.value === "" ) {
    alert("User field is required");
    } else if (message.value === "" ) {
    alert("Message field is required");
    } else {
    alert(`Your message has been sent to: ${user.value}`);
    }
    });

});