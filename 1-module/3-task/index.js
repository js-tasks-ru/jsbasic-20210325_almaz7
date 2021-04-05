function ucFirst(str) {
	if ( ! str || typeof str !== 'string' ) {
		return '';
	}

	let result = str,
		firstCharacter = result[0];

	firstCharacter = firstCharacter.toUpperCase();
	result = firstCharacter + result.substring(1);

	return result;
}
