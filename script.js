// "use strict";
const gameBoard = document.querySelector(".gameboard");
const textMsg = document.querySelector(".title");
const cell = document.querySelectorAll(".cell");
const btnRestart = document.querySelector(".btn-restart");
const playerTurn = document.querySelector(".player-turn");
const player1 = "X";
const player2 = "O";
let curentPlayer = player1;
let emptyBox = ["", "", "", "", "", "", "", "", ""];

const PlayGame = () => {
  emptyBox.fill(null);
  const handleClick = (e) => {
    const celID = e.target.id;
    if (!emptyBox[celID]) {
      emptyBox[celID] = curentPlayer;
      e.target.textContent = curentPlayer;
      curentPlayer = curentPlayer === player1 ? player2 : player1;
      playerTurn.textContent = ` Player ${
        curentPlayer === player1 ? "1" : "2"
      } turn`;
      if (playerWon() !== false) {
        curentPlayer = curentPlayer === player1 ? player2 : player1;
        textMsg.textContent = ` Player ${
          curentPlayer === player1 ? "X" : "O"
        } has won`;
        playerTurn.innerText = "";
        let winnerPlayer = playerWon();
        winnerPlayer.map((box) => {
          cell[box].style.backgroundColor = "#fcc419";
        });

        console.log(winnerPlayer);
      }
    } else if (playerWon() !== true) {
      textMsg.textContent = "Draw! play again";
    }
  };
  const winningCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const playerWon = function () {
    for (const block of winningCombo) {
      const [a, b, c] = block;
      // console.log(a);

      if (
        emptyBox[a] &&
        emptyBox[a] == emptyBox[b] &&
        emptyBox[a] == emptyBox[c]
      ) {
        console.log(a, b, c);
        return [a, b, c];
      }
    }
    // winningCombo.forEach((block) => {
    //   const [a, b, c] = block;
    //   // console.log(a);

    //   if (
    //     emptyBox[a] &&
    //     emptyBox[a] == emptyBox[b] &&
    //     emptyBox[a] == emptyBox[c]
    //   ) {
    //     console.log(a, b, c);
    //     return [a, b, c];
    //   }
    // });

    return false;
  };

  cell.forEach((cel) => {
    cel.addEventListener("click", handleClick);
  });

  const restart = () => {
    cell.forEach((cel) => {
      cel.innerHTML = "";
      cel.style.backgroundColor = "";
    });
    emptyBox.fill(null);
    curentPlayer = player1;
    textMsg.innerHTML = "Tick Tac Toe";
    playerTurn.innerText = "Player 1 turn";
  };

  btnRestart.addEventListener("click", restart);
};
PlayGame();
