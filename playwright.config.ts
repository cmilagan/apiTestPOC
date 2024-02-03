import { defineConfig } from '@playwright/test'

export default defineConfig({
  reporter: [
    ['list', { printSteps: true }],
    ['html', { open: 'true', outputFolder: './results' }],
  ],
  outputDir: 'results',
  testDir: '.',
  testMatch: /.*\.spec.ts/,
  // globalSetup: 'src/globalSetup.ts'
})
