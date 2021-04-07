function namify(users) {
	if ( ! users || ! Array.isArray( users ) || users.lentgh < 1 ) {
		return [];
	}

	let result = [];

	for ( let i = 0; i < users.length; i ++ ) {
		for ( let key in users[i] ) {
			if ( key === 'name' ) {
				result.push( users[i][key] );
			}
		}
	}
	

	return result;
}
