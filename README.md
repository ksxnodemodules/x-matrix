
# x-matrix

## Requirements

Node v5.0.0 or later
 - Flag `--es-staging` is required

## Examples

```javascript
var xmat = require('x-matrix');
class RowMajorOrder extends Array {
	get(position) {
		return this[position];
	}
	set(position, value) {
		this[position] = value;
	}
}
var Matrix = new xmat.VectorSpace(RowMajorOrder, new xmat.Size(3, 3), xmat.NUMBER_OPERATIONS).Matrix;
```
