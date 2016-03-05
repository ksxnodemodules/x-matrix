
# x-matrix

## Requirements

Node v5.0.0 or later

## Examples

```javascript
var xmat = require('x-matrix');
class MatrixBase extends Array {
	get(size, position) {}
	set(size, position, value) {}
}
var space = xmat.createVectorSpace(MatrixBase, new xmat.Size(3, 3), xmat.ADD_NUMBERS, xmat.MULTIPLY_NUMBERS);
```
