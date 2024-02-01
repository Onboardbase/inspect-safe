import { cosmiconfig } from "cosmiconfig";
import { validateConfigFile } from "./validation";

const explorer = cosmiconfig("nudgeer", {
    searchPlaces: ["nudgeer.json"],
  })


export async function getConfig(cwd:string) {
    const config = await getRawConfig(cwd)
    if (!config) {
      return null
    }
  
    return config
}


export async function getRawConfig(cwd:string) {
    try {
      const configResult = await explorer.search(cwd)
      if (!configResult) {
        return null
      }
  
      return validateConfigFile(configResult.config)
    } catch (error) {
      throw new Error(`Invalid configuration found in nudgeer.json.`)
    }
  }