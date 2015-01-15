var checksum = require('./');
var assert = require('assert');
var sequences = ['ctrl+1', 'ctrl+2'];
var sums1 = checksum(sequences);
var sums2 = checksum('ctrl+1');
assert(sums1.length == 2);
assert(sums1[0] != sums2[1]);
assert(sums1[0] == sums2);
