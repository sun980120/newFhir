export class MetaBuild {
    public profile:[string];

    public setProfile(theProfile: [string]){
        this.profile = theProfile;
        return this;
    }
    public getProfile(){
        if(this.profile == null) {
            this.profile = [''];
        }
        return this.profile;
    }
}