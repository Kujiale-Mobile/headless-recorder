import pptrActions from './pptr-actions'
import Block from './Block'
import CodeGenerator from './CodeGenerator'

const importPuppeteer = `const puppeteer = require('puppeteer');\n`

const header = `const browser = await puppeteer.launch()
const page = await browser.newPage()`

const footer = `await browser.close()`

/**
 * TODO: launch初始化 viewport设置宽高
 */
const wrappedHeader = `(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: { width: 1440, height: 798 }
  })
  const page = await browser.newPage()
  page.waitForSelectorPlus = (selector, time = 10000) => Promise.race([
    page.waitForSelector(selector),
    page.waitForTimeout(time)
  ])
  \n`

const wrappedFooter = `
  await await page.screenshot({
    path: './output/${+new Date()}.png',
    type: 'png',
    fullPage: true
  });
  await browser.close()
})()`

export default class PuppeteerCodeGenerator extends CodeGenerator {
  constructor (options) {
    super(options)
    this._header = header
    this._wrappedHeader = wrappedHeader
    this._footer = footer
    this._wrappedFooter = wrappedFooter
  }

  generate (events) {
    return importPuppeteer + this._getHeader() + this._parseEvents(events) + this._getFooter()
  }

  _handleViewport (width, height) {
    return new Block(this._frameId, { type: pptrActions.VIEWPORT, value: `await ${this._frame}.setViewport({ width: ${width}, height: ${height} })` })
  }
}
