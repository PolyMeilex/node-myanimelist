import assert from "assert";
import * as T from "./types";

export function nullable<T>(src: T, cb: (t: T) => void) {
  if (src != null) {
    cb(src);
  } else {
    it("null", () => {});
  }
}

export function nonNullable<T>(src: T, cb: (t: T) => void) {
  if (src != null) {
    cb(src);
  } else {
    it("null", () => assert.fail("Null in non nullable field"));
  }
}

export function isOneOf<T>(src: T, arr: T[]) {
  return arr.some((i) => src == i);
}
export function assertIsOneOf<T>(src: T, arr: T[]) {
  if (!isOneOf(src, arr)) {
    assert.fail(`Expected one of ${arr.toString()}`);
  }
}

export function assertTypeof<U extends R, R>(
  src: U,
  type: T.Type<R>,
  nullable: boolean = false
) {
  if (!nullable && src == null) {
    assert.fail("Null in non nullable field");
  } else if (src != null) {
    assert.equal(type.toString(), typeof src);
  }
}
