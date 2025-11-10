import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './playwright/tests',
  use: {
    headless: false,
    baseURL: 'https://www.saucedemo.com/',
    storageState: 'playwright/.auth/user.json', // ✅ use saved login
  },
  projects: [
    {
      name: 'setup-login',
      testMatch: /.*setup-login\.spec\.js/, // ✅ runs login FIRST
    },
    {
      name: 'ui-tests',
      dependencies: ['setup-login'], // ✅ UI runs AFTER login
      testMatch: [
        /.*add-to-cart\.spec\.js/,
        /.*checkout\.spec\.js/,
      ],
      use: {
        storageState: 'playwright/.auth/user.json', // ✅ ensures logged-in
      }
    }
  ]
});
