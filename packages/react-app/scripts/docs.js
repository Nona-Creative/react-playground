const cq = require('@fullstackio/remark-cq')
const unified = require('unified')
const reParse = require('remark-parse')
const remarkStringify = require('remark-stringify')

// ------------------------------------
// render
// ------------------------------------

const renderMarkdown = (text, config) =>
  unified()
    .use(reParse)
    .use(remarkStringify)
    .use(cq, config)
    .process(text)

const fs = require('fs')
const path = require('path')
const Bluebird = require('bluebird')

const readFile = Bluebird.promisify(fs.readFile)

const render = async (source) => {
  const markup = await readFile(path.resolve(source), 'utf8')
  const result = (await renderMarkdown(markup, { root: __dirname })).contents
  console.log(result)
}

module.exports.render = render

// ------------------------------------
// hack CLI
// ------------------------------------

const args = process.argv.slice(2)
module.exports[args[0]](...args.slice(1))
