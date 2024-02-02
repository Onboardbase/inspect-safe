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
  headers: async ()=> {
    return await nudgeerSafe({path:'/:path*'})
  }
  //... rest of config
};

module.exports = nextConfig;

```
For more frameworks [see docs](https://docs.nudgeer.com)

> Advanced Usage

Create a `nudgeer.json` in the root directory

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
  headers: async ()=> {
    return await nudgeerSafe({includeConfig:true})
  }
  //... rest of config
};

module.exports = nextConfig;
```

### Roadmap
Support
- [x] NextJs
- [ ] NodeJs
- [ ] AstroJs
- [ ] NuxtJs
- [ ] GatsbyJs
- [ ] Nestjs
