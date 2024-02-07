import { ConfigVersion } from "../types";

export const CONFIG_VERSION = ['1.0'] as const;

export const CURRENT_CONFIG_VERSION:ConfigVersion = CONFIG_VERSION[0]

export enum FRAMEWORKS{
  ASTROJS='AstroJS',
  NEXTJS='NextJS',
  NUXTJS='NuxtJS'
} 