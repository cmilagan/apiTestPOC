import { DEFAULT_CATEGORY, DEFAULT_TAGS } from 'src/utils/static'
import { APIRequestContext } from 'playwright/test'

export default class Pet {
  readonly request: APIRequestContext

  constructor(request: APIRequestContext) {
    this.request = request
  }
  constructPetBody(petname: string, category?: object, tags?: Array<object>) {
    return {
      id: 0,
      category: category || DEFAULT_CATEGORY,
      name: petname,
      photoUrls: ['string'],
      tags: tags || DEFAULT_TAGS,
      status: 'available',
    }
  }

  deleteResponseBody(message: string) {
    return {
      code: 200,
      type: 'unknown',
      message: String(message),
    }
  }
}
