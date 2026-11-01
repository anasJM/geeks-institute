const keysAndValues = (object) => {
  const keys = Object.keys(object);
  const values = Object.values(object);
  keys.sort();
  values.sort((a, b) => a - b);
  const output = [keys, values];
  return output;
};

console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));
