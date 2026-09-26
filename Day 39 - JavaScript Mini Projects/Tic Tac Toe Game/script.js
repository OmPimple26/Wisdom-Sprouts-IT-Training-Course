let currentPlayer = "X";

let gameOver = false;

let board = ["", "", "", "", "", "", "", "", ""];

// Winning combinations
let winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6],
];

// Make a move
function makeMove(index) {
  if (board[index] != "" || gameOver) {
    return;
  }

  // Store X or O
  board[index] = currentPlayer;

  // Get all buttons
  let buttons = document.querySelectorAll(".game button");

  // Display X or O
  buttons[index].innerText = currentPlayer;

  // Give different color to X and O
  if (currentPlayer == "X") {
    buttons[index].classList.add("x");
  } else {
    buttons[index].classList.add("o");
  }

  // Check winner
  checkWinner();

  // Change player
  if (!gameOver) {
    if (currentPlayer == "X") {
      currentPlayer = "O";
    } else {
      currentPlayer = "X";
    }

    document.getElementById("message").innerText =
      "Player " + currentPlayer + "'s Turn";
  }
}

// Check winner
function checkWinner() {
  let buttons = document.querySelectorAll(".game button");

  for (let pattern of winningPatterns) {
    let a = pattern[0];

    let b = pattern[1];

    let c = pattern[2];

    if (board[a] != "" && board[a] == board[b] && board[b] == board[c]) {
      document.getElementById("message").innerText =
        "Player " + currentPlayer + " Wins!";

      // Change winner's boxes color
      if (currentPlayer == "X") {
        buttons[a].classList.add("x-winner");
        buttons[b].classList.add("x-winner");
        buttons[c].classList.add("x-winner");
      } else {
        buttons[a].classList.add("o-winner");
        buttons[b].classList.add("o-winner");
        buttons[c].classList.add("o-winner");
      }

      gameOver = true;

      return;
    }
  }

  // Check draw
  if (!board.includes("")) {
    document.getElementById("message").innerText = "Game Draw!";

    // Change all boxes color

    for (let button of buttons) {
      button.classList.add("draw");
    }

    gameOver = true;
  }
}

// Restart game
function restartGame() {
  board = ["", "", "", "", "", "", "", "", ""];

  currentPlayer = "X";

  gameOver = false;

  // Get all buttons
  let buttons = document.querySelectorAll(".game button");

  // Clear buttons
  for (let button of buttons) {
    button.innerText = "";

    button.classList.remove("x");
    button.classList.remove("o");

    button.classList.remove("x-winner");
    button.classList.remove("o-winner");

    button.classList.remove("draw");
  }

  document.getElementById("message").innerText = "Player X's Turn";
}
