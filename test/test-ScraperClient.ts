import { Scraper } from "../";

async function login(username: string, password: string) {
  let loginData = await Scraper.login(username, password);

  console.log(loginData);

  console.log("MALSESSIONID:", loginData.MALSESSIONID != null);
  console.log("csrf_token:", loginData.csrf_token != null);
}

async function notyfications(log: Scraper.LoginData) {
  let n = Scraper.notifications(log);
  console.log(n);
}

async function animeEdit(log: Scraper.LoginData, params: Object) {
  let res = await Scraper.animeEdit(log, params);
  console.log(res);
}

// const logData = {
//   MALSESSIONID: "***",
//   csrf_token: "***"
// };

// login("PolyMeilex", "****");
// notyfications(logData);

// const animeUpdate = {
//   num_watched_episodes: 20,
//   anime_id: 24833,
//   status: 1
// };
// animeEdit(logData, animeUpdate);
