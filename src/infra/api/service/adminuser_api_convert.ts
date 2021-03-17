class AdminUserConvertResponse {
    public static from(from: any): AdminUserConvertResponse {
        return new AdminUserConvertResponse(
            from.id,
            from.name,
            from.email,
            // from.password
        )
    };

    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly email: string,
        // public readonly password: string
    ) {
    };
}

class AdminUserConvertResponseList {

    public static from(from: any): AdminUserConvertResponseList {
        const items: AdminUserConvertResponse[] = [];

        from.map((item: any, index: any) => {
            return items.push(AdminUserConvertResponse.from(item as any))
        });

        return new AdminUserConvertResponseList(
            items,
        )
    };

    constructor(
        public readonly items: AdminUserConvertResponse[],
    ) {
    };

}

export {
    AdminUserConvertResponse,
    AdminUserConvertResponseList
}