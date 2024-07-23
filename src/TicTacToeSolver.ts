export class TicTacToeSolver {

    public board: string[][];

    public constructor(board: string[][]) {
        this.board = board;
    }

    //Checks the winner of the game based on the win conditions
    public checkWinner(): string {
        if(typeof this.diagonalChecker(this.board) === "string")
        {
           return "The winner is player " + this.diagonalChecker(this.board);
        }
        if(typeof this.horizontalChecker(this.board) === "string")
        {
            return "The winner is player " + this.horizontalChecker(this.board);
        }
        if(typeof this.verticalChecker(this.board) === "string")
        {
            return "The winner is player " + this.verticalChecker(this.board);
        }
        if(typeof this.boxChecker(this.board) === "string")
        {
            return "The winner is player " + this.boxChecker(this.board);
        }
        if(typeof this.cornerChecker(this.board) === "string")
        {
            return "The winner is player " + this.cornerChecker(this.board);
        }
        return "There is no winner"
    }

    //Checks to see if the board has any moves left
    public anyMovesLeft(board: string[][]): boolean  {
        // Returns false if there is a winner or if there is no more room on the board
        if(this.checkWinner() != "There is no winner")
        {
            return false;
        } 
        if(this.isBoardFilled(board))
        {
            return false;
        }
        return true;
    }

    //Checks to see if the game is over
    public isGameOver(board: string[][]): boolean {
        // Returns true if there are no more moves left or if there is a winner
        return !this.anyMovesLeft(board) || this.checkWinner() != "There is no winner";
    }

    // -------------------------------- Helper Methods ------------------------------------------------------

    //Checks the four corners of the board to see if they have the same token
    private cornerChecker(board: string[][]):string | boolean {
       if(this.board[0][0] === this.board[0][3] && this.board[0][3] === this.board[3][0] && this.board[3][0] === this.board[3][3])
       {
            //Empty corner check
            if(board[0][0] === "")
            {
                return false;
            }
            else
            {
                return board[0][0];
            }
       }
       return false;

    }

    //Checks to see if the diagonals have 4 of the same token
    private diagonalChecker(board: string[][]): string | boolean 
    {
        //First diagonal
        if(board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[2][2] === board[3][3])
        {
            //Empty diagonal check
            if(board[0][0] === "")
            {
                return false;
            }
            else
            {
                return board[0][0];
            }
        }
        //Second diagonal
        if(board[0][3] === board[1][2] && board[1][2] === board[2][1] && board[2][1] === board[3][0])
        {
            //Empty diagonal check
            if(board[0][3] === "")
            {
                return false;
            }
            else
            {
                return board[0][3];
            }
        }
        return false;
    }

    //Checks to see if any rows have the same tokens
    private horizontalChecker(board: string[][]): string | boolean  {
        for(let i = 0; i < board.length; i++)
        {
           if(board[i][0] == board[i][1] && board[i][1] == board[i][2] && board[i][2] == board[i][3])
           {
                //Empty row check
                if(board[i][0] == "")
                {
                    return false;
                }
                else
                {
                    return board[i][0];
                }
           }
        }
        return false;
    }

    //Checks to see if any columns have the same tokens
    private verticalChecker(board: string[][]): string | boolean {
        for(let j = 0; j < board.length; j++)
        {
            if(board[0][j] == board[1][j] && board[1][j] == board[2][j] && board[2][j] == board[3][j])
            {
                //Empty column check
                if(board[0][j] == "")
                    {
                        return false;
                    }
                    else
                    {
                        return board[0][j];
                    }
            }
        }
        return false;
    }

    //Checks all possible 2x2 boxes to see if they are filled with matching tokens
    private boxChecker(board: string[][]): string | boolean {
        for(let i = 0; i < board.length-1; i++)
        {
            let j = 0;
            let box1: string[][] = [[board[i][j],board[i][j+1]],[board[i+1][j],board[i+1][j+1]]];
            let box2: string[][] = [[board[i][j+1],board[i][j+2]],[board[i+1][j+1], board[i+1][j+2]]]
            let box3: string[][] = [[board[i][j+2],board[i][j+3]],[board[i+1][j+2],board[i+1][j+3]]]
            if(box1[0][0] === box1[0][1] && box1[0][1] === box1[1][0] && box1[1][0] == box1[1][1])
            {
                //Empty box check
                if(box1[0][0] == "")
                {
                    return false;
                }
                else
                {
                    return box1[0][0];
                }
            }
            if(box2[0][0] === box2[0][1] && box2[0][1] === box2[1][0] && box2[1][0] == box2[1][1])
            {
                //Empty box check
                if(box2[0][0] == "")
                {
                    return false;
                }
                else
                {
                    return box2[0][0];
                }
            }
            if(box3[0][0] === box3[0][1] && box3[0][1] === box3[1][0] && box3[1][0] == box3[1][1]) {
                //Empty box check
                if(box3[0][0] == "")
                {
                    return false;
                }
                else
                {
                    return box3[0][0];
                }
            }
        }
        return false;
    }

    //Checks to see if the board is filled with tokens
    private isBoardFilled(board: string[][]): boolean
    {
        for(let i =0; i < board.length; i++)
        {
            for(let j = 0; j < board[i].length; j++)
            {
                if(board[i][j] === '')
                {
                    return false;
                }
            }
        }
        return true;
    }
}