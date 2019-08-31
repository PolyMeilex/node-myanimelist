declare class Schedule {
    private baseUrl;
    constructor();
    jikanGet(url: string): void;
    all(): void;
    monday(): void;
    tuesday(): void;
    wednesday(): void;
    thursday(): void;
    friday(): void;
    saturday(): void;
    sunday(): void;
    other(): void;
    unknown(): void;
}
export default function (): Schedule;
export {};
