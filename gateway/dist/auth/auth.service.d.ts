import { HttpService } from '@nestjs/axios';
import { RegisterInput, LoginInput } from './auth.types';
export declare class AuthService {
    private httpService;
    constructor(httpService: HttpService);
    register(input: RegisterInput): Promise<any>;
    login(input: LoginInput): Promise<any>;
    validateToken(token: string): Promise<any>;
}
