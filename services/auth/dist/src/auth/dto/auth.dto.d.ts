import { User, UserRole } from "../../users/user.entity";
export declare class RegisterInput {
    name: string;
    email: string;
    password: string;
    role?: UserRole;
}
export declare class LoginInput {
    email: string;
    password: string;
}
export declare class AuthResponse {
    token: string;
    user: User;
}
