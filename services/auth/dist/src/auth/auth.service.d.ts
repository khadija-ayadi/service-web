import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/user.entity';
import { RegisterInput } from './dto/auth.dto';
import { LoginInput } from './dto/auth.dto';
export declare class AuthService {
    private usersRepo;
    private jwtService;
    constructor(usersRepo: Repository<User>, jwtService: JwtService);
    register(dto: RegisterInput): Promise<{
        token: string;
        user: User;
    }>;
    login(dto: LoginInput): Promise<{
        token: string;
        user: User;
    }>;
    getMe(userId: string): Promise<User | null>;
    validateUser(userId: string): Promise<User | null>;
}
