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
                console.log("ログインしていません")
                return
            }
            const user = await getMe(accessToken)
            commit('user', user)
        } catch(e) {
            console.log("ユーザー情報を取得できませんでした", e)
            throw new Error()
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
            const user = await create(req.email, req.password)
            commit('user', user)

            const res = await login(req.email, req.password)
            if (!res.access_token) { 
                throw new Error()
            }
            this.$cookies.set(cookieKeys.accessToken, res.access_token)

            const me = await getMe(res.access_token)
            commit('user', me)

            this.$router.push("/article/all")
        } catch(e) {
            throw new Error(e)
        } finally {
        }
    },

    async update({ commit, state }, name) {
        try {
            const accessToken = this.$cookies.get(cookieKeys.accessToken)
            if (!accessToken) { 
                throw new Error()
            }
            const req: TUpdateAdminUserParams = {
                token: accessToken,
                name: name,
            }
            const user = await update(req)
            commit('user', user)

            this.$router.push("/article/all")
        } catch(e) {
            throw new Error(e)
        } finally {

        }
    },

    async login({ commit, state }, req) {
        try {

            const res = await login(req.email, req.password)
            if (!res.access_token) { 
                throw new Error()
            }
            this.$cookies.set(cookieKeys.accessToken, res.access_token)

            const user = await getMe(res.access_token)
            commit('user', user)

            this.$router.push("/article/all")

        } catch(e) {
            throw new Error(e)
        } finally {
        }
    },

    async logout({ commit, state }, id) {
        try {
            const token = this.$cookies.get(cookieKeys.accessToken)
            if (!token) {
                throw new Error()
            }
            this.$cookies.remove(cookieKeys.accessToken)
            commit('user', {})
            this.$router.push("/article/all")
        } catch(e) {
            throw new Error(e)
        } finally {
        }
    },

    async delete({ commit, state }, id) {
        try {
            const token = this.$cookies.get(cookieKeys.accessToken)
            if (!token) {
                throw new Error()
            }
            await deleteAccount(token)
            this.$cookies.remove(cookieKeys.accessToken)
            commit('user', {})
            this.$router.push("/article/all")
        } catch(e) {
            throw new Error(e)
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

const deleteAccount = (token: string): Promise<void> => {
    return adminuserRepository.delete(token)
}