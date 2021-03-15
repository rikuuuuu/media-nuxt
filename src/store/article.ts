export const strict = false

import { stringify } from 'node:querystring';
import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { Article } from '../domain/model/article';
import { IArticleRepository, TCreateArticleParams, TUpdateArticleParams } from '../domain/repository/article_repository';
import { createArticleAPI } from '../infra/api/service/article_api';
import { createApiClient, IApiClient } from '../infra/api/service/client';

export const state = () => ({
    articles: [],
    article: {
        // id: "",
        // title: "",
        // description: "",
        // userID: "",
        // createdAt: "",
        // updatedAt: "",
    },
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
    articles: state => state.articles,
    article: state => state.article,
}

export const mutations: MutationTree<RootState> = {
    articles: (state, articles) => (state.articles = articles),
    article: (state, article) => (
        state.article = article
        // state.article.id = article.id,
        // state.article.title = article.title,
        // state.article.description = article.description,
        // state.article.userID = article.userID,
        // state.article.createdAt = article.createdAt,
        // state.article.updatedAt = article.updatedAt
    ),
}

export const actions: ActionTree<RootState, RootState> = {

    async get({ commit, state }, { articleID }) {
        try {
            const res: Promise<Article> = getArticle(articleID)
            res.then((article: Article) => {
                commit('article', article)
            });
        } catch(e) {
            console.log(e)
        } finally {

        }
    },
    
    async getAll({ commit, state }) {
        try {
            const res: Promise<Article[]> = getAllArticle(1, 1)
            res.then((articles: Article[]) => {
                commit('articles', articles)
            });
        } catch(e) {
            console.log(e)
        } finally {

        }
    },

    async create({ commit, state }, req: TCreateArticleParams) {
        try {
            const res: Promise<Article> = create(req)
            res.then((article: Article) => {
                commit('article', article)
                this.$router.push("/article/all")
            });
        } catch(e) {
            console.log(e)
        } finally {

        }
    },

    async update({ commit, state }, req: TUpdateArticleParams) {
        try {
            const res: Promise<Article> = update(req)
            res.then((article: Article) => {
                commit('article', article)
            });
        } catch(e) {
            console.log(e)
        } finally {

        }
    },

    async delete({ commit, state }, id) {
        try {
            deleteArticle(id)
        } catch(e) {
            console.log(e)
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
    return articleRepository.getAll(pager, pager);
}

const create = (req: TCreateArticleParams): Promise<Article> => {
    return articleRepository.create(req)
}

const update = (req: TUpdateArticleParams): Promise<Article> => {
    return articleRepository.update(req)
}

const deleteArticle = (articleID: string): Promise<void> => {
    return articleRepository.delete(articleID)
}