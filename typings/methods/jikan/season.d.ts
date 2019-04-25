declare type season = 'summer' | 'spring' | 'fall' | 'winter';
/**
 * ### Anime of the specified season
 * @param year Year.
 * @param season summer,spring,fall,winter.
 */
export default function (year: number, season: season): Promise<{}>;
export {};
