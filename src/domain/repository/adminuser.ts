import { AdminUser } from '../model/adminuser';

export interface IAdminUserRepository {
    getMe(token: string): Promise<AdminUser>;
    // getAll(page: number, offset: number): Promise<AdminUser[]>;
    create(email: string, password: string): Promise<AdminUser>;
    update(updateAdminUserParams: TUpdateAdminUserParams): Promise<AdminUser>;
    login(email: string, password: string): Promise<any>;
    // logout(): Promise<void>;
    delete(token: string): Promise<void>;
}

export type TUpdateAdminUserParams ={
    token: string,
    name: string
}