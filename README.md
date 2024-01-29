# Getting started

## Installation

> install : `npm i @onboardbase/nudgeer-safe # yarn`

> Usage

inside `next.config.js`

```js
/** @type {import('next').NextConfig} */
import nudgeerSafe from '@onboardbase/nudgeer-safe'

const nextConfig = {
  headers: await nudgeerSafe(),
  //... rest of config
};

module.exports = nextConfig;

```

> Advanced Usage

create a `nudgeer.json` in root dir

```json
{
  "version":"1.0",
  "path":{
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
  headers: await nudgeerSafe({includeConfig:true}),
  //... rest of config
};

module.exports = nextConfig;

```

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](issues).


## 📝 License

Copyright © 2023 [Onboardbase](https://github.com/onboardbase).<br />
This project is [MIT](LICENSE) licensed.
