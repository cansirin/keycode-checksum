var fletcher16 = require('fletcher');
var keycode = require('yields-keycode');

function sum (s) {
  if ('string' === typeof s) 
    return fletcher16(s.split('+').map(keycode).sort());
}

module.exports = function (arr) {
  if (Array.isArray(arr))
    return arr.map(sum);
  else if ('string' === typeof arr)
    return sum(arr);
};
