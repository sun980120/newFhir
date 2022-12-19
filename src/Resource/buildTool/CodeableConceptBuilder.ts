import { Coding } from './Coding';

export class CodeableConceptBuilder {
    public coding:Array<Coding>;
    public text:string;

    public setCoding(theCoding: Array<Coding>){
        this.coding = theCoding;
        return this;
    }
    public addCoding(){
        const t = new Coding();
        if(this.coding == null){
            this.coding = [];
        }
        this.coding.push(t);
        return t;
    }
    public setText(value: string) {
        if(value.length == 0) {
            this.text = null;
        } else {
            if(this.text == null) {
                this.text = '';
            }
            this.text = value;
        }
        return this;
    }
    // public addCoding(t: Coding) : CodeableConcept{
    //     if(t == null) {
    //         return this;
    //     } else {
    //         if(this.coding == null) {
    //             this.coding = [];
    //         }
    //         this.coding.push(t);
    //     }
    // }
}