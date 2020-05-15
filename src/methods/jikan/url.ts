function joinUrl(base: string, params: string[]): string {
  // @ts-ignore
  return globalThis.urlJoin(base, ...params);
}

export { joinUrl };
