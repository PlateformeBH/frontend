import { Family } from "./familly.enum";

export class Piece {
    idPiece: number|undefined;
    reference: string = "";
    price: number = 0.0;
    quantity: number = 0;
    description: string = "";
    availability: boolean= true;
    family: Family|undefined;
}