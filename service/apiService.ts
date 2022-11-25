import { HttpService } from "./HttpService";
import { API } from "../constants/api"
export class ApiService {
    static signUp(payload: { email: string, password: string, userName: string }) {
        return HttpService.post(API.SIGNUP, payload, {})
    }
    static login(payload: { userName: string, password: string }) {
        return HttpService.post(API.LOGIN, payload, {})
    }
}