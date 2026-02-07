let boxes = document.querySelectorAll(".box");
let result = document.querySelector("#result");
let turn = "X";

const winPatterns = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];


boxes.forEach((box)=>{
    box.addEventListener("click", () => {  
   if(turn ==="X"){
    box.innerText="X";
    turn = "O";
   }
   else{
     box.innerText = "O";
      turn = "X";
      
   }checkWinner();
});
});



function checkWinner() {
   for (let pattern of winPatterns) {
     let [a, b, c] = pattern;

    if (
      boxes[a].innerText &&
      boxes[a].innerText === boxes[b].innerText &&
      boxes[a].innerText === boxes[c].innerText
    ) {
      result.innerText = `Winner is ${boxes[a].innerText}`;
    disableBoxes();
  };     
};
};


function disableBoxes() {
boxes.forEach(box => box.style.pointerEvents="none");
}



let reset = document.querySelector("#reset");
reset.addEventListener("click", ()=>{
  boxes.forEach(box => {
    box.innerText = "";
    box.style.pointerEvents = "auto";
});

  turn = "X";           
  result.innerText = ""; 

});
