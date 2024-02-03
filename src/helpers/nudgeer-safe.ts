import { ConfigFile, DefaultHeadersObj, HeaderWithSource, NudgeerSafeOptions } from "../types";
import { getConfig } from "./config";
import { FRAMEWORKS } from "./constants";
import { defaultSecurityHeaders } from "./default-headers";
import { makeHeaderArray, makeHeadersObj } from "./header-factory";
/**
 * @memberof module:nudgeer-safe
 * 
 * @param {NudgeerSafeOptions} options
 * @returns {HeadersWithSource[]} 
 */
async function nudgeerSafe(options:NudgeerSafeOptions):Promise<HeaderWithSource[] | DefaultHeadersObj> {
    let headers:HeaderWithSource[]=[]

    const safeHeaders = defaultSecurityHeaders();
    if(!options?.includeConfig && options.path){
      return [{source:options.path,headers:safeHeaders}]
    }
    if(options.includeConfig && options.path){
      const configs = await getConfig(process.cwd()) as ConfigFile
      
      if(options.framework === FRAMEWORKS.NEXTJS){ 
        headers = await makeHeaderArray(configs)
        headers.push({source:options.path,headers:safeHeaders})
      }
      if(options.framework === FRAMEWORKS.ASTROJS){
        return makeHeadersObj(configs);
      }
    
      return headers
    }
    
    return headers;
    
}
export default nudgeerSafe;
