'use strict';
/*
console.log(document.querySelector(".message").textContent);// selects the textcontent of the class message
document.querySelector(".message").textContent = "🎉 Correct Nmber!";//changes the text content
console.log(document.querySelector(".message").textContent);//check to see if the textcontent was changed

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;//changes the value of the input box to 23
console.log(document.querySelector(".guess").value);
*/

document.querySelector(".check").addEventListener("click", () => console.log(document.querySelector(".guess").value));//selects the class check, which is the button check. then the addeventlistener method uses click to log the value that you type into the input.
