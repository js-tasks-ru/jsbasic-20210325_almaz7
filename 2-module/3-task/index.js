let calculator = {
	a: null,
	b: null,
	read: function(c, d) {
		this.a = c;
		this.b = d;
	},
	sum: function() {
		return Number( this.a ) + Number( this.b );
	},
	mul: function() {
		return Number( this.a ) * Number( this. b );
	}
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
