import { test } from '@playwright/test';

test('Save login state', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.context().storageState({ path: 'playwright/.auth/user.json' });
});
