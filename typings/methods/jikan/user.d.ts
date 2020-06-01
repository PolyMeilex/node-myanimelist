export declare class User {
    private baseUrl;
    constructor(username: string);
    profile(): Promise<any>;
    history(): UserHistory;
    friends(p?: number): Promise<any>;
    animelist(p?: number): UserAnimelist;
    mangalist(p?: number): UserMangalist;
}
export declare class UserHistory {
    private baseUrl;
    constructor(baseUrl: string);
    all(): Promise<any>;
    anime(): Promise<any>;
    manga(): Promise<any>;
}
export declare class UserAnimelist {
    private baseUrl;
    private page;
    constructor(baseUrl: string, p?: number);
    private getList;
    all(qparams?: Object): Promise<any>;
    watching(qparams?: Object): Promise<any>;
    onhold(qparams?: Object): Promise<any>;
    dropped(qparams?: Object): Promise<any>;
    plantowatch(qparams?: Object): Promise<any>;
}
export declare class UserMangalist {
    private baseUrl;
    private page;
    constructor(baseUrl: string, p?: number);
    private getList;
    all(qparams?: Object): Promise<any>;
    reading(qparams?: Object): Promise<any>;
    onhold(qparams?: Object): Promise<any>;
    dropped(qparams?: Object): Promise<any>;
    plantoread(qparams?: Object): Promise<any>;
}
export default function (username: string): User;
