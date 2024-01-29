type NudgeerSafeOptions = {
  includeConfig?:boolean
  path:string
}

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
