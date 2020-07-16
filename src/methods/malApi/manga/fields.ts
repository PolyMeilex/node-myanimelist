import { WorkForList } from "../common";
import {
  MangaForList,
  MangaForDetails,
  MangaListStatus,
  MangaListStatusBase,
} from "./types";

import { field as f } from "../util";
import { AnimeFields } from "../anime";

export interface MangaSearchItem<T> {
  node: T;
}

/**
 * Manga For List
 */
export class MangaFields<T> {
  fields: { [key: string]: boolean | string } = {};

  type: T = null as any;

  @f alternativeTitles() {
    return (this as any) as MangaFields<T & WorkForList.AlternativeTitles>;
  }

  @f startDate() {
    return (this as any) as MangaFields<T & WorkForList.StartDate>;
  }

  @f endDate() {
    return (this as any) as MangaFields<T & WorkForList.EndDate>;
  }

  @f synopsis() {
    return (this as any) as MangaFields<T & WorkForList.Synopsis>;
  }

  @f mean() {
    return (this as any) as MangaFields<T & WorkForList.Mean>;
  }

  @f rank() {
    return (this as any) as MangaFields<T & WorkForList.Rank>;
  }

  @f popularity() {
    return (this as any) as MangaFields<T & WorkForList.Popularity>;
  }

  @f numListUsers() {
    return (this as any) as MangaFields<T & WorkForList.NumListUsers>;
  }

  @f numScoringUsers() {
    return (this as any) as MangaFields<T & WorkForList.NumScoringUsers>;
  }

  @f nsfw() {
    return (this as any) as MangaFields<T & WorkForList.Nsfw>;
  }

  @f genres() {
    return (this as any) as MangaFields<T & WorkForList.Genres>;
  }

  @f createdAt() {
    return (this as any) as MangaFields<T & WorkForList.CreatedAt>;
  }

  @f updatedAt() {
    return (this as any) as MangaFields<T & WorkForList.UpdatedAt>;
  }

  //
  // MangaForListFields
  //

  @f mediaType() {
    return (this as any) as MangaFields<T & MangaForList.MediaType>;
  }

  @f status() {
    return (this as any) as MangaFields<T & MangaForList.Status>;
  }

  myListStatus<U>(fields?: MangaListStatusFields<U>) {
    this.fields["my_list_status"] = fields ? fields.toString() : "";
    return (this as any) as MangaFields<
      T & { my_list_status: MangaListStatusBase & U }
    >;
  }

  @f numVolumes() {
    return (this as any) as MangaFields<T & MangaForList.NumVolumes>;
  }

  @f numChapters() {
    return (this as any) as MangaFields<T & MangaForList.NumChapters>;
  }

  /**
   * authors{first_name,last_name}
   *
   * @param overrideFields - `It's recomended to left this one empty`
   * All fields are included by default since there are only 2 {first_name,last_name}
   * Keep in mind that override is not type safe
   */
  authors(overrideFields: string[] = ["first_name", "last_name"]) {
    this.fields["authors"] = `authors{${overrideFields.join()}}`;
    return (this as any) as MangaFields<T & MangaForList.Authors>;
  }
}

MangaFields.prototype.toString = function () {
  return Object.entries(this.fields)
    .map(([k, v]) => {
      if (typeof v === "boolean") return k;
      else if (typeof v === "string") return `${k}{${v}}`;
    })
    .join(",");
};

/**
 * Manga For List
 */
export function mangaFields() {
  return new MangaFields();
}

/**
 * Manga For Details
 */
export class MangaDetailsFields<T> {
  fields: { [key: string]: boolean | string } = {};

  type: T = null as any;

  //
  // Work For List Fields
  //

  @f alternativeTitles() {
    return (this as any) as MangaDetailsFields<
      T & WorkForList.AlternativeTitles
    >;
  }

  @f startDate() {
    return (this as any) as MangaDetailsFields<T & WorkForList.StartDate>;
  }

  @f endDate() {
    return (this as any) as MangaDetailsFields<T & WorkForList.EndDate>;
  }

  @f synopsis() {
    return (this as any) as MangaDetailsFields<T & WorkForList.Synopsis>;
  }

  @f mean() {
    return (this as any) as MangaDetailsFields<T & WorkForList.Mean>;
  }

  @f rank() {
    return (this as any) as MangaDetailsFields<T & WorkForList.Rank>;
  }

  @f popularity() {
    return (this as any) as MangaDetailsFields<T & WorkForList.Popularity>;
  }

  @f numListUsers() {
    return (this as any) as MangaDetailsFields<T & WorkForList.NumListUsers>;
  }

  @f numScoringUsers() {
    return (this as any) as MangaDetailsFields<T & WorkForList.NumScoringUsers>;
  }

  @f nsfw() {
    return (this as any) as MangaDetailsFields<T & WorkForList.Nsfw>;
  }

  @f genres() {
    return (this as any) as MangaDetailsFields<T & WorkForList.Genres>;
  }

  @f createdAt() {
    return (this as any) as MangaDetailsFields<T & WorkForList.CreatedAt>;
  }

  @f updatedAt() {
    return (this as any) as MangaDetailsFields<T & WorkForList.UpdatedAt>;
  }

  //
  // Manga For List Fields
  //

  @f mediaType() {
    return (this as any) as MangaDetailsFields<T & MangaForList.MediaType>;
  }

  @f status() {
    return (this as any) as MangaDetailsFields<T & MangaForList.Status>;
  }

  myListStatus<U>(fields?: MangaDetailsFields<U>) {
    this.fields["my_list_status"] = fields ? fields.toString() : "";
    return (this as any) as MangaFields<
      T & { my_list_status: MangaListStatusBase & U }
    >;
  }

  @f numVolumes() {
    return (this as any) as MangaDetailsFields<T & MangaForList.NumVolumes>;
  }
  @f numChapters() {
    return (this as any) as MangaDetailsFields<T & MangaForList.NumChapters>;
  }

  /**
   * authors{first_name,last_name}
   *
   * @param overrideFields - `It's recomended to left this one empty`
   * All fields are included by default since there are only 2 {first_name,last_name}
   * Keep in mind that override is not type safe
   */
  authors(overrideFields: string[] = ["first_name", "last_name"]) {
    this.fields["authors"] = `authors{${overrideFields.join()}}`;
    return (this as any) as MangaDetailsFields<T & MangaForList.Authors>;
  }

  //
  // Manga For Details Fields
  //

  @f pictures() {
    return (this as any) as MangaDetailsFields<T & MangaForDetails.Pictures>;
  }
  @f background() {
    return (this as any) as MangaDetailsFields<T & MangaForDetails.Background>;
  }

  relatedAnime<U>(fields?: AnimeFields<U>) {
    this.fields["related_anime"] = fields ? fields.toString() : "";
    return (this as any) as MangaDetailsFields<
      T & MangaForDetails.RelatedAnime<U>
    >;
  }
  relatedManga<U>(fields?: MangaFields<U>) {
    this.fields["related_manga"] = fields ? fields.toString() : "";
    return (this as any) as MangaDetailsFields<
      T & MangaForDetails.RelatedManga<U>
    >;
  }
  recommendations<U>(fields?: MangaFields<U>) {
    this.fields["recommendations"] = fields ? fields.toString() : "";
    return (this as any) as MangaDetailsFields<
      T & MangaForDetails.Recommendations<U>
    >;
  }
  @f serialization() {
    return (this as any) as MangaDetailsFields<
      T & MangaForDetails.Serialization
    >;
  }
}

MangaDetailsFields.prototype.toString = function () {
  return Object.entries(this.fields)
    .map(([k, v]) => {
      if (typeof v === "boolean") return k;
      else if (typeof v === "string") return `${k}{${v}}`;
    })
    .join(",");
};

/**
 * Manga For Details
 */
export function mangaDetailsFields() {
  return new MangaDetailsFields();
}

/**
 * Manga List Status
 */
export class MangaListStatusFields<T> {
  fields: { [key: string]: boolean } = {};

  type: T = null as any;

  @f startDate() {
    return (this as any) as MangaListStatusFields<
      T & MangaListStatus.StartDate
    >;
  }
  @f finishDate() {
    return (this as any) as MangaListStatusFields<
      T & MangaListStatus.FinishDate
    >;
  }
  @f priority() {
    return (this as any) as MangaListStatusFields<T & MangaListStatus.Priority>;
  }
  @f numTimesReread() {
    return (this as any) as MangaListStatusFields<
      T & MangaListStatus.NumTimesReread
    >;
  }
  @f rereadValue() {
    return (this as any) as MangaListStatusFields<
      T & MangaListStatus.RereadValue
    >;
  }
  @f tags() {
    return (this as any) as MangaListStatusFields<T & MangaListStatus.Tags>;
  }
  @f comments() {
    return (this as any) as MangaListStatusFields<T & MangaListStatus.Comments>;
  }
}

MangaListStatusFields.prototype.toString = function () {
  return Object.entries(this.fields).join(",");
};

/**
 * Manga List Status
 */
export function mangaListStatusFields() {
  return new MangaListStatusFields();
}
