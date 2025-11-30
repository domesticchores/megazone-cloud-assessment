const { Builder, Browser, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')
require('dotenv').config()

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function test_current_weather(driver) {
    // ensure current weather widget exists
    const cw_widget = await driver.findElements(By.id('current_weather'));
    assert.ok(cw_widget.length > 0, 'Current weather widget not found')
    console.log(await driver.getPageSource())
    // check location is correct
    const location = await driver.findElement(By.id('current_location')).getText()
    assert.ok(location != '', `Location should not be empty. GIVEN: ${location}`)
}

async function test_uv_index(driver) {
    // ensure UV index widget exists
    const uv_widget = await driver.findElements(By.id('current_weather'));
    assert.ok(uv_widget.length > 0, 'UV index widget not found')
    // check if UV index text exists
    const index = await driver.findElement(By.id('uv_text')).getText()
    assert.ok(index.includes("UV Index"), `UV Index widget does not contain correct text. GIVEN: ${index}`)
}

async function test_wind_direction(driver) {
    // ensure Wind Direction widget exists
    const wd_widget = await driver.findElements(By.id('current_weather'));
    assert.ok(wd_widget.length > 0, 'Wind Direction widget not found')
    // check if Wind Direction text exists
    const actual = await driver.findElement(By.id('wd_text')).getText()
    assert.ok(actual.includes("MPH"), `Wind Direction widget does not contain correct text. GIVEN: ${actual}`)
}

async function runTests() {
  // set the driver depending on if running locally or running off CI
  let driver = null;
  if (process.env.IS_CI === "true") {
    driver = await new Builder().forBrowser(Browser.FIREFOX).usingServer("http://localhost:4444/wd/hub").build()
  } else {
    driver = await new Builder().forBrowser(Browser.FIREFOX).build()
  }
  // ensure driver is running, error if not
  if (!driver) {
    throw new Error("Failed to initialize WebDriver")  
    }
  
  // begin testing
  try {
    // ======== INITIALIZATION ========
    console.log("Begin selenium testing")
    // access website
    await driver.get(process.env.FRONTEND)
    // ensure title is as expected
    await driver.wait(until.titleIs('weather-app'), 5000)
    // wait until an element is loaded to proceed with tests
    await driver.wait(until.elementLocated(By.id('main_grid')), 5000)


    // implicit timer to ensure data is loaded
    await sleep(2500)

    // ======== CURRENT WEATHER ========
    await test_current_weather(driver)

    // ======== UV INDEX ========
    await test_uv_index(driver)

    // ======== WIND DIRECTION ========
    await test_wind_direction(driver)

    // ======== WEATHER CONFIGURATION ========
    
    // ensure settings toggle is found
    assert.ok((await driver.findElements(By.id('settings_toggle'))).length > 0, 'Settings toggle not found')
    // enable settings modal
    await driver.findElement(By.id('settings_toggle')).click()
    // assert modal appears
    let modal = await driver.findElements(By.id('modal'))
    assert.ok(modal.length > 0, 'Settings modal not found')
    
  } catch (error) {
    console.error("Error when running tests:", error.message);
    console.error(error.stack);
    throw new Error(error.message)
  } finally {
    await driver.quit()
  }
}

runTests()