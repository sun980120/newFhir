import { DomainResource } from './DomainResource';

export class Patient extends DomainResource {
    public readonly resourceType = 'Patient'
}