declare class User {
    private baseUrl;
    constructor(username: string);
    private jikanGet;
    profile(): Promise<any>;
    history(): UserHistory;
    friends(p?: number): Promise<any>;
    animelist(p?: number): UserAnimelist;
    mangalist(p?: number): UserMangalist;
}
declare class UserHistory {
    private parent;
    constructor(parent: User);
    all(): Promise<any>;
    anime(): Promise<any>;
    manga(): Promise<any>;
}
declare class UserAnimelist {
    private parent;
    private page;
    constructor(parent: User, p?: number);
    private getList;
    all(qparams?: Object): Promise<any>;
    watching(qparams?: Object): Promise<any>;
    onhold(qparams?: Object): Promise<any>;
    dropped(qparams?: Object): Promise<any>;
    plantowatch(qparams?: Object): Promise<any>;
}
declare class UserMangalist {
    private parent;
    private page;
    constructor(parent: User, p?: number);
    private getList;
    all(qparams?: Object): Promise<any>;
    reading(qparams?: Object): Promise<any>;
    onhold(qparams?: Object): Promise<any>;
    dropped(qparams?: Object): Promise<any>;
    plantoread(qparams?: Object): Promise<any>;
}
export default function (username: string): User;
export {};
