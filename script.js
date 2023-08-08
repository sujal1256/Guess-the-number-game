'use strict';

// Getting all the elements we need

let message = document.getElementsByClassName('message')[0];
// console.log(message);

let score = document.getElementsByClassName('score')[0];
// console.log(score);

let check = document.getElementsByClassName('check')[0];
// console.log(check);

let highscore = document.getElementsByClassName('highscore')[0];
// console.log(highscore);

let again = document.getElementsByClassName('again')[0];
let number = document.getElementsByClassName('number')[0];
// console.log(again);

// Generating a random number
let randomNumber = Math.floor(Math.random() * (20 - 1 + 1));
// console.log(randomNumber);
// number.textContent = randomNumber;

highscore.textContent = localStorage.getItem('highscore');

check.addEventListener('click', function () {
  let guess = document.getElementsByClassName('guess')[0].value;
  if (Number(score.textContent) !== 0) {
    if (guess === '') {
      message.textContent = 'No Number';
    } else {
      if (guess == randomNumber) {
        message.textContent = 'Correct Answer:)';
        document.body.style.backgroundColor = 'green';

        if (Number(score.textContent) > Number(highscore.textContent)) {
          // if  score is greater than
          highscore.textContent = score.textContent;
        }
        localStorage.setItem('highscore', highscore.textContent);
      } else {
        if (Number(guess) < Number(randomNumber)) {
          message.textContent = '👇🏼 Guess is lower 👇🏼';
        }
        if (Number(guess) > Number(randomNumber)) {
          message.textContent = '👆 Guess is higher 👆';
        }

        score.textContent = score.textContent - 1;
      }
    }
  } else {
    message.textContent = '😶Gameover😶';
  }
});
again.addEventListener('click', () => {
  localStorage.setItem('highscore', 0);
  highscore.textContent = 0;
  score.textContent = 20;
  randomNumber = Math.floor(Math.random() * (20 - 1 + 1));
  // number.textContent = randomNumber;
});
