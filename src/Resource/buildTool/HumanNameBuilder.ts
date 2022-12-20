import {NameUse} from "../enum/Status";
import {Period} from "fhir/r4";

export class HumanNameBuilder {
    public use:string;
    public text:string;
    public family:string;
    public given:Array<string>;
    public prefix:Array<string>;
    public suffix:Array<string>;
    public period: Period;

    setUse(value:NameUse){
        if(value == null) this.use = null;
        else{
            if(this.use == null) {
                this.use = ''
            }
            this.use = value
        }
        return this;
    }
    setText(value:string){
        if(value.length == 0) {
            this.text = null;
        } else {
            if(this.text == null) {
                this.text = '';
            }
            this.text = value
        }
        return this;
    }
    setFamily(value:string){
        if(value.length == 0) {
            this.family = null;
        } else {
            if(this.family == null) {
                this.family = '';
            }
            this.family = value
        }
        return this;
    }
    setGiven(theGiven: Array<string>){
        this.given = theGiven
        return this;
    }
    setPrefix(thePrefix: Array<string>){
        this.prefix = thePrefix;
        return this;
    }
    setSuffix(theSuffix:Array<string>){
        this.suffix = theSuffix;
        return this;
    }
    addSuffix(value: string){
        const t = value;
        if (this.suffix == null) {
            this.suffix = [];
        }
        this.suffix.push(t);
        return this;
    }
    setPeriod(value: Period){
        this.period = value;
        return this;
    }
}