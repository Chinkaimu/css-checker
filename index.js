#!/usr/bin/env node
const glob = require('tiny-glob');
const fs = require('fs').promises;
const postcss = require('postcss');

(async function () {
  let paths = await glob('code-projects/**/*.{css}')
  let checkResult = null

  const readPromises = []
  for (const path of paths) {
    // add path at callback
    readPromises.push(fs.readFile(path, { encoding: 'utf-8' }).then(content => ({ path, content })));
  }
  const fileContents = await Promise.all(readPromises)

  const checkPromises = []
  for (const { path, content } of fileContents) {
    checkPromises.push(checkOneFile(path, content))
  }
  checkResult = await Promise.all(checkPromises)

  console.log(checkResult)
})();

async function checkOneFile (path, content) {
  return new Promise((resolve, reject) => {
    const nodes = postcss.parse(content).nodes
    if (!nodes) {
      reject()
    }
    const data = {}
    data[path] = 'pass the check'

    for (const node of nodes) {
      const selector = node.selector
      if (selector && !selector.startsWith('.') && !selector.startsWith('#')) {
        const start = node.source.start
        data[path] = `there is tag selector in ${start.line}:${start.column}`
      }
    }

    resolve(data)
  })
}

