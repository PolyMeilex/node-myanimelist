declare class Club {
    private baseUrl;
    constructor(id: number);
    private jikanGet;
    info(): Promise<any>;
    members(p?: number): Promise<any>;
}
export default function (id: number): Club;
export {};
