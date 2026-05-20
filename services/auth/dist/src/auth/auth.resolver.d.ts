import { AuthService } from './auth.service';
import { RegisterInput, LoginInput, AuthResponse } from './dto/auth.dto';
import { User } from '../users/user.entity';
export declare class AuthResolver {
    private authService;
    constructor(authService: AuthService);
    register(input: RegisterInput): Promise<AuthResponse>;
    login(input: LoginInput): Promise<AuthResponse>;
    me(ctx: any): Promise<User | null>;
}
