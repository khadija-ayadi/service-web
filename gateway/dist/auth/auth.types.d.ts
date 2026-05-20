export declare enum UserRole {
    ADMIN = "ADMIN",
    OPERATOR = "OPERATOR"
}
export declare class User {
    id: string;
    email: string;
    name: string;
    role: UserRole;
    createdAt: Date;
}
export declare class AuthResponse {
    token: string;
    user: User;
}
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
