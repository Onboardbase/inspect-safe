import { ConfigFile, DefaultHeadersObj, HeaderWithSource, HeadersObj } from '../types'
import { defaultSecurityHeaders } from './default-headers';

export function makeHeaderArray(configFile:ConfigFile):HeaderWithSource[]{
  const {paths,path} = configFile

  const safeHeaders = defaultSecurityHeaders();
  const constructedHeaders:HeaderWithSource[] = [
    {source:path,headers:safeHeaders}
  ]
  Object.entries(paths).forEach(([pathKey, pathValue]) => {
    constructedHeaders.push({
      source: pathKey,
      //@ts-expect-error
      headers: pathValue.headers,
    });
  });
  
  return constructedHeaders
}

export function makeHeadersObj(configFile:ConfigFile){
  const {paths} = configFile
  let HeadersObject:DefaultHeadersObj={};

  const safeHeaders = defaultSecurityHeaders()
  safeHeaders.forEach(header=>{
    HeadersObject[header.key]=header.value
  })
  //@ts-ignore
  Object.entries(paths).forEach(([pathKey,pathValue])=>{
    //@ts-expect-error
    const headers:HeadersObj[] = pathValue.headers
    headers.forEach(header=>{
      HeadersObject[header.key] = header.value
    })
    
  })
  
  
  return HeadersObject
}

export function makeDefaultHeadersObj(){
  let HeadersObject:DefaultHeadersObj={};
  const safeHeaders = defaultSecurityHeaders()
  safeHeaders.forEach(header=>{
    HeadersObject[header.key]=header.value
  })
  
  return HeadersObject
}
