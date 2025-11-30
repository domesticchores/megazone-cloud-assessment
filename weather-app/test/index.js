const { Builder, Browser, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

async function runTests() {
  let driver = await new Builder().forBrowser(Browser.FIREFOX).build()
  try {
    // ======== INITIALIZATION ========

    // access website
    await driver.get('localhost:8080')
    // ensure title is as expected
    await driver.wait(until.titleIs('weather-app'), 5000)
    // wait until an element is loaded to proceed with tests
    await driver.wait(until.elementLocated(By.id('main_grid')), 5000)
    // implicit timer to ensure data is loaded
    await driver.manage().getTimeouts({implicit:5000})

    // ======== CURRENT WEATHER ========

    // ensure current weather widget exists
    const cw_widget = await driver.findElements(By.id('current_weather'));
    assert.ok(cw_widget.length > 0, 'Current weather widget not found')
    // check location is correct
    const location = await driver.findElement(By.id('current_location')).getText()
    assert.ok(location === "Rochester", `Location does not match default data. GIVEN: ${location} EXPECTED: Rochester`)

    // ======== UV INDEX ========

    // ensure uv index widget exists
    const uv_widget = await driver.findElements(By.id('current_weather'));
    assert.ok(cw_widget.length > 0, 'Current weather widget not found')
    // check location is correct
    const uv_index = await driver.findElement(By.id('current_location')).getText()
    assert.ok(location === "Rochester", "Location does not match default data")



    // ======== WEATHER CONFIGURATION ========
    
    // ensure settings toggle is found
    assert.ok((await driver.findElements(By.id('settings_toggle'))).length > 0, 'Settings toggle not found')
    // enable settings modal
    await driver.findElement(By.id('settings_toggle')).click()
    // assert modal appears
    let modal = await driver.findElements(By.id('modal'))
    assert.ok(modal.length > 0, 'Settings modal not found')
    
  } finally {
    await driver.quit()
  }
}

runTests()