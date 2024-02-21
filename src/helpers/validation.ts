import { z } from 'zod';
import { CONFIG_VERSION } from './constants';

const headerSchema = z.object({
  key: z.string(),
  value: z.string(),
});

const pathSchema = z.object({
  headers: z.array(headerSchema),
});

const configSchema = z.object({
  version: z.literal(CONFIG_VERSION[0]),
  detach: z.boolean().default(false),
  paths: z.record(pathSchema),
});

export function validateConfigFile(object: Record<string, unknown>) {
  return configSchema.parse(object);
}
