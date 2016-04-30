
((module) => {
	'use strict';

	module.exports = {
		VectorSpace: require('./vector-space.js'),
		Size: require('./size.js'),
		__proto__: require('x-vector')
	};

})(module);
