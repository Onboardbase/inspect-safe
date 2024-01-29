import { parseConfig } from "./config";
import { defaultSecurityHeaders } from "./default-headers";

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


    if(options?.includeConfig){

    }


    return headers
}
export default nudgeerSafe();
