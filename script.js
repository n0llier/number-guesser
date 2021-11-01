let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generate the target value beetween 1 and 9 for the button listener

const generateTarget = () => {
  return Math.floor(Math.random() * 9);
};

// Compare values and define a winner

const compareGuesses = (human, computer, target) => {
  let humanG = Math.abs(target - human);
  let computerG = Math.abs(target - computer);

  return humanG <= computerG;
};

// Use winner in game.js to define an output

const updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
};

// Increment rounds

const advanceRound = () => {
  currentRoundNumber += 1;
};
