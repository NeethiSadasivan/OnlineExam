import { User } from "./user";
import { Subjects } from "./subjects";

export class Result {
    Userid!: User;
    Subjectid!:Subjects;
    level1marks!:number;
    level2marks!:number;
    level3marks!:number;
}
