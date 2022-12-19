import { Controller } from '../../common/interfaces/controller.interface';
import { Router } from 'express';
import { wrap } from '../../middlewares/request.handler';
import { AuthService } from './auth.service';
export class AuthController implements Controller {
    path = '/auth';
    router = Router();
    constructor() {
        this.initializeRoutes();
    }
    initializeRoutes() {
        const router = Router();
        router
            // .get('/resource', wrap(AuthService.resource))
            // .post('/login', wrap(AuthService.login))
            // .post('/signup', wrap(AuthService.signup))
        this.router.use(this.path, router);
    }
}