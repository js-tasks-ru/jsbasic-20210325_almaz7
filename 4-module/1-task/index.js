function makeFriendsList(friends) {
	if ( ! friends || ! Array.isArray( friends ) || friends.length < 1 ) {
		return '';
	}

	let list = document.createElement('ul'),
		items = '';

	for ( let i = 0; i < friends.length; i ++ ) {
		list.insertAdjacentHTML('beforeend', `<li>${friends[i].firstName} ${friends[i].lastName}</li>`);
	}

	return list;
}
