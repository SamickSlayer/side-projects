'use strict';

/*//Project #1 Guess My Number

//.     How to select an element in js

console.log(document.querySelector(`.message`).textContent);

// What is DOM and DOM manipulation$
//Document object model... structured representation of HTML documents. Allows js to access and manipulate HTML elements
//js is not DOM*/

/*//Selecting and manipulating elements

document.querySelector(`.message`).textContent = `Correct Number!`;
console.log(document.querySelector(`.message`).textContent);

document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`).textContent = 10;

console.log(document.querySelector(`.guess`).value);

document.querySelector(`.guess`).value = 23;
console.log(document.querySelector(`.guess`).value);*/

let secretNumber = Math.trunc(Math.random() * 1000) + 1;
let score = 1000;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess);

  if (!guess) {
    //no input
    displayMessage(`No Number!`);

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage(`Correct Number!`);
    //CSS Stye change
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
    document.querySelector(`.number`).textContent = secretNumber;

    //HighScore
    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
    }
    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? `Too High!` : `Too Low`);
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      displayMessage(`You Lost the Game!`);
      document.querySelector(`.score`).textContent = 0;
    }
    //when guess is too high
    // } else if (guess > secretNumber) {
    //   if (score > 1) {
    //     document.querySelector(`.message`).textContent = `Too High!`;
    //     score--;
    //     document.querySelector(`.score`).textContent = score;
    //   } else {
    //     document.querySelector(`.message`).textContent = `You lost the game!`;
    //     document.querySelector(`.score`).textContent = 0;
    //   }

    //   //when guess is too low
    // } else if (guess < secretNumber) {
    //   if (score > 1) {
    //     document.querySelector(`.message`).textContent = `Too Low!`;
    //     score--;
    //     document.querySelector(`.score`).textContent = score;
    //   } else {
    //     document.querySelector(`.message`).textContent = `You lost the game!`;
    //     document.querySelector(`.score`).textContent = 0;
    //   }
  }
});

//Coding Challenge `Game reset`/again button

//select the element with the `again` class and attach a click event handler
document.querySelector(`.again`).addEventListener(`click`, function () {
  //restore inital values of the score and secretNumber variables
  score = 1000;
  secretNumber = Math.trunc(Math.random() * 1000) + 1;
  //restore inital conditions of the message, number, score and guess input field
  displayMessage(`Start guessing...`);
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ``;
  //restore the original background color and number width (#222, 15rem)
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
});

//refactoring -- restructure code without changing how it works
// 1  identify dupe code
// 2
