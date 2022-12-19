import { HumanName, Identifier, Meta, Narrative, ContactPoint, DataType, Address, PatientLink, Extension, Patient } from 'fhir/r4';
import { NarrativeStatus } from '../enum/Status';

export class PatientResourceBuilder {
    private meta:Meta;
    private text: Narrative;
    // private identifierList: Array<Identifier>
    // private active: boolean;
    // private humanNameList: Array<HumanName>
    // private contactPointList: Array<ContactPoint>
    // private birthDate: DataType;
    // private administrativeGender: string;
    // private addressList: Array<Address>;
    // private linkList: Array<PatientLink>;
    // private extensionList: Array<Extension>

    setMeta(metaProfile: [string]) {
        console.log(metaProfile)
        this.meta.profile = metaProfile;
        return this;
    }
    setText(status: NarrativeStatus, div:string){
        console.log(status)
        console.log(div)
        this.text.status = status;
        this.text.div = div;
        return this;
    }
    build() {
        let patient: Patient;
        patient.meta = this.meta;
        patient.text = this.text;
        return patient;
    }
}



// import {Address, AdministrableProductDefinition, ContactPoint, DataType, Extension, HumanName, Identifier, ImplementationGuideDefinitionResource, Meta,Narrative, Patient, PatientLink} from 'fhir/r4';
// import java from 'java';
// import { IdentifierUse, NameUse, NarrativeStatus } from './status';


// var FhirContext = java.import('ca.uhn.fhir.context.FhirContext');
// var IParser = java.import('ca.uhn.fhir.parser.IParser');
// var ArrayList = java.import('java.util.ArrayList');
// var List = java.import('java.util.List');
// var address = java.import('org.hl7.fhir.r4.model.Address');
// var CodeableConcept = java.import('org.hl7.fhir.r4.model.CodeableConcept');
// var contactPoint = java.import('org.hl7.fhir.r4.model.ContactPoint');
// var DateType = java.import('org.hl7.fhir.r4.model.DateType');
// var Enumerations = java.import('org.hl7.fhir.r4.model.Enumerations');
// var extension = java.import('org.hl7.fhir.r4.model.Extension');
// var humanName = java.import('org.hl7.fhir.r4.model.HumanName');
// var identifier = java.import('org.hl7.fhir.r4.model.Identifier');
// var meta = java.import('org.hl7.fhir.r4.model.Meta');
// var narrative = java.import('org.hl7.fhir.r4.model.Narrative');
// var Patient = java.import('org.hl7.fhir.r4.model.Patient');
// var Reference = java.import('org.hl7.fhir.r4.model.Reference');
// var StringType = java.import('org.hl7.fhir.r4.model.StringType');

// export class PatientResourceBuilder {
    
//     private meta:Meta;
//     private text: Narrative;
//     private identifierList: Array<Identifier>
//     private active: boolean;
//     private humanNameList: Array<HumanName>
//     private contactPointList: Array<ContactPoint>
//     private birthDate: DataType;
//     private administrativeGender: string;
//     private addressList: Array<Address>;
//     private linkList: Array<PatientLink>;
//     private extensionList: Array<Extension>

//     setMeta(metaProfile: string) {
//         var MetaData = java.import('org.hl7.fhir.r4.model.Meta');
//         const meta = new MetaData();
//         meta.addProfile(metaProfile);
//         this.meta = meta;
//         return this;
//     }
//     setText(status: NarrativeStatus, div: string){
//         var narrative = java.import('org.hl7.fhir.r4.model.Narrative');
//         const nar = new narrative();
//         nar.setStatus(status);
//         nar.setDivAsString(div);
//         this.text = nar;
//         return this;
//     }
//     addIdentifier(use: IdentifierUse, codeSystem:string,codeCode:string, system:string, value:string){
//         var identifier = java.import('org.hl7.fhir.r4.model.Identifier');
//         var CodeableConcept = java.import('org.hl7.fhir.r4.model.CodeableConcept');
//         const identify = new identifier();
//         identify.setUse(use)
//         const codeableConcept = new CodeableConcept();
//         codeableConcept.addCoding().setSystem(codeSystem).setCode(codeCode)
//         identify.setType(codeableConcept);
//         identify.setSystem(system);
//         identify.setValue(value);
//         this.identifierList = identify;
//         return this;
//     }
//     setActive(active:boolean){
//         this.active = active;
//         return this;
//     }
//     build(){
//         var Patient = java.import('org.hl7.fhir.r4.model.Patient');
//         const patient = new Patient();
//         patient.setMeta(this.meta);
//         patient.setText(this.text);
//         patient.setIdentifier(this.identifierList);
//         patient.setActive(this.active);
//         return patient;
//     }
//     // addName(use:NameUse, text:string, family:string, given:string, prefix:string){
//     //     var humanName = java.import('org.hl7.fhir.r4.model.HumanName');
//     //     const human = new humanName()
//     //     human.setUse(use);
//     //     human.setText(text);
//     //     human.setFamily(family);
//     //     const TypeGivenList:Array<>;
//     // }
// }