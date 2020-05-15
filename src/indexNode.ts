import mod from "./mod.js";
import axios from "axios";
import joinUrl from "proper-url-join";

// @ts-ignore
globalThis.jikanGet = (url: string) => axios.get(url);
// @ts-ignore
globalThis.joinUrl = (base: string, params: string[]): string => joinUrl(base, ...params);

export default mod;