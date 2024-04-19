import { Cell } from "./Cell";
import { Colors } from "./Colors";
import { Queen } from "./figures/Queen";
import { Pawn } from './figures/Pawn';
import { King } from "./figures/King";

export class Board {
    cells: Cell[][] = []


    public initCells () {
        for(let i = 0; i < 8; i++) {
            const row: Cell[] = []
            for(let j = 0; j < 8; j++) {
                if((i + j) % 2 !== 0) {
                    row.push(new Cell(this, i, j, Colors.BLACK, null)) //color black
                } else {
                    row.push(new  Cell(this, i, j, Colors.WHITE, null)) //color white
                }
            }
            this.cells.push(row);
        }
    }

    public getCell(x: number, y: number){
        return this.cells[y][x]
    }

    private addPawns() {
        for(let i = 0; i < 8; i++) {
            new Pawn(Colors.BLACK, this.getCell(i, 1))
            new Pawn(Colors.WHITE, this.getCell(i, 6))
        }
    }

    private addKings() {
        new King(Colors.BLACK, this.getCell(4, 0))
        new King(Colors.WHITE, this.getCell(4, 7))
    }

    private addQueens() {
        
    }

    private addBishops() {
        
    }

    private addKnights() {
        
    }

    private addRook() {
        
    }

    public addFigures() {
        this.addPawns()
        this.addBishops()
        this.addKings()
        this.addQueens()
        this.addBishops()
        this.addKnights()
        this.addRook()
    }
}