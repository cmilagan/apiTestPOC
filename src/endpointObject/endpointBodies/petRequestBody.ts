import { DEFAULT_CATEGORY, DEFAULT_TAGS } from 'src/utils/static'
export class PetRequestBodies {
  protected static addPetBody(
    petname: string,
    category: object,
    tags: Array<object>,
  ) {
    return {
      id: 0,
      category: category || DEFAULT_CATEGORY,
      name: petname,
      photoUrls: ['string'],
      tags: tags || DEFAULT_TAGS,
      status: 'available',
    }
  }
}
