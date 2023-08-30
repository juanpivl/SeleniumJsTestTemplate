const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

function createDriver() {
    const options = new chrome.Options();
    options.addArguments('--start-maximized');

    const driver = new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();

    return driver;
}

async function closeDriver(driver) {
    await driver.quit();
}

const baseUrl = 'https://www.google.com';

module.exports = [createDriver,closeDriver,baseUrl];
