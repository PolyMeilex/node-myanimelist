export declare const jikanUrl = "https://api.jikan.moe/v3";
export interface ReqResponse<T> {
    data: T;
}
export declare type Req<T> = Promise<ReqResponse<T>>;
export declare function jikanGet(url: string): Promise<any>;
