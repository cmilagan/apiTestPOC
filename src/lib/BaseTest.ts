/* eslint no-empty-pattern: 0 */ // --> OFF
import { test as baseTest } from '@playwright/test'
import Pet from 'src/endpointObject/Pet'
import Store from 'src/endpointObject/Store'

export const test = baseTest.extend<{
  pet: Pet
  store: Store
}>({
  pet: async ({}, use) => {
    await use(new Pet())
  },
  store: async ({}, use) => {
    await use(new Store())
  },
})
