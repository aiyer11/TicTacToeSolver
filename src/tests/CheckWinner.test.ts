import { TicTacToeSolver } from "../TicTacToeSolver";

test('No winner test', () => {
    let board = 
   [["0","1","",""],
    ["1","1","0",""],
    ["0","0","1",""],
    ["0","1","0","1"]];

    let solver = new TicTacToeSolver(board);
    expect(solver.checkWinner()).toBe("There is no winner");
})

test('Vertical Winner test', () => {
    let board = 
   [["0","1","",""],
    ["1","1","0",""],
    ["0","1","0",""],
    ["0","1","0","1"]];

    let solver = new TicTacToeSolver(board);
    expect(solver.checkWinner()).toBe("The winner is player 1");
})

test('Horizontal winner test', () => {
    let board = 
   [["0","1","",""],
    ["0","1","0",""],
    ["0","0","0",""],
    ["1","1","1","1"]];

    let solver = new TicTacToeSolver(board);
    expect(solver.checkWinner()).toBe("The winner is player 1");
})

test('Diagonal winner test', () => {
    let board = 
   [["1","1","",""],
    ["0","1","0",""],
    ["0","0","1",""],
    ["1","0","0","1"]];

    let solver = new TicTacToeSolver(board);
    expect(solver.checkWinner()).toBe("The winner is player 1");
})

test('Box winner test', () => {
    let board = 
   [["1","1","",""],
    ["0","0","0",""],
    ["0","0","0",""],
    ["1","1","1",""]];

    let solver = new TicTacToeSolver(board);
    expect(solver.checkWinner()).toBe("The winner is player 0");
})

test('Corner winner test', () => {
    let board = 
   [["1","1","","1"],
    ["","0","0",""],
    ["0","0","1",""],
    ["1","","","1"]];

    let solver = new TicTacToeSolver(board);
    expect(solver.checkWinner()).toBe("The winner is player 1");
})
