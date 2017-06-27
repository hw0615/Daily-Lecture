/*! form-validation.js © yamoo9.net, 2017 */
;(function(global, FDS){
  'use strict';
  // Scope 내에서 사용할 지역 변수
  var document = global.document, demo, form_container, btn_expand, btn_fold, user_contact;
  // 초기화 함수
  function init() {
    // 문서 객체 참조
    demo           = document.querySelector('.demo');
    form_container = document.querySelector('.form-container');
    btn_expand     = form_container.querySelector('.btn-expand');
    btn_fold       = form_container.querySelector('.btn-fold');
    user_contact   = form_container.querySelector('#user_contact');
    // 이벤트 바인딩
    bindEvents();
  }
  // 이벤트 바인딩 처리 함수
  function bindEvents() {
    btn_expand.onclick = expandForm;
    btn_fold.onclick = foldForm;
    user_contact.onsubmit = formValidationAndTransfer;
  }
  // 이벤트 핸들러 함수
  function expandForm() {
    demo.classList.add('show-form-overlay');
    form_container.classList.add('expand');
  };
  function foldForm() {
    demo.classList.remove('show-form-overlay');
    form_container.classList.remove('expand');
  };
  function formValidationAndTransfer(e) {
    // 이벤트의 주인
    var form = e.target;
    // 사용자 입력 값을 가져오기
    var name_value    = form.querySelector('#user_name').value.trim();
    var email_value   = form.querySelector('#user_email').value.trim();
    var subject_value = form.querySelector('#user_subject').value;
    var message_value = form.querySelector('#user_message').value.trim();
    // 사용자 입력 값을 가지고와서 하나의 객체의 속성 키:값으로 설정
    var user_inputs = {
      name: name_value,
      email: email_value,
      subject: subject_value,
      message: message_value,
    };

    // 사용자 입력 값 유효성 검사
    // 실패 시, 오류 내용을 사용자에게 알림
    for (var prop in user_inputs) {
      if ( user_inputs.hasOwnProperty(prop) ) {
        switch(prop) {
          case 'name':
          case 'email':
          case 'subject':
            if ( !user_inputs[prop] ) {
              global.alert(prop + ' 입력 필드를 채워주세요.');
              return false;
            }
          break;
          case 'email':
            var email_reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if ( !email_reg.test(user_inputs.email) ) {
              global.alert('이메일 입력이 올바른지 확인하세요.');
              return false;
            }
        }
      }
    }

    // user_inputs 객체 데이터 문자화
    // 비동기 통신(Ajax)으로 서버에 전송

    // 폼 전송 차단
    return false;
  };
  // 실행
  init();

})(window, window.FDS);