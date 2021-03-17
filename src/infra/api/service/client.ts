import "whatwg-fetch";
import axios from "axios";

interface IApiClient {
    get(path: string): Promise<any>;

    post(path: string, body: any): Promise<any>;

    login(path: string, body: any): Promise<any>;

    getWithToken(path: string, token: string): Promise<any>;

    postWithToken(path: string, token: string, body: any): Promise<any>;
}

class ApiClient implements IApiClient {

    private baseURL: string | undefined = process.env.BASE_URL

    public async get(path: string): Promise<any> {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        };

        try {
            const res = await axios.get(this.baseURL + path, {headers});
            return res.data;
        } catch (error) {
            return error
        }       
    }

    public async post(path: string, body: any): Promise<any> {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        };

        const res = await axios.post(this.baseURL + path, body, {headers})
        return res.data;       
    }

    public async login(path: string, body: any): Promise<any> {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        };

        let params = new URLSearchParams();
        params.append('username', body.username);
        params.append('password', body.password);

        const res = await axios.post(this.baseURL + path, params, {headers});
        return res.data;
    }

    public async getWithToken(path: string, token: string): Promise<any> {
        try {
            const res = await axios.get(this.baseURL + path, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            return res.data;
        } catch (error) {
            return error
        }
    }

    public async postWithToken(path: string, token: string, body: any): Promise<any> {
        const res = await axios.post(this.baseURL + path, body, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        return res.data;
    }
}


const createApiClient = (): IApiClient => {

    return new ApiClient();

};

export { createApiClient };    
export type { IApiClient };

