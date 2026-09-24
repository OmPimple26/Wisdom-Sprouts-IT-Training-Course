let currentPlayer = "X";

let gameOver = false;

let board = ["", "", "", "", "", "", "", "", ""];

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

function makeMove(index) {
  // If box is already filled or game is over
  if (board[index] != "" || gameOver) {
    return;
  }

  // Store X or O
  board[index] = currentPlayer;

  // Display X or O
  document.getElementsByClassName("board")[0].children[index].innerText =
    currentPlayer;

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

function checkWinner() {
  for (let pattern of winningPatterns) {
    let a = pattern[0];
    let b = pattern[1];
    let c = pattern[2];

    if (board[a] != "" && board[a] == board[b] && board[b] == board[c]) {
      document.getElementById("message").innerText =
        "Player " + currentPlayer + " Wins!";

      gameOver = true;

      return;
    }
  }

  // Check draw
  if (!board.includes("")) {
    document.getElementById("message").innerText = "Game Draw!";

    gameOver = true;
  }
}

function restartGame() {
  board = ["", "", "", "", "", "", "", "", ""];

  currentPlayer = "X";

  gameOver = false;

  // Clear all boxes
  let buttons = document.getElementsByClassName("board")[0].children;

  for (let button of buttons) {
    button.innerText = "";
  }

  document.getElementById("message").innerText = "Player X's Turn";
}
