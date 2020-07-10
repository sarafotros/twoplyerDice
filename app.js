const rollBtn = document.getElementById("rollBtn");
const startBtn = document.getElementById("btnStart");
// const twoPlayerBtn = document.getElementById("twoPlayerBtn");
const snglOrMulty = document.getElementById("sigOrMulty");
const showTurns = document.getElementById("turns");
const diceImg = document.getElementById("imgOne");
const diceImgTwo = document.getElementById("imgTwo");

const status = document.querySelector(".status");

let score = document.querySelector(".score");

let playerOneScore = document.getElementById("scoreOne");
let playerTwoScore = document.getElementById("scoreTwo");

let sumOne = 0;
let sumTow = 0;

const revealBtn = (btn) => {
  btn.disabled = false;
};

startBtn.addEventListener("click", () => {
  revealBtn(rollBtn);
  snglOrMulty.textContent = "2 Players";
});

rollBtn.addEventListener("click", () => {
  status.textContent = "";

  rollDiceTwo();
  rollDiceOne();
});

const rollDiceOne = () => {
  let dice = Math.floor(Math.random() * 6) + 1;
  diceImg.src = `assets/images/dice${dice}.png`;
  if (dice === 1) {
    status.textContent = "Game Over! WINNER: PLAYER 2";
    sumOne = 0;
    playerOneScore.textContent = sumOne;
  } else {
    sumOne += dice;
    playerOneScore.textContent = sumOne;
    if (sumOne >= 20) {
      status.textContent = "Player 1 WON!";
      sumOne = 0;
    }
  }
};
const rollDiceTwo = () => {
  let diceTwo = Math.floor(Math.random() * 6) + 1;
  diceImgTwo.src = `assets/images/dice${diceTwo}.png`;
  if (diceTwo === 1) {
    status.textContent = "Game Over! WINNER: PLAYER 1";
    sumTow = 0;
    playerTwoScore.textContent = sumTow;
  } else {
    sumTow += diceTwo;
    playerTwoScore.textContent = sumTow;
    if (sumTow >= 20) {
      status.textContent = "Player 2 WON!";
      sumTow = 0;
    }
  }
};

///////
const rollDice = () => {
  let dice = Math.floor(Math.random() * 6) + 1;
  diceImg.src = `assets/images/dice${dice}.png`;

  if (dice === 1) {
    // btn.disabled = true;
    status.textContent = "GAME OVER!";
    sum = 0;
    score.textContent = sum;
  } else {
    sum += dice;
    score.textContent = sum;
    if (sum >= 20) {
      //   btn.disabled = true;
      status.textContent = "YOU WON!";
      sum = 0;
    }
  }
};
/////
