import React, { useState } from 'react';

const App = () => {
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  const [playerTurn, setPlayerTurn] = useState('X');

  const clickedSquare = (index) => {
    board[index] = playerTurn;

    let winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningCombos.length; i++) {
      let winningRow = winningCombos[i];
      let p1 = winningRow[0];
      let p2 = winningRow[1];
      let p3 = winningRow[2];
      if (
        board[p1] !== '' &&
        board[p1] === board[p2] &&
        board[p2] !== '' &&
        board[p2] === board[p3] &&
        board[p3] !== '' &&
        board[p3] === board[p1]
      ) {
        alert(`Winner! Player ${playerTurn} has won the game!`);
      }
    }

    setPlayerTurn(playerTurn === 'X' ? 'O' : 'X');
  };

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <main className="board">
        {board.map((square, index) => {
          return (
            <section
              key={index}
              onClick={() => clickedSquare(index)}
              className="square"
            >
              {square}
            </section>
          );
        })}
      </main>
    </div>
  );
};

export default App;
