export declare class Person {
    private baseUrl;
    constructor(id: number);
    info(): Promise<any>;
    pictures(): Promise<any>;
}
export default function (id: number): Person;
