function merge<U extends object, V extends object>(obj1: U, obj2: V) {
  return {
    ...obj1,
    ...obj2,
  };
}

function prop<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
