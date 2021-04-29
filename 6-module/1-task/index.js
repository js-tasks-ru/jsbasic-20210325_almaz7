/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
	constructor(rows) {
  		this.rows = rows,
		this.elem = this.render()
	}

	render() {
		if ( ! this.table ) {
			this.table = document.createElement("TABLE");

			this.table.addEventListener('click', event => {
				this.removeRow(event);
			});
		}

		this.tableInner = '';

		for ( const {name, age, salary, city} of this.rows ) {
			this.tableInner += `<tr><td>${name}</td><td>${age}</td><td>${salary}</td><td>${city}</td><td><button>X</button></td></tr>`;
		}
		
		this.table.insertAdjacentHTML('beforeEnd', this.tableInner);
		
		return this.table;
	}

	removeRow( event ) {
		if (!event.target.closest('tr')) {
			return;
		}
		
		event.target.closest('tr').remove();
	}
}
