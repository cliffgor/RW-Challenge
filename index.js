// You may choose to add new functions and additional modules
const boardState = {
    // complete this enum with all the possible states of a noughts and crosses board (there 's more than 3)
    CROSSES_WIN: "CROSSES WIN",
    NOUGHTS_WIN: "NOUGHTS_WIN",
    DRAW: "DRAW",
}

function getStateOfBoard(board) {
    // complete this method so that it returns the correct board state
    return boardState.CROSSES_WIN;
}

// leave this part unchanged
const args = process.argv.slice(2);
for (let i = 0; i < args.length; i++) {
    console.log(getStateOfBoard(args[i]));
}