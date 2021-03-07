import "whatwg-fetch";
import axios from "axios";

interface IApiClient {
    post(path: string, body: any): Promise<any>;

    postWithToken(path: string, token: string, body: any): Promise<any>;
}

class ApiClient implements IApiClient {
    // http://localhost:8080/twirp
    // http://127.0.0.1:8080/twirp
    private baseURL: string = "http://localhost:8080/twirp"

    public post(path: string, body: any): Promise<any> {
        const headers = {
            'Accept': '*/*',
            'Content-Type': 'application/json',
        };
        
        return this.request(path, headers, body);
    }

    public postWithToken(path: string, token: string, body: any): Promise<any> {
        const headers = {
            'Accept': 'application/protobuf',
            'Content-Type': 'application/protobuf',
            'Authorization': 'Bearer ' + token,
        };

        return this.request(path, headers, body);
    }

    private request(path: string, headers: any, body: any): Promise<any> {
        const method = "POST";

        console.log(headers)

        const option: RequestInit = {
            // cache: "no-cache",
            body,
            method,
            headers,
            // mode: 'cors',
        };

        // return axios.post(this.baseURL + path, option)
        //     .then((res) => {
        //         console.log(res.data)
        //         return res.data
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     })

        return fetch(this.baseURL + path, option)
            .then((res: Response): Promise<any> => {
                return res.arrayBuffer();
            })
            .then((buffer: any): any => {
                return new Uint8Array(buffer);
            });

    }
}


const createApiClient = (): IApiClient => {

    return new ApiClient();

};

export { createApiClient };    
export type { IApiClient };

