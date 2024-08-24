import axios from "axios";
import { environment } from "../utils/environment";
export class AuthService {
  rootUrl = `${environment.API_BASE_URL}api/`;
  headers = {
    Accept: "application/json",
  };
  Register(data: any) {
    const MethodName: string = "auth/register";
    const url: string = this.rootUrl + MethodName;
    return axios.post(url, data);
  }
  Login(data: any) {
    const MethodName: string = "auth/login";
    const url: string = this.rootUrl + MethodName;
    return axios.post(url, data);
  }
}
