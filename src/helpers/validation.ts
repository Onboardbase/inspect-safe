import {z} from 'zod'
import { CONFIG_VERSION } from './constants';


const headerSchema = z.object({
  key: z.string(),
  value: z.string(),
});

const pathSchema = z.object({
  headers: z.array(headerSchema),
});

export const configSchema = z.object({
  version: z.enum(CONFIG_VERSION),
  paths: z.record(pathSchema),
  path:z.string(),
  headers:z.array(headerSchema)
});

export function validateConfigFile(object:JSON){
  return configSchema.parse(object)
}