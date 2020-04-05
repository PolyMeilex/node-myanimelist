import { joinUrl } from "./url";
import { jikanGet, jikanUrl } from "./jikanApi";

class Person {
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

export default function (id: number): Person {
  return new Person(id);
}
