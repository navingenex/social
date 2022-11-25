import axios from "axios";
export class HttpService {
    static get(url: string, config: any): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                axios.get(url, config).catch(err => new Error(err)).then((response: any) => {
                    resolve(response.data);
                });
            } catch (error) {
                reject(error);
            }

        })
    }
    static post(url: string, payload: Object, config: any): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                axios.post(url, payload, config).catch(err => new Error(err)).then((response: any) => {
                    resolve(response.data);
                });
            } catch (error) {
                reject(error);
            }

        })
    }
}