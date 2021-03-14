import {IApiClient} from './client';
import { IAdminUserRepository, TUpdateAdminUserParams } from '../../../domain/repository/adminuser';
import { AdminUser } from '../../../domain/model/adminuser';
import { AdminUserConvertResponse, AdminUserConvertResponseList } from './adminuser_api_convert';
// import $cookies from "cookie-universal-nuxt";

const cookieKeys = {
    accessToken: 'ACCESS_TOKEN',
};

// export const setAccessToken = (token: String) => {
//     $cookies.set(cookieKeys.accessToken, token);
// };

class AdminUserAPI implements IAdminUserRepository {

    constructor(readonly apiClient: IApiClient){
    }

    // public onAuthListener(callback: (error: any, data?: {user: (User | null), authState: AuthStateType}) => void): void {
    //     // onAuthStateChanged解除用にローカルに戻り値を保存しておく
    //     this.fireBaseListener = firebase.auth().onAuthStateChanged((authUser: firebase.User | null) => {
    //         if (this.authFlow !== AuthFlowType.CUSTOMER_CREATE && authUser) {
    //             this.userRepository.getMe()
    //                 .then((user: User): void => {
    //                     callback(
    //                         null,
    //                         {
    //                             user,
    //                             authState: AuthStateType.LOGIN_USER
    //                     });
    //                 })
    //                 .catch((error) => {
    //                     // getMeがエラー時の処理
    //                     firebase.auth().signOut()
    //                         .then(() => {
    //                             callback(error);
    //                         })
    //                 })

    //         } else {
    //             // ログオンしていない状態のUserを返す
    //             callback(
    //                 null,
    //                 {
    //                     user:   new User(
    //                         "UNKNOWN USER",
    //                         0,
    //                         null,
    //                         null,
    //                         []
    //                     ),
    //                     authState: AuthStateType.UNKNOWN
    //                 }
    //             )
    //         }
    //     }, (error: any) => {
    //         throw handleErrorFirebaseAuth(error);
    //     });
    // }

    public getMe(token: string): Promise<AdminUser> {
        return new Promise<AdminUser>(async (resolve, reject) => {
            try {
                const res = await this.apiClient.getWithToken("/users/me", token);
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
            // firebase.auth().signOut()
            //     .then((): void => {
            //         resolve();
            //     })
            //     .catch((error: any) => {
            //         reject(handleErrorFirebaseAuth(error))
            //     })
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

    private createFirebaseCustomer(email: string, password: string): Promise<void>{
        return new Promise<void>((resolve, reject) => {
        })
    }

    private createAdminUser(email: string, password: string): Promise<AdminUser> {
        return new Promise<AdminUser>((resolve, reject) => {
            // getToken()
            //     .then((token: string): Promise<any> => {
            //         const req = new CreateAdminUserRequest();
            //         req.email = email
            //         req.password = password
            //         const writer: BufferWriter | Writer = Writer.create();
            //         return this.apiClient.postWithToken("/api.AdminUserService/Create", token, CreateAdminUserRequest.encode(req, writer).finish())
            //     })
            //     .then((binary: any) => {
            //         const res = entity.AdminUser.decode(binary);
            //         const resConverted = AdminUserConvertResponse.from(res);
            //         const item: AdminUser = AdminUser.from(resConverted);
            //         resolve(item);
            //     })
            //     .catch((error: Error): void => {
            //         reject(error);
            //     });
        })
    }

    public update(updateAdminUserParams: TUpdateAdminUserParams): Promise<AdminUser> {
        return new Promise<AdminUser>((resolve, reject) => {
            // getToken()
            //     .then((token: string): Promise<any> => {
            //         const req = new UpdateAdminUserReqest();
            //         req.id = updateAdminUserParams.id
            //         req.name = updateAdminUserParams.name
            //         const writer: BufferWriter | Writer = Writer.create();
            //         return this.apiClient.postWithToken("/api.AdminUserService/Update", token, UpdateAdminUserReqest.encode(req, writer).finish())
            //     })
            //     .then((binary: any) => {
            //         const res = entity.AdminUser.decode(binary);
            //         const resConverted = AdminUserConvertResponse.from(res);
            //         const item: AdminUser = AdminUser.from(resConverted);
            //         resolve(item);
            //     })
            //     .catch((error: Error): void => {
            //         reject(error);
            //     });
        })
    }

    public delete(userID: string): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            // getToken()
            //     .then((token: string): Promise<any> => {
            //         const req = new AdminUserID();
            //         req.id = userID
            //         const writer: BufferWriter | Writer = Writer.create();
            //         return this.apiClient.postWithToken("/api.AdminUserService/Delete", token, AdminUserID.encode(req, writer).finish())
            //     })
            //     .then((binary: any) => {
            //         // const res = AdminUserID.decode(binary);
            //         resolve(binary);
            //     })
            //     .catch((error: Error): void => {
            //         reject(error);
            //     });
        });
    }

}

const createAdminUserAPI = (apiClient: IApiClient): IAdminUserRepository => {
    return new AdminUserAPI(apiClient);
};

export {createAdminUserAPI};