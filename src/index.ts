import express from 'express';
import { Router } from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import { Controller } from './common/interfaces/controller.interface';
import { errorMiddleware } from './middlewares/error.middleware';
import cors from 'cors';
import config from 'config';

const ServerConfig = config.get('server');

export default class App {
    private readonly app: express.Application;

    /**
    * 앱 클래스의 생성자 미들웨어 컨트롤러 에러 핸들러 필요
    * @param controllers
    */
    constructor(controllers: Controller[]) {
        this.app = express();
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
        this.initializeErrorHandling();
    }

    /**
    * 서버 포트 설정
    */
    public listen() {
        const port = process.env.SERVER_PORT || ServerConfig.port;
        this.app.listen(port, () => {
            console.log(`SERVER RUN TO ${port}`);
            console.log(`Check Your Browser -> http://localhost:${port}/api`)
        });
    }

    public getServer() {
        return this.app;
    }

    /**
    * 미들웨어 선언
    * @private
    */
    private initializeMiddlewares() {
        this.app.use(bodyParser.json());
        this.app.use(express.json());
        this.app.use(
            session({
                name: 'prgrms.sid',
                secret: 'keyboard cat',
                resave: false,
                saveUninitialized: true,
            }),
        );
        this.app.use(cors());
    }

    /**
    * 에러 처리 미들웨어 선언
    * @private
    */
    private initializeErrorHandling() {
        this.app.use(errorMiddleware);
    }

    /**
    * 컨트롤러 선언
    * @param controllers
    * @private
    */
    private initializeControllers(controllers: Controller[]) {
        const router = Router();

        router.get('/', (req, res) => res.send('SERVER is Running !!!'));

        controllers.forEach((controller) => {
            router.use(controller.router);
            console.log(controller);
        });

        this.app.use('/api', router);
    }
}