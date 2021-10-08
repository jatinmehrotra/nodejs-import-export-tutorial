// let export = module.exports
function two() {
  console.log('a');
}

// exports = two();

console.log(exports); //this doesn't works becauase module.exports which is alias is not updated

exports.add = two;
console.log(exports); // this is same as module.exports.add = add
