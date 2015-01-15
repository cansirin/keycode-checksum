var fletcher16 = require('fletcher');
var keycode = require('yields-keycode');
var isArray = require('is-array');

function sum (s) {
  if ('string' === typeof s) 
    return fletcher16(s.split('+').map(keycode).sort());
}

module.exports = function (arr) {
  if (isArray(arr))
    return arr.map(sum);
  else if ('string' === typeof arr)
    return sum(arr);
};
