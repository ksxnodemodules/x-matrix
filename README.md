
# x-matrix

## Requirements

Node v5.0.0 or later
 - Flag `--es-staging` is required

## Examples

```javascript
var xmat = require('x-matrix');
const SIZE = new xmat.Size([3, 3], {order: 'col-major', struct: 'shallow'});
class Float64Matrix extends Float64Array {
	constructor() {super(parseInt(SIZE))}
	get(position) {return this[position]}
	set(position, value) {this[position] = value}
}
var Matrix = new xmat.VectorSpace(Float64Matrix, SIZE, xmat.NUMBER_OPERATIONS).Matrix;
```
