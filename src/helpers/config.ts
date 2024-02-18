import { cosmiconfigSync } from "cosmiconfig";
import { ConfigFile } from "../types";
import { validateConfigFile } from "./validation";

const explorer = cosmiconfigSync("nudgeer", {
  searchPlaces: ["nudgeer.json"],
});

export function getRawConfig(cwd: string): ConfigFile | null{
  try {
    const configResult = explorer.search(cwd);
    if (!configResult) {
      return null;
    }
  
    return validateConfigFile(configResult.config as ConfigFile) as ConfigFile;
  } catch (error) {
    throw new Error(`Invalid configuration found in nudgeer.json.`);
  }
}
