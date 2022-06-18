import { Role } from "./role.enum";

export class User {
    userId: number|undefined;
    cin: number|undefined;
    firstName: string = "";
    lastName: string = "";
    email: string = "";
    phoneNumber: number|undefined;
    address: string = "";
    username: string = "";
    password: string = "";
    token: string ="";
    role: Role|undefined;
}