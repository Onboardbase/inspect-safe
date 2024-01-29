import { defaultSecurityHeaders } from "./default-headers";

/**
 * @memberof module:nudgeer-safe
 * 
 * @param {NudgeerSafeOptions | undefined} options
 * @returns {HeadersObj[]}
 */
async function nudgeerSafe(options:NudgeerSafeOptions):Promise<HeaderWithSource[]> {
    const headers:HeaderWithSource[]=[]

    if(!options?.includeConfig){
      const safeHeaders = defaultSecurityHeaders();

      return [{source:options.path,headers:safeHeaders}];
    }


    return headers
}
export default nudgeerSafe;
