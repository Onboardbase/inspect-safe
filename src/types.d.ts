import {CONFIG_VERSION, FRAMEWORKS} from './helpers/constants'



export type Framework = { [K in FRAMEWORKS]: K };

type NudgeerSafeOptions = {
  includeConfig?:boolean
  path?:string
  framework: 'AstroJs' | 'NextJs';
}

export type ConfigVersion = typeof CONFIG_VERSION[number];


type SafeHeaders = {
  key:string
  value:string
}

type DefaultHeadersObj = {
  [key:string]:string
}

type HeaderWithSource = {
  source:string,
  headers:HeadersObj[]
}
type HeadersObj = {
  key:string,
  value:string
}

type ConfigFile = {
  version:ConfigVersion,
  path:string
  paths:{
    [key:string]:HeadersObj[]
  }
}

type subConfigs = Omit<ConfigFile,'verison'>