'use strict';

/*! main.js @ 2017, yamoo9.net */

// JSON //
// https://api.myjson.com/bins/f0etn

(function ($) {
  'use strict';

  if (!$.random) {
    // Static Method
    // Utility Method
    // Class Method
    $.random = function (n) {
      return Math.floor(Math.random() * n);
    };
  }

  if (!$.cache) {
    $.cache = function (el) {
      return $.data(el, '$el') || $.data(el, '$el', $(el));
    };
  }
})(window.jQuery);

;(function (global, $) {
  'use strict';

  /** 모듈 내 지역 변수 */

  var $component = void 0,
      $lists = void 0,
      $labels = void 0,
      usingTogglList = void 0,
      $close = void 0,

  // 사용자 정의 옵션
  time = 300,
      // 0.3s - 트렌지션 시간(ms)
  is_multi_toggle = true; // 멀티 토글 가능 여부

  /** 초기화 함수 */
  function init() {
    // 객체 참조
    $component = $('.ui-accordion');
    $lists = $component.find('.menu-list'); // .find() 메서드 사용
    $labels = $('.menu-label a', $component); // context 전달인자 사용
    $close = $('.notification');
    // 초기화 과정에서 사용
    usingTogglList = is_multi_toggle ? toggleList : toggleSingleList;
    // 이벤트 바인딩
    bind();
    // 초기 실행
    $lists.hide(); // 모든 리스트 감추기
    // $labels.eq(1).trigger('click'); // 특정 레이블 활성화 클릭 실행
    var n = $.random($labels.length);
    $labels.eq(n).trigger('click'); // 랜덤 함수 사용하여 활성화
  }
  /** 이벤트 핸들링 */
  function bind() {
    $labels.on('click', is_multi_toggle ? toggleList : toggleSingleList);
    $close.on('click', close_box);
  }
  /** 이벤트 핸들러 */
  function toggleList(e) {
    e.preventDefault(); // 기본 동작 차단
    var $this = $(e.target); // 클릭한 대상 jQuery화 참조
    var $list = $this.parent().next();
    // Toggle List & Label
    $list.toggle(time);
    $this.toggleClass('is-active');
    // if ( $list.css('display') === 'none' ) {
    // if ( !$list.is(':visible') ) {
    //   $list.show(time);
    //   $this.addClass('is-active');
    // } else {
    //   $list.hide(time);
    //   $this.removeClass('is-active');
    // }
  }
  function toggleSingleList(e) {
    e.preventDefault();
    var $this = $(e.target);
    var $list = $this.parent().next();
    var $actived = $labels.filter('.is-active');

    // 활성화된 레이블과 사용자가 클릭한 레이블이 일치한다면
    // 함수를 종료하라.
    if ($actived.is($this)) {
      $.wiggle($this);
      return;
    }

    // 제어 방법 1: 하나하나 제어
    // is-active 클래스를 가진 <a> 요소에게서 해당 클래스를 제거한다.
    // $labels.filter('.is-active').removeClass('is-active');
    // // $lists 중 열린 리스트를 찾아 닫아준다. hide(time)
    // $lists.filter(':visible').hide(time);
    // // $this 객체에 is-active 클래스를 추가한다.
    // $this.addClass('is-active');
    // // $list 객체를 펼쳐준다. show(time)
    // $list.show(time);

    // 제어 방법 2: 
    // toggleList()를 실행하여 현재 열린 리스트와 활성화된 레이블을 비활성화 한다.
    toggleList($actived, $lists.filter(':visible'));
    // toggleList()를 실행하여 클릭한 레이블과 연결된 리스트를 펼쳐준다.
    toggleList($this, $list);
  }

  function close_box(c) {
    $close.hide('.delete');
  }

  // 초기화 실행
  init();
})(window, window.jQuery);