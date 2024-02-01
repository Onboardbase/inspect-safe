# Nudgeer Safe

One-click security headers for SSR frameworks

## Install

To use `nudgeer-safe`,

```bash
yarn add @onboardbase/nudgeer-safe # npm i @onboardbase/nudgeer-safe
```

## Usage

Import the NudgeerSafe library in your `nextjs` project:

> inside `next.config.js`

```js
/** @type {import('next').NextConfig} */
import nudgeerSafe from '@onboardbase/nudgeer-safe'

const nextConfig = {
  headers: async ()=> {return await nudgeerSafe({path:'/:path*'})}
  //... rest of config
};

module.exports = nextConfig;

```
For more frameworks [see docs](https://docs.nudgeer.com)

> Advanced Usage

Create a `nudgeer.json` in the root dir

```json
{
  "version":"1.0",
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

```js
/** @type {import('next').NextConfig} */
import nudgeerSafe from '@onboardbase/nudgeer-safe'

const nextConfig = {
  headers: async ()=> {return await nudgeerSafe({includeConfig:true})}
  //... rest of config
};

module.exports = nextConfig;
```

### Roadmap
Support
- [x] NextJs v0.0.1
- [ ] NodeJs v0.0.2
- [ ] AstroJs v0.0.2
- [ ] NuxtJs  v0.0.3
- [ ] GatsbyJs v0.0.4
