import { Auth } from '../auth.entity';
export interface authDto {
    email: string;
    pwd: string;
    username: string;
    sub_date?: Date;
}
export const authDtoToEntity = {
    modelToEntity(email, pwd, username, sub_date){
        const auth = new Auth();
        auth.email = email;
        auth.pwd = pwd;
        auth.username = username;
        auth.sub_date = sub_date;
        return auth;
    }
}