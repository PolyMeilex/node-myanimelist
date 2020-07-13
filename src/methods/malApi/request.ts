import { MalToken } from ".";
import { AxiosRequestConfig, Method, AxiosError } from "axios";
import axios from "axios";
import urljoin from "url-join";

export class MalRequest<T> {
  method: Method = "get";
  url: string;
  headers: { [key: string]: string } = {};
  data: any;

  constructor(url: string[], token?: MalToken) {
    this.url = urljoin(...url);

    if (token) {
      this.headers.Authorization = `Bearer ${token["access_token"]}`;
    }
  }

  async call(): Promise<T> {
    const request: AxiosRequestConfig = {
      method: this.method,
      url: this.url,
      headers: this.headers,
      data: this.data,
    };

    return new Promise((res, rej) => {
      axios(request)
        .then((r) => res(r.data))
        .catch((err) => rej(err));
    });
  }
}
export default MalRequest;

export interface MalError {
  message?: string;
  error: string;
}

export type ResponseError = AxiosError<MalError>;
