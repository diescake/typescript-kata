type User = AppUser | ServiceUser | OtherUser

type AppUser = {
  tag: 'app'
  appId: 'string'
}

type ServiceUser = {
  tag: 'service'
  serviceId: 'string'
}

type OtherUser = {
  tag: 'other'
  id: 'string'
}

// by tag
const getUserIdBySwitch = (user: User) => {
  switch (user.tag) {
    case 'app':
      console.log(user.appId)
      break;
    case 'service':
      console.log(user.serviceId)
      break;
    case 'other':
      console.log(user.id)
      break;
  }
}

// by in operator
const getUserId = (user: User) => {
  if ('appId' in user) {
    console.log(user.tag)
  }
}

// TypeGuard
const isAppUser = (props: any): props is AppUser => {
  return props.tag === 'app'
}

const isServiceUser = (props: any): props is ServiceUser => {
  return props.tag === 'service'
}

const isServiceUser2 = (props: any): ServiceUser | null => {
  return props.tag == 'service' ? props : null
}

const doTypeGuard = (props: any) => {
  if (isAppUser(props)) {
    console.log(props)
  } else if (isServiceUser(props)) {
    console.log(props)
  }
}

// Generics for variable annotation
type ValueContainer<T> = { value: T }

const hasNumber: ValueContainer<number> = { value: 30 }
const hasString: ValueContainer<string> = { value: 'hogefoobar' }

// Generics for argument annotation
const toPayloadObject = <T>(props: T) => {
  return { payload: props }
}

const hasAmount = toPayloadObject({ amount: 10 })

// Generics for extends (制約)
type StringValueBox<T extends string> = { value: T }
type UserValueBox<T extends User> = { value: T }

const hasString2: StringValueBox<'abc'> = { value: 'abc' }
const hasUser: UserValueBox<AppUser> = { value: {} as AppUser}


// Multiple Generics
const merge = <T, S>(propsA: T, propsB: S) => {
  return { ...propsA, ...propsB }
}

const mergedValue = merge({ value: 'hoge' }, { value2: 'foo'})
console.log(mergedValue)

// Generics for interoperability
type FooBarBaz = {
  foo: string
  bar: number
  baz: boolean
}

const getType = <T extends FooBarBaz, U extends keyof FooBarBaz>(input: T, key: U) => {
  return input[key]
}

const fooBarBaz: FooBarBaz = {
  foo: 'FOO',
  bar: 256,
  baz: false,
}

const key: 'bar' | 'baz' = (() => {
  if (Math.random() < 10) {
    return 'bar'
  } else {
    return 'baz'
  }
})()

const result = getType(fooBarBaz, key)

