/** @license Apache-2.0 */

'use strict';

/**
* Compute the Cartesian square for a one-dimensional double-precision floating-point ndarray.
*
* @module @stdlib/blas-ext-base-ndarray-dcartesian-square
*
* @example
* var Float64Vector = require( '@stdlib/ndarray-vector-float64' );
* var zeros = require( '@stdlib/ndarray-zeros' );
* var dcartesianSquare = require( '@stdlib/blas-ext-base-ndarray-dcartesian-square' );
*
* var x = new Float64Vector( [ 1.0, 2.0 ] );
* var out = zeros( [ 4, 2 ], {
*     'dtype': 'float64'
* });
*
* var v = dcartesianSquare( [ x, out ] );
* // returns <ndarray>[ [ 1.0, 1.0 ], [ 1.0, 2.0 ], [ 2.0, 1.0 ], [ 2.0, 2.0 ] ]
*
* var bool = ( v === out );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
