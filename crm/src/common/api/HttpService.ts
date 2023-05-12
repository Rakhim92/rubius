const API_PATH = "http://localhost:3002";

export class HttpService {
    private baseApi: string = 'http://localhost:3002';

    constructor(controllerName: string = '') {
        this.baseApi = `${API_PATH}/api/${controllerName}`;
    }
    get<T>(path:string): Promise<T[]> {  
        return fetch(`${this.baseApi}/${path}`)
            .then(response => response.json())}
    post() {}
    put() {}
    delete() {}
}