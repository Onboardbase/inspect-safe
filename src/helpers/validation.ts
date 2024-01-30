import {z} from 'zod'
import { CONFIG_VERSION } from './constants';


const headerSchema = z.object({
  key: z.string(),
  value: z.string(),
});

const pathSchema = z.object({
  headers: z.array(headerSchema),
});

const configSchema = z.object({
  verison: z.enum(CONFIG_VERSION),
  paths: z.record(pathSchema),

});

export function validateConfigFile(object:JSON){
  const validate = configSchema.parse(object)
  return validate
}