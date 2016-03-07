
# x-matrix

## Requirements

Node v5.0.0 or later
 - Flag `--es-staging` is required

## Examples

```javascript
var xmat = require('x-matrix');
class RowMajorOrder extends Array {
	get(position) {
		return this[_getIndex(size, position)];
	}
	set(position, value) {
		this[_getIndex(size, position)] = value;
	}
}
var space = new xmat.VectorSpace(RowMajorOrder, new xmat.Size(3, 3), xmat.NUMBER_OPERATIONS);
function _getIndex(size, position) {
	return this[position[0] * size[1] + position[1]];
}
```
