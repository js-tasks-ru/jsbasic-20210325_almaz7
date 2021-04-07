function camelize(str) {
	if ( ! str  || typeof str !== 'string' ) {
		return '';
	}

	let strArray = str.split("-");
	for ( let i = 1; i < strArray.length; i++ ) {
		strArray[i] = strArray[i][0].toUpperCase() + strArray[i].substring(1);
	}
	return strArray.join('');
}
