import properUrlJoin from 'proper-url-join';

function joinUrl(base: string, params: string[]): string {
  // @ts-ignore
  return properUrlJoin(base, ...params);
}

export { joinUrl };
