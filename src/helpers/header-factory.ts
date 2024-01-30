import { ConfigFile } from '../types'

export function extractValues(configFile:ConfigFile){
  const {path,paths} = configFile
  // later if there's a new version to append new thing, or might add the framework to instruct the lib to do smth else
  return {path,...paths}
}