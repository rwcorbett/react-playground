import React, { FC, useState } from "react";

// TODO: fix these interfaces/types so that the board has type
interface Cell {
    row: number;
    col: number;
    owner: string;
}
// interface Row {
//     row: Cell[];
// }
// interface Board {
//     board: Row[];
// }

const createBoardArr = (size: number = 3) => {
    let board: Cell[][] = [];
    for (let i = 0; i < size; i++) {
        board[i] = [];
        for (let j = 0; j < size; j++) {
            board[i][j] = { row: i + 1, col: j + 1, owner: "" };
        }
    }
    return board;
}

const GameTTT = () => {
    const [board, setBoard] = useState(createBoardArr(3));
    const [currentPlayer, setCurrentPlayer] = useState('X');
    // const [xScore, setXScore] = useState(0);
    // const [oScore, setOScore] = useState(0);
    console.debug("render GameTTT", board);

    // const evaluateBoard = (board: Cell[][]) => {
    //     console.debug("new board", board);
    //     setXScore(0);
    //     setOScore(0);
    //     for (let i = 0; i < board.length; i++) {
    //         for (let j = 0; j < board[i].length; j++) {
    //             // console.debug(board[i][j]);
    //             const { row, col, owner } = board[i][j];
    //             if (owner === "x") {
    //                 const newXScore = xScore;
    //                 setXScore(newXScore + 1);
    //             } else if (owner === "o") {
    //                 const newOScore = oScore;
    //                 setOScore(newOScore + 1);
    //             } else {
    //                 // do nothing
    //             }
    //         }
    //     }
    // }

    // if calling directly this is a mouse event
    // const handleCellClick: React.MouseEventHandler<HTMLElement> = () => {
    // if using a callback we can just pass params
    // const handleCellChange = (row: number, col: number, owner: string) => {
    //     console.debug("clicked cell", row, col);
    //     let newBoard = board;
    //     newBoard[row][col].owner = owner;
    //     setBoard(newBoard);
    //     evaluateBoard(board);
    // }

    const handleCellClick = (row: number, col: number) => {
        const newBoard = board;
        newBoard[row][col].owner = currentPlayer;
        setBoard(newBoard);
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }

    return (
        <div className="board">
            <p>Player {currentPlayer}'s turn</p>
            {board.map((row: any[], r: number) => (
                <div className="row" key={r}>
                    {row.map((cell: { row: number, col: number, owner: string }, c: number) => (
                        <div className="cell" key={c} onClick={() => handleCellClick(r,c)}>
                            <span>{cell.owner}</span>
                            {/* <code>{cell.row}x{cell.col}</code> */}
                            {/* <input type="text" name="ttt" onChange={(e) => handleCellChange(r, c, e.currentTarget.value)} /> */}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
export default GameTTT;