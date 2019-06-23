const webdriverio = require('webdriverio');
const options = { desiredCapabilities: { browserName: 'chrome'} };
const client = webdriverio.remote(options);
const assert = require('assert');
// //.click('"header-topline__user-link link-dashed"')
// client.init().url('https://rozetka.com.ua/ua/')
//     .end();