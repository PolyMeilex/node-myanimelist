import { joinUrl } from "./url";
import { jikanGet, jikanUrl } from "./jikanApi";

/**
 * # Magazine
 *
 * #### For more info visit <a href="https://jikan.docs.apiary.io/#reference/0/magazine" target="_blank">https://jikan.docs.apiary.io</a>
 *
 * ```ts
 * Mal.magazine(id, page?);
 * ```
 */
export class Magazine {
  /** @ignore */
  private baseUrl: string;
  constructor() {
    this.baseUrl = `${jikanUrl}/magazine`;
  }
  info(id: number, p?: number) {
    let params = [String(id)];
    if (p != null) params[1] = String(p);
    return jikanGet(joinUrl(this.baseUrl, params));
  }
}

export function magazine(id: number, p?: number): Promise<any> {
  return new Magazine().info(id, p);
}
