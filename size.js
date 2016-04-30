
((module) => {
	'use strict';

	var freeze = Object.freeze;
	var define = Object.defineProperty;

	const SET_OF_FUNCTIONS = freeze({
		'row-major': freeze({
			'deep': () => {},
			'shallow': () => {},
			__proto__: null
		}),
		'col-major': freeze({
			'deep': () => {},
			'shallow': () => {},
			__proto__: null
		}),
		__proto__: null
	});

	define(Size, 'SET_OF_FUNCTIONS', SET_OF_FUNCTIONS);

	module.exports = class extends Size {};

	function Size(size, order, struct) {

		const ROWS = size[0];
		const COLS = size[1];

	}

})(module);
