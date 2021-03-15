import {IApiClient} from './client';
import { IAdminUserRepository, TUpdateAdminUserParams } from '../../../domain/repository/adminuser';
import { AdminUser } from '../../../domain/model/adminuser';
import { AdminUserConvertResponse, AdminUserConvertResponseList } from './adminuser_api_convert';

class AdminUserAPI implements IAdminUserRepository {

    constructor(readonly apiClient: IApiClient){
    }

    public getMe(token: string): Promise<AdminUser> {
        return new Promise<AdminUser>(async (resolve, reject) => {
            try {
                const res = await this.apiClient.getWithToken("/user/getme", token);
                const resConverted = AdminUserConvertResponse.from(res);
                const item: AdminUser = AdminUser.from(resConverted);
                resolve(item);
            } catch (error) {
                reject(error);
            }
        });
    }

    public login(email: string, password: string): Promise<any> {
        return new Promise<any>(async (resolve, reject) => {
            try {
                const req = {
                    username: email,
                    password: password,
                }
                const res = await this.apiClient.login("/token", req);
                resolve(res);
            } catch (error) {
                reject(error);
            }
        });
    }

    public logout(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
        })
    }

    public create(email: string, password: string): Promise<any> {
        return new Promise<any>(async (resolve, reject) => {
            try {
                const req = {
                    email,
                    password
                }
                const res = await this.apiClient.post("/user/create", req);
                const resConverted = AdminUserConvertResponse.from(res);
                const item: AdminUser = AdminUser.from(resConverted);
                resolve(item);
            } catch (error) {
                reject(error);
            }
            return
        })
    }

    public update(updateAdminUserParams: TUpdateAdminUserParams): Promise<AdminUser> {
        return new Promise<AdminUser>(async (resolve, reject) => {
            try {
                const req = {
                    name: updateAdminUserParams.name
                }
                const res = await this.apiClient.postWithToken("/user/update", updateAdminUserParams.token, req);
                const resConverted = AdminUserConvertResponse.from(res);
                const item: AdminUser = AdminUser.from(resConverted);
                resolve(item);
            } catch (error) {
                reject(error);
            }
            return
        })
    }

    public delete(userID: string): Promise<void> {
        return new Promise<void>((resolve, reject) => {
        });
    }

}

const createAdminUserAPI = (apiClient: IApiClient): IAdminUserRepository => {
    return new AdminUserAPI(apiClient);
};

export {createAdminUserAPI};