/**
 * -----------------------
 * DOM 스토리지(DOMStorage
 * -----------------------
 * 1. localStorage [반영구적. 도메인 서비스 제작자가 지우거나, 사용자가 지우거나]
 * 2. sessionStorage [세션이 유지되는 동안 접근 가능, 세션이 만료되면 제거]
 * 3. JSON.parse() <-> JSON.stringify()
 * 4. localStorage 활용 -> 데이터 생성/로드/업데이트/제거
 */

(function(global){
  'use strict';

  var document     = global.document;
  var localStorage = global.localStorage;
  var forEach      = Array.prototype.forEach;
  var JSON         = global.JSON;
  var memo_data_id = 'memo-data';
  var app, memo_storage, memo, memo_buttons, memo_title, memo_content, memo_items;

  // 애플리케이션 초기화 과정에서 수행되는 일들....
  function init() {
    // 애플리케이션 컴포넌트 참조
    app          = document.querySelector('.app');
    memo         = app.querySelector('.memo');
    memo_buttons = memo.querySelectorAll('button');
    memo_items   = app.querySelector('.memo-item-container');
    memo_title   = memo.querySelector('#memo-title');
    memo_content = memo.querySelector('#memo-content');
    // 로컬 스토리지(서버)에서 저장된 데이터를 로드
    load(memo_data_id);
    // 메모 아이템 렌더링
    render();
    // 이벤트 바인딩
    bind();
  }
  function load(id) {
    var loaded_data = localStorage.getItem(id);
    if (!loaded_data) {
      localStorage.setItem(id, JSON.stringify([]));
      loaded_data = localStorage.getItem(id);
    }
    memo_storage = JSON.parse(loaded_data);
  }
  function render() {
    var template = '';
    // 메모 영역의 아이템을 모두 제거
    memo_items.innerHTML = '';
    // 메모 영역의 아이템을 저장된 스토리지 데이터를 순환하여 템플릿으로 구성하여 화면에 렌더링
    memo_storage.forEach(function(memo, index){
      template += '<article class="memo-item column is-3 message is-primary">'+
        '<div class="message-header">'+
          '<h5 class="memo-item-title">'+memo.title+'</h5>'+
          '<button data-remove-index="'+index+'" type="button" class="delete" aria-label="메모 아이템 제거"></button>'+
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
    // button.delete 요소에서만 동작
    if ( target.localName === 'button' && target.classList.contains('delete') ) {
      var remove_id = target.dataset.removeIndex;
      // 로컬스토리지 데이터(Model) 업데이트
      memo_storage.splice(remove_id, 1);
      localStorage.setItem(memo_data_id, JSON.stringify(memo_storage));
      // 화면 렌더링 - 뷰 변경
      render();
      // 이벤트 전파 중지
      ev.stopPropagation();
    }
  }
  function validateMemo(title, content) {
    if ( title.value.trim() === '' ) {
      global.alert('메모 제목이 비어 있습니다. 내용을 입력해주세요.');
      // 사용자가 입력하지 않은 필드에 포커스 이동
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
    // 사용자가 입력한 메모 타이틀, 내용을 가져와서 객체로 구성
    // 사용자 입력한 데이터 검증
    // 요구된 입력 내용이 충족되지 않았을 경우, 사용자에게 알리고 함수를 종료
    if ( validateMemo(memo_title, memo_content) ) { return; }
    // 사용자 입력 정보를 객체로 구성
    var memo_item = {
      title: memo_title.value,
      content: memo_content.value
    };
    // 사용자 입력 정보 객체를 메모스토리지 배열에 추가
    memo_storage.push(memo_item);
    // 메모스토리지 배열 객체를 문자화
    var memo_data = JSON.stringify(memo_storage);
    // 문자화된 데이터를 로컬 스토리지에 저장
    localStorage.setItem(memo_data_id, memo_data);
    cancelMemo();
    render();
  }
  function cancelMemo() {
    // 사용자가 입력한 메모 타이틀, 내용을 지웁니다.
    memo_title.value = '';
    memo_content.value = '';
  }

  init();

})(window);