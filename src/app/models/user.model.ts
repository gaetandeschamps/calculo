import { score } from "./score.model";

export class User{
    name : string
    scores : score[]

    constructor(public nom: string) {
    }
}