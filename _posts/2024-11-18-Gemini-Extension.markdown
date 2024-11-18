---
layout: single
title:  "How to integrate Gemini into your extension?"
date:   2024-11-18 19:20:50 +0800
categories:
  - CS
  - Skills
tags:
  - Google
  - Gemini
---

### How to integrate Gemini into your extension?
Chrome Extensions do not support direct `import` in your **javascript** code. And its official [Gemini API samples](https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/functional-samples/ai.gemini-in-the-cloud) are confusing I think. So here is how I figure out how to make it. Your can also see my [Chrome Extension Time Guardian](https://github.com/Ghost04718/Time-Guardian).

#### Use webpack or bundle to build your project
1. Include this code script in your `package.json`.
```json
"scripts": {
    "build": "webpack --config webpack.config.js",
    "watch": "webpack --watch --config webpack.config.js"
  },
  "dependencies": {
    "@google/generative-ai": "^0.1.0"
  },
  "babel": {
    "presets": ["@babel/preset-env"]
  },
  "devDependencies": {
    "@babel/core": "^7.26.0",
    "@babel/preset-env": "^7.26.0",
    "babel-loader": "^9.2.1",
    "copy-webpack-plugin": "^11.0.0",
    "webpack": "^5.88.0",
    "webpack-cli": "^5.1.4"
  }
```

2. Put all your **source codes** in `src` folder (including `manifest.json` and your `image` folder if any).

3. Import Gemini.
```js
import { GoogleGenerativeAI } from '@google/generative-ai';
```

4. Add a `webpack.config.js` in your project.
```js
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
  mode: 'production',
  entry: {
    popup: './src/popup.js',
    background: './src/background.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'src/manifest.json', to: 'manifest.json' },
        { from: 'src/popup.html', to: 'popup.html' },
        { from: 'src/images', to: 'images' },
      ],
    }),
  ],
};
```

5. Run `npm install` and `npm run build`. Upload the new `dist` folder to your Chrome.

Now it is done!