import { UserType } from "./UserType";

export interface User {
    id: number;
    userName: string;
    password: string;
    eMail: string;
    userType: UserType;
}