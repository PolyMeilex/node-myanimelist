import { field as f } from "../util";
import { UserBase, User } from "./types";

export class UserFields<T> {
  fields: any = {};

  type: T = null as any;

  /** Aka `I don't care mode` */
  all() {
    return this.gender().birthday().animeStatistics().timeZone().isSupporter();
  }

  @f gender() {
    return (this as any) as UserFields<T & User.Gender>;
  }
  @f birthday() {
    return (this as any) as UserFields<T & User.Birthday>;
  }
  @f animeStatistics() {
    return (this as any) as UserFields<T & User.AnimeStatistics>;
  }
  @f timeZone() {
    return (this as any) as UserFields<T & User.TimeZone>;
  }
  @f isSupporter() {
    return (this as any) as UserFields<T & User.IsSupporter>;
  }
}

export function fields() {
  return new UserFields();
}
