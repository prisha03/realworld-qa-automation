import { test, expect } from '@playwright/test';

test('User can add an item to the cart', async ({ page }) => {
  await page.goto('/inventory.html');

  await page.getByText('Sauce Labs Backpack').click();
  await page.getByRole('button', { name: 'Add to cart' }).click();

  await page.locator('.shopping_cart_link').click();

  await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
});

