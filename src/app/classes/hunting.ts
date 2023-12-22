import { Competition } from "./competition";
import { Fish } from "./fish";
import { Member } from "./member.";

export interface Hunting
{
    numberOfFish: number,
    membre: Member,
    competition:Competition,
    fish:Fish
}