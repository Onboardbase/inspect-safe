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
function nudgeerSafe(
  options: NudgeerSafeOptions
): HeaderWithSource[] | DefaultHeadersObj {
  let headers: HeaderWithSource[] = [];
  const safeHeaders = defaultSecurityHeaders();

  if (!options?.includeConfig && !options.path) {
    if(options.framework === 'AstroJs' || options.framework === 'NuxtJs')
      return makeDefaultHeadersObj();
  }

  if (options.includeConfig) {
    let configs={};

    const configsPromise = getConfig(process.cwd());
    
    configsPromise.then(config => {
        configs = config as ConfigFile;
        }).catch(error => {
          throw new Error(error)
      }); 


    if (options.framework === 'NextJs') {
      if (options.path) {
        headers.push({ source: options.path, headers: safeHeaders });
      }
      const HeadersFromConfigFile = makeHeaderArray(configs as ConfigFile);

      HeadersFromConfigFile.map(header=>{headers.push(header)})
    }

    if (options.framework === 'AstroJs' || options.framework === 'NuxtJs') {
      return makeHeadersObj(configs as ConfigFile);
    }
    return headers;
  }

  return headers;
}

export default nudgeerSafe;
