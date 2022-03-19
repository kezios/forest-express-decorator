
const Collection = (collectionName: string) => {
  return function <T extends { new(...args: any[]): {} }>(constructor: T) {
      return class extends constructor {
        name = collectionName
      }
  }
}

export { Collection };
