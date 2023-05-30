const {remote} = require('webdriverio');

const capabilities = {
  platformName: 'Android',
  'appium:automationName': 'UiAutomator2',
  'appium:deviceName': 'Android',
  'appium:app': 'android/app/build/outputs/apk/debug/app-debug.apk',
};

const wdOpts = {
  host: process.env.APPIUM_HOST || 'localhost',
  port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
  logLevel: 'info',
  capabilities,
};

async function runTest() {
  const driver = await remote(wdOpts);
  try {
    const tab2El = await driver.$('//*[@text="Tab 2"]');
    await tab2El.click();

    const tab3El = await driver.$('//*[@text="Tab 3"]');
    await tab3El.click();

  } finally {
    await driver.deleteSession();
  }
}

runTest().catch(console.error);