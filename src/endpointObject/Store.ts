export default class Store {
  constructOrderBody(petId: number, quantity: number) {
    return {
      id: 0,
      petId: petId,
      quantity: quantity,
      shipDate: '2024-02-03T01:43:29.373Z', // Can implement a custom function in utils.ts to get a dynamic shipdate
      status: 'placed',
      complete: true,
    }
  }
}
