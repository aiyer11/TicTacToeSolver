import { TicTacToeSolver } from "../TicTacToeSolver";

test('Moves left test', () => {
    let board = 
   [["0","1","",""],
    ["1","1","0",""],
    ["0","0","1",""],
    ["0","1","0","1"]];

    let solver = new TicTacToeSolver(board);
    expect(solver.anyMovesLeft(board)).toBeTruthy();
})

test('Winner no moves left test', () => {
    let board = 
   [["0","1","",""],
    ["1","1","0",""],
    ["0","1","0",""],
    ["0","1","0","1"]];

    let solver = new TicTacToeSolver(board);
    expect(solver.anyMovesLeft(board)).toBeFalsy();
})

test('Full board no moves left test', () => {
    let board = 
   [["0","1","0","0"],
    ["1","1","1","0"],
    ["0","1","0","1"],
    ["0","0","1","1"]];

    let solver = new TicTacToeSolver(board);
    expect(solver.anyMovesLeft(board)).toBeFalsy();
})
