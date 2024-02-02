import { ConfigFile, HeaderWithSource, NudgeerSafeOptions } from "../types";
import { getConfig } from "./config";
import { defaultSecurityHeaders } from "./default-headers";
import { makeHeaderObj } from "./header-factory";
/**
 * @memberof module:nudgeer-safe
 * 
 * @param {NudgeerSafeOptions} options
 * @returns {HeadersObj[]}
 */
async function nudgeerSafe(options:NudgeerSafeOptions):Promise<HeaderWithSource[]> {
    let headers:HeaderWithSource[]=[]

    if(!options?.includeConfig && options.path){
      const safeHeaders = defaultSecurityHeaders();

      return [{source:options.path,headers:safeHeaders}]
    }
    // when including a path we have to parse the file, extract the headers
    // then return the object to it
    const configs = await getConfig(process.cwd()) as ConfigFile
    headers = await makeHeaderObj(configs)
    return headers;
    
}
export default nudgeerSafe;
