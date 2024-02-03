import { expect } from 'playwright/test'
import { test } from 'src/lib/BaseTest'
import { requestConfig } from 'src/utils/utils'

test.use(requestConfig)
test.describe('TC002 test Pet update, delete, get', async () => {
  const petId: number = 5 // NOTE hardcoded as Create, Put, Update dont actually make entries in DB so cannot test against created entry from test suite
  const petName: string = 'doggie'
  const updatedPetName: string = 'jeffery'

  // test setup can create test data dependencies here with other API(s)
  // for example create pet API
  test.beforeEach(async () => {})

  // perform any test cleanup so test data can be re-used without risk of unwanted duplicates & failed requests
  test.afterAll(async () => {})

  test('Test retrieving created pet', async ({ request, pet, baseURL }) => {
    const retrievePetResponse = await request.get(`${baseURL}/pet/${petId}`)

    expect(retrievePetResponse.ok()).toBeTruthy()

    const responseJson = await retrievePetResponse.json()
    expect(responseJson).toEqual(
      pet.constructPetBody(petName, petId, undefined, undefined, 'string'),
    )
  })

  test('Test updating created pet', async ({ request, pet, baseURL }) => {
    const retrievePetResponse = await request.put(`${baseURL}/pet`, {
      data: pet.constructPetBody(
        updatedPetName,
        petId,
        undefined,
        undefined,
        'string',
      ),
    })
    expect(retrievePetResponse.ok()).toBeTruthy()

    const responseJson = await retrievePetResponse.json()
    expect(responseJson).toEqual(
      pet.constructPetBody(
        updatedPetName,
        petId,
        undefined,
        undefined,
        'string',
      ),
    )
  })

  test('Test deleting created pet', async ({ request, pet, baseURL }) => {
    const retrievePetResponse = await request.delete(
      `${baseURL}/pet/${petId}`,
      {
        data: pet.constructPetBody(updatedPetName),
      },
    )
    expect(retrievePetResponse.ok()).toBeTruthy()

    const responseJson = await retrievePetResponse.json()
    expect(responseJson).toEqual(pet.deleteResponseBody(String(petId)))
  })
})
