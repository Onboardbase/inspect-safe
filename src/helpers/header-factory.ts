import { ConfigFile, HeaderWithSource } from '../types'

export async function makeHeaderObj(configFile:ConfigFile):Promise<HeaderWithSource[]>{
  const {paths} = configFile
  // later if there's a new version to append new thing, or might add the framework to instruct the lib to do smth else
  const constructedHeaders:HeaderWithSource[] = []

  Object.entries(paths).forEach(([pathKey, pathValue]) => {
    constructedHeaders.push({
      source: pathKey,
      //@ts-expect-error
      headers: pathValue.headers,
    });
  });
  
  return constructedHeaders
}

