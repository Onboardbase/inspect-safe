import { parseConfig } from "./config";
import { defaultSecurityHeaders } from "./default-headers";
import { makeHedaerObject } from "./header-factory";

/**
 * @memberof module:nudgeer-safe
 * 
 * @param {NudgeerSafeOptions | undefined} options
 * @returns {HeadersObj[]}
 */
export async function nudgeerSafe(options?:NudgeerSafeOptions):Promise<HeadersObj[]> {
    let configFile=null;
    const headers:HeadersObj[]=[]
    if(options?.isDev){
      configFile = await parseConfig(__dirname+'nudgeer.json')
      configFile = configFile
    }


    if(!options?.includeConfig){
      return defaultSecurityHeaders();
    }


    return headers
}
export default nudgeerSafe();
