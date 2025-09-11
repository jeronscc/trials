function* testGenerator() {
  yield* ['a','b','c','d','e']
}
let gen = testGenerator(2);
console.log(`${gen.next().value} ${gen.next().value}`);
