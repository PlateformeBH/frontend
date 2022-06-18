export class Damage {
    damageId: number|undefined;
    cin: number|undefined;
    firstName: string = "";
    lastName: string = "";
    email: string = "";
    phoneNumber: number|undefined;
    address: string = "";
    carModel: string = "";
    accidentDate: string = "";
    accidentPhoto: string = "";
    reportPhoto: string = "";
    createTime: Date = new Date();
   
    constructor(cin?: number, firstName: string= "", lastName: string= "", email: string= "", phoneNumber?: number, address: string= "" ){
        
        this.cin = cin;
        this.firstName= firstName;
        this.lastName= lastName;
        this.email= email;
        this.phoneNumber=phoneNumber;
        this.address=address;

    }
}