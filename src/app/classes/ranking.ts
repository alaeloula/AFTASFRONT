import { Competition } from "./competition";
import { Member } from "./member.";

export interface ranking{
    "member":Member,
    "competition": Competition,
    "rank": number,
    "score":number 
}