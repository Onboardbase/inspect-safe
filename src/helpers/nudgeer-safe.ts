import {
  ConfigFile,
  DefaultHeadersObj,
  HeaderWithSource,
  NudgeerSafeOptions,
} from "../types";
import { getRawConfig } from "./config";
import { defaultSecurityHeaders } from "./default-headers";
import {
  makeDefaultHeadersObj,
  makeHeaderArray,
  makeHeadersObj,
  routeHeaders,
} from "./header-factory";

/**
 * @memberof module:nudgeer-safe
 * @class
 * @param {NudgeerSafeOptions} options
 * @returns {HeaderWithSource[] | DefaultHeadersObj}
 */

export default class NudgeerSafe {
  config:ConfigFile
  options: NudgeerSafeOptions;
  constructor(options?: NudgeerSafeOptions){
    if(options){
      this.options = options
      if(options.includeConfig){
        this.loadConfig()
      }
    }
  }

  public next(){
    if(this.config && this.config.version === '1.0'){
      const HeadersFromConfigFile = makeHeaderArray(this.config, this.options.path);
      return HeadersFromConfigFile
    }
    const safeHeaders:HeaderWithSource[] = [{source:this.options.path,headers:defaultSecurityHeaders()}];
    return safeHeaders; 
  }

  public astro(): DefaultHeadersObj{
    if(this.config && this.config.version === '1.0'){
      return makeHeadersObj(this.config);
    }
    return makeDefaultHeadersObj();
    
  }

  public nuxt(route?: string): DefaultHeadersObj{
    if(this.config && this.config.version === '1.0'){
      if(route){
        return routeHeaders(this.config,route)
      }
      return makeHeadersObj(this.config);
    }
    return makeDefaultHeadersObj();
  }

  public route(){
    return 'not Impelemented yet'
  }

  private loadConfig(){
    try {
      const config = getRawConfig(process.cwd());
      this.config = config as ConfigFile;
    } catch (error) {
      throw new Error(`Error loading configuration: ${error}`);
    }
  }
}

