const { test, expect } = require('@playwright/test');
const exp = require('constants');

test('Browser Context Playwright Test', async ({ browser }) => {
    const contextBrowser = await browser.newContext();
    const page = await contextBrowser.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

});

// In case of default browser, with no cookies, or configuration needed, playwright will create automatically.

test.only('Page Paywright Test', async ({ page }) => {
    await page.goto("https://www.google.co.in/");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
    
});