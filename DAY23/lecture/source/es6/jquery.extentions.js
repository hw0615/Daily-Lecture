/**
 * jQuery 함수 속성 확장
 * 유틸리티 메서드
 */

(function($){
  'use strict';

  if ( !$.random ) {
    $.random = n => Math.floor(Math.random() * n);
  }

  if ( !$.cache ) {
    $.cache = el => $.data(el, '$el') || $.data(el, '$el', $(el));
  }

  if ( !$.shake ) {
    $.shake = ($el, time=2000, shake=10, distance=5) => {
      let duration = time/shake/4;
      $el.css('position', 'relative');
      $.when(
        $el
          .stop()
          .animate({left: -distance}, duration)
          .animate({left: distance}, duration)
          .animate({left: 0}, duration)
      ).done(()=>$el.removeAttr('style'));
    }
  }

})(window.jQuery);

/**
 * jQuery 객체 속성(메서드) 확드
 * 인스턴스 메서스
 */
(function ($){
  'use strict';
   
  // .radioClass() 
  
  // jQuery 인스턴스 메서드(플러그인) 작성 패턴
  if ( $.fn.radioClass ) {
    $.fn.radioClass = function(name='active') {
      // this === jQuery {}
      // jQuery의 능력을 사용할 수 있다.
      // 플러그인 내에서는....
      this.siblings(`.${name}`).removeClass(name);
      this.addClass(name);
      // 메서드 체이닝을 위해서
      return this;
    };
  }



  // .swipe()


})(window.jQuery);
