import { ConfigFile, HeaderWithSource } from '../types'

export function makeHeaderObj(configFile:ConfigFile){
  const {path,paths,headers} = configFile
  // later if there's a new version to append new thing, or might add the framework to instruct the lib to do smth else
  const constructedHeaders:HeaderWithSource[] = [
    {
      source:path,
      headers:headers
    }
  ]

  Object.entries(paths).forEach(([pathKey, pathValue]) => {
    constructedHeaders.push(
      {
        source:pathKey,
        headers:[pathValue]
      }
    )
  });
  return constructedHeaders
}

