export class Type<T> {
  private t: string;
  constructor(t) {
    this.t = t;
  }
  toString() {
    return this.t;
  }
}

export const string = new Type<string>("string");
export const number = new Type<number>("number");
export const boolean = new Type<boolean>("boolean");
export const object = new Type<object>("object");
