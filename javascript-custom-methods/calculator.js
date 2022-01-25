/* exported calculator */

var calculator = {
  add(x, y) {
    return x + y;
  },
  subtract(x, y) {
    return x - y;
  },
  multiply(x, y) {
    return x * y;
  },
  divide(x, y) {
    return x / y;
  },
  square(x) {
    return x * x;
  },
  sumAll(numbers) {
    return numbers.reduce((sum, number) => sum + number);
  },
  getAverage(numbers) {
    return this.sumAll(numbers) / numbers.length;
  }
};
