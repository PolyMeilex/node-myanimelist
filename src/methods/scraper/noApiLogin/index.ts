export interface LoginData {
  MALSESSIONID: string;
  csrf_token: string;
}

export function login(login: string, password: string): Promise<LoginData> {
  const getStartData = require("./getStartData");
  const loginWithData = require("./loginWithData");

  return new Promise((res, rej) => {
    getStartData()
      .then((startData: any) => loginWithData(login, password, startData))
      .then((logData: any) => res(logData))
      .catch((err: any) => rej(err));
  });
}
