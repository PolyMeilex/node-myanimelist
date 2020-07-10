import { WorkForList, WorkBase } from "../schemas/work";
import { AnimeForList, AnimeForDetails } from "../schemas/anime";

function f(_target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const after = descriptor.value;

  const real_name = propertyKey
    .split(/(?=[A-Z])/)
    .map((s) => s.toLocaleLowerCase())
    .join("_");

  descriptor.value = function (...args: any[]) {
    (this as any).fields[real_name] = true;

    return after.apply(this, args);
  };
}

export interface AnimeSearchItem<T> {
  node: T;
}

///
/// Anime For List
///
export class AnimeFields<T> {
  fields: any = {};

  type: T = null as any;

  @f alternativeTitles() {
    return (this as any) as AnimeFields<T & WorkForList.AlternativeTitles>;
  }

  @f startDate() {
    return (this as any) as AnimeFields<T & WorkForList.StartDate>;
  }

  @f endDate() {
    return (this as any) as AnimeFields<T & WorkForList.EndDate>;
  }

  @f synopsis() {
    return (this as any) as AnimeFields<T & WorkForList.Synopsis>;
  }

  @f mean() {
    return (this as any) as AnimeFields<T & WorkForList.Mean>;
  }

  @f rank() {
    return (this as any) as AnimeFields<T & WorkForList.Rank>;
  }

  @f popularity() {
    return (this as any) as AnimeFields<T & WorkForList.Popularity>;
  }

  @f numListUsers() {
    return (this as any) as AnimeFields<T & WorkForList.NumListUsers>;
  }

  @f numScoringUsers() {
    return (this as any) as AnimeFields<T & WorkForList.NumScoringUsers>;
  }

  @f nsfw() {
    return (this as any) as AnimeFields<T & WorkForList.Nsfw>;
  }

  @f genres() {
    return (this as any) as AnimeFields<T & WorkForList.Genres>;
  }

  @f createdAt() {
    return (this as any) as AnimeFields<T & WorkForList.CreatedAt>;
  }

  @f updatedAt() {
    return (this as any) as AnimeFields<T & WorkForList.UpdatedAt>;
  }

  //
  // AnimeForListFields
  //

  @f mediaType() {
    return (this as any) as AnimeFields<T & AnimeForList.MediaType>;
  }

  @f status() {
    return (this as any) as AnimeFields<T & AnimeForList.Status>;
  }

  // TODO: Builder
  myListStatus() {
    return this;
  }

  @f numEpisodes() {
    return (this as any) as AnimeFields<T & AnimeForList.NumEpisodes>;
  }

  @f startSeason() {
    return (this as any) as AnimeFields<T & AnimeForList.StartSeason>;
  }

  @f broadcast() {
    return (this as any) as AnimeFields<T & AnimeForList.Broadcast>;
  }

  @f source() {
    return (this as any) as AnimeFields<T & AnimeForList.Source>;
  }

  @f averageEpisodeDuration() {
    return (this as any) as AnimeFields<
      T & AnimeForList.AverageEpisodeDuration
    >;
  }

  @f rating() {
    return (this as any) as AnimeFields<T & AnimeForList.Rating>;
  }

  @f studios() {
    return (this as any) as AnimeFields<T & AnimeForList.Studios>;
  }
}

export function animeFields() {
  return new AnimeFields<WorkBase>();
}

///
/// Anime For Details
///
export class AnimeDetailsFields<T> {
  fields: any = {};

  type: T = null as any;

  //
  // Work For List Fields
  //

  @f alternativeTitles() {
    return (this as any) as AnimeDetailsFields<
      T & WorkForList.AlternativeTitles
    >;
  }

  @f startDate() {
    return (this as any) as AnimeDetailsFields<T & WorkForList.StartDate>;
  }

  @f endDate() {
    return (this as any) as AnimeDetailsFields<T & WorkForList.EndDate>;
  }

  @f synopsis() {
    return (this as any) as AnimeDetailsFields<T & WorkForList.Synopsis>;
  }

  @f mean() {
    return (this as any) as AnimeDetailsFields<T & WorkForList.Mean>;
  }

  @f rank() {
    return (this as any) as AnimeDetailsFields<T & WorkForList.Rank>;
  }

  @f popularity() {
    return (this as any) as AnimeDetailsFields<T & WorkForList.Popularity>;
  }

  @f numListUsers() {
    return (this as any) as AnimeDetailsFields<T & WorkForList.NumListUsers>;
  }

  @f numScoringUsers() {
    return (this as any) as AnimeDetailsFields<T & WorkForList.NumScoringUsers>;
  }

  @f nsfw() {
    return (this as any) as AnimeDetailsFields<T & WorkForList.Nsfw>;
  }

  @f genres() {
    return (this as any) as AnimeDetailsFields<T & WorkForList.Genres>;
  }

  @f createdAt() {
    return (this as any) as AnimeDetailsFields<T & WorkForList.CreatedAt>;
  }

  @f updatedAt() {
    return (this as any) as AnimeDetailsFields<T & WorkForList.UpdatedAt>;
  }

  //
  // Anime For List Fields
  //

  @f mediaType() {
    return (this as any) as AnimeDetailsFields<T & AnimeForList.MediaType>;
  }

  @f status() {
    return (this as any) as AnimeDetailsFields<T & AnimeForList.Status>;
  }

  // TODO: Builder
  myListStatus() {
    return this;
  }

  @f numEpisodes() {
    return (this as any) as AnimeDetailsFields<T & AnimeForList.NumEpisodes>;
  }

  @f startSeason() {
    return (this as any) as AnimeDetailsFields<T & AnimeForList.StartSeason>;
  }

  @f broadcast() {
    return (this as any) as AnimeDetailsFields<T & AnimeForList.Broadcast>;
  }

  @f source() {
    return (this as any) as AnimeDetailsFields<T & AnimeForList.Source>;
  }

  @f averageEpisodeDuration() {
    return (this as any) as AnimeDetailsFields<
      T & AnimeForList.AverageEpisodeDuration
    >;
  }

  @f rating() {
    return (this as any) as AnimeDetailsFields<T & AnimeForList.Rating>;
  }

  @f studios() {
    return (this as any) as AnimeDetailsFields<T & AnimeForList.Studios>;
  }

  //
  // Anime For Details Fields
  //

  @f pictures() {
    return (this as any) as AnimeDetailsFields<T & AnimeForDetails.Pictures>;
  }
  @f background() {
    return (this as any) as AnimeDetailsFields<T & AnimeForDetails.Background>;
  }
  @f relatedAnime() {
    return (this as any) as AnimeDetailsFields<
      T & AnimeForDetails.RelatedAnime
    >;
  }
  @f relatedManga() {
    return (this as any) as AnimeDetailsFields<
      T & AnimeForDetails.RelatedManga
    >;
  }
  @f recommendations() {
    return (this as any) as AnimeDetailsFields<
      T & AnimeForDetails.Recommendations
    >;
  }
  @f statistics() {
    return (this as any) as AnimeDetailsFields<T & AnimeForDetails.Statistics>;
  }
}

export function animeDetailsFields() {
  return new AnimeDetailsFields<WorkBase>();
}
