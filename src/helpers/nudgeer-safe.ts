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
    // when including a path we have to parse the file, extract the headers
    // then return the object to it
    

    return headers
}
export default nudgeerSafe;
