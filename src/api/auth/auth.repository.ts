import { AppDataSource } from '../../data-source';
import { Auth } from './auth.entity';
export const AuthRepository = AppDataSource.getRepository(Auth);
