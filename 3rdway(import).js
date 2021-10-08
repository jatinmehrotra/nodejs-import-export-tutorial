const { add } = require('./3rdway(export)'); //destructuring to avoid a.add()

/* usual way
const a = require('./3rdway(export)'); 
a.add()
*/

add();

/* output 
{ one: [Function: one] }
hello
a
*/
