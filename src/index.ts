export * as Jikan from "./methods/jikan";
import * as Mal from "./methods/malApi";
export * as Scraper from "./methods/scraper";

const { version } = require("../package.json");

export { version, Mal };
export default Mal;
