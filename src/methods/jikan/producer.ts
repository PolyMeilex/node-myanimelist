import { joinUrl } from "./url";
import { jikanGet, jikanUrl } from "./jikanApi";

/**
 * # Producer
 *
 * #### For more info visit <a href="https://jikan.docs.apiary.io/#reference/0/producer" target="_blank">https://jikan.docs.apiary.io</a>
 *
 * ```ts
 * Jikan.producer(id, page?);
 * ```
 */
export class Producer {
  /** @ignore */
  private baseUrl: string;
  constructor() {
    this.baseUrl = `${jikanUrl}/producer`;
  }
  info(id: number, p?: number) {
    let params = [String(id)];
    if (p != null) params[1] = String(p);
    return jikanGet(joinUrl(this.baseUrl, params));
  }
}

export function producer(id: number, p?: number): Promise<any> {
  return new Producer().info(id, p);
}
