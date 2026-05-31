import { defineConfig } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  fullyParallel: true,

  timeout: 30000,

  retries: process.env.CI ? 2 : 0,

  reporter: [
     ['html'],
     ['list'],
     ['allure-playwright']
  ],

  use: {
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    video: 'retain-on-failure'
  },

  projects: [

    {
      name: 'setup',

      testMatch: /auth\.setup\.ts/
    },

    {
      name: 'chromium',

      dependencies: ['setup'],

      use: {
        browserName: 'chromium',

        storageState:
          'storage/standard-user.json'
      }
    }
  ]
});