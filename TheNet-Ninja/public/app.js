"use strict";
// Form
const form = document.querySelector(".new-item-form");
// Inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#toform");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.value);
});
