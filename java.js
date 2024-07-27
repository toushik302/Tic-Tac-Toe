// for select the variable
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")

// for palyers
let turnO = true; // PlaerX, PlayerO 

// for wining pattern isse 2D pattern keheete hai
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

// for each box clicked
boxes.forEach((box) =>{
    box.addEventListener("click", () => {
        if(turnO === true) { // player O
            box.innerText = "O";
            turnO = false;
        } else { // player X
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

// for check winner
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner", pos1Val);
                showWinner(pos1Val);
            }
        }
        
    }
};

// msg to win player
const showWinner = (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
};

// for desable boexes after the winner is decleared
const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

// for enable boxes after the match end
const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

// for reset game button
const resetGame = () => {
    turnO = true;
    enableboxes();
    msgContainer.classList.add("hide");
}

// for new game button and reset button
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
