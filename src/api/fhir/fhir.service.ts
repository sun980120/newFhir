import { Request } from 'express';
import { BadRequestException } from '../../common/exceptions/bad-request.exception';
import {PatientResourceBuilder} from '../../Resource/Builder/PatientResourceBuilder';
import { IdentifierUse, NarrativeStatus } from '../../Resource/enum/Status';
import { PatientResourceParser } from '../../Resource/Parser/PatientResourceParser';

export const FhirService = {
    async resource(_req: Request) {
        try {
            const builder = new PatientResourceBuilder();
            const patient = builder.setMeta(["http://hl7.org/fhir/uv/phd/StructureDefinition/PhdPatient"]).setText(NarrativeStatus.GENERATED, "<div xmlns=\"http://www.w3.orh/1999/xhtml\"><p>Patient Resource</p></div>").addIdentifier(IdentifierUse.OFFICIAL,
                "http://terminology.hl7.org/CodeSystem/v2-0203",
                "MR", "http://www.intin.kr", "PT1234567").build();
            const parser = new PatientResourceParser();
            parser.setResource(patient)
            // var xml = fhir.objToXml(patient);
            // console.log(xml)
            return parser
        } catch (e) {
            throw new BadRequestException(e);
        }
    }
}