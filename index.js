#!/usr/bin/env node
const glob = require('tiny-glob');

(async function () {
  let files = await glob('src/**/*.{css}')
  console.log(files)
})();
