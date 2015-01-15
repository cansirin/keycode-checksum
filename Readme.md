# keycode-checksum

calculate checksums using [fletcher's algorithm](http://en.wikipedia.org/wiki/Fletcher%27s_checksum) for given keycode sequences/shortcut definitions.

```
npm i keycode-checksum
```

# usage

```js
var checksum = require('keycode-checksum');
var sequences = ['ctrl+1', 'ctrl+2'];
var sums = checksum(sequences);
```

# api

## keycode-checksum(array|string)

# license

mit
