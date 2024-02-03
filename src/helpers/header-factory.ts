import { ConfigFile, DefaultHeadersObj, HeaderWithSource } from '../types'
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

  Object.entries(paths).forEach(([pathKey,pathValue])=>{
    //@ts-expect-error
    const headers = pathValue.headers
    HeadersObject[headers.key] = headers.value
  })
  const safeHeaders = defaultSecurityHeaders()
  safeHeaders.forEach(header=>{
    HeadersObject[header.key]=header.value
  })
  
  return HeadersObject
}