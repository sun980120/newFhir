export class Coding {
    public system:string;
    public version:string;
    public code: string;
    public display: string;
    public userSelected: boolean;

    public Coding(theStstem:string, theCode:string, theDisplay:string){
        this.setSystem(theStstem);
        this.setCode(theCode);
        this.setDisplay(theDisplay);
    }
    public setSystem(value:string) {
        if(value.length == 0){
            this.system = null;
        } else {
            if(this.system == null) {
                this.system = '';
            }
            this.system = value;
        }
        return this;
    }
    public setVersion(value:string){
        if(value.length == 0){
            this.version = null;
        } else {
            if(this.version == null) {
                this.version = '';
            }
            this.version = value;
        }
        return this;
    }
    public setCode(value:string){
        if(value.length == 0){
            this.code = null;
        } else {
            if(this.code == null) {
                this.code = '';
            }
            this.code = value;
        }
        return this;
    }
    public setDisplay(value:string){
        if(value.length == 0){
            this.display = null;
        } else {
            if(this.display == null) {
                this.display = '';
            }
            this.display = value;
        }
        return this;
    }
}