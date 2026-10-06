let boxes = document.querySelectorAll(".img-div");
let mainContainer = document.querySelector(".main-container");
let secondMainContainer = document.querySelector(".second-main-container");
let PlayerRock = document.querySelector("#PlayerRock");
let PlayerPaper = document.querySelector("#PlayerPaper");
let PlayerScissors = document.querySelector("#PlayerScissors");
let ComputerRock = document.querySelector("#ComputerRock");
let ComputerPaper = document.querySelector("#ComputerPaper");
let ComputerScissors = document.querySelector("#ComputerScissors");
let sMCC3 = document.querySelector(".second-main-container-child-3");
let resetButton = document.querySelector(".reset-button");
let playerScoreEl = document.querySelector("#playerScore");
let computerScoreEl = document.querySelector("#computerScore");
let drawScoreEl = document.querySelector("#drawScore");
let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

boxes.forEach((box) => {
    mainContainer.classList.remove("hide");
    secondMainContainer.classList.add("hide");
    box.addEventListener("click", () => {
        const userChoise = box.getAttribute("id");
        // console.log(userChoise);
        mainContainer.classList.add("hide");
        secondMainContainer.classList.remove("hide");
        if (userChoise === "Rock") {
            // Rock
            PlayerRock.classList.remove("hide");
        } if (userChoise === "Paper") {
            // Paper
            PlayerPaper.classList.remove("hide");
        } if (userChoise === "Scissors") {
            // Scissors
            PlayerScissors.classList.remove("hide");
        }

        getCompChoice();
        playGame(userChoise);

    })
})

const Arr = ["Rock", "Paper", "Scissors"];

const getCompChoice = () => {
    let randIdx = Math.floor(Math.random() * 3);
    return Arr[randIdx];
}

const playGame = (userChoise) => {
    let compChoice = getCompChoice();
    if (compChoice === userChoise) {
        setTimeout(() => {
            sMCC3.classList.remove("hide2");
            sMCC3.innerText = "It's a Draw!";
            drawScore++;
            drawScoreEl.innerText = "Draw: "+drawScore;
        }, 1000);
    } else {
        if (userChoise === "Rock") {
            if (compChoice === "Paper") {
                setTimeout(() => {
                    sMCC3.classList.remove("hide2");
                    sMCC3.innerText = "You Lost!";
                    computerScore++;
                    computerScoreEl.innerText = "Lost: "+computerScore;
                }, 1000);
            }
            if (compChoice === "Scissors") {
                setTimeout(() => {
                    sMCC3.classList.remove("hide2");
                    playerScore++;
                    playerScoreEl.innerText = "Won: "+playerScore;
                }, 1000)
            }
        }
        if (userChoise === "Paper") {
            if (compChoice === "Rock") {
                setTimeout(() => {
                    sMCC3.classList.remove("hide2");
                    playerScore++;
                    playerScoreEl.innerText = "Won: "+playerScore;
                }, 1000)
            }
            if (compChoice === "Scissors") {
                setTimeout(() => {
                    sMCC3.classList.remove("hide2");
                    sMCC3.innerText = "You Lost!";
                    computerScore++;
                    computerScoreEl.innerText = "Lost: "+computerScore;
                }, 1000)
            }
        }
        if (userChoise === "Scissors") {
            if (compChoice === "Rock") {
                setTimeout(() => {
                    sMCC3.classList.remove("hide2");
                    sMCC3.innerText = "You Lost!";
                    computerScore++;
                    computerScoreEl.innerText = "Lost: "+computerScore;
                }, 1000)
            }
            if (compChoice === "Paper") {
                setTimeout(() => {
                    sMCC3.classList.remove("hide2");
                    playerScore++;
                    playerScoreEl.innerText = "Won: "+playerScore;
                }, 1000)
            }
        }
    }
    if (compChoice === "Rock") {
        ComputerRock.classList.remove("hide");
    } if (compChoice === "Paper") {
        ComputerPaper.classList.remove("hide");
    } if (compChoice === "Scissors") {
        ComputerScissors.classList.remove("hide");
    }
    resetButton.classList.remove("hide2");
}

resetButton.addEventListener("click", () => {
    secondMainContainer.classList.add("hide");
    mainContainer.classList.remove("hide");
    resetButton.classList.add("hide2");
    sMCC3.classList.add("hide2");
    sMCC3.innerText = "Congrats, You Won!";
    [PlayerRock, PlayerPaper, PlayerScissors, ComputerRock, ComputerPaper, ComputerScissors].forEach((img)=> {
        img.classList.add("hide");
    })
})