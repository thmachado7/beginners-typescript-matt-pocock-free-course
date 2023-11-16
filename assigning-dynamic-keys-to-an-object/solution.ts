import { it } from 'vitest'

const createCache = () => {
  const cache: Record<string, string> = {}

  const add = (id: string, value: string) => {
    cache[id] = value
  }

  const remove = (id: string) => {
    delete cache[id]
  }

  return {
    cache,
    add,
    remove,
  }
}

it('Should add values to the cache', () => {
  const cache = createCache()
})
