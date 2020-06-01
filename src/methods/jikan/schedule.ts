import { joinUrl } from "./url";
import { jikanGet, jikanUrl } from "./jikanApi";

/**
 * # Schedule
 *
 * #### For more info visit <a href="https://jikan.docs.apiary.io/#reference/0/schedule " target="_blank">https://jikan.docs.apiary.io</a>
 *
 * To get schedule you need to create schedule object, like so:
 * ```ts
 * let schedule = Mal.schedule();
 * ```
 * And then you can use schedule object multiple times to get desired information.
 * ```ts
 * schedule.all();
 * schedule.monday();
 * schedule.tuesday();
 * schedule.wednesday();
 * schedule.thursday();
 * schedule.friday();
 * schedule.saturday();
 * schedule.sunday();
 * schedule.other();
 * schedule.unknown();
 * ```
 * Each of those functions returns promise
 * ## Example
 * ```ts
 * Mal.schedule().all()
 *               .then(res => res.data)
 *               .then(scheduleJson => {});
 * ```
 */
export class Schedule {
  /** @ignore */
  private baseUrl: string;
  constructor() {
    this.baseUrl = `${jikanUrl}/schedule`;
  }
  all() {
    return jikanGet(this.baseUrl);
  }
  monday() {
    return jikanGet(joinUrl(this.baseUrl, ["monday"]));
  }
  tuesday() {
    return jikanGet(joinUrl(this.baseUrl, ["tuesday"]));
  }
  wednesday() {
    return jikanGet(joinUrl(this.baseUrl, ["wednesday"]));
  }
  thursday() {
    return jikanGet(joinUrl(this.baseUrl, ["thursday"]));
  }
  friday() {
    return jikanGet(joinUrl(this.baseUrl, ["friday"]));
  }
  saturday() {
    return jikanGet(joinUrl(this.baseUrl, ["saturday"]));
  }
  sunday() {
    return jikanGet(joinUrl(this.baseUrl, ["sunday"]));
  }
  other() {
    return jikanGet(joinUrl(this.baseUrl, ["other"]));
  }
  unknown() {
    return jikanGet(joinUrl(this.baseUrl, ["unknown"]));
  }
}

export function schedule(): Schedule {
  return new Schedule();
}
