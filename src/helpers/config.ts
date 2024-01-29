export function parseConfig(file:string){
  return import(file)
        .then((jsonData) => {
            console.log(jsonData.default)
            return jsonData.default;
        })
        .catch((error) => {
            throw error;
        });
}

export function headersFactory(){
    
}

export function headersFactoryWithPaths(){
    
}