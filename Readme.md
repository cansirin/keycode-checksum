# keycode-checksum

calculate checksums using [fletcher's algorithm](http://en.wikipedia.org/wiki/Fletcher%27s_checksum) for given [keycode](https://github.com/timoxley/keycode) sequences.

# usage

```js
var checksum = require('keycode-checksum');
var sequences = ['ctrl+1', 'ctrl+2'];
var sums = checksum(sequences);
```

# api

# checksum(array|string)

# license

mit
