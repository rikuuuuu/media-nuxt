class ArticleConvertResponse {
    public static from(from: any): ArticleConvertResponse {
        return new ArticleConvertResponse(
            from.id,
            from.title,
            from.description,
            from.createdAt,
            from.thumbnailURL,
            from.userID,
            from.updatedAt,
        )
    };

    constructor(
        public readonly id: string,
        public readonly title: string,
        public readonly description: string,
        public readonly createdAt: string,
        public readonly thumbnailURL: string,
        public readonly userID: string,
        public readonly updatedAt: string
    ) {
    };
}

// twirp sample
// class ArticleConvertResponseList {

//     public static from(from: entity.ArticleList): ArticleConvertResponseList {
//         const items: ArticleConvertResponse[] = [];

//         from.items.map((item, index) => {
//             return items.push(ArticleConvertResponse.from(item as entity.Article))
//         });

//         return new ArticleConvertResponseList(
//             items,
//         )
//     };

//     constructor(
//         public readonly items: ArticleConvertResponse[],
//     ) {
//     };

// }

class ArticleConvertResponseList {

    public static from(from: any): ArticleConvertResponseList {
        const items: ArticleConvertResponse[] = [];

        from.map((item: any, index: any) => {
            return items.push(ArticleConvertResponse.from(item as any))
        });

        return new ArticleConvertResponseList(
            items,
        )
    };

    constructor(
        public readonly items: ArticleConvertResponse[],
    ) {
    };

}

export {
    ArticleConvertResponse,
    ArticleConvertResponseList
}