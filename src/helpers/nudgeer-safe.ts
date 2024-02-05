import {
  ConfigFile,
  DefaultHeadersObj,
  HeaderWithSource,
  NudgeerSafeOptions,
} from "../types";
import { getConfig } from "./config";
import { defaultSecurityHeaders } from "./default-headers";
import {
  makeDefaultHeadersObj,
  makeHeaderArray,
  makeHeadersObj,
} from "./header-factory";

/**
 * @memberof module:nudgeer-safe
 *
 * @param {NudgeerSafeOptions} options
 * @returns {HeadersWithSource[]}
 */
async function nudgeerSafe(
  options: NudgeerSafeOptions
): Promise<HeaderWithSource[] | DefaultHeadersObj> {
  let headers: HeaderWithSource[] = [];
  const safeHeaders = defaultSecurityHeaders();

  if (!options?.includeConfig && !options.path && options.framework === 'AstroJs') {
    return await makeDefaultHeadersObj();
  }

  if (options.includeConfig) {
    const configs = (await getConfig(process.cwd())) as ConfigFile;

    if (options.framework === 'NextJs') {
      if (options.path) {
        headers.push({ source: options.path, headers: safeHeaders });
      }
      const HeadersFromConfigFile = await makeHeaderArray(configs);

      HeadersFromConfigFile.map(header=>{headers.push(header)})
    }

    if (options.framework === 'AstroJs') {
      return makeHeadersObj(configs);
    }
    return headers;
  }

  return headers;
}

export default nudgeerSafe;
