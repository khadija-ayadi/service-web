export declare enum UserRole {
    ADMIN = "ADMIN",
    OPERATOR = "OPERATOR"
}
export declare class User {
    id: string;
    email: string;
    name: string;
    password: string;
    role: UserRole;
    createdAt: Date;
    updatedAt: Date;
}
