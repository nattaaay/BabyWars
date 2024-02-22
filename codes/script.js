const grid = document.querySelector(".grid");
const scoreDisplay = document.querySelector(".score");
const width = 15;
let currentMommyPosition = [216, 217, 218];
let babyArmy = [4, 5, 6, 7, 8, 9, 10, 20, 21, 22, 23, 24, 36, 37, 38];
const babiesFed = [];

/*
  below, i'm creating the small boxes. the <div>s are being created using the loop and appendchild.
  */
for (let i = 0; i < width * width; i++) {
  const square = document.createElement("div");
  grid.appendChild(square);
}

/*create an array. all the divs that are in the grid. */

const squares = Array.from(document.querySelectorAll(".grid div"));
console.log(squares);

//mommy's starting point 217 of the div array
const mommyArmy = [216, 217, 218];

function drawMommy() {
  for (let i = 0; i < mommyArmy.length; i++) {
    squares[mommyArmy[i]].classList.add("mommy");
  }
}
drawMommy();

/*choosing which div to place the baby army in, the starting point.*/

/* loop over the babyarmy*/
function drawBaby() {
  for (let i = 0; i < babyArmy.length; i++) {
    if (!babiesFed.includes(i)) {
      squares[babyArmy[i]].classList.add("baby");
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
