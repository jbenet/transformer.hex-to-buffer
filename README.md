# transformer.hex-to-buffer

[Transformer](http://github.com/jbenet/transformer) conversion: hex to buffer

This module is a transformer conversion, published on npm. Read more about transformer at:

- the transformer website: <http://transform.datadex.io>
- the transformer repository: <http://github.com/jbenet/transformer>

## Usage

Use this module through transformer.

### Javascript

```js
var transformer = require('dat-transformer');
var tHexToBuffer = transformer('hex', 'buffer');
tHexToBuffer('6265657020626f6f70'); // new Buffer('beep boop', 'ascii')
```
