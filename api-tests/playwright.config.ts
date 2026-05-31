import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();
export default defineConfig({
  testDir: './tests',

  timeout: 30000,

  retries: process.env?.CI ? 2 : 0,
  

  reporter: [
    ['html'],
    ['list']
  ],

  use: {
    headless: true,

    screenshot: 'only-on-failure',

    trace: 'retain-on-failure',

    video: 'retain-on-failure'
  }
});