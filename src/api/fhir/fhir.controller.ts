import { Controller } from '../../common/interfaces/controller.interface';
import { Router } from 'express';
import { wrap } from '../../middlewares/request.handler';
import { FhirService } from './fhir.service';
export class FhirController implements Controller {
    path = '/fhir';
    router = Router();
    constructor() {
        this.initializeRoutes();
    }
    initializeRoutes() {
        const router = Router();
        router
            .get('/resource', wrap(FhirService.resource))
        this.router.use(this.path, router);
    }
}