import { validateConfigFile } from "./validation";

export function parseConfig(file:string){
  return import(file)
        .then((jsonData) => {
            console.log(jsonData.default)
            console.log(validateConfigFile(jsonData.default))
            return jsonData.default;
        })
        .catch((error) => {
            throw error;
        });
}

export function headersFactory(){
    throw new Error('not Impelemented yet')
}

export function headersFactoryWithPaths(){    
    throw new Error('not Impelemented yet')
}

parseConfig('../../nudgeer.json')