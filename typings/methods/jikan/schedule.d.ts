export declare class Schedule {
    private baseUrl;
    constructor();
    all(): Promise<any>;
    monday(): Promise<any>;
    tuesday(): Promise<any>;
    wednesday(): Promise<any>;
    thursday(): Promise<any>;
    friday(): Promise<any>;
    saturday(): Promise<any>;
    sunday(): Promise<any>;
    other(): Promise<any>;
    unknown(): Promise<any>;
}
export default function (): Schedule;
