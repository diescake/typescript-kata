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

// Extracting child's union types
type TupleToUnion<T> = T extends (infer I)[] ? I : never
type FruitsTuple = ['banana', 'apple', 'orange', number]
type FruitsUnion = TupleToUnion<FruitsTuple>

type MapToUnion<T> = T extends { [k: string]: infer I } ? I : never
type FruitsMap = {
  banana: 'banana',
  apple: 'apple',
  orange: 'orange',
}

type FruitsUnion2 = MapToUnion<FruitsMap>

// Extracting a compatible type
type FruitsMap2 = {
  banana: { name: 'banana', price: number }
  apple: { name: 'apple', price: number }
  orange: { name: 'orange' }
}

// type PickedFruits = PickUp<FruitsMap, { price: numer }>
