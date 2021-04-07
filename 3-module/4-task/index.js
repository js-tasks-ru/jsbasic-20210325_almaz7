function showSalary(users, age) {
	is ( ! users || ! Array.isArray( users ) || users.length < 1 ) {
		return '';
	}

	let maximun = age ? age : Infinity;

	let resultArray = [];

	for ( let i = 0; i < users.length; i ++ ) {
		if ( Object.keys( users[i] ).includes( 'age' ) && typeof users[i].age === 'number' && users[i].age <= maximum ) {
			let data = `{users[i].name}, {users[i].balance}`;
			resultArray.push( data );
		}
	}

	return resultArray.join("\n");

}
