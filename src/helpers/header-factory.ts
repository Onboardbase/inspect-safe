/* eslint-disable @typescript-eslint/no-unused-vars */
import { ConfigFile, DefaultHeadersObj, HeaderWithSource, HeadersObj } from '../types'
import { defaultSecurityHeaders } from './default-headers';

export function makeHeaderArray(configFile:ConfigFile,path:string):HeaderWithSource[]{
  const constructedHeaders:HeaderWithSource[] = []
  const {paths, detach} = configFile
  if(!detach){
    const safeHeaders = defaultSecurityHeaders();
    constructedHeaders.push({source:path,headers:safeHeaders});
  }
  
  Object.entries(paths).forEach(([pathKey, pathValue]) => {
    constructedHeaders.push({
      source: pathKey,
      headers: pathValue['headers'],
    });
  });
  
  return constructedHeaders
}

export function makeHeadersObj(configFile:ConfigFile){
  const {paths, detach} = configFile
  const HeadersObject:DefaultHeadersObj={};

  if(!detach){
    const safeHeaders = defaultSecurityHeaders()
    safeHeaders.forEach(header=>{
    HeadersObject[header.key]=header.value
    })
  }
  

  Object.entries(paths).forEach(([_pathKey,pathValue])=>{
    const headers:HeadersObj[] = pathValue['headers']
    headers.forEach(header=>{
      HeadersObject[header.key] = header.value
    })
  })
  return HeadersObject
}

export function routeHeaders(configFile:ConfigFile,route:string){
  const {paths} = configFile
  const HeadersObject:DefaultHeadersObj={};

  Object.entries(paths).forEach(([pathKey,pathValue])=>{
    if(pathKey === route){
      const headers:HeadersObj[] = pathValue['headers']
      headers.forEach(header=>{
        HeadersObject[header.key] = header.value
      })
    }
  })
  return HeadersObject
}


export function makeDefaultHeadersObj(){
  const HeadersObject:DefaultHeadersObj={};
  const safeHeaders = defaultSecurityHeaders()
  safeHeaders.forEach(header=>{
    HeadersObject[header.key]=header.value
  })
  
  return HeadersObject
}
