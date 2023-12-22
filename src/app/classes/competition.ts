import { Time } from "@angular/common";

export interface Competition{
    "code"?:number,
    "date": Date,
    "startTime": Time,
    "endTime": Time,
    "numberOfParticipation":number ,
    "location": String,
    "amount": number
}