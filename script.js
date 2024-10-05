'use strict';

/*
// console.log(document.querySelector('.message'));
// <p class="message">Start guessing...</p>

console.log(document.querySelector('.message').textContent);
// Start guessing...
document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);
// 🎉 Correct Number!

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

/*
Coding Challenge #1
Implement a game reset functionality, so that the player
can make a new game! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and number variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem).

*/

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}

let secretNumber = 1 + Math.floor(Math.random() * 20);
let score = Number(document.querySelector('.score').textContent);
let highScore = 0;

// Handling Click Events
document.querySelector('.check').addEventListener('click', function() {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input from the player
  if (!guess) {
    
    displayMessage('⛔️ No number!');

  // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    highScore = Math.max(highScore, score);

    document.querySelector('.highscore').textContent = String(highScore);
  // When guess is too high!
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score -= 1;
      document.querySelector('.score').textContent = String(score);
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  } 
});

// Select the element with the 'again' class and attach a click event handler
document.querySelector('.again').addEventListener('click', function() {
  secretNumber = 1 + Math.floor(Math.random() * 20);

  score = 20;

  displayMessage('Start guessing...');

  document.querySelector('.number').textContent = '?';

  document.querySelector('.score').textContent = String(score);

  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';

});









