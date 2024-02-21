# Nudgeer Safe

One-click security headers for SSR frameworks

# Install the package

```Text npm
npm i @onboardbase/nudgeer-safe
```
```Text yarn
yarn add @onboardbase/nudgeer-safe
```

# NextJS

In `NextJS` configuration file

```js nextjs.config.js
/** @type {import('next').NextConfig} */
import NudgeerSafe from '@onboardbase/nudgeer-safe'

const nextConfig = {
  headers: async ()=> {
    return await nudgeerSafe({includeConfig:true,path:"/*"}).next()
  }
  //... rest of config
};

module.exports = nextConfig;
```

# NuxtJS

```ts nuxt.config.ts
// https://nuxt.com/docs/api/configuration/nuxt-config
import NudgeerSafe from '@onboardbase/nudgeer-safe'
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules:{
    '/**':{
      headers: new NudgeerSafe().nuxt()
    },
  }
})

```

# AstroJS

```js astro.config.mjs
import { defineConfig } from 'astro/config';
import node from '@astrojs/node'
import tailwind from "@astrojs/tailwind";
import NudgeerSafe from '@onboardbase/nudgeer-safe'

const headers =  new NudgeerSafe().astro()

export default defineConfig({
  output:'server',
  server:{
    headers: headers
  },
  adapter:node({
    mode: 'standalone',
  }),
  integrations: [tailwind()]
});
```
For more frameworks [see docs](https://docs.nudgeer.com)

> Advanced Usage

Create a `nudgeer.json` in the root directory

```json
{
  "version":"1.0",
  "detech":true, // default false
  "path":"/:path*",
  "paths":{
    "/:path*":{
      "headers":[
        {
          "key":"content-security-policy",
          "value":"default-src 'self'"
        },
        {
          "key":"referrer-policy",
          "value":"origin"
        },
        {
          "key":"x-content-type-options",
          "value":"nosniff"
        }
      ]
    },
    "/:api*":{
      "headers":[
        {
          "key":"content-security-policy",
          "value":"default-src 'self'"
        },
        {
          "key":"referrer-policy",
          "value":"origin"
        },
        {
          "key":"x-content-type-options",
          "value":"nosniff"
        }
      ]
    }
  }
}

```

### Supported

- [x] NextJs
- [x] AstroJs
- [x] NuxtJs
