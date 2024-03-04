import React, { FC, useState } from "react";

// TODO: fix these interfaces/types
// interface Cell {
//     col: number;
// }
// interface Row {
//     row: Cell[];
// }
// interface Board {
//     board: Row[];
// }

const createBoardArr = (size: number = 3) => {
    let board: any = [];
    for (let i = 0; i < size; i++) {
        board[i] = [];
        for (let j = 0; j < size; j++) {
            board[i][j] = { row: i+1, col: j+1 };
        }
    }
    return board;
}

const GameTTT = () => {
    const [board, setBoard] = useState(createBoardArr(3));
    console.debug(board);

    const handleCellClick: React.MouseEventHandler<HTMLElement> = (e) => {
        e.stopPropagation();
        e.currentTarget.innerHTML = "X";
        console.debug("clicked cell");
    }

    return (
        <div className="board">
            {board.map((row: any[], r: number) => (
                <div className="row"  key={r}>
                    {row.map((cell: { row: number, col: number }, c: number) => (
                        <div onClick={handleCellClick} className="cell" key={c}>
                            <code>{cell.row}x{cell.col}</code>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
export default GameTTT;