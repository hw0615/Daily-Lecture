/*! dom.script.js @ 2017, yamoo9.net */
(function(global, document, $){
  'use strict';

  // .wrapper 요소 내부에는 p 요소가 있다.
  // p 요소를 찾아 그 앞에 새로운 요소노드를 삽입해보자.

    // ------------------------------------------------------------
    // 방법 1) .wrapper 요소를 찾아서...
    function methodOne() {
      var wrapper = $.selector('.wrapper');
      var new_node = $.createEl('h1', 'insertBefore');
      new_node.setAttribute('lang', 'en');
      new_node.setAttribute('class', 'wrapper-headline');
      // 문서의 특정 요소노드에 마운트(Mount)되지 않은 상태
      console.log('new_node:', new_node);
      // ~ 앞에 삽입해보자.
      // 부모노드.insertBefore(삽입노드, 부모노드를_통해_찾은_자식노드)
      // 이벤트가 요구된다면
      wrapper.onmouseover = function() {
        // 문서의 특정 요소노드에 마운트(Mount)된 상태
        // this.insertBefore(new_node, $.selector('p', this));
        $.insertBefore(new_node, $.selector('p', this));
        // $.before($.selector('p', this), new_node);
        // 이벤트의 제거
        this.onmouseover = null;
      };
    }
    // methodOne();

    // ------------------------------------------------------------
    // 방법 2) .wrapper p 요소를 찾아서...
    function methodTwo(){
      // 문서에서 대상 찾기
      var wrapper_p = $.selector('.wrapper p');
      var target = $.selector('.wrapper .target');
      // 전역에 changePosition() 함수를 공개
      global.changePosition = function(button) {
        // console.log('this:', this);
        // console.log('button:', button);
        button.setAttribute('disabled', 'disabled');
        button.removeAttribute('onclick');
        // console.log('changePosition() 함수 실행');
        // 상대적으로 insertBefore() 메서드 사용하기
        // 목표노드.부모노드.insertBefore(삽입노드,목표노드);
        // $.parent(wrapper_p).insertBefore(target, wrapper_p);
        $.insertBefore(target, wrapper_p);
        // $.before(wrapper_p, target);
      };
    }
    // methodTwo();

    // ------------------------------------------------------------
    // prependChild() 데모
    function prependDemo() {
      var button = $.createEl('button', '대상 앞에 삽입');
      button.setAttribute('type', 'button');
      button.setAttribute('class', 'button is-prepend');
      var prependAction = function() {
        $.prependChild($.selector('.prepend-demo'), button);
      };
      // 특정 시간이 지난 후에 ....
      global.setTimeout(prependAction, 2000);
    }
    // prependDemo();

    // ------------------------------------------------------------
    // insertAfter() 데모
    function insertAfterDemo() {
      var button = $.createEl('button', '~앞에 삽입');
      button.setAttribute('type', 'button');
      button.setAttribute('class', 'insert-after');
      var result = $.insertAfter(button, $.selector('.wrapper button'));
      console.log('result:', result);
      console.log('result.textContent:', result.textContent);
    }
    // insertAfterDemo();

    // ------------------------------------------------------------
    // removeChild() 데모
    function removeChildDemo() {
      
      global.setTimeout(afterTimeRemove, 2000);
      
      function afterTimeRemove() {
        var removed_el = $.selector('.target');
        global.setTimeout(afterTimeAndAttach.bind(removed_el), 1000);
      }

      function afterTimeAndAttach() {
        // console.log(this); // removed_el
        $.insertAfter(this, $.selector('.prepend-demo :first-child'));
      }
      
        // global.setTimeout(function(){
        //   afterTimeAndAttach(removed_el);
        // }, 3000);

    }
    // removeChildDemo();


    // ------------------------------------------------------------
    // innerHTML 데모
    function innerHTMLDemo(data){
      var list_contents = data;
      var mount         = $.selector('.mount');
      var list_html     = '<ul class="list">';
      // 템플릿(TEMPLATE) 코드
      // <ul class="list">
      //   <li class="list-item">content</li>
      // </ul>
        // list_contents를 순환 처리 해서 동적으로 HTML 코드를 생성
        // HTML 코드를 조합하기 위한 기본 문자열을 참조하는 변수 정의
        // .innerHTML 활용
        // list_contents 데이터 반복 처리
      for ( var content, i=0, l=list_contents.length; i<l; ++i ) {
        content = list_contents[i];
        list_html += '<li tabindex="0" onclick="choiceContent(this)" class="list-item">' + content + '</li>';
      }
      // 순환 종료 후에 마무리
      list_html += '</ul>';
      // 동적으로 HTML 코드를 mount 요소의 내부 코드로 대체 변경
      mount.innerHTML = list_html;
    }

    global.choiceContent = function(target) {
      $.radioClass(target, 'active');
    };

    function bindEvents() {
      var wrapper = $.selector('.input-field-wrapper');
      var button  = $.selector('button', wrapper);
      button.onclick = replaceListItem.bind(button, wrapper);
    }

    function replaceListItem(wrapper) {
      var input        = $.selector('input', wrapper);
      var user_input   = input.value.trim();
      var activated    = $.selector('.list .active');
      var replace_node = $.createEl('li', user_input);
      replace_node.setAttribute('tabindex', 0);
      replace_node.setAttribute('onclick', 'choiceContent(this)');
      replace_node.setAttribute('class', 'list-item');
      if(user_input === '') {
        user_input = global.prompt('대체할 콘텐츠를 입력하시겠습니까?');
      }
      activated = activated || $.addClass($.first($.selector('.list')),'active');
      $.replaceChild(replace_node, activated);
      input.value = '';
    }

    // replaceChild() 데모
    function replaceChildDemo() {
      var data = '슈렉프라푸치노 아메리카노 카페라떼 차이티라떼 모카카푸치노'.split(' ');
      innerHTMLDemo(data);
      bindEvents();
    }
    
    replaceChildDemo();

    

    

})(window, window.document, window.FDS);

;