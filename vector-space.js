
((module) => {
	'use strict';

	class VectorSpace extends require('x-vector/vector-space') {

		constructor() {

			class MatrixBase extends this.Vector {

				createTransposition() {
					return new TransMatrix(this);
				}

				static createMatrixProduct(left, right) {
					return new ProductMatrix(left, right);
				}

			}

			class Matrix extends MatrixBase {

			}

			class TransMatrix extends MatrixBase {

				constructor(base) {
					this.base = base;
				}

			}

			class ProductMatrix extends MatrixBase {}

			return {
				Matrix: Matrix,
				__proto__: this
			};

		}

	}

	module.exports = class extends VectorSpace {};

})(module);
