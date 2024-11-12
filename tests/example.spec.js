import userData from "../protected_data/protected_data.js";
// @ts-check
const { test, expect } = require('@playwright/test');

test('Client app login', async ({ page }) => {
    const products = page.locator(".card-body");
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill(userData.userEmail);
    await page.locator("#userPassword").fill(userData.userPassword);
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');
    const titles = await page.locator(".card-body b").allTextContents();
    // console.log(titles);
    const count = await products.count();
    for(let i= 0; i < count; i++) {
        if(await products.nth(i).locator("b").textContent() === "ZARA COAT 3") {
            await products.nth(i).locator("text= Add To Cart").click();
            break;
        }
    }
    await page.pause();
});