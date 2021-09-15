import { Category } from "./category";

export class User {

    constructor(
        public userId : number,
        public name : string,
        public email : string,
        public category : Category
    ){}
}
