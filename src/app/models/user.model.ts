import { score } from "./score.model";

export class User{
    name : string
    scores : score[]

    constructor(private nom: string) {
        this.name = nom;
    }

    equals(nom:string):Boolean{
        return this.name==nom;
    }
}