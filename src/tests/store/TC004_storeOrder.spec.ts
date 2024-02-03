import { expect } from 'playwright/test'
import { test } from 'src/lib/BaseTest'
import { requestConfig } from 'src/utils/utils'

test.use(requestConfig)
test.describe('TC004 Test store order', async () => {
  test('Order a pet', async ({ request, store, baseURL }) => {
    const petId = 5
    const getInventoryResponse = await request.post(`${baseURL}/store/order`, {
      data: store.constructOrderBody(petId, 1),
    })
    expect(getInventoryResponse.ok()).toBeTruthy()
    const responseJson = await getInventoryResponse.json()
    expect(responseJson).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        petId: 5,
        quantity: 1,
      }),
    )
  })
})
