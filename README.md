# Getting started

## Installation

> install : `npm i @onboardbase/nudgeer-safe # yarn`

> Usage

inside `next.config.js`

```js
import nudgeerSafe from '@onboardbase/nudgeer-safe'

const isDev = process.env.NODE_ENV !== 'production'

module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: nudgeerSafe({isDev})
      },
    ]
  },
}

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
import nudgeerSafe from '@onboardbase/nudgeer-safe'

const isDev = process.env.NODE_ENV !== 'production'

module.exports = {
  async headers() {
    return nudgeerSafe({includeConfig:true, isDev})
  },
}

```

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](issues).


## 📝 License

Copyright © 2023 [Onboardbase](https://github.com/onboardbase).<br />
This project is [MIT](LICENSE) licensed.
