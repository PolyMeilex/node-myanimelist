import urljoin from "url-join";

function joinUrl(base: string, params: string[]): string {
  return urljoin(base, ...params);
}

export { joinUrl };
