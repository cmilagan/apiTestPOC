import { DEFAULT_CATEGORY, DEFAULT_TAGS } from 'src/utils/static'

export default class Pet {
  constructPetBody(
    petname: string,
    petId?: number,
    category?: object,
    tags?: Array<object>,
    status?: string,
  ) {
    return {
      id: petId || 0,
      category: category || DEFAULT_CATEGORY,
      name: petname,
      photoUrls: ['string'],
      tags: tags || DEFAULT_TAGS,
      status: status || 'available',
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
