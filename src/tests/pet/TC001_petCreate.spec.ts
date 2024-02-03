import { expect } from 'playwright/test'
import { test } from 'src/lib/BaseTest'
import { requestConfig } from 'src/utils/utils'

test.use(requestConfig)
test.describe('TC001 Test simple pet creation API', async () => {
  test('Create a new pet listing', async ({ request, pet, baseURL }) => {
    const dogname = 'luna'
    const createNewPetResponse = await request.post(`${baseURL}/pet`, {
      data: pet.constructPetBody(dogname),
    })

    expect(createNewPetResponse.ok()).toBeTruthy()
    const responseJson = await createNewPetResponse.json()
    expect(responseJson).toEqual(expect.objectContaining({ name: dogname }))
  })
})
