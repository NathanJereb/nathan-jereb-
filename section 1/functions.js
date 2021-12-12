var x = 1;
var y = 1;
function add(x, y){
  return x + y;
};
////////////////////////////////////////

//open the browser console to check results
console.log('results: ', isString('a', 'b', 'c'));

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = isString;
}
