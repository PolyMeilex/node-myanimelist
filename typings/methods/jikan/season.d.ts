declare type season = "summer" | "spring" | "fall" | "winter";
declare function season(year: number, season: season): Promise<any>;
declare namespace season {
    var debug: (year: number, season: season) => string;
}
export default season;
