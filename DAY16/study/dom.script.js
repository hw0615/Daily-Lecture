/*! dom.script.js @ 2017, yamoo9.net */

// Emmet 설정
// Emmet Game: 1기 안도훈 수료생 결과물 - https://ahndohun.github.io/emmet-game/
(function(emmet){
  'use strict';
  emmet.require('textarea').setup({
    pretty_break: true,
    use_tab: true
  });
})(window.emmet);

;(function(global, document, $){
  'use strict';

  // ——————————————————————————————————————
  // Node Interface
  // ——————————————————————————————————————

  // 노드 복제
  // .cloneNode([deep])

  // #gnb 요소노드를 찾아서 변수에 참조
  var gnb = $.selector('#gnb');
  var copyzone = $.selector('.copyzone');

  // #gnb 내부의 a 요소에 이벤트 바인딩
  var gnb_links = $.selectorAll('a', gnb);

  // ES5 (2009)
  // Array.prototype.forEach() 인스턴스 메서드
  // var data = [3, 7, 9, 101];
  // data.forEach(function(item, index, arr){
  //   console.log(item);
  // });

  // 배열 생성자 프로토타입 객체의 메서드 forEach()를 빌려쓰자.
  var forEach = Array.prototype.forEach;
  forEach.call(gnb_links, function(link){
    link.onclick = function() {
      // e.preventDefault();
      console.log(this);
      return false;
    };
  });

  function copyEvent( copyed, copy ) {
    // copyed: 능력을 복제할 자
    // copy: 능력을 가진 자
    forEach.call(copyed, function(item, index){
      item.onclick = copy[index].onclick;
    });
  }

  global.cloneNodeGNB = function () {
    // 참조된 변수(노드)를 복제한다. (.cloneNode([false|true]))
    // var copyed_gnb = gnb.cloneNode(true);
    // 이벤트 복제까지 수행하려면?
    // copyEvent( $.selectorAll('a', copyed_gnb) , gnb_links );

    // 유틸리티 사용 예시
    var copyed_gnb = $.clone(gnb, true);
    // 복제된 노드를 변수에 참조해서 특정 위치(.copyzone)에 삽입
    $.appendChild(copyzone, copyed_gnb);
  };

  // ---------------------------------------
  // 클래스 속성 제어
  // 속성 추가, 제거, 소유, 토글

  // .classList
  //    .contains()
  //    .add()
  //    .remove()
  //    .toggle()
  //    .keys()
  //    .values()
  //    .entries()

  // DOM 삽입
  // .innerHTML
  // getter / setter

  // .button.is-change-html-code <button> 요소를 클릭하면
  var change_btn = $.selector('.button.is-change-html-code');
  var textarea = $.selector('#user-html-code');
  // 이벤트 바인딩
  change_btn.onclick = render;

  // 사람이 읽기 용이한(Readable) 키코드 객체
  var keyboards = {
    enter: 13
  };

  // 키보드 이벤트 감지 및 처리
  textarea.onkeyup = function(e) {
    var key = e.charCode || e.keyCode || e.which;
    console.log(key);
    if (key === keyboards.enter) { render(); }
  };

  // render 핸들러(함수)
  function render() {
    var html_code = textarea.value;
    // #user-html-code <textarea> 요소의 값(value) -> HTML 코드를
    // .html-wrapper 내부에 적용하여 화면을 업데이트 하시오.
    $.selector('div.html-wrapper').innerHTML = html_code;
  }


  // [GETTER] Node.innerHTML
  // [SETTER] Node.innerHTML = 'HTML Code';

  // 크로스 브라우징
  // prepend()
  // append()
  // before()
  // after()
  // .insertAdjacentHTML(positon, html_code)
  // positon
  // before, after
  // begin, end
  var target = $.selector('.insert-adjacent-html .target');
  // target.insertAdjacentHTML('beforebegin', '<h2 class="beforebegin">beforebegin</h2>');
  // target.insertAdjacentHTML('afterbegin', '<strong class="afterbegin">afterbegin</strong>');
  // target.insertAdjacentHTML('beforeend', '<strong class="beforeend">beforeend</strong>');
  // target.insertAdjacentHTML('afterend', '<h2 class="afterend">afterend</h2>');

  // .insertAdjacentElement()
  target.insertAdjacentElement('beforebegin', $.createEl('h2', 'beforebegin'));
  target.insertAdjacentElement('afterbegin', $.createEl('strong', 'afterbegin'));
  target.insertAdjacentElement('beforeend', $.createEl('strong', 'beforeend'))
  target.insertAdjacentElement('afterend', $.createEl('h2', 'afterend'));

  // .insertAdjacentText()
  // target.insertAdjacentText('beforebegin', 'beforebegin');
  // target.insertAdjacentText('afterbegin', 'afterbegin');
  // target.insertAdjacentText('beforeend', 'beforeend');
  // target.insertAdjacentText('afterend', 'afterend');

  // 속성 제어
  // .getAttribute()
  // .setAttribute()
  // .removeAttribute()
  // .hasAttribute()

  // 데이터 접두사 속성 제어
  // .dataset
  // target.setAttribute('data-tag-name', target.localName);
  // target.setAttribute('data-node-type', target.nodeType);
  // target.setAttribute('data-has-class', target.hasAttribute('class'));
  // console.log('target.dataset', target.dataset);

  var dataMap = {
    'data-tag-name': target.localName,
    'data-node-type': target.nodeType,
    'data-has-class': target.hasAttribute('class')
  };

  // 유틸리티 사용 예시
  $.each(dataMap, function(key, value) {
    target.setAttribute(key, value);
  });



  // 스타일 제어
  // .style
  // .cssText
  // .getComputedStyle | currentStyle

  // ——————————————————————————————————————
  // Event Interface
  // ——————————————————————————————————————

  // .on{event_type}
  // .addEventListener() | .attachEvent()
  // .removeEventListener() | .detachEvent()

  // 이벤트 객체
  // 이벤트 타켓
  // 이벤트 기본 동작 차단
  // 이벤트 전파 흐름
  // 이벤트 위임
  // 이벤트 커런트 타겟
  // 이벤트 전파 차단
  // 이벤트 전파 즉시 차단


})(window, window.document, window.FDS);