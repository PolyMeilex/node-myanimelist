declare type request = "" | "characters_staff" | "episodes" | "news" | "pictures" | "videos" | "stats" | "forum" | "moreinfo" | "reviews" | "recommendations" | "userupdates";
/**
 * ### A single anime object with all its details
 * @param id Id on MyAnimeList.
 * @param request Request types: 'characters_staff','episodes','news','pictures','videos','stats','forum','moreinfo','reviews','recommendations','userupdates'.
 * @param parameter Page number.
 */
export default function (id: number, request?: request, parameter?: number | string): Promise<{}>;
export {};
