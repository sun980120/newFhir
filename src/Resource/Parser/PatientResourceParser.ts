import { Patient } from '../buildTool/Patient';

export class PatientResourceParser {
    private patient: Patient;

    public setResource(patient: Patient) {
        this.patient = patient;
    }
}