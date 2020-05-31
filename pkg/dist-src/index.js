import { Mal, JikanClient } from "./mod.js";
import esmFetch from "esm-fetch";
// @ts-ignore
globalThis.jikanGet = (url) => esmFetch(url);
export { Mal, JikanClient };
export default Mal;
//# sourceMappingURL=index.js.map