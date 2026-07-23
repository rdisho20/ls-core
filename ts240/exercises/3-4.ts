interface KeyValuePair<Key, Value> {
  key: Key,
  value: Value,
}

const test: KeyValuePair<string, number> = {
  key: "test",
  value: 777,
}