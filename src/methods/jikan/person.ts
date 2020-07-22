import { joinUrl } from "./url";
import { jikanGet, jikanUrl } from "./jikanApi";

/**
 * # Person
 *
 * #### For more info visit <a href="https://jikan.docs.apiary.io/#reference/0/person" target="_blank">https://jikan.docs.apiary.io</a>
 *
 * To get person you need to create person object, like that:
 * ```ts
 * let person = Jikan.person(id);
 * ```
 * Now you can use person object multiple times to get desired information.
 * ```ts
 * person.info();
 * person.pictures();
 * ```
 * Each of those functions returns promise
 * ## Example
 * ```ts
 * person.info()
 *       .then(res => res.data)
 *       .then(personJson => personJson.name);
 * ```
 */
export class Person {
  /** @ignore */
  private baseUrl: string;
  constructor(id: number) {
    this.baseUrl = `${jikanUrl}/person/${id}`;
  }
  info() {
    return jikanGet(this.baseUrl);
  }
  pictures() {
    return jikanGet(joinUrl(this.baseUrl, ["pictures"]));
  }
}

export function person(id: number): Person {
  return new Person(id);
}
