import { ConfigFile, HeaderWithSource, NudgeerSafeOptions } from "../types";
import { getConfig } from "./config";
import { defaultSecurityHeaders } from "./default-headers";
import { makeHeaderObj } from "./header-factory";
import path from 'path'
/**
 * @memberof module:nudgeer-safe
 * 
 * @param {NudgeerSafeOptions} options
 * @returns {HeadersObj[]}
 */
async function nudgeerSafe(options:NudgeerSafeOptions):Promise<HeaderWithSource[]> {
    let headers:HeaderWithSource[]=[]

    if(!options?.includeConfig){
      const safeHeaders = defaultSecurityHeaders();
      return [{source:options.path,headers:safeHeaders}];
    }
    // when including a path we have to parse the file, extract the headers
    // then return the object to it
    const configs = await getConfig(path.join(__dirname,'../../../')) as ConfigFile
    headers = makeHeaderObj(configs)
    console.log(headers)
    return headers
}
export default nudgeerSafe;
