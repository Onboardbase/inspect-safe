import { validateConfigFile } from "./validation";

export function parseConfig(file:string){
  return import(file)
        .then((jsonData) => {
            const valid = validateConfigFile(jsonData.default)
            if(valid)
                return valid;
            throw new Error("Error in nudgeer.json file: "+valid)
        })
        .catch((error) => {
            throw error;
        });
}
