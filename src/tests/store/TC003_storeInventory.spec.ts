import { expect } from 'playwright/test'
import { test } from 'src/lib/BaseTest'
import { requestConfig } from 'src/utils/utils'

test.use(requestConfig)
test.describe('TC003 Test store inventory retrieval', async () => {
  test('Retrieve stores current inventory', async ({ request, baseURL }) => {
    const getInventoryResponse = await request.get(`${baseURL}/store/inventory`)
    expect(getInventoryResponse.ok()).toBeTruthy()
    const responseJson = await getInventoryResponse.json()
    expect(responseJson).toEqual(
      expect.objectContaining({
        sold: expect.any(Number),
        string: expect.any(Number),
        unavailable: expect.any(Number),
      }),
    )
  })
})
