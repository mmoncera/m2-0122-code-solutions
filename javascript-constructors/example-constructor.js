function ExampleConstructor() {}
console.log(
  'value of ExampleConstructor.prototype:',
  ExampleConstructor.prototype
);
console.log(
  'typeof ExampleConstructor.prototype:',
  typeof ExampleConstructor.prototype
);

var example1 = new ExampleConstructor();
console.log('value of example1:', example1);

var isInstanceOfExampleConstructor = example1 instanceof ExampleConstructor;
console.log(
  'value of isInstanceOfExampleConstructor:',
  isInstanceOfExampleConstructor
);
