import { ICars } from "src/Interfaces/ICars"; 

export class Mobiles {
    
    public infoArray: ICars[];
    constructor(){
        this.infoArray  =  [
            {
                name: 'Ford',
                color: 'Red',
                year: 2001,
                isNew: false
            },
            {
                name: 'BMW',
                color: 'Green',
                year: 2014,
                isNew: false
            }
        ]; 
    }
}