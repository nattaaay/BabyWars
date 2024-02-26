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

let babiesFed = [];
let babyId;

/* =========================================================================================== */

/*
  below,
  - i'm creating the small boxes within the whole big box border.
  - the <div>s are being created using the loop and appendchild.
  - also adding id to each individual div to make it easier to track which square.
  */

for (let i = 0; i < width * width; i++) {
  const square = document.createElement("div");
  square.id = i;
  grid.appendChild(square);
}

/*create an array. all the divs that are in the grid. */

const squares = Array.from(document.querySelectorAll(".grid div"));
console.log(squares);

/* adding the class of "mommy" to the respective div indexes above */

function drawMommy() {
  for (let i = 0; i < currentMommyPosition.length; i++) {
    squares[currentMommyPosition[i]].classList.add("mommyClass");
  }
}
drawMommy();

/*
- mommy's movements
- move mommy array to the left
1. remove class from existing divs of mommy
2. modify position of the mommy array to a mew position (1 grid to the left)
3. draw new mommy position (the drawMommy function will also add the class to the new mommy divs)
*/

// function removeMommy() {
//   let oldMommyPos = document.querySelectorAll(".mommyClass");

//   for (let i = 0; i < oldMommyPos.length; i++) {
//     oldMommyPos[i].classList.remove("mommyClass");
//   }
// }

//review the code block below again and add comments.

// function changeMomPos() {
//   for (let i = 0; i < currentMommyPosition.length; i++) {
//     currentMommyPosition[i]--;
//   }
// }

//THESE ARE THE FUNCTIONS I WANT TO INVOKE WHEN EVENTLISTENER-LEFT/ RIGHT.
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

/* baby army's starting point indexes of the div array */
/* loop over the currentBabyPosition array to give a class of the selected indexes of the babyArmy array*/
//defining the function of "drawing" the babies, use currentBabyPosition as it will be manipulated later, so it's gonna change

function drawBaby() {
  for (let i = 0; i < currentBabyPosition.length; i++) {
    squares[currentBabyPosition[i]].classList.add("babyClass");
  }
}
drawBaby();

// THESE ARE THE FUNCTIONS I WANT TO INVOKE WHEN GAME STARTS/ TO SET TOGETHER LATER WITH TIME INTERVAL.
//removeBabies();
//changeBabyPos();
//drawBaby();

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

function drawBaby() {
  for (let i = 0; i < currentBabyPosition.length; i++) {
    if (squares[currentBabyPosition[i]]) {
      squares[currentBabyPosition[i]].classList.add("babyClass");
    }
  }
}
/* ============================================================================================ */

const leftBorder = [];

for (let i = 0; i < width * width; i += 15) {
  leftBorder.push(i);
}

//improve code below. this array generates (-1) as a value.

const rightBorder = [];

for (let i = 0; i < width; i++) {
  rightBorder.push(i * 15 - 1);
}

// function moveBabiesLeft() to be inserted below, together with setInterval

babyId = setInterval(moveBabiesRight, 300); //baby's movement speed

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

function moveBabiesLeft() {
  removeBabies();
  changeBabyPos(-1);
  drawBaby();
}

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

//console.log(isInLeftBorder);

let isInRightBorder = false;

for (let i = 0; i < parsedBabyPosition.length; i++) {
  if (parsedRightBorder.includes(parsedBabyPosition[i])) {
    isInRightBorder = true;
    break;
  }
}
//console.log(isInRightBorder);

//  below is the start of the code block for moveBabyLeft. Insert the conditions, and all other functions to be invoked.
//   if (parseInt(currentBabyPosition[i]) > leftBorder[i])
//     removeBabies();
//   changeBabyPos(-1);
//   drawBaby();
// }

//insert function (moveBabyRight) here. include all the conditions and callback functions.

/* ===================================================================================== */
//Bottle

function drawBottle() {
  //console.log(squares[currentBottlePosition]);
  squares[currentBottlePosition].classList.add("bottleClass");
}

function removeBottle() {
  const oldBottlePos = document.querySelector(".bottleClass");
  // console.log(oldBottlePos);
  // TO DO: _______check if classList is null before remove
  oldBottlePos.classList.remove("bottleClass");
}

function shootBottleUp() {
  console.log("bottle-" + currentBottlePosition);
  removeBottle();
  changeBottlePos(-15);
  drawBottle();

  console.log("baby-" + currentBabyPosition);

  if (currentBabyPosition.includes(currentBottlePosition)) {
    console.log("++++++");
    removeBottle();
    removeBaby(currentBottlePosition);
  } else console.log("-----");
}

// shootBottleUp();

let currentBottlePosition;

document.addEventListener("keydown", function (event) {
  currentBottlePosition = currentMommyPosition[1] - 15;
  // console.log(currentBottlePosition); //202
  // console.log(squares[202]);
  if (event.key === " ") {
    drawBottle();
    const bottleId = setInterval(() => {
      if (currentBottlePosition < 0) clearInterval(bottleId);
      shootBottleUp();
    }, 200); //bottle speed
    // shootBottleUp();
  }
});
//codes below copied from above. modify them to apply to "bottle"
/*=========================================================== */

// let parsedBottlePosition = 0;

// removeBottle();

// function removeBottle() {
//   let oldBottlePos = document.querySelector(".bottleClass");
//   if (oldBottlePos) {
//     {
//       oldBottlePos.classList.remove("bottleClass");
//       while ((oldBottlePos = document.querySelector(".bottleClass")));
//     }
//   }
// }

function changeBottlePos(newBotPos) {
  currentBottlePosition += newBotPos;
}
// changeBottlePos();

// function drawBottle() {
//   console.log(currentBottlePosition);
//   let parsedBottlePosition =
//     squares[parseInt(currentBottlePosition)].classList.add("bottleClass");
// }

/* ================================================================= */

function removeBaby(babyPos) {
  //const oldBabyPos = document.querySelector(".babyClass");
  //oldBabyPos.classList.remove("babyClass");
  //squares[babyPos].classList.remove("babyClass");
  console.log("babyPos: " + babyPos);
  console.log(currentBabyPosition);
  let i = currentBabyPosition.indexOf(babyPos);

  console.log("i: " + i);
  currentBabyPosition.splice(i, 1);
  if (currentBabyPosition.length == 10) {
    alert("WIN LIAO LORRR!");
  }
}

// function shoot (e) {
//   let bottleId
//   let currentBottlePosition = currentMommyPosition[1]
// }
// if (e.key === " ") {
//   babyId = setInterval(setInt, 800)

// }
