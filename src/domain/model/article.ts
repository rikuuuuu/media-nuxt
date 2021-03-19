import {ArticleConvertResponse} from "src/infra/api/service/article_api_convert"

export class Article {
    public static from(from: ArticleConvertResponse): Article {
        return new Article(
            from.id,
            from.title,
            from.description,
            from.createdAt,
            from.thumbnailURL,
            from.userID,
            from.updatedAt,
        )
    }

    constructor(
        public readonly id: string,
        public readonly title: string,
        public readonly description: string,
        public readonly createdAt: string,
        public readonly thumbnailURL: string,
        public readonly userID: string,
        public readonly updatedAt: string,
    ) {

    }
}