export class Currency {
    fromType:string;
    fromValue:string;
    result:string;
    resultFloat:number;
    toType:string;
    valid:boolean;

    constructor(result?:string,resultFloat?:number,valid?:boolean,fromValue?:string,toType?:string,fromType?:string){
        this.result=result;
        this.resultFloat=resultFloat;
        this.valid=valid;
        this.fromValue=fromValue;
        this.toType=toType;
        this.fromType=fromType;
    }
}
