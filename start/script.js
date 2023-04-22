"use strict";

///////////////////////////////////////

/* 
ЗАДАЧА: 
Создайте игру в угадай число.

Удачи)
*/

let randomNumber = Math.trunc(Math.random() * 20 + 1);
console.log(randomNumber);
let score = 20;
let high = 0;
const btnClick = document.querySelector(".check");

const textMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

btnClick.addEventListener("click", () => {
  const quessNumber = document.querySelector(".guess").value;

  console.log(typeof quessNumber);

  let number = Number(quessNumber);

  console.log(typeof number);

  //кога не ввели число
  if (!number) {
    textMessage("Вы не ввели число");
    //когда угадали
  } else if (number == randomNumber) {
    textMessage("Вы угадали число");
    const background = (document.querySelector("body").style.background =
      "green");
    const btnNumber = document.querySelector(".number");
    btnNumber.textContent = number;
    highScore();
  } else if (number !== randomNumber) {
    if (score > 1) {
      if (number < randomNumber) {
        textMessage("Введите большее число");
        score--;
        document.querySelector(".score").textContent = score;
        //когда введенное число больше, чем randomNumber
      } else if (number > randomNumber) {
        textMessage("Введите меньшее число");
        score--;
        document.querySelector(".score").textContent = score;
      }
    } else {
      textMessage("Вы проиграли");
      document.querySelector(".score").textContent = 0;
    }
  }
});

function highScore() {
  if (score > high) {
    high = score;
    let record = (document.querySelector(".highscore").textContent = high);
  }
}

const resetBtn = document
  .querySelector(".again")
  .addEventListener("click", () => {
    score = 20;
    randomNumber = Math.trunc(Math.random() * 20 + 1);
    textMessage("Начните угадывать");
    document.querySelector(".score").textContent = score;
    const btnNumber = (document.querySelector(".number").textContent = "?");
    const quessNumber = (document.querySelector(".guess").value = "");
    const background = (document.querySelector("body").style.background =
      "green");
    document.querySelector(".highscore").textContent = "0";
  });
