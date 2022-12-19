import { AuthRepository } from './auth.repository';
import { Auth } from './auth.entity';
import { Request } from 'express';
import { BadRequestException } from '../../common/exceptions/bad-request.exception';
import { authDtoToEntity } from './dto/auth.dto';
// import {PatientResourceBuilder} from "../../Resource/Builder/PatientResourceBuilder";
export const AuthService = {
    async login(req: Request) {
        try {
            const { email, pwd } = req.body;
            const user = await AuthRepository.findOne({
                where: { email: email}
            })
            await user.comparePassword(pwd);
            return 'SUCCESS';
        } catch (err) {
            throw new BadRequestException(err);
        }
    },
    async signup(req: Request) {
        try {
            const { email, pwd, username } = req.body;
            const sub_date = new Date();
            const auth: Auth = authDtoToEntity.modelToEntity(email,pwd,username,sub_date);
            await AuthRepository.save(auth);
            return 'SUCCESS';
        } catch (err) {
            throw new BadRequestException(err);
        }
    },
    // async resource(req: Request) {
    //     try {
    //         const builder = new PatientResourceBuilder();
    //         const patient = builder.setMeta("http://hl7.org/fhir/uv/phd/StructureDefinition/PhdPatient").build();
    //         console.log(patient)
    //         return patient
    //     } catch (e) {
    //         throw new BadRequestException(e);
    //     }
    // }
}