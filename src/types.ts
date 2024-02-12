import {CONFIG_VERSION, FRAMEWORKS} from './helpers/constants'



export type Framework = { [K in FRAMEWORKS]: K };

export type NudgeerSafeOptions = {
  includeConfig?:boolean
  path?:string
  framework: 'AstroJs' | 'NextJs' | 'NuxtJs';
}

export type ConfigVersion = typeof CONFIG_VERSION[number];


export type SafeHeaders = {
  key:string
  value:string
}

export type DefaultHeadersObj = {
  [key:string]:string
}

export type HeaderWithSource = {
  source:string,
  headers:HeadersObj[]
}
export type HeadersObj = {
  key:string,
  value:string
}

export type ConfigFile = {
  version:ConfigVersion,
  path:string
  paths:{
    [key:string]:HeadersObj[]
  }
}

export type subConfigs = Omit<ConfigFile,'verison'>