export const strict = false

import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { Article } from '../domain/model/article';
import { IArticleRepository, TCreateArticleParams, TUpdateArticleParams } from '../domain/repository/article_repository';
import { createArticleAPI } from '../infra/api/service/article_api';
import { createApiClient, IApiClient } from '../infra/api/service/client';

const cookieKeys = {
    accessToken: 'ACCESS_TOKEN',
};

export const state = () => ({
    articles: [],
    article: {},
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
    articles: state => state.articles,
    article: state => state.article,
}

export const mutations: MutationTree<RootState> = {
    articles: (state, articles) => (state.articles = articles),
    article: (state, article) => (state.article = article),
}

export const actions: ActionTree<RootState, RootState> = {

    async get({ commit, state }, { articleID }) {
        try {
            const article = await getArticle(articleID)
            commit('article', article)
        } catch(e) {
            throw new Error(e)
        } finally {

        }
    },
    
    async getAll({ commit, state }) {
        try {
            const articles = await getAllArticle(1, 1)
            commit('articles', articles)
        } catch(e) {
            throw new Error(e)
        } finally {

        }
    },

    async create({ commit, state }, req: TCreateArticleParams) {
        try {
            const accessToken = this.$cookies.get(cookieKeys.accessToken)
            if (accessToken === "") {
                throw new Error()
            }
            req.token = accessToken
            const article = await create(req)
            commit('article', article)
            this.$router.push("/article/all")
        } catch(e) {
            throw new Error(e)
        } finally {

        }
    },

    async update({ commit, state }, req: TUpdateArticleParams) {
        try {
            const accessToken = this.$cookies.get(cookieKeys.accessToken)
            if (!accessToken) { 
                console.log("ログインしていません")
                throw new Error()
            }
            req.token = accessToken
            const article = await update(req)
            commit('article', article)
            this.$router.push("/article/all")
        } catch(e) {
            throw new Error(e)
        } finally {

        }
    },

    async delete({ commit, state }, id) {
        try {
            const accessToken = this.$cookies.get(cookieKeys.accessToken)
            if (!accessToken) { 
                console.log("ログインしていません")
                throw new Error()
            }
            await deleteArticle(id, accessToken)
            commit('article', {})
            this.$router.push("/article/all")
        } catch(e) {
            throw new Error(e)
        } finally {

        }
    },

    async imgUpload({ commit, state }, file) {
        try {
            const accessToken = this.$cookies.get(cookieKeys.accessToken)
            if (!accessToken) { 
                console.log("ログインしていません")
                throw new Error()
            }
            const res = await imgUpload(file, accessToken)
            return res
        } catch(e) {
            throw new Error(e)
        } finally {

        }
    },

}

const apiClient: IApiClient = createApiClient();
const articleRepository: IArticleRepository = createArticleAPI(apiClient);

const getArticle = (id: string): Promise<Article> => {
    return articleRepository.get(id)
}

const getAllArticle = (pager: number, offset: number): Promise<Article[]> => {
    return articleRepository.getAll(pager, offset);
}

const create = (req: TCreateArticleParams): Promise<Article> => {
    return articleRepository.create(req)
}

const update = (req: TUpdateArticleParams): Promise<Article> => {
    return articleRepository.update(req)
}

const deleteArticle = (articleID: string, token: string): Promise<void> => {
    return articleRepository.delete(articleID, token)
}

const imgUpload = (file: any, token: string): Promise<void> => {
    return articleRepository.imgUpload(file, token)
}