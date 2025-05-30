import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.gosuslugi.ru/');
  let title = await page.title();
  console.log(`title = ${title}`);
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Портал государственных услуг Российской Федерации");
  await expect(page.getByRole("button", {name: "Войти"})).toBeVisible();
  await (page.getByRole("button", {name: "Войти"})).click();
  await expect(page).toHaveURL("https://esia.gosuslugi.ru/login/");
  await expect(page.getByRole("button", {name: " Войти ", exact: true})).toBeVisible();
  await page.getByRole("button", {name: " Войти ", exact: true}).click();
  await expect(page.getByRole("button", {name: " Восстановить " })).toBeVisible(); 
});


