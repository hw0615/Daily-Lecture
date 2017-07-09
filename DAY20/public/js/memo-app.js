(function(global, $){
  'use strict';

  var app, memo_storage, memo, memo_buttons, memo_title, memo_content, memo_items;

  var document         = global.document;
  var forEach          = Array.prototype.forEach;
  var memo_api_address = '';

  function init() {
    // 메모 API 주소 설정
    memo_api_address = '/memo-app';
    // 메모 앱 문서 객체 참조
    app              = document.querySelector('.app');
    memo             = app.querySelector('.memo');
    memo_buttons     = memo.querySelectorAll('button');
    memo_items       = app.querySelector('.memo-item-container');
    memo_title       = memo.querySelector('#memo-title');
    memo_content     = memo.querySelector('#memo-content');

    // 데이터 로드
    load();

    // 이벤트 바인딩
    bind();
  }
  function load() {
    // memo_api_address 에서 데이터 가져오기 (GET)
    $.get(memo_api_address, function(data, status){
      // console.log('통신 상태:', status); // status
      // console.log('데이터:', data); // []
      // 서버로부터 가져온 데이터를 memo_storage에 참조
      memo_storage = data;
      // 데이터 가져온 후, 렌더링
      render();
    });

  }
  function render() {
    var template = '';
    memo_items.innerHTML = '';
    memo_storage.forEach(function(memo){
      template += '<article class="memo-item column is-3 message is-primary">'+
        '<div class="message-header">'+
          '<h5 class="memo-item-title">'+memo.title+'</h5>'+
          '<button data-remove-index="'+memo.id+'" type="button" class="delete" aria-label="메모 아이템 제거"></button>'+
        '</div>'+
        '<div class="message-body">'+
          '<p class="memo-item-content">'+memo.content+'</p>'+
        '</div>'+
      '</article>';
    });
    memo_items.innerHTML = template;
  }
  function bind() {
    forEach.call(memo_buttons, function(button){
      button.addEventListener('click', detectButton);
    });
    memo_items.addEventListener('click', removeMemo);
  }
  function detectButton() {
    this.classList.contains('is-save') ? saveMemo() : cancelMemo();
  }
  function removeMemo(ev) {
    var target = ev.target;
    if ( target.localName === 'button' && target.classList.contains('delete') ) {
      var remove_id = target.dataset.removeIndex;
      // memo_api_address 에서 데이터 지우기 (DELETE)
      // console.log('$.delete 존재 하나?:', !!$.delete);
      $.ajax({
        url: memo_api_address + '/' + remove_id,
        method: 'DELETE',
        dataType: 'json',
        success: function(data){
          load();
        }
      });
      ev.stopPropagation();
    }
  }
  function validateMemo(title, content) {
    if ( title.value.trim() === '' ) {
      global.alert('메모 제목이 비어 있습니다. 내용을 입력해주세요.');
      memo_title.focus();
      return true;
    }
    if ( content.value.trim() === '' ) {
      global.alert('메모 내용이 비어 있습니다. 내용을 입력해주세요.');
      memo_content.focus();
      return true;
    }
    return false;
  }
  function saveMemo() {
    if ( validateMemo(memo_title, memo_content) ) { return; }
    var memo_item = {
      title: memo_title.value,
      content: memo_content.value
    };
    // memo_api_address 에 데이터 추가하기 (POST)
    $.post(memo_api_address, $.param(memo_item), function(data, status){
      // console.log('POST 통신 상태:', status);
      // console.log('POST 데이터:', data);
      load();
    });
    cancelMemo();
  }
  function cancelMemo() {
    memo_title.value = '';
    memo_content.value = '';
  }

  init();

})(window, window.jQuery);