<h1 align="center">Welcome to typescript_template_2 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

## Install

```sh
npm install
```

## Usage

```sh
npm run start
```

## Run tests

```sh
npm run test
```

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_


npm init -y

npm i -d typescript @biomejs/biome tsx  @types/node @tsconfig/node24


    "dev": "tsx watch --env-file=.env src/index.ts",
    "build": "tsc",
    "start": "npm run rm && npm run build && node --env-file=.env dist/index.js",
    "lint": "biome lint src/",
    "format": "biome format src/ --write",
    "check": "biome check src/",
    "typecheck": "tsc --noEmit",
    "rm": "rm -rf ./dist"

npx tsc --init -- optional_v1

npx tsconfig.json -- optional_v2

v_3:
{
  "extends": "@tsconfig/node24/tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src",
    "forceConsistentCasingInFileNames": true,
    "types": ["node"]
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}

npx readme-md-generator -y

npx gitignore node

code biome.json

{
  "$schema": "https://biomejs.dev",
  "vcs": {
    "enabled": true,
    "clientKind": "git",
    "useIgnoreFile": true
  },
  "files": {
    "ignoreUnknown": false,
    "includes": ["src/**/*"]
  },
  "formatter": {
    "enabled": true,
    "formatWithErrors": false,
    "indentStyle": "space",
    "indentWidth": 2,
    "lineWidth": 150
  },
  "linter": {
    "enabled": true,
    "rules": {
      "preset": "recommended",
      "suspicious": {
        "noVar": "error"
      },
      "style": {
        "useConst": "error"
      }
    }
  },
  "javascript": {
    "formatter": {
      "quoteStyle": "single",
      "trailingCommas": "all",
      "semicolons": "always"
    }
  }
}
