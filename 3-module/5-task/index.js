function getMinMax(str) {
	if ( ! str || typeof str !== 'string' || str.length < 1 ) {
		return {};
	}

	let strArray = str.split( " " );
	strArray = strArray.map( item => item.split( "," ) );
	strArray = strArray.flat( Infinity );


	let result = {
		min: strArray[0],
		max: strArray[1],
	}

	for ( let i = 0; i < strArray.length; i ++ ) {
		if ( Number( strArray[i] ) < result.min || result.min === null ) {
			result.min = Number( strArray[i] );
		}
		if ( Number( strArray[i] ) > result.max || result.max === null ) {
			result.max = Number( strArray[i] );
		}
	}

	return result;
}
