interface KeyValue<T = any> {
  [key: string]: T
}

class overload<Entity, Presets = KeyValue<Entity>, OptionalType = never> {
  register(entities: { [name: string]: Entity }, force?: boolean): void
  register<K extends keyof Presets>(
    name: K,
    entity: Presets[K],
    force?: boolean
  ): Entity
  register(name: string, entity: Entity, force?: boolean): Entity
  register(
    name: string | { [name: string]: Entity },
    options: any,
    force = false
  ) {
    console.log(name, options, force)
    const entity = {}
    return entity
  }
}

interface myEntity {
  title: string,
  name: string
}

let myValue = new overload<myEntity>()

myValue.register({ title: {title: 'sfsdf', name: 'sdfsdfsf'}}, true)

myValue.register('newuser',{title: 'sfsdf', name: 'sdfsdfsf'},true)
