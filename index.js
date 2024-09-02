// You may choose to add new functions and additional modules
const boardState = {
    // complete this enum with all the possible states of a noughts and crosses board (there 's more than 3)
    CROSSES_WIN: "CROSSES WIN",
    NOUGHTS_WIN: "NOUGHTS_WIN",
    DRAW: "DRAW",
    ONGOING: "ONGOING",
    INVALID: "INVALID"
}

function checkWin(board, player) {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    return winPatterns.some(pattern =>
        pattern.every(index => board[index] === player)
    );
}

function countSymbols(board) {
    return {
        X: board.split('X').length - 1,
        O: board.split('O').length - 1,
        _: board.split('_').length - 1
    };
}

function getStateOfBoard(board) {
    // complete this method so that it returns the correct board state
    if (board.length !== 9 || /[^XO_]/.test(board)) {
        return boardState.INVALID;
    }

    const counts = countSymbols(board);
    const xWin = checkWin(board, 'X');
    const oWin = checkWin(board, 'O');

    if (board[0] === 'O') {
        return boardState.INVALID;
    }

    if (xWin && oWin) {
        return boardState.INVALID;
    }

    if (xWin) {
        return boardState.CROSSES_WIN;
    }

    if (oWin) {
        return boardState.NOUGHTS_WIN;
    }

    if (counts._ === 0) {
        return boardState.DRAW;
    }

    if (counts.X < counts.O || counts.X > counts.O + 1) {
        return boardState.INVALID;
    }

    return boardState.ONGOING;
}



// leave this part unchanged
const args = process.argv.slice(2);
for (let i = 0; i < args.length; i++) {
    console.log(getStateOfBoard(args[i]));
}