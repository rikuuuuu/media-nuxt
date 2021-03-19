import { Article } from '../model/article';
// import GetArticle from 'mediareact/proto/article_pb';

export interface IArticleRepository {
    get(articleID: string): Promise<Article>;
    getAll(page: number, offset: number): Promise<Article[]>;
    create(createArticleParams: TCreateArticleParams): Promise<Article>;
    update(updateArticleParams: TUpdateArticleParams): Promise<Article>;
    delete(articleID: string, token: string): Promise<void>;
    imgUpload(file: any, tokne: string): Promise<any>;
}

export type TCreateArticleParams = {
    "token": string,
    "title": string,
    "description": string,
    "thumbnailURL": string,
}

export type TUpdateArticleParams = {
    "token": string,
    "id": string,
    "title": string,
    "description": string,
    "thumbnailURL": string,
}