declare class Person {
    private baseUrl;
    constructor(id: number);
    jikanGet(url: string): void;
    info(): void;
    pictures(): void;
}
export default function (id: number): Person;
export {};
