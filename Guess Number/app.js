let input = document.querySelector("input");
let form = document.querySelector("form");
const result = document.querySelector(".result");
let spanTag = document.querySelector("span");
let submitbtn = document.querySelector("#submit");
let startbtn = document.querySelector(".start-game");



; (function () {                             // IIFE to excuted once and avoid vulrnability of random number .
    
    let allGuessArray = [];                 // to store all guesses in and use push method to add guesses in array 

    let randomNo = Math.round(Math.random() * 100);
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let userNo = parseInt(input.value);
        // console.log("Submiteed");

        if (randomNo > userNo) {
            result.style.color = 'red';
            result.innerText = "To Low !";

        } else if (randomNo < userNo) {
            result.style.color = 'red';
            result.innerText = "To high !";
        }
        else {
            // console.log("your are correct");
            result.innerText = 'You are Correct !';
            result.style.color = 'green';
            startbtn.disabled = false;
            submitbtn.disabled = true;

        }

        input.value = '';      // or form.reset();
        allGuessArray.push(userNo);
        spanTag.innerText = allGuessArray

    });

    startbtn.addEventListener("click", () => {
        result.innerText = '';
        spanTag.innerText = '';
        startbtn.disabled = true;
        submitbtn.disabled = false;
        allGuessArray = [];
        randomNo = Math.round(Math.random() * 100);
    });
})()



