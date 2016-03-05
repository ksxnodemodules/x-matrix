
# x-matrix

## Requirements

Node v5.0.0 or later

## Examples

```javascript
var xmat = require('x-matrix');
class RowMajorOrder extends Array {
	get(size, position) {
		return this[_getIndex(size, position)];
	}
	set(size, position, value) {
		this[_getIndex(size, position)] = value;
	}
}
var space = xmat.createVectorSpace(RowMajorOrder, new xmat.Size(3, 3), xmat.ADD_NUMBERS, xmat.MULTIPLY_NUMBERS);
function _getIndex(size, position) {
	return this[position[0] * size[1] + position[1]];
}
```
