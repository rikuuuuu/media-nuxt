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
    // http://localhost:8000/twirp
    // http://127.0.0.1:8000/twirp
    // http://ec2-18-177-59-95.ap-northeast-1.compute.amazonaws.com/twirp
    private baseURL: string = "http://127.0.0.1:8000"

    public get(path: string): Promise<any> {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        };
        
        return this.getRequest(path, headers);
    }

    public post(path: string, body: any): Promise<any> {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        };
        
        return this.postRequest(path, headers, body);
    }

    public login(path: string, body: any): Promise<any> {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        };
        
        return this.loginRequest(path, headers, body);
    }

    public getWithToken(path: string, token: string): Promise<any> {
        return this.getWithAuth(path, token)
    }

    public postWithToken(path: string, token: string, body: any): Promise<any> {
        return this.postWithAuth(path, token, body);
    }

    private async postRequest(path: string, headers: any, body: any): Promise<any> {

        try {
            const res = await axios.post(this.baseURL + path, body, headers)
            return res.data;
        } catch (error) {
            console.log(error);
            return error
        }

    }

    private async postWithAuth(path: string, token: string, body: any): Promise<any> {

        try {
            const res = await axios.post(this.baseURL + path, body, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            return res.data;
        } catch (error) {
            console.log(error);
            return error
        }

    }

    private async getRequest(path: string, headers: any): Promise<any> {

        try {
            const res = await axios.get(this.baseURL + path, headers);
            return res.data;
        } catch (error) {
            console.log(error);
            return error
        }

    }

    private async getWithAuth(path: string, token: string): Promise<any> {

        try {
            const res = await axios.get(this.baseURL + path, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            return res.data;
        } catch (error) {
            console.log(error);
            return error
        }

    }

    private async loginRequest(path: string, headers: any, body: any): Promise<any> {

        let params = new URLSearchParams();
        params.append('username', body.username);
        params.append('password', body.password);

        if (!body.username) {
            console.log("not username")
            return
        }

        try {
            const res = await axios.post(this.baseURL + path, params, headers);
            return res.data;
        } catch (error) {
            console.log(error);
            return error
        }

    }
}


const createApiClient = (): IApiClient => {

    return new ApiClient();

};

export { createApiClient };    
export type { IApiClient };

