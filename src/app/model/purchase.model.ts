export class Purchase{
    purchaseId: number|undefined;
    userId : number|undefined;
    reference : string ="";
    price : number|undefined;
    purchaseTime : Date = new Date();
    supplierId : number | undefined;

    constructor(userId?: number, reference : string ="",price?: number ,supplierId?: number,){
        this.userId= userId;
        this.reference = reference;
        this.price= price;
        this.supplierId = supplierId;
    }
}