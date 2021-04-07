function showSalary(users, age) {
	if ( ! users || ! Array.isArray( users ) || users.length < 1 ) {
		return '';
	}

	let maximum = age ? age : Infinity;

	let resultArray = [];

	resultArray = users.filter(element => element.age <= maximum)
						.map(element => `${element.name}, ${element.balance}`)
						.join("\n");

	return resultArray;

}
