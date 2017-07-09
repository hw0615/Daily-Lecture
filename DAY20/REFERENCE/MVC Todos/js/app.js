// 서버 환경에서 CommonJS 진영의 모듈 로더 활용
var $         = require('jquery'),
	TasmaCtrl = require('./controller/TasmaCtrl')();

function registerEventHandler() {
	$.$tasma.find('.button.new').on('click', TasmaCtrl.add);
	$.$tasma.find('.button.remove-all').on('click', TasmaCtrl.removeAll);
	$.$tasma.find('.button.save').on('click', TasmaCtrl.save);
	$.$tasma.find('.button.cancel').on('click', TasmaCtrl.cancel);
	$.$tasma.find('.tasks-list').on('click', '.button.remove', TasmaCtrl.remove);
}

function init() {
	$.$tasma = $('#TASMA');
	registerEventHandler();
	TasmaCtrl.render();
}

$(document).ready( init );