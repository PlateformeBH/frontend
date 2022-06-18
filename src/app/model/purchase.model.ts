export class Purchase{
    id: number|undefined;
    userId : number|undefined;
    reference : string ="";
    price : number|undefined;
    purchaseTime : Date = new Date()

    constructor(userId?: number, reference : string ="",price?: number){
        this.userId= userId;
        this.reference = reference;
        this.price= price;

    }
}