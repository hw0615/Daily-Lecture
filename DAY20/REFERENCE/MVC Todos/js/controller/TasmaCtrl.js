module.exports = function() {
	'use strict';

	var $             = require('jquery'),
		TasmaData     = require('../model/TasmaData'),
		TasmaRenderer = require('../view/TasmaRenderer');

	function addTask() {
		TasmaRenderer.renderNew();
	}
	function render() {
		var loaded_data = TasmaData.load();
		TasmaRenderer.renderTasks( loaded_data );
	}
	function removeAllTasks() {
		TasmaData.clear();
		render();
	}
	function removeTask(evt) {
		var $target = $( evt.target );
		$target.closest('.task').remove();
	}
	function saveTask() {
		var save_data = [],
			$tasks = $.$tasma.find('.task');
		$.each($tasks, function(index, task) {
			var $task = $tasks.eq(index); // jQuery()
			save_data.push({
				'complete': $task.find('.complete').prop('checked'), // true, false
				'description': $task.find('.description').val()
			});
		});
		TasmaData.save( save_data );
	}
	function cancelTask() {
		render();
	}

	return {
		'add'       : addTask,
		'remove'    : removeTask,
		'removeAll' : removeAllTasks,
		'save'      : saveTask,
		'cancel'    : cancelTask,
		'render'    : render
	};

};