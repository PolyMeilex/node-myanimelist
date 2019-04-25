export interface LoginData {
    MALSESSIONID: string;
    csrf_token: string;
}
declare const _default: (login: string, password: string) => Promise<{}>;
export default _default;
