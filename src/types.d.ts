import {CONFIG_VERSION} from './helpers/constants'

type NudgeerSafeOptions = {
  includeConfig?:boolean
  path:string
}

export type ConfigVersion = typeof CONFIG_VERSION[number];


type SafeHeaders = {
  key:string
  value:string
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
  paths:{
    [key:string]:HeadersObj
  }
  path:string
}