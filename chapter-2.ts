// Extracting type from typeof syntax
let asString = 'string'
let asNumber = 0
type PrimitiveUnion = typeof asString | typeof asNumber

const getSomething = () => ({
  foo: 'foo',
  bar: 1,
  baz: false,
})

const something = getSomething()
const target: typeof something = something

// Extracting json type
import * as json from './todo.json'
type jsonType = typeof json

// const assertion
const tuple = [false, 1, '2'] as const
const a = 'A' as const
let b = a
