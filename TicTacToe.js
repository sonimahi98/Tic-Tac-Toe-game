let boxes = document.querySelectorAll(".box");
let rstBtn = document.querySelector("#resetButton");
let msgContainer = document.querySelector("#msgContainer");
let winBtn = document.querySelector("#winButton");
let newBtn = document.querySelector("#newButton");


let turnO = true;

const winPatterns =[
[0, 1, 2],
[0, 3, 6],
[0, 4, 8],
[1, 4, 7],
[2, 5, 8],
[3, 4, 5],
[6, 4, 2],
[6, 7, 8],
];

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    boxes.forEach(box => box.innerText = "");
    // Re-enable event listeners for boxes
    boxes.forEach(box => box.addEventListener("click", boxClickHandler));
};

boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        if(turnO){
            box.innerText = "O";
            box.classList.add("o-mark");
            turnO = false;
        } else{
            box.innerText = "X";
            box.classList.add("x-mark");
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableBoxes = () =>{
    for (let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () =>{
    for (let box of boxes){
        box.disabled = false;
        boxes.innerText ="";
    }
};

const showWinner = (winner) =>{
    winBtn.innerText = `Hurray! ${winner} won`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () =>{
    for (let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "" ){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
    }
};
newBtn.addEventListener("click", resetGame);
rstBtn.addEventListener("click", resetGame);

boxes.forEach(box => box.addEventListener("click", boxClickHandler));
