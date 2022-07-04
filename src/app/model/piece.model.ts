import { CarBrand } from "./carBrand.enum";
import { Family } from "./familly.enum";

export class Piece {
    idPiece: number|undefined;
    reference: string = "";
    price: number|undefined;
    quantity: number|undefined;
    description: string = "";
    availability: boolean = true;
    family: Family|undefined;
    carBrand: CarBrand | undefined;
    carModel : string = "";
    supplierId : number | undefined;
}