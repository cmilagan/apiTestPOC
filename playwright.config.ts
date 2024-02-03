import { defineConfig } from '@playwright/test'

export default defineConfig({
  use: {
    // All requests we send go to this API endpoint.
    baseURL: 'https://petstore.swagger.io/#/',
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
  reporter: 'list',
  testDir: './src/tests',
})
