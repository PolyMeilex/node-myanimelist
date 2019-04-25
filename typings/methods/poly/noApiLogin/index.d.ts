export interface LoginData {
    MALSESSIONID: string;
    csrf_token: string;
}
export default function (login: string, password: string): Promise<{}>;
