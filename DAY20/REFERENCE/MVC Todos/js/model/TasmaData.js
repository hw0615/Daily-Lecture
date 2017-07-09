// 1. exports 객체의 속성으로
// 외부에 공개
// exports.loadData = loadData;

// 2. module.exports를 통해
// 함수를 외부에 공개
// module.exports = loadData;

// 3. module.exports를 통해
// 객체를 외부에 공개
// module.exports = {
// 	'loadData': loadData
// };

// ---------------------------------

// Model
// window.JSON
// window.localStorage
// DATA.load()
// DATA.save()
// DATA.clear()

var DATA_NAME = 'TASMA';

module.exports = {
	'save': function( data ) {
		data = JSON.stringify( data );
		localStorage.setItem( DATA_NAME, data);
	},

	'load': function() {
		var data = localStorage.getItem(DATA_NAME);
		if (data) {
			return JSON.parse( data );
		}
		return [];
	},

	'clear': function() {
		localStorage.removeItem(DATA_NAME);
	}
};
