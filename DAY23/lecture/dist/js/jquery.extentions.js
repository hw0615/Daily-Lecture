'use strict';

/**
 * jQuery 함수 속성 확장
 * 유틸리티 메서드
 */

(function ($) {
  'use strict';

  if (!$.random) {
    $.random = function (n) {
      return Math.floor(Math.random() * n);
    };
  }

  if (!$.cache) {
    $.cache = function (el) {
      return $.data(el, '$el') || $.data(el, '$el', $(el));
    };
  }

  if (!$.shake) {
    $.shake = function ($el) {
      var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
      var shake = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
      var distance = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 5;

      var duration = time / shake / 4;
      $el.css('position', 'relative');
      $.when($el.stop().animate({ left: -distance }, duration).animate({ left: distance }, duration).animate({ left: 0 }, duration)).done(function () {
        return $el.removeAttr('style');
      });
    };
  }
})(window.jQuery);

/**
 * jQuery 객체 속성(메서드) 확드
 * 인스턴스 메서스
 */
(function ($) {
  'use strict';

  // .radioClass() 

  // jQuery 인스턴스 메서드(플러그인) 작성 패턴

  if ($.fn.radioClass) {
    $.fn.radioClass = function () {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'active';

      // this === jQuery {}
      // jQuery의 능력을 사용할 수 있다.
      // 플러그인 내에서는....
      this.siblings('.' + name).removeClass(name);
      this.addClass(name);
      // 메서드 체이닝을 위해서
      return this;
    };
  }

  // .swipe()

})(window.jQuery);