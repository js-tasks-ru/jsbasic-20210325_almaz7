function truncate(str, maxlength) {
	if ( ! str || ! maxlength || typeof str !== 'string' || typeof maxlength !== 'number' || maxlength < 0 ) {
		return '';
	}

	let result = str,
		strLength = result.length;

	if ( strLength > maxlength ) {
		result = result.substring(0, maxlength - 1) + '…';
	} 

	return result;
}
