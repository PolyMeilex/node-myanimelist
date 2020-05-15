import mod from "./mod.js";
// @ts-ignore
import joinUrl from 'https://cdn.pika.dev/proper-url-join@^2.1.1';

// @ts-ignore
globalThis.jikanGet = (url: string) => fetch(url);

// @ts-ignore
globalThis.joinUrl = (base: string, params: string[]): string => joinUrl(base, ...params);

export default mod;