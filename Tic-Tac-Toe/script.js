let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset_btn");
let result = document.querySelector("#result");

let turn0 = true;
let Over = false;

const winPattern = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (Over || box.innerText !== "") return; // Prevent click after game over

    box.innerText = turn0 ? "0" : "X";
    box.disabled = true;
    turn0 = !turn0;

    checkWinner();
  });
});

const checkWinner = () => {
  // Check if any winning pattern is matched
  for (let pattern of winPattern) {
    let [a, b, c] = pattern;
    let val1 = boxes[a].innerText;
    let val2 = boxes[b].innerText;
    let val3 = boxes[c].innerText;

    if (val1 && val1 === val2 && val2 === val3) {
      result.innerText = `Player ${val1} won! Game Over...`;
      result.style.visibility = "visible";
      Over = true;

      boxes.forEach((box) => (box.disabled = true));

      setTimeout(reset, 2000);
      return;
    }
  }

  // Only check draw if no one has won
  const isDraw = Array.from(boxes).every((box) => box.innerText !== "");
  if (isDraw && !Over) {
    result.innerText = "Game Draw...";
    result.style.visibility = "visible";
    Over = true;

    boxes.forEach((box) => (box.disabled = true));
    setTimeout(reset, 2000);
  }
};

const reset = () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
  result.style.visibility = "hidden";
  result.innerText = "";
  Over = false;
  turn0 = true;
};

resetbtn.addEventListener("click", reset);
