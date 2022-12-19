import { Meta } from 'fhir/r4';
// import { NarrativeStatus } from '../enum/Status';

export class Resource {
    // public id;
    public meta: Meta;
    public setMeta(value: Meta){
        this.meta = value;
        return this;
    }
}