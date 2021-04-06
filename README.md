# Kool Recorder

## 📝 Overview

快速生成测试用例的 chrome 插件。有别于 headless recorder，kool recorder 会记录用户鼠标的实际行为（move/down/up）从而实现还原在 canvas 的操作。

<br>

## 🏗️ What you can do?

- Records clicks and type events.
- Add waitForNavigation, setViewPort and other useful clauses.
- Generates a Puppeteer / Playwright script.
- Shows which events are being recorded.
- Copy to clipboard.
- Offers configuration options.
- Allows `data-id` configuration for element selection.

> Note: we only record certain events. See `dom-events-to-record.js` in the code-generator folder for which events. This collection will be expanded in future releases.

<br>

## 🔧 How to use?

- Click the icon and hit Record.
- Hit <kbd>tab</kbd> after you finish typing in an `input` element.
- Click on links, inputs and other elements.
- Wait for full page load on each navigation. The icon will switch from ![](src/images/icon_rec.png) to ![](src/images/icon_wait.png) to indicate it is ready for more input from you.
- Click Pause when you want to navigate without recording anything. Hit Resume to continue recording.

<br>

## 🖥️ Development

1. Open the terminal and clone the project: `$ git clone https://github.com/Kujiale-Mobile/kool-recorder`
1. Access project directory and use npm to install dependencies: `$ cd kool-recorder && npm i`
1. Use the build npm script to build it: `$ npm run dev`
1. Open chrome and navigate to extensions page using this URL: `chrome://extensions`
1. Make sure 'Developer mode' is enabled
1. Click "Load unpacked extension" button, browse the `kool-recorder/build` directory and select it

<br>

## 🚀 Release

1. 支持 mousemove/mousedown/mouseup 事件
