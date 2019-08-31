import { joinUrl } from "./url";
import baseUrl from "./jikanApi";

class Producer {
  private baseUrl: string;
  constructor() {
    this.baseUrl = `${baseUrl}/producer`;
  }
  private jikanGet(url: string) {
    console.log(url);
  }
  info(id: number, p?: number) {
    let params = [String(id)];
    if (p != null) params[1] = String(p);
    return this.jikanGet(joinUrl(this.baseUrl, params));
  }
}

function producer(id: number, p?: number): Promise<any> {
  return new Promise(resolve => {
    resolve(new Producer().info(id, p));
  });
}

producer.debug = (id: number, p?: number): string => {
  let s = new Producer();
  // Return url instead of calling jikan api
  // @ts-ignore
  s.jikanGet = s => s;
  // @ts-ignore
  return s.info(id, p);
};

export default producer;
