import { Request } from 'express';
import { BadRequestException } from '../../common/exceptions/bad-request.exception';
import {PatientResourceBuilder} from "../../Resource/Builder/PatientResourceBuilder";
import { NarrativeStatus } from '../../Resource/enum/Status';
export const FhirService = {
    async resource(req: Request) {
        try {
            console.log(1)
            const builder = new PatientResourceBuilder();
            console.log(2)
            const patient = builder.setMeta(["http://hl7.org/fhir/uv/phd/StructureDefinition/PhdPatient"]).setText(NarrativeStatus.GENERATED, "<div xmlns=\"http://www.w3.orh/1999/xhtml\"><p>Patient Resource</p><div>").build
            console.log(3)
            console.log(patient)
            return patient
        } catch (e) {
            throw new BadRequestException(e);
        }
    }
}