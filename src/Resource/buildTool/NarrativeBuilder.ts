import { NarrativeStatus } from '../enum/Status';

export class NarrativeBuilder {
    public status: NarrativeStatus;
    public div: string;


    public getStatus(){
        return this.status;
    }
    public setStatus(value: NarrativeStatus){
        this.status = value;
        return this;
    }
    public getDiv() {
        // if(this.div == null) {
        //     throw new BadRequestException("Attempt to auto-create Narrative.div");
        // }
        // if()
        return this.div;
    }
    public setDiv(value: string){
        const b = "<div xmlns=\"http://www.w3.orh/1999/xhtml\"><p>";
        const c = "</p></div>";
        value = value.replace(b, '')
        value = value.replace(c, '')
        this.div = value;
        return this;
    }
}