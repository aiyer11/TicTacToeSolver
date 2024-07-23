import { TicTacToeSolver } from "../TicTacToeSolver";

test('Game over board is filled test', () => {
    let board = 
   [["0","1","1","0"],
    ["1","1","0","1"],
    ["0","0","0","1"],
    ["0","1","0","1"]];

    let solver = new TicTacToeSolver(board);
    expect(solver.isGameOver(board)).toBeTruthy();
})

test('Game over winner test', () => {
    let board = 
   [["0","1","1","0"],
    ["1","1","0","1"],
    ["0","0","0","0"],
    ["0","1","0",""]];

    let solver = new TicTacToeSolver(board);
    expect(solver.isGameOver(board)).toBeTruthy();
})

test('Game is not over test', () => {
    let board = 
   [["0","1","1","0"],
    ["1","1","","1"],
    ["0","0","0",""],
    ["0","1","0","1"]];

    let solver = new TicTacToeSolver(board);
    expect(solver.isGameOver(board)).toBeFalsy();
})



