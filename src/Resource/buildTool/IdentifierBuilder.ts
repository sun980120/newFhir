import { CodeableConcept } from 'fhir/r4';
import { IdentifierUse } from '../enum/Status';

export class IdentifierBuilder {
    public use:IdentifierUse
    public type:CodeableConcept;
    public system: string;
    public value: string;

    public setUseElement(value: IdentifierUse){
        this.use = value;
        return this;
    }
    public setUse(value: IdentifierUse){
        if(value == null) {
            this.use = null;
        } else {
            this.use = value
        }
        return this;
    }
    public setType(value: CodeableConcept) {
        this.type = value;
        return this;
    }
    public setSystemElement(value: string){
        this.system = value;
        return this;
    }
    public setSystem(value: string) {
        this.system = value;
        return this;
    }
    public setValueElement(value: string){
        this.value = value;
        return this;
    }
    public setValue(value: string) {
        this.value = value;
        return this;
    }
}