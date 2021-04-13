function highlight(table) {
	if ( ! table || table.length < 1 ) {
		return false;
	}

	let rows = table.rows,
		cells = null,
		status = null,
		gender = null,
		age = null,
		row = null;

	for (let i = 1; i < rows.length; i ++) {
		//Current row
		row = rows[i];

		//Cells
		cells = row.cells;

		// Status
		status = cells[3];
		// Gender
		gender = cells[2];
		// Age
		age = cells[1];

		if ( ! status.hasAttribute('data-available') ) { 
			row.setAttribute('hidden', 'true');
		} else { 
			if ( status.dataset.available === 'true' ) { 
				row.classList.add('available');
			} else { 
				row.classList.add('unavailable');
			}
		}
		if ( gender.innerHTML === 'm' ) {
			row.classList.add('male');
		} else if ( gender.innerHTML === 'f' ) {
			row.classList.add('female');
		}
		if ( Number( age.innerHTML ) < 18 ) {
			row.style.textDecoration = 'line-through';
		}
	}

	return true;
}