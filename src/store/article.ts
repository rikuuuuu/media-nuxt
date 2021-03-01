export const strict = false

import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { Article } from '../domain/model/article';
import { IArticleRepository } from '../domain/repository/article_repository';
import { createArticleAPI } from '../infra/api/service/article_api';
import { createApiClient, IApiClient } from '../infra/api/service/client';

export const state = () => ({
    articles: [],
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
    articles: state => state.articles,
}

export const mutations: MutationTree<RootState> = {
    GET_ARTICLES: (state, articles) => (state.articles = articles),

    // getArticles(state, { article }) {
    //     if (state.articles.find(p => p.articleID === article.articleID)) {
    //         return
    //     }

    //     state.articles = [...state.articles, article]
    // }
}

export const actions: ActionTree<RootState, RootState> = {
    
    async getAll({ commit, state }) {
        try {
            const res: Promise<Article[]> = getAllArticle(1, 1)
            let articles: Article[] = []
            res.then((value) => {
                articles = value
            });
            commit('GET_ARTICLES', { articles })
        } catch(e) {

        } finally {

        }
    }

}

const apiClient: IApiClient = createApiClient();
const articleRepository: IArticleRepository = createArticleAPI(apiClient);

const getAllArticle = (pager: number, offset: number): Promise<Article[]> => {
    return articleRepository.getAll(pager, pager);
}