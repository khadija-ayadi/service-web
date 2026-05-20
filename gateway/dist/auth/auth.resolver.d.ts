import { AuthService } from './auth.service';
import { AuthResponse, RegisterInput, LoginInput, User } from './auth.types';
export declare class AuthResolver {
    private authService;
    constructor(authService: AuthService);
    register(input: RegisterInput): Promise<AuthResponse>;
    login(input: LoginInput): Promise<AuthResponse>;
    me(ctx: any): Promise<User | null>;
}
