import { expect } from 'playwright/test'
import { test } from 'src/lib/BaseTest'

test.describe('TC002 test Pet update, delete, get', async () => {
  let petId: number
  const petName: string = 'luna'
  const updatedPetName: string = 'jeffery'

  test.beforeEach(async ({ request, pet }) => {
    const createPetResponse = await request.post(`/pet`, {
      data: pet.constructPetBody(petName),
    })
    const jsonResponse = await createPetResponse.json()
    petId = jsonResponse.id
  })

  test('Test retrieving created pet', async ({ request, pet }) => {
    const retrievePetResponse = await request.get(`/pet/${petId}`)
    expect(retrievePetResponse.ok()).toBeTruthy()

    const responseJson = await retrievePetResponse.json()
    expect(responseJson).toContainEqual(
      expect.objectContaining(pet.constructPetBody(petName)),
    )
  })

  test('Test updating created pet', async ({ request, pet }) => {
    const retrievePetResponse = await request.put(`/pet/${petId}`, {
      data: pet.constructPetBody(updatedPetName),
    })
    expect(retrievePetResponse.ok()).toBeTruthy()

    const responseJson = await retrievePetResponse.json()
    expect(responseJson).toContainEqual(
      expect.objectContaining(pet.constructPetBody(updatedPetName)),
    )
  })

  test('Test deleting created pet', async ({ request, pet }) => {
    const retrievePetResponse = await request.delete(`/pet/${petId}`, {
      data: pet.constructPetBody(updatedPetName),
    })
    expect(retrievePetResponse.ok()).toBeTruthy()

    const responseJson = await retrievePetResponse.json()
    expect(responseJson).toContainEqual(
      expect.objectContaining(pet.deleteResponseBody(String(petId))),
    )
  })
})
