const { Builder, Browser, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

;(async function example() {
  let driver = await new Builder().forBrowser(Browser.FIREFOX).build()
  try {
    // access website
    await driver.get('localhost:8080')
    // ensure title is as expected
    await driver.wait(until.titleIs('weather-app'), 5000)
    // wait until an element is loaded to proceed with tests
    await driver.wait(until.elementLocated(By.id('main_grid')), 5000)

    // ======== WEATHER CONFIGURATION ========
    
    // ensure settings toggle is found
    assert.ok(await driver.findElements(By.id('settings_toggle') > 0), 'Settings toggle not found')
    // enable settings modal
    await driver.findElement(By.id('settings_toggle')).click()
    // assert modal appears
    let modal = await driver.findElements(By.id('modal'))
    assert.ok(modal > 0, 'Settings modal not found')
    
  } finally {
    await driver.quit()
  }
})()