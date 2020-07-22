export function queryEncode(obj: any) {
  return Object.keys(obj)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]))
    .join("&");
}

export function field(
  _target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
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
