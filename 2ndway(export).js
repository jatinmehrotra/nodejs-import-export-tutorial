function two() {
  console.log('a');
}

module.exports.one = two;

console.log(module.exports); // { one: [Function: one] } //this log statement will also be exported

console.log('hello'); // this log statement will also be exported
