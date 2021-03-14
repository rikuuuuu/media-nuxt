import { IArticleRepository, 
    // TCreateArticleParams, TUpdateArticleParams 
} from '../../../domain/repository/article_repository';
import {IApiClient} from './client';

// import {
//     // common,
//     entity, 
//     api
// } from "../rpc/api";
// import { getToken } from './bind_token';
// import {BufferWriter, Writer} from "protobufjs";
import { Article } from '../../../domain/model/article';
import { ArticleConvertResponse, ArticleConvertResponseList } from './article_api_convert';
import { TCreateArticleParams, TUpdateArticleParams } from '../../../domain/repository/article_repository';

// const Firestore = firebase.firestore.Firestore; type Firestore = typeof Firestore;

// const ArticleID = entity.ArticleID;
// const ArticleList = entity.ArticleList;
// const CreateArticleRequest = api.CreateArticleRequest;
// const UpdateArticleRequest = api.UpdateArticleRequest;

// const Empty = common.Empty;
// const Pager = entity.Pager;



class ArticleAPI implements IArticleRepository {

    constructor(readonly apiClient: IApiClient){
    }

    // twirp sample
    // public get(articleID: string): Promise<Article> {
    //     return new Promise<Article>((resolve, reject) => {
    //         // getToken()
    //         //     .then((token: string): Promise<any> => {
    //                 const req = new ArticleID();
    //                 req.id = articleID
    //                 const writer: BufferWriter | Writer = Writer.create();
    //                 return this.apiClient.post("/api.ArticleService/Get", ArticleID.encode(req, writer).finish())
    //             // })
    //             .then((binary: Uint8Array): void => {
    //                 const res = entity.Article.decode(binary);
    //                 // BE=>FE 型変換
    //                 const resConverted = ArticleConvertResponse.from(res);
    //                 const item: Article = Article.from(resConverted);
    //                 resolve(item);
    //             })
    //             .catch((error: Error): void => {
    //                 reject(error);
    //             });
    //     });
    // }

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
        return new Promise<Article[]>((resolve, reject) => {
            const req = {"page": 1, "offset": 1}
            req.page = page;
            req.offset = offset;
            this.apiClient.post("/article/all", req)
            .then((res: any) => {
                const resConverted: ArticleConvertResponseList = ArticleConvertResponseList.from(res);
                const items: Article[] = resConverted.items.map((item: ArticleConvertResponse): Article => {
                    return Article.from(item);
                });
                resolve(items);
            })
            .catch((error: Error): void => {
                reject(error);
            });
        });
    }

    public create(req: TCreateArticleParams): Promise<Article> {
        return new Promise<Article>(async (resolve, reject) => {
            try {
                const res = await this.apiClient.post("/article/create", req);
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
                const res = await this.apiClient.post("/article/update", req);
                const resConverted = ArticleConvertResponse.from(res);
                const item: Article = Article.from(resConverted);
                resolve(item);
            } catch (error) {
                reject(error);
            }
        });
    }

    public delete(articleID: string): Promise<void> {
        return new Promise<void>(async (resolve, reject) => {
            try {
                const req = {
                    id: articleID
                }
                await this.apiClient.post("/article/delete", req);
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    }
    
}

const createArticleAPI = (apiClient: IApiClient): IArticleRepository => {
    return new ArticleAPI(apiClient);
};

export {createArticleAPI};
