function factorial(n) {
	if ( typeof n !== 'number' || n < 0 ) {
		return false;
	}

	let result = 1;

	if ( n > 1 ) {

		for ( let i = 2; i <= n; i ++ ) {
			result *= i;
		}
	}

	return result;
}
