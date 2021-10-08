function one() {
  console.log('a');
}

module.exports = one;

console.log(module.exports); //[Function: one]  //this log statement will also be exported

console.log('hello'); // this log statement will also be exported
