import { IArticleRepository} from '../../../domain/repository/article_repository';
import {IApiClient} from './client';
import { Article } from '../../../domain/model/article';
import { ArticleConvertResponse, ArticleConvertResponseList } from './article_api_convert';
import { TCreateArticleParams, TUpdateArticleParams } from '../../../domain/repository/article_repository';

class ArticleAPI implements IArticleRepository {

    constructor(readonly apiClient: IApiClient){
    }

    public get(articleID: string): Promise<Article> {
        return new Promise<Article>(async (resolve, reject) => {
            try {
                const res = await this.apiClient.get("/article/" + articleID);
                const resConverted = ArticleConvertResponse.from(res);
                const item: Article = Article.from(resConverted);
                resolve(item);
            } catch (error) {
                reject(error);
            }
        });
    }

    public getAll(page: number, offset: number): Promise<Article[]> {
        return new Promise<Article[]>(async (resolve, reject) => {
            try {
                const req = {
                    "page": page, 
                    "offset": offset
                }
                const res = await this.apiClient.post("/article/all", req)
                const resConverted: ArticleConvertResponseList = ArticleConvertResponseList.from(res);
                const items: Article[] = resConverted.items.map((item: ArticleConvertResponse): Article => {
                    return Article.from(item);
                });
                resolve(items);
            } catch (error) {
                reject(error);
            }
        });
    }

    public create(req: TCreateArticleParams): Promise<Article> {
        return new Promise<Article>(async (resolve, reject) => {
            try {
                const createReq = {
                    "title": req.title,
                    "description": req.description,
                    "thumbnailURL": req.thumbnailURL,
                }
                const res = await this.apiClient.postWithToken("/article/create", req.token, createReq);
                const resConverted = ArticleConvertResponse.from(res);
                const item: Article = Article.from(resConverted);
                resolve(item);
            } catch (error) {
                reject(error);
            }
        });
    }

    public update(req: TUpdateArticleParams): Promise<Article> {
        return new Promise<Article>(async (resolve, reject) => {
            try {
                const updateReq = {
                    "id": req.id,
                    "title": req.title,
                    "description": req.description,
                    "thumbnailURL": req.thumbnailURL,
                }
                const res = await this.apiClient.postWithToken("/article/update", req.token, updateReq);
                const resConverted = ArticleConvertResponse.from(res);
                const item: Article = Article.from(resConverted);
                resolve(item);
            } catch (error) {
                reject(error);
            }
        });
    }

    public delete(articleID: string, token: string): Promise<void> {
        return new Promise<void>(async (resolve, reject) => {
            try {
                const req = {
                    id: articleID
                }
                await this.apiClient.postWithToken("/article/delete", token, req);
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    }

    public imgUpload(file: any, token: string): Promise<any> {
        return new Promise<any>(async (resolve, reject) => {
            try {
                const req = {
                    file: file
                }
                const res = await this.apiClient.imgUpload("/image/upload", token, req)
                resolve(res);
            } catch (error) {
                reject(error)
            }
        })
    } 

}

const createArticleAPI = (apiClient: IApiClient): IArticleRepository => {
    return new ArticleAPI(apiClient);
};

export {createArticleAPI};