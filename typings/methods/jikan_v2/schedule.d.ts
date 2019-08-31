declare class Schedule {
    private baseUrl;
    constructor();
    private jikanGet;
    all(): Promise<import("axios").AxiosResponse<any>>;
    monday(): Promise<import("axios").AxiosResponse<any>>;
    tuesday(): Promise<import("axios").AxiosResponse<any>>;
    wednesday(): Promise<import("axios").AxiosResponse<any>>;
    thursday(): Promise<import("axios").AxiosResponse<any>>;
    friday(): Promise<import("axios").AxiosResponse<any>>;
    saturday(): Promise<import("axios").AxiosResponse<any>>;
    sunday(): Promise<import("axios").AxiosResponse<any>>;
    other(): Promise<import("axios").AxiosResponse<any>>;
    unknown(): Promise<import("axios").AxiosResponse<any>>;
}
export default function (): Schedule;
export {};
