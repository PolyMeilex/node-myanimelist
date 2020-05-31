export const jikanUrl = "https://api.jikan.moe/v3";
// @ts-ignore
// global.ENVTYPE = "MOCHA";
// import axios from "axios";
// @ts-ignore
// global.jikanGet = (s) => s;
// @ts-ignore
// global.jikanGet = function jikanGet(url: string): Promise<any> {
//   return axios.get(url);
// };
// @ts-ignore
// if (global.ENVTYPE === "MOCHA") {
//   const axios = import("axios");
//   // const axios = require("axios");
// axios.then(module => {
//   console.log("LOADED");
//     const axios = module.default;
//     // @ts-ignore
//     global.jikanGet = function jikanGet(url: string): Promise<any> {
//       return axios.get(url);
//     };
// });
// }
// else {
//   // @ts-ignore
//   global.jikanGet = function jikanGet(url: string): Promise<any> {
//     // @ts-ignore
//     return fetch(url);
//   };
// }
// }
// @ts-ignore
// global.jikanGet = function jikanGet(url: string): Promise<any> {
//   return axios.get(url);
// };
// @ts-ignore
// let get: (string) => any = global.jikanGet;
export function jikanGet(url) {
    // if (get) {
    //   return get(url);
    // }
    // else {
    //   // @ts-ignore
    //   return global.jikanGet(url);
    // }
    // @ts-ignore
    return globalThis.jikanGet(url);
}
//# sourceMappingURL=jikanApi.js.map