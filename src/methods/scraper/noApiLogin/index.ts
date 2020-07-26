import getStartData from "./getStartData";
import loginWithData from "./loginWithData";

export interface LoginData {
  MALSESSIONID: string;
  csrf_token: string;
}

export async function login(
  login: string,
  password: string
): Promise<LoginData> {
  const startData = await getStartData();
  return await loginWithData(login, password, startData);
}
