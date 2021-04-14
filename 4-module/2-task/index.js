function makeDiagonalRed(table) {
	if ( ! table || table.length < 1 ) {
		return false;
	}

	let rows = table.rows,
		cells = null;

	for(let i = 0; i < rows.length; i ++) {
		cells = rows[i].cells;

		for (let j = 0; j < cells.length; j ++) {
			if ( i === j ) {
				cells[j].style.backgroundColor = 'red';
			}
		}
	}
}
