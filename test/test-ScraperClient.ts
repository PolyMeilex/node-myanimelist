import { ScraperClient } from "../";
import { LoginData } from "../typings/methods/poly/noApiLogin";

async function login(username: string, password: string) {
  let loginData = await new ScraperClient().login(username, password);

  console.log("MALSESSIONID:", loginData.MALSESSIONID != null);
  console.log("csrf_token:", loginData.csrf_token != null);
}

async function notyfications(log: LoginData) {
  let n = await new ScraperClient().notifications(log);
  console.log(n);
}

async function animeEdit(log: LoginData, params: Object) {
  let res = await new ScraperClient().animeEdit(log, params);
  console.log(res);
}

// const logData = {
//   MALSESSIONID: "***",
//   csrf_token: "***"
// };

// login("username","password");
// notyfications(logData);

// const animeUpdate = {
//   num_watched_episodes: 20,
//   anime_id: 24833,
//   status: 1
// };
// animeEdit(logData, animeUpdate);
