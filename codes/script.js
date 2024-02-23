/*
creating variables, dimensions and starting positions of each character
*/

const grid = document.querySelector(".grid");
const scoreDisplay = document.querySelector(".score");
const width = 15;
let currentMommyPosition = [216, 217, 218];
let leftBorderMom = currentMommyPosition[0] % width === 0;
let currentBabyPosition = [
  4, 5, 6, 7, 8, 9, 10, 20, 21, 22, 23, 24, 36, 37, 38, 52,
];
const babiesFed = [];

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

/* mommy army's starting point indexes of the div array */
//let mommyArmy = [216, 217, 218];

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

function removeMommy() {
  let oldMommyPos = document.querySelectorAll(".mommyClass");

  for (let i = 0; i < oldMommyPos.length; i++) {
    oldMommyPos[i].classList.remove("mommyClass");
  }
}

function changeMomPos() {
  for (let i = 0; i < currentMommyPosition.length; i++) {
    currentMommyPosition[i]--;
  }
}

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

function changeMomPos(newPos) {
  for (let i = 0; i < currentMommyPosition.length; i++) {
    currentMommyPosition[i] += newPos;
  }
}

//debug. incorrect syntax
function drawMommy() {
  for (let i = 0; i < currentMommyPosition.length; i++) {
    if (squares[currentMommyPosition[i]]) {
      squares[currentMommyPosition[i]].classList.add("mommyClass");
    }
  }
}

function moveMommyLeft() {
  removeMommy();
  changeMomPos(-1);
  drawMommy();
}

if ((leftBorderMom = false)) {
  function moveMommyLeft() {
    removeMommy();
    changeMomPos(-1);
    drawMommy();
  }
} else {
  removeEventListener("keyLeft", moveMommyLeft);
}

function moveMommyRight() {
  removeMommy();
  changeMomPos(+1);
  drawMommy();
}

//CODE BLOCK BELOW DOESN'T QUITE WORK. FIGURE OUT WHY!
// function moveMommy(e) {
//   squares[currentMommyPosition].classList.remove("mommyClass");
//   switch (e.key) {
//     case "ArrowLeft":
//       if (currentMommyPosition % width !== 0) currentMommyPosition -= 1;
//       break;
//     case "ArrowRight":
//       if (currentMommyPosition % 15 !== 0) currentMommyPosition += 1;
//       break;
//   }
//   squares[currentMommyPosition].classList.add("mommy");
// }

/* =========================================================================================== */

/* baby army's starting point indexes of the div array */
const babyArmy = [4, 5, 6, 7, 8, 9, 10, 20, 21, 22, 23, 24, 36, 37, 38, 52];

/* loop over the babyarmy array to give a class of the selected indexes of the babyArmy array*/
function drawBaby() {
  for (let i = 0; i < babyArmy.length; i++) {
    if (!babiesFed.includes(i)) {
      squares[babyArmy[i]].classList.add("babyClass");
    }
  }
}
drawBaby();

//NOTES TO SELF
//create baby army and mommy first
//make them move! left right, the event.listener thing

//when doing whatever, consider putting it in an array. might be useful later!!!

//can add the start button also (this is to start running the script)
//what to do later
//add the bottle
//div-->squares ARRAY
