/**
 * # JikanAPI
 *
 * ```ts
 * import { Jikan } from "node-myanimelist";
 * ```
 * ## Functions
 * * Jikan.**{@link anime}**(id)
 * * Jikan.**{@link manga}**(id)
 * * Jikan.**{@link person}**(id)
 * * Jikan.**{@link character}**(id)
 * * Jikan.**{@link search}**()
 * * Jikan.**{@link season}**(year,season)
 * * Jikan.**{@link seasonArchive}**()
 * * Jikan.**{@link seasonLater}**()
 * * Jikan.**{@link schedule}**()
 * * Jikan.**{@link top}**()
 * * Jikan.**{@link genre}**()
 * * Jikan.**{@link producer}**(id, page?)
 * * Jikan.**{@link magazine}**(id, page?)
 * * Jikan.**{@link user}**(username)
 * * Jikan.**{@link club}**(id)
 *
 * Jikan methods return unmodified jikanApi responses, to see all of them visit [jikanDocs](https://jikan.docs.apiary.io/)
 *
 * @packageDocumentation
 */

/** */
export { anime } from "./anime";
export * as Anime from "./anime";

export { manga } from "./manga";
export * as Manga from "./manga";

export { person } from "./person";
export * as Person from "./person";

export { character } from "./character";
export * as Character from "./character";

export { search } from "./search";
export * as Search from "./search";

export { season } from "./season";
export * as Season from "./season";

export { seasonArchive } from "./seasonArchive";
export * as SeasonArchive from "./seasonArchive";

export { seasonLater } from "./seasonLater";
export * as SeasonLater from "./seasonLater";

export { schedule } from "./schedule";
export * as Schedule from "./schedule";

export { top } from "./top";
export * as Top from "./top";

export { genre } from "./genre";
export * as Genre from "./genre";

export { producer } from "./producer";
export * as Producer from "./producer";

export { magazine } from "./magazine";
export * as Magazine from "./magazine";

export { user } from "./user";
export * as User from "./user";

export { club } from "./club";
export * as Club from "./club";

export * as Types from "./types";
