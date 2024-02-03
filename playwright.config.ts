import { defineConfig } from '@playwright/test'

export default defineConfig({
  use: {
    // All requests we send go to this API endpoint.
    baseURL: process.env.BASE_URL || 'https://petstore.swagger.io/#/',
    extraHTTPHeaders: {
      // We set this header per GitHub guidelines.
      Accept: 'application/json',
      // Add authorization token to all requests.
      // Assuming personal access token available in the environment.
      //   Authorization: `token ${process.env.API_TOKEN}`,
    },
  },
  timeout: 30000,
  globalTimeout: 600000,
  reporter: [
    ['list', { printSteps: true }],
    ['html', { open: 'never', outputFodler: './results' }],
  ],
  testDir: './src/tests',
  globalSetup: './src/globalSetup.ts',
})
