# Getting started

## Install

To use `nudgeer-safe`,

```bash
yarn add @onboardbase/nudgeer-safe # npm i @onboardbase/nudgeer-safe
```

## Usage

Import the NudgeerSafe library in your nextjs project:

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

> Advanced Usage

Create a `nudgeer.json` in the root dir

```json
{
  "version":"1.0",
  "sources":{
    "source":"/api/*",
    "headers":{
      "Content-Type":"application/json"
    }
  },
  // For all routes
  "headers":{
    "Content-Type":"application/json"
  }
}
```

```js
/** @type {import('next').NextConfig} */
import nudgeerSafe from '@onboardbase/nudgeer-safe'

const nextConfig = {
  headers: async ()=> {return await nudgeerSafe({includeConfig:true, path:'/:path*'})}
  //... rest of config
};

module.exports = nextConfig;
```
