function checkSpam(str) {

	if ( ! str || typeof str !== 'string' ) {
		return false;
	}

	let result = false,
		lowerCaseStr = str.toLowerCase();

	if ( lowerCaseStr.indexOf('xxx') !== -1 || lowerCaseStr.indexOf('1xbet') !== -1 ) {
		result = true;
	}

	return result;
}
