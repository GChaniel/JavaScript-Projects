let activePlayer = "X";
const body = document.getElementById("body");

//This array stores an array of moves. We use this to determine win conditions.
let selectedSquares = [];

//This function displays the scoreboard.
let userScore = 0;
let computerScore = 0;
let gameOver = false;

//This function is for placing an X or O in a square.
function placeXOrO(squareNumber) {
  if (gameOver) return false;

  if (!selectedSquares.some((element) => element.includes(squareNumber))) {
    let select = document.getElementById(squareNumber);

    if (activePlayer === "X") {
      select.style.backgroundImage = 'url("images/x.png")';
    } else {
      select.style.backgroundImage = 'url("images/o.png")';
    }

    //squareNumber and activePlayer are concatenated together and added to the array.
    selectedSquares.push(squareNumber + activePlayer);
    checkWinConditions();

    if (gameOver) {
      return true;
    }

    if (activePlayer === "X") {
      activePlayer = "O";
    } else {
      activePlayer = "X";
    }

    //This function plays placement sound.
    audio("media/place.mp3");
    if (activePlayer === "O") {
      disableClick();
      setTimeout(function () {
        computersTurn();
      }, 1000);
    }
    //Returning true is needed for our computersTurn() function to work.
    return true;
  }
  return false;
}

//This function parses the selectedSquares array to search for win conditions.
//It checks for each win condition for X and O. If a win condition is met,
//the drawWinLine() function is called to draw a line on the screen.

function checkWinConditions() {
  if (
    !gameOver &&
    (arrayIncludes("0X", "1X", "2X") ||
      arrayIncludes("3X", "4X", "5X") ||
      arrayIncludes("6X", "7X", "8X") ||
      arrayIncludes("0X", "3X", "6X") ||
      arrayIncludes("1X", "4X", "7X") ||
      arrayIncludes("2X", "5X", "8X") ||
      arrayIncludes("0X", "4X", "8X") ||
      arrayIncludes("6X", "4X", "2X"))
  ) {
    userScore++;
    document.getElementById("user-score").textContent = userScore;
    gameOver = true;
  }

  if (
    !gameOver &&
    (arrayIncludes("0O", "1O", "2O") ||
      arrayIncludes("3O", "4O", "5O") ||
      arrayIncludes("6O", "7O", "8O") ||
      arrayIncludes("0O", "3O", "6O") ||
      arrayIncludes("1O", "4O", "7O") ||
      arrayIncludes("2O", "5O", "8O") ||
      arrayIncludes("0O", "4O", "8O") ||
      arrayIncludes("6O", "4O", "2O"))
  ) {
    computerScore++;
    document.getElementById("computer-score").textContent = computerScore;
    gameOver = true;
  }

  if (arrayIncludes("0X", "1X", "2X") || arrayIncludes("0O", "1O", "2O")) {
    drawWinLine(50, 100, 558, 100);
  } else if (
    arrayIncludes("3X", "4X", "5X") ||
    arrayIncludes("3O", "4O", "5O")
  ) {
    drawWinLine(50, 304, 558, 304);
  } else if (
    arrayIncludes("6X", "7X", "8X") ||
    arrayIncludes("6O", "7O", "8O")
  ) {
    drawWinLine(50, 508, 558, 508);
  } else if (
    arrayIncludes("0X", "3X", "6X") ||
    arrayIncludes("0O", "3O", "6O")
  ) {
    drawWinLine(100, 50, 100, 558);
  } else if (
    arrayIncludes("1X", "4X", "7X") ||
    arrayIncludes("1O", "4O", "7O")
  ) {
    drawWinLine(304, 50, 304, 558);
  } else if (
    arrayIncludes("2X", "5X", "8X") ||
    arrayIncludes("2O", "5O", "8O")
  ) {
    drawWinLine(508, 50, 508, 558);
  } else if (
    arrayIncludes("6X", "4X", "2X") ||
    arrayIncludes("6O", "4O", "2O")
  ) {
    drawWinLine(100, 508, 510, 90);
  } else if (
    arrayIncludes("0X", "4X", "8X") ||
    arrayIncludes("0O", "4O", "8O")
  ) {
    drawWinLine(100, 100, 520, 520);
  } else if (selectedSquares.length >= 9) {
    //This function plays the tie game sound.
    audio("media/tie.mp3");
    setTimeout(function () {
      resetGame();
    }, 1000);
  }
}

function arrayIncludes(squareA, squareB, squareC) {
  const a = selectedSquares.includes(squareA);
  const b = selectedSquares.includes(squareB);
  const c = selectedSquares.includes(squareC);

  if (a === true && b === true && c === true) {
    return true;
  }
  return false;
}

//This function results in a random square being selected by the computer.
function computersTurn() {
  if (gameOver || selectedSquares.length >= 9) return;

  let success = false;
  let pickASquare;

  while (!success) {
    pickASquare = String(Math.floor(Math.random() * 9));

    if (placeXOrO(pickASquare)) {
      success = true;
    }
  }
}

//This function makes our body element temporarily unclickable.
function disableClick() {
  body.style.pointerEvents = "none";

  setTimeout(function () {
    body.style.pointerEvents = "auto";
  }, 1000);
}

//This function takes a string parameter of the path you set for your win sound.
function audio(audioURL) {
  let audio = new Audio(audioURL);
  audio.play();
}

//This function utilizes HTML canvas to draw win lines.
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
  const canvas = document.getElementById("win-lines");
  const c = canvas.getContext("2d");

  let x1 = coordX1,
    y1 = coordY1,
    x2 = coordX2,
    y2 = coordY2,
    x = x1,
    y = y1;

  //This function interacts with the canvas
  function animateLineDrawing() {
    const animationLoop = requestAnimationFrame(animateLineDrawing);

    c.clearRect(0, 0, 608, 608);
    c.beginPath();
    c.moveTo(x1, y1);
    c.lineTo(x, y);
    c.lineWidth = 10;
    c.strokeStyle = "rgba(8, 166, 197, 0.89)";
    c.stroke();

    if (x1 <= x2 && y1 <= y2) {
      if (x < x2) {
        x += 10;
      }
      if (y < y2) {
        y += 10;
      }

      if (x >= x2 && y >= y2) {
        cancelAnimationFrame(animationLoop);
      }
    }

    if (x1 <= x2 && y1 >= y2) {
      if (x < x2) {
        x += 10;
      }
      if (y > y2) {
        y -= 10;
      }
      if (x >= x2 && y <= y2) {
        cancelAnimationFrame(animationLoop);
      }
    }
  }

  //This function clears the canvas after a win line is drawn.
  function clear() {
    const animationLoop = requestAnimationFrame(clear);
    c.clearRect(0, 0, 608, 608);
    cancelAnimationFrame(animationLoop);
  }

  disableClick();
  audio("media/winGame.mp3");
  animateLineDrawing();

  setTimeout(function () {
    clear();
    resetGame();
  }, 1000);
}

//This function resets the game in the event of a tie or a win.
function resetGame() {
  for (let i = 0; i < 9; i++) {
    let square = document.getElementById(String(i));
    square.style.backgroundImage = "";
  }

  selectedSquares = [];
  activePlayer = "X";
  gameOver = false;
  body.style.pointerEvents = "auto";
}
