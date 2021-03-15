export const strict = false

import { stringify } from 'node:querystring';
import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { Article } from '../domain/model/article';
import { IArticleRepository, TCreateArticleParams, TUpdateArticleParams } from '../domain/repository/article_repository';
import { createAdminUserAPI } from '../infra/api/service/adminuser_api';
import { createArticleAPI } from '../infra/api/service/article_api';
import { createApiClient, IApiClient } from '../infra/api/service/client';
import { IAdminUserRepository, TUpdateAdminUserParams } from '../domain/repository/adminuser';
import { AdminUser } from '../domain/model/adminuser';
import $cookies from 'cookie-universal-nuxt';

const cookieKeys = {
    accessToken: 'ACCESS_TOKEN',
};

export const state = () => ({
    user: {},
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
    user: state => state.user,
}

export const mutations: MutationTree<RootState> = {
    user: (state, user) => (state.user = user),
}

export const actions: ActionTree<RootState, RootState> = {

    async getMe({ commit, state }) {
        try {
            const accessToken = this.$cookies.get(cookieKeys.accessToken)
            if (!accessToken) { 
                console.log("ログインしてください")
                return 
            }
            const res: Promise<AdminUser> = getMe(accessToken)
            res.then((user: AdminUser) => {
                commit('user', user)
            })
        } catch(e) {
            console.log(e)
        } finally {

        }
    },
    
    // async getAll({ commit, state }) {
    //     try {
    //         const res: Promise<Article[]> = getAllArticle(1, 1)
    //         res.then((articles: Article[]) => {
    //             commit('articles', articles)
    //         });
    //     } catch(e) {
    //         console.log(e)
    //     } finally {

    //     }
    // },

    async create({ commit, state }, req) {
        try {
            const res: Promise<AdminUser> = create(req.email, req.password)
            res.then((user: AdminUser) => {
                commit('user', user)
            });
            // const loginRes: Promise<any> = login(req.email, req.password)
            // loginRes.then((resToken: any) => {
            //     if (!resToken.access_token) { return }
            //     this.$cookies.set(cookieKeys.accessToken, resToken.access_token)

            //     const res: Promise<AdminUser> = getMe(resToken.access_token)
            //     res.then((user: AdminUser) => {
            //         commit('user', user)
            //     })
            // })
        } catch(e) {
            return e
        } finally {
            // this.$router.push("/article/all")
        }
    },

    async update({ commit, state }, name) {
        try {
            const accessToken = this.$cookies.get(cookieKeys.accessToken)
            if (!accessToken) { 
                console.log("ログインしてください")
                return 
            }
            const req: TUpdateAdminUserParams = {
                token: accessToken,
                name: name,
            }
            const res: Promise<AdminUser> = update(req)
            res.then((user: AdminUser) => {
                commit('user', user)
            })
            this.$router.push("/article/all")
        } catch(e) {

        } finally {

        }
    },

    async login({ commit, state }, req) {
        try {
            // const accessToken = this.$cookies.get(cookieKeys.accessToken)
            // if (accessToken) { return }
            const res: Promise<any> = login(req.email, req.password)
            res.then((resToken: any) => {
                if (!resToken.access_token) { return }
                this.$cookies.set(cookieKeys.accessToken, resToken.access_token)

                const res: Promise<AdminUser> = getMe(resToken.access_token)
                res.then((user: AdminUser) => {
                    commit('user', user)
                })
                this.$router.push("/article/all")
            })
        } catch(e) {
            return e       
        } finally {
            // this.$router.push("/article/all")
        }
    },

    async logout({ commit, state }, id) {
        try {
            this.$cookies.remove(cookieKeys.accessToken)
            commit('user', {})
        } catch(e) {
        } finally {
            this.$router.push("/article/all")
        }
    },

    async delete({ commit, state }, id) {
        try {
            deleteArticle(id)
        } catch(e) {
        } finally {

        }
    },

}

const apiClient: IApiClient = createApiClient();
const adminuserRepository: IAdminUserRepository = createAdminUserAPI(apiClient);

const getMe = (token: string): Promise<AdminUser> => {
    return adminuserRepository.getMe(token)
}

const create = (email: string, password: string): Promise<AdminUser> => {
    return adminuserRepository.create(email, password)
}

const update = (req: TUpdateAdminUserParams): Promise<AdminUser> => {
    return adminuserRepository.update(req)
}

const login = (email: string, password: string): Promise<any> => {
    return adminuserRepository.login(email, password)
}

// const logout = (): Promise<AdminUser> => {
//     return adminuserRepository.getMe()
// }

const deleteArticle = (articleID: string): Promise<void> => {
    return adminuserRepository.delete(articleID)
}