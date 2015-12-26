
((module) => {
	'use strict';

	var createClassFromSuper = require('class-utils').createClass.super;

	var _key_iterator = Symbol.iterator;

	module.exports = {
		fromIterableClasses: fromIterableClasses
	};

	function fromIterableClasses(first, ...rest) {

		if (!rest.length) {
			return class {};
		}

		var Rest = fromIterableClasses(...rest);

		class XMatrix {

			constructor(first_arg, ...args) {
				this.first = new first(...(first_arg || []));
				this.rest = new Rest(...(args || []));
			}

			* [_key_iterator]() {
				for (let x in this.first) {
					for (let y in this.rest) {
						yield new XMatrix.Element(x, ...y);
					}
				}
			}

		}

		XMatrix.Element = createClassFromSuper(fromIterableClasses.Array);

		return XMatrix;

	}

	fromIterableClasses.Array = Array;

})(module);
