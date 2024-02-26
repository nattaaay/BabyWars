/*
creating variables, dimensions and starting positions of each character
*/

const grid = document.querySelector(".grid");
const scoreDisplay = document.querySelector(".score");
const width = 15;

let currentMommyPosition = [216, 217, 218];
let currentBabyPosition = [
  4, 5, 6, 7, 8, 9, 10, 20, 21, 22, 23, 24, 36, 37, 38, 52,
];

//initialization of these variables just to check if the codes are working right.
let babyIntervalId = -1;
let bottleIntervalId = -1;

function startGame() {
  let currentMommyPosition = [216, 217, 218];
  let currentBabyPosition = [
    4, 5, 6, 7, 8, 9, 10, 20, 21, 22, 23, 24, 36, 37, 38, 52,
  ];
  drawBaby();
  drawMommy();
}
/* =========================================================================================== */

/*
  - creating small 'squares'
  - putting them in an array
  */

for (let i = 0; i < width * width; i++) {
  const square = document.createElement("div");
  square.id = i;
  grid.appendChild(square);
}

const squares = Array.from(document.querySelectorAll(".grid div"));
console.log(squares);

/* adding the class of "mommy" to "draw" them out (with the help of CSS) */

function drawMommy() {
  for (let i = 0; i < currentMommyPosition.length; i++) {
    squares[currentMommyPosition[i]].classList.add("mommyClass");
  }
}

/*
- mommy's movements
- move mommy array to the left/right
1. remove class
2. modify position of the mommy array to a mew position (1 square to the left/right)
3. draw new mommy position (the drawMommy function will also add the class to the new mommy squares)
*/

//THESE ARE THE FUNCTIONS I WANT TO INVOKE WHEN KEY LEFT/ RIGHT.
// removeMommy();
// changeMomPos();
// drawMommy();

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") moveMommyLeft();
});

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") moveMommyRight();
});

function removeMommy() {
  let oldMommyPos = document.querySelectorAll(".mommyClass");

  for (let i = 0; i < oldMommyPos.length; i++) {
    oldMommyPos[i].classList.remove("mommyClass");
  }
}

//during each iteration of the loop, the value of newMomPos is added to the current element of currentMommyPosition. Basically to update the positions stored in the 'currentMommyPosition' array by adding the value of 'newMomPos' to each position.

function changeMomPos(newMomPos) {
  for (let i = 0; i < currentMommyPosition.length; i++) {
    currentMommyPosition[i] += newMomPos;
  }
}

function drawMommy() {
  for (let i = 0; i < currentMommyPosition.length; i++) {
    if (squares[currentMommyPosition[i]]) {
      squares[currentMommyPosition[i]].classList.add("mommyClass");
    }
  }
}

function moveMommyLeft() {
  if (parseInt(currentMommyPosition[0]) > 210) {
    removeMommy();
    changeMomPos(-1);
    drawMommy();
  }
}

function moveMommyRight() {
  if (parseInt(currentMommyPosition[2]) < 224) {
    removeMommy();
    changeMomPos(+1);
    drawMommy();
  }
}

/* =========================================================================================== */

/* adding babyClass to the baby squares. can easily "draw" them out using CSS class. */

function drawBaby() {
  for (let i = 0; i < currentBabyPosition.length; i++) {
    squares[currentBabyPosition[i]].classList.add("babyClass");
  }
}

// THESE ARE THE FUNCTIONS I WANT TO INVOKE WHEN GAME STARTS/ TO SET TOGETHER LATER WITH TIME INTERVAL.
//removeBabies();
//changeBabyPos();
//drawBaby();

/*
-select all HTML elements with that class and stores them in 'oldBabyPos'
- removing the class from the baby squares
*/
function removeBabies() {
  let oldBabyPos = document.querySelectorAll(".babyClass");

  for (let i = 0; i < oldBabyPos.length; i++) {
    oldBabyPos[i].classList.remove("babyClass");
  }
}

function changeBabyPos(newBabypos) {
  for (let i = 0; i < currentBabyPosition.length; i++) {
    currentBabyPosition[i] += newBabypos;
  }
}

//defining a loss. if any of the baby squares contain '210' (which is the bottom square), the game is over and player loses.
function drawBaby() {
  for (let i = 0; i < currentBabyPosition.length; i++) {
    if (squares[currentBabyPosition[i]]) {
      if (currentBabyPosition[i] === 210) {
        document.getElementById("score").innerHTML = "Lose";
      }
      squares[currentBabyPosition[i]].classList.add("babyClass");
    }
  }
}
/* ============================================================================================ */

// initializing left and right borders using for loops

const leftBorder = [];

for (let i = 0; i < width * width; i += 15) {
  leftBorder.push(i);
}

const rightBorder = [];

for (let i = 0; i < width; i++) {
  rightBorder.push(i * 15 - 1);
}

// function moveBabiesRight together with setInterval
// use speeds 800 and 50 for demo

babyIntervalId = setInterval(moveBabiesRight, 800);

// converting to integers using parseInt

let parsedBabyPosition = [];

function convertBabyArmy() {
  for (let i = 0; i < currentBabyPosition.length; i++) {
    parsedBabyPosition[i] = parseInt(currentBabyPosition[i]);
  }
}
convertBabyArmy();

let parsedLeftBorder = [];

function convertLeftBorder() {
  for (let i = 0; i < leftBorder.length; i++) {
    parsedLeftBorder[i] = parseInt(leftBorder[i]);
  }
}
convertLeftBorder();

let parsedRightBorder = [];

function convertRightBorder() {
  for (let i = 0; i < rightBorder.length; i++) {
    parsedRightBorder[i] = parseInt(rightBorder[i]);
  }
}
convertRightBorder();

// function moveBabiesLeft() {
//   removeBabies();
//   changeBabyPos(-1);
//   drawBaby();
// }

function moveBabiesRight() {
  removeBabies();
  changeBabyPos(1);
  drawBaby();
}

//get back to this again later. these two blocks still do not work.
let isInLeftBorder = false;

for (let i = 0; i < parsedBabyPosition.length; i++) {
  if (parsedLeftBorder.includes(parsedBabyPosition[i])) {
    isInLeftBorder = true;
    break;
  }
}

/* ===================================================================================== */
//Bottle

function drawBottle() {
  //console.log(squares[currentBottlePosition]);
  squares[currentBottlePosition].classList.add("bottleClass");
}

function removeBottle() {
  squares[currentBottlePosition].classList.remove("bottleClass");
}

function shootBottleUp() {
  removeBottle();
  changeBottlePos(-15);
  drawBottle();

  if (currentBabyPosition.includes(currentBottlePosition)) {
    removeBottle();
    removeBaby(currentBottlePosition);
  }
}

//shooting
let currentBottlePosition;

document.addEventListener("keydown", function (event) {
  currentBottlePosition = currentMommyPosition[1] - 15;
  if (event.key === " ") {
    drawBottle();
    bottleIntervalId = setInterval(() => {
      //if bottle position reaches the top border
      if (currentBottlePosition < 0) {
        clearInterval(bottleIntervalId);
      } else {
        shootBottleUp();
      }
    }, 20); //bottle speed
  }
});
/*=========================================================== */

//updating the position of the bottle. by taking the value of "currentBottlePosition" and adding "newBotPos" to it. This will then assign the results back to "currentBottlePosition", updating its value to the new position.
function changeBottlePos(newBotPos) {
  currentBottlePosition += newBotPos;
}
/* ================================================================= */

//to remove the baby square that's been "fed"
// first, find the index number of it in its array and use the splice method to remove it.
function removeBaby(babyPos) {
  let i = currentBabyPosition.indexOf(babyPos);
  currentBabyPosition.splice(i, 1);

  //defining a win
  if (currentBabyPosition.length === 0) {
    document.getElementById("score").innerHTML = "Win liao lorr...";
  }
}

startGame();
