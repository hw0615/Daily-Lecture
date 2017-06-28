/*! dom.script.js @ 2017, yamoo9.net */
(function(global, $){
  'use strict';

  var getComputedStyle = global.getComputedStyle;

  // ——————————————————————————————————————
  // 속성 제어
  // ——————————————————————————————————————
  // .hasAttribute()
  // .getAttribute()
  // .setAttribute()
  // .removeAttribute()

  // FDS.attr(prop)        // GET
  // FDS.attr(prop, value) // SET
  // FDS.removeAttr(prop)  // DELETE

  var container = $.selector('.container');
  var container_lis = $.selectorAll('li', container);

  global.container = container;

  // Loop
  $.each(container_lis, function(li){
    // SET
    $.attr(li, 'style', 'color: tan');
    // GET
    // console.log( $.attr(li, 'style') );
    // Event
    li.onclick = function() {
      $.removeAttr(this, 'style');
    };
  });

  // $.each(container_lis, function(li){
  //   li.setAttribute('data-key', 'kfjlj23l424');
  // });

  // ——————————————————————————————————————
  // 스타일 제어
  // ——————————————————————————————————————
  // .style
  // .cssText
  // .getComputedStyle | .currentStyle

  // MS IE 8-
  // list.currentStyle.fontSize

  // W3C Standard
  // window.getComputedStyle(list).fontSize

  var zoom_button_set = $.selector('.button-set');
  var list = $.selector('.list');

  // 이벤트 위임
  // 이벤트 전파
  // event {} target 은 이벤트가 진행 중인 자식요소
  // event {} currentTarget 은 이벤트가 연결된 부모요소
  zoom_button_set.onclick = function(e) {
    // console.log('this: %s, e.taget: %s, e.currentTarget: %s', this, e.target, e.currentTarget);
    var button = e.target;
    // 누구의 글자 크기를 키울 것인가?
    // var current_fontsize = $.attr(list, 'style');
    // console.log(current_fontsize);
    // 계산된 속성 값을 가져와야 한다.
    var current_val = getComputedStyle(list).fontSize;
    current_val = global.parseInt(current_val, 10);

    if ( button.classList.contains('zoom-in') ) {
      // console.log('zoom in');
      var new_val = current_val + 10;
      $.attr(list, 'style', 'font-size: ' + new_val + 'px');
      // $.css(list, 'font-size', new_val + 'px');
      // $.css(list, '\
      //   font-size: 200px;\
      //   padding: 100px;\
      //   margin: 20px;\
      //   border: 20px solid currentColor;\
      // ');
    }
    if ( button.classList.contains('zoom-out') ) {
      // console.log('zoom out');
      // 누구의 글자 크기를 줄일 것인가?
      var new_val = current_val - 10;
      $.attr(list, 'style', 'font-size: ' + new_val + 'px');
    }
  };

  // ——————————————————————————————————————
  // 이벤트
  // ——————————————————————————————————————

  // .on{event_type}
  // .addEventListener() | .attachEvent()
  // .removeEventListener() | .detachEvent()

  // ---------------------------------------
  // Cross Browsing Event Utility Function
  // ---------------------------------------
  // W3C 표준 모델 : addEventListener
  // MS 비표준 모델 : attachEvent
  // 구형 이벤트 모델 : on{type}
  // function addEvent(el, type, handler, capture) {
  //   if ( el.addEventListener ) {
  //     capture = capture || false;
  //     el.addEventListener(type, handler, capture);
  //   } else if ( el.attachEvent ) {
  //     el.attachEvent('on'+type, handler);
  //   } else {
  //     el['on'+type] = handler;
  //   }
  // }

  // 함수 값이 아닌, 참조 변수를 설정해야만 제거가 된다.
  global.addEvent = function(){
    var _addEvent = null;
    if ( 'addEventListener' in EventTarget.prototype ) {
      _addEvent = function(el, type, handler, capture) {
        el.addEventListener(type, handler, capture || false);
      };
    } else if ( 'attachEvent' in EventTarget.prototype ) {
      _addEvent = function(el, type, handler, capture) {
        el.attachEvent('on'+type, handler);
      };
    } else {
      _addEvent = function(el, type, handler, capture) {
        el['on'+type] = handler;
      };
    }
    return _addEvent;
  }();
  global.removeEvent = function(){
    var _removeEvent = null;
    if ( 'removeEventListener' in EventTarget.prototype ) {
      _removeEvent = function(el, type, handler, capture) {
        el.removeEventListener(type, handler, capture || false);
      };
    } else if ( 'attachEvent' in EventTarget.prototype ) {
      _removeEvent = function(el, type, handler, capture) {
        el.detachEvent('on'+type, handler);
      };
    } else {
      _removeEvent = null;
    }
    return _removeEvent;
  }();


  // 이벤트 객체
  // 이벤트 타켓

  // document.onclick = function(e) {
  //   e = e || window.event;
  //   e.target = e.target || e.srcElement;
  //   e.relatedTarget = e.type === 'mousever' ? e.fromElement : e.toElement;
  // };

  var actionA = function() {
    console.log(this, 'actionA');
  };
  var actionB = function() {
    console.log(this, 'actionB');
  };

  addEvent(list, 'click', actionA);
  addEvent(list, 'click', actionB);
  addEvent(list, 'click', function(){
    removeEvent(this, 'click', actionB);
  });

  // 이벤트 기본 동작 차단
  // e.preventDefault()   VS   return false
  // 이벤트 전파 흐름
  // capturing  vs  bubbling
  // 전파 차단
  // e.stopPropagation()
  // e.stopImmediatePropagation()
  // 이벤트 위임
  // 이벤트 커런트 타겟

})(window, window.FDS);