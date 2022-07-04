import { CarBrand } from "./carBrand.enum";

export class Damage {
    damageId: number|undefined;
    cin: number|undefined;
    firstName: string = "";
    lastName: string = "";
    email: string = "";
    phoneNumber: number|undefined;
    address: string = "";
    serial_number : number | undefined;
    contract_number : number | undefined;
    carBrand: CarBrand | undefined;
    carModel: string = "";
    accidentDate: Date | undefined;
    accidentPhoto: File | undefined;
    reportPhoto: File | undefined;
    status: string="";
    createTime: Date = new Date();
   
    constructor(cin?: number, firstName: string= "",
     lastName: string= "", email: string= "",
      phoneNumber?: number, address: string= "" ,
      serial_number?: number , contract_number ?: number,
      carBrand?: CarBrand ,carModel: string = "",
       accidentDate?: Date , accidentPhoto?: File ,
       reportPhoto?:File  ){
        
        this.cin = cin;
        this.firstName= firstName;
        this.lastName= lastName;
        this.email= email;
        this.phoneNumber=phoneNumber;
        this.address=address;
        this.serial_number = serial_number;
        this.contract_number = contract_number;
        this.carBrand = carBrand;
        this.carModel = carModel;
        this.accidentDate = accidentDate;
        this.accidentPhoto= accidentPhoto;
        this.reportPhoto=reportPhoto;
        this.status = 'is not yet processed';

    }
}