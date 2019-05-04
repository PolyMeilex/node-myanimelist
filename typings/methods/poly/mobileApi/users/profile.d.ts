declare type fields = 'anime_statistics' | 'is_supporter';
/**
 * ### Profile of logged in user
 * @param auth Auth OBJ.
 * @param fields array [anime_statistics,is_supporter]
 */
export default function (auth: any, fields?: fields[]): Promise<{}>;
export {};
