import { ConfigFile, DefaultHeadersObj, HeaderWithSource, HeadersObj } from '../types'
import { defaultSecurityHeaders } from './default-headers';

export async function makeHeaderArray(configFile:ConfigFile):Promise<HeaderWithSource[]>{
  const {paths,path} = configFile
  // later if there's a new version to append new thing, or might add the framework to instruct the lib to do smth else
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

export async function makeHeadersObj(configFile:ConfigFile){
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

export async function makeDefaultHeadersObj(){
  let HeadersObject:DefaultHeadersObj={};
  const safeHeaders = defaultSecurityHeaders()
  safeHeaders.forEach(header=>{
    HeadersObject[header.key]=header.value
  })
  
  return HeadersObject
}