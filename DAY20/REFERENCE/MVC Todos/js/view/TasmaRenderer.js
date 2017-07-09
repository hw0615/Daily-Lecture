// 의존 모듈
var $               = require('jquery'),
	render_template = require('../../templates/render_template.hbs');

// 템플릿
// var render_template = [
// 	'<li class="task clearfix">',
// 		'<div class="task-desc">',
// 			'<input class="complete" type="checkbox">',
// 			'<input class="description" maxlength="30" type="text" placeholder="등록할 내용을 기입해주세요.">',
// 		'</div>',
// 		'<button type="button" class="anim button remove">제거</button>',
// 	'</li>'
// ].join('');

function renderTask(task) {
	// task?
	// {
	// 	'complete': true,
	// 	'description': '...'
	// }
	// var $tpl = $( render_template );
	// if ( task.complete ) {
	// 	$tpl.find('.complete').attr('checked', 'checked');
	// }
	// $tpl.find('.description').val( task.description );
	// return $tpl;
	return $( render_template( task ) );
}

function renderTasks(tasks) {
	// tasks?
	// [{}, {}, {}]
	// var tasks_arr = [],
	// 	i=0,
	// 	l=tasks.length,
	// 	task;

	// for(; i<l; i++) {
	// 	task = tasks[i];
	// 	tasks_arr.push(renderTask( task ));
	// }

	// $.$tasma.find('.tasks-list').empty().append( tasks_arr );

	var $tasks = $.map( tasks, renderTask );
	$.$tasma.find('.tasks-list').empty().append( $tasks );

}

function renderNew() {
	var $new_task = renderTask({});
	$.$tasma.find('.tasks-list').prepend( $new_task );
}

module.exports = {
	'renderNew'  : renderNew,
	'renderTasks' : renderTasks
};