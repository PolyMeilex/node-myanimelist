// import { MalToken } from ".";
import { AxiosRequestConfig, Method, AxiosError } from "axios";
import axios from "axios";
// import urljoin from "url-join";

export class MalRequest<T> {
  // method: Method = "get";
  // url: string;
  // headers: { [key: string]: string } = {};
  // data: any;

  config: AxiosRequestConfig;

  constructor(config: AxiosRequestConfig) {
    this.config = config;
  }

  getUrl(): string {
    return axios.getUri(this.config);
  }

  async call(): Promise<T> {
    return new Promise((res, rej) => {
      axios(this.config)
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
