declare class Person {
    private baseUrl;
    constructor(id: number);
    private jikanGet;
    info(): Promise<import("axios").AxiosResponse<any>>;
    pictures(): Promise<import("axios").AxiosResponse<any>>;
}
export default function (id: number): Person;
export {};
