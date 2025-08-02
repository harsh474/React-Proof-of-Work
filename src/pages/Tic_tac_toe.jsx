import React, { useRef, useState } from 'react';
import { useEffect } from 'react';

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [turn, setTurn] = useState(true); // true = O, false = X
  const [winner, setWinner] = useState('');
  const [message, setMessage] = useState('');
  const ref = useRef(null);
  const count = useRef();
  useEffect(() => {
    count.current = 0;
  }, [])
  function check(a, b, c, newBoard) {
    if (newBoard[a] === '' || newBoard[b] === '' || newBoard[c] === '') return false;
    if ((newBoard[a] === newBoard[b]) && (newBoard[a] === newBoard[c]) && (newBoard[b] === newBoard[c])) return true;
    return false;
  }
  function find_winner(newBoard) {
    if (check(0, 4, 8, newBoard)) return true;
    else if (check(2, 4, 6, newBoard)) return true;
    else if (check(0, 1, 2, newBoard)) return true;
    else if (check(3, 4, 5, newBoard)) return true;
    else if (check(6, 7, 8, newBoard)) return true;
    else if (check(0, 3, 6, newBoard)) return true;
    else if (check(1, 4, 7, newBoard)) return true;
    else if (check(2, 5, 8, newBoard)) return true;
    return false;
  }

  const handleClick = (index) => {

    count.current = count.current + 1;
    if (board[index] !== '' || winner !== '') return; // prevent overwriting
    const newBoard = [...board];
    newBoard[index] = turn ? 'O' : 'X';
    setBoard(newBoard);
    setTurn(!turn);
    if (find_winner(newBoard)) {
      // alert(`Player ${turn?'0':'X'} is winner`);
      setWinner(turn);
      setMessage(`Player ${turn ? '0' : 'X'} is Winner`);
      ref.current = setTimeout(() => {
        reset();
      }, 10000);
      return;
    }
    console.log(count.current)
    if (count.current === 9) {
      setMessage("Match is draw");
      ref.current = setTimeout(() => {
        reset();
      }, 10000);
      return;
    }
  };
  const reset = () => {
    if (ref.current) {
      clearTimeout(ref.current);
      ref.current = null;
    }
    count.current = 0;
    setBoard(Array(9).fill(''));
    setTurn(true);
    setWinner('');
    setMessage('');
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-3xl font-bold mb-8">Tic Tac Toe : <span style={{ display: message === '' ? 'none' : 'inline' }}>{message}</span></h1>
      <h3
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '40px',      // bigger size for better visibility
          gap: '8px',            // slight increase in spacing
          fontWeight: 'bold',    // makes it pop
        }}
      >
        <span style={{ color: turn ? 'yellow' : 'gray' }}>O</span>
        vs
        <span style={{ color: turn ? 'lightgray' : 'yellow' }}>X</span>
      </h3>

      <div className="grid grid-cols-3 w-[306px] h-[306px] gap-0">
        {board.map((cell, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className="border-[2px] border-gray w-[100px] h-[100px] flex items-center justify-center text-3xl font-bold cursor-pointer"
          >
            {cell}
          </div>
        ))}
      </div>
      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
