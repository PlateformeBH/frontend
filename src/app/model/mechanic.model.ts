import { Role } from "./role.enum";
import { Speciality } from "./speciality.enum";

export class Mechanic {
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
    speciality : Speciality | undefined;
    role: Role = Role.MECHANIC;
}