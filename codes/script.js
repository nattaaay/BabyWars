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
const babiesFed = [];
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

//codes below are to remove the class, change/add new position and add class again to the new divs. same as above like moveMommy. this is gonnna create the illusion that they are moving.

// function removeBabies() {
//   let oldBabyPos = document.querySelectorAll(".babyClass");

//   for (let i = 0; i < oldBabyPos.length; i++) {
//     oldBabyPos[i].classList.remove("babyClass");
//   }
// }

// function changeBabyPos() {
//   for (let i = 0; i < currentBabyPosition.length; i++) {
//     currentBabyPosition[i]--;
//   }
// }

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

//improve these two constants later, maybe can use some loop or something.
const leftBorder =
  squares[(0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210)];
const rightBorder =
  squares[(14, 29, 44, 59, 74, 89, 104, 119, 134, 149, 164, 179, 194, 209)];
//change this. [i] would be looping through the whole array of left borders. create left borders array.

// function moveBabiesLeft() to be inserted below, together with setInterval

babyId = setInterval(moveBabiesLeft, 800);

/*
for (let i = 0; i < currentBabyPosition.length; i++) {
  let posToInt = parseInt(currentBabyPosition[i]);
}
let posToInt = [];
let babyPosArr = posToInt.push(posToInt[i]);
console.log(babyPosArr);

for (let i = 0; i < leftBorder.length; i++) {
  let borToInt = parseInt(leftBorder[i]);
}

*/

function moveBabiesLeft() {
  removeBabies();
  changeBabyPos(-1);
  drawBaby();
}

let isInLeftBorder = false;

for (let i = 0; i < currentBabyPosition.length; i++) {
  if (leftBorder.includes(currentBabyPosition[i])) {
    isInLeftBorder = true;
    break;
  }
}

console.log(isInLeftBorder);

//  below is the start of the code block for moveBabyLeft. Insert the conditions, and all other functions to be invoked.
//   if (parseInt(currentBabyPosition[i]) > leftBorder[i])
//     removeBabies();
//   changeBabyPos(-1);
//   drawBaby();
// }

//NOTES TO SELF
//create baby army and mommy first
//make them move! left right, the event.listener thing

//when doing whatever, consider putting it in an array. might be useful later!!!

//can add the start button also (this is to start running the script)
//what to do later
//add the bottle
//div-->squares ARRAY
