import { score } from "./score.model";

export class User{
    name : string
    scores : number[]

    constructor(private nom: string) {
        this.name = nom;
        this.scores = [0, 0, 0, 0];
    }

    equals(nom:string):Boolean{
        return this.name==nom;
    }
}