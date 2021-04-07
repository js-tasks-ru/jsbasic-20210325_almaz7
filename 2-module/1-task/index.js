function sumSalary(salaries) {
	if ( ! salaries || typeof salaries !== 'object' ) {
		return 0;
	}

	let result = 0;

	for ( let key in salaries ) {
		if ( typeof salaries[key] === 'number' && salaries[key] > 0 && salaries[key] < Infinity ) {
			result += salaries[key];
		}
	}

	return result;
}
