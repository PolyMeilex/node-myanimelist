declare type day = "" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday" | "other" | "unknown";
/**
 * ### Anime of the specified season
 * **Note:** If you don't pass the day parameter, it'll return the schedule for all days of the week
 * @param day Day of week: monday, tuesday, wednesday, thursday, friday, saturday, sunday, other, unknown.
 */
export default function (day?: day): Promise<{}>;
export {};
