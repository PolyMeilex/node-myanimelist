import { Request, Headers, Response, RequestInit, RequestInfo } from 'node-fetch';

declare function fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
declare namespace fetch {
  function isRedirect(code: number): boolean;
}

export default fetch;
export { Headers, Request, Response };

