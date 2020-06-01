export declare class Club {
    private baseUrl;
    constructor(id: number);
    info(): Promise<any>;
    members(p?: number): Promise<any>;
}
export default function (id: number): Club;
