import { Narrative } from 'fhir/r4';
import { Resource } from './Resource';

export abstract class DomainResource extends Resource {
    public text: Narrative;

    public getText() {
        return this.text;
    }
    public setText(value: Narrative) {
        this.text = value;
        return this;
    }
}