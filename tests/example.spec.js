import userData from "../protected_data/protected_data.js";
// @ts-check
const { test, expect } = require('@playwright/test');

test('Client app login', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill(userData.userEmail);
    await page.locator("#userPassword").fill(userData.userPassword);
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');
    await page.pause();
});