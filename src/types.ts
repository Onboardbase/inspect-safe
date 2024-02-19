import {CONFIG_VERSION} from './helpers/constants'



export type NudgeerSafeOptions = {
  includeConfig?:boolean
  path?:string
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
  paths:{
    [key:string]:HeadersObj[]
  }
}

export type subConfigs = Omit<ConfigFile,'verison'>