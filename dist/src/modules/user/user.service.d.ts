import { UserUpdateInput } from "../../../generated/prisma/models";
export declare const updateProfile: (userId: string, data: Pick<UserUpdateInput, "name" | "image">) => Promise<{
    name: string;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    role: string | null;
    phone: string | null;
    status: string | null;
    email: string;
    emailVerified: boolean;
    image: string | null;
}>;
export declare const adminUpdateUserStatus: (userId: string, data: Pick<UserUpdateInput, "status">) => Promise<{
    name: string;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    role: string | null;
    phone: string | null;
    status: string | null;
    email: string;
    emailVerified: boolean;
    image: string | null;
}>;
export declare const userService: {
    getAllUsers: ({ page, limit, skip, }: {
        page: number;
        limit: number;
        skip: number;
    }) => Promise<{
        data: {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            role: string | null;
            phone: string | null;
            status: string | null;
            email: string;
            emailVerified: boolean;
            image: string | null;
        }[];
        pagination: {
            total: number;
            page: number;
            limit: number;
            totalPage: number;
        };
    }>;
    getUserById: (id: string) => Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        role: string | null;
        phone: string | null;
        status: string | null;
        email: string;
        emailVerified: boolean;
        image: string | null;
    } | null>;
    updateProfile: (userId: string, data: Pick<UserUpdateInput, "name" | "image">) => Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        role: string | null;
        phone: string | null;
        status: string | null;
        email: string;
        emailVerified: boolean;
        image: string | null;
    }>;
    adminUpdateUserStatus: (userId: string, data: Pick<UserUpdateInput, "status">) => Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        role: string | null;
        phone: string | null;
        status: string | null;
        email: string;
        emailVerified: boolean;
        image: string | null;
    }>;
    deleteUser: (id: string) => Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        role: string | null;
        phone: string | null;
        status: string | null;
        email: string;
        emailVerified: boolean;
        image: string | null;
    }>;
};
//# sourceMappingURL=user.service.d.ts.map