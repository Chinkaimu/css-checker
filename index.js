#!/usr/bin/env node
const glob = require('tiny-glob');
const fs = require('fs').promises;

(async function () {
  let paths = await glob('src/**/*.{css}')

  for (const path of paths) {
    const content = await fs.readFile(path, { encoding: 'utf-8' });

    console.log(content)
  }
})();

