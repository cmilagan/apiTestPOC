import { expect } from 'playwright/test'
import { test } from 'src/lib/BaseTest'

test.describe('TC001 Test simple pet creation API', async () => {
  test('Create a new pet listing', async ({ request, pet }) => {
    const dogname = 'luna'
    const createNewPetResponse = await request.post(`/pet`, {
      data: pet.constructPetBody(dogname),
    })

    expect(createNewPetResponse.ok()).toBeTruthy()
    const responseJson = await createNewPetResponse.json()
    expect(responseJson).toContainEqual(
      expect.objectContaining({ name: dogname }),
    )
  })
})
