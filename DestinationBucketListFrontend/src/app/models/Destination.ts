import { Geolocation } from "./Geolocation";
import { StayDates } from "./StayDates";

export interface Destination {
    id: number;
    title:string;
    description: string;
    stayDate: StayDates;
    location: Geolocation;
    image: string;
    isPublic: boolean;
}