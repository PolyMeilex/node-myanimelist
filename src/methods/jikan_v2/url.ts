import * as urljoin from "url-join";

// class Url {
//   baseUrl: string;
//   parameters: string[];
//   constructor(baseUrl: string) {
//     this.baseUrl = baseUrl;
//     this.parameters = [];
//   }

//   setParam(id: number, p: string) {
//     this.parameters[id] = p;
//   }

//   getFullUrl(): string {
//     let full = [...this.parameters];
//     full.unshift(this.baseUrl);

//     return urljoin(...full);
//   }
// }

function joinUrl(base: string, params: string[]): string {
  return urljoin(base, ...params);
}

export { joinUrl };
