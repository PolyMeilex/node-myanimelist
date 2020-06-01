export declare class Season {
    private baseUrl;
    constructor();
    info(year: number, season: season): Promise<any>;
}
export declare type season = "summer" | "spring" | "fall" | "winter";
export default function (year: number, season: season): Promise<any>;
