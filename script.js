"use strict";
/*document.querySelector(".message").textContent = "π Correct Number..";
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 20;*/
//input the value
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let highscore = 0;
let score = 20;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // When there is no input
  if (!guess) {
    displayMessage("βοΈ No Number..");
    console.log(guess, typeof guess);
    // When player wins
  } else if (guess == secretNumber) {
    displayMessage("π Correct Number..");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem ";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  // When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "πToo High.." : "πToo Low..");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage(" β­οΈYou Lost The Game");
      document.querySelector(".score").textContent = 0;
    }
  }
});

// When guess is too high
// } else if (guess > secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = 'π Too high!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = 'π₯ You lost the game!';
//     document.querySelector('.score').textContent = 0;
//   }

//   // When guess is too low
// } else if (guess < secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = 'π Too low!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = 'π₯ You lost the game!';
//     document.querySelector('.score').textContent = 0;
//   }
// });

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage("Start Guessing..");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem ";
});
