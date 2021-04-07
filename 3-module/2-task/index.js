function filterRange(arr, a, b) {
	if ( ! arr || ! Array.isArray( arr ) ) {
		return [];
	}

	let minimum = a ? a : -Infinity,
		maximum = b ? b : Infinity;

	return arr.filter(function( current ) {
		if ( current >= a && current <= b ) {
			return true;
		}
		return false;
	});
}
