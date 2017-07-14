(function(global, $){
  'use strict';

  // ——————————————————————————————————————
  // 모바일/데스크탑 대응 이벤트
  // ——————————————————————————————————————

  // touchstart | mousedown
  // touchmove  | mousemove
  // touchend   | mouseup
  // touchenter | mouseenter
  // touchleave | mouseleave
  // touchcancel

  // event.touches
  // event.changedTouches
  // event.targetTouches

  // EventListenerOptions
  // https://goo.gl/rv94e7
  // https://goo.gl/iXPLMQ


  if ( !$ ) { throw 'jQuery에 의존하는 플러그인입니다. jQuery를 먼저 로드해주세요.' }

  if ( !$.fn.swipe ) {

    var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;

    $(document).on({
      'mousedown': function(){
        global.is_global_mousedown_state = true;
      },
      'mouseup': function(){
        global.is_global_mousedown_state = false;
      }
    });

    $.fn.swipe = function(o) {

      var $this = this;

      var defaults = {
        start: function(){},
        move: function(){},
        end: function(){}
      };

      $.each($this, function(i){

        var $current_this = $this.eq(i);

        if ( $.type(o) === 'function' ) {
          o = { start: o, move: o, end: o };
        }

        var config = $.extend({}, defaults, o);
        var touch, startX, startY, distanceX, distanceY, direction, directionX, directionY;

        var touchEvents = {
            touchstart: function(e){
              e.preventDefault();
              touch = e.changedTouches[0];
              startX = global.parseInt(touch.clientX,10);
              startY = global.parseInt(touch.clientY,10);
              config.start.call($current_this, {type: 'start', x: startX, y: startY, direction: '', touch: touch}, e);
            },
            touchmove: function(e){
              e.preventDefault();
              detectTouch(e);
              config.move.call($current_this, {type: 'move', x: distanceX, y: distanceY, direction: direction, touch: touch}, e);
            },
            touchend: function(e){
              e.preventDefault();
              detectTouch(e);
              config.end.call($current_this, {type: 'end', x: distanceX, y: distanceY, direction: direction, touch: touch}, e);
            }
        };

        function detectTouch(e) {
          touch = e.changedTouches[0];
          distanceX = global.parseInt(touch.clientX - startX,10);
          distanceY = global.parseInt(touch.clientY - startY,10);
          directionX = distanceX > 0 ? 'right' : 'left';
          directionY = distanceY > 0 ? 'down' : 'up';
          direction = directionX + ' ' +directionY;
        }

        var mouseEvents = {
          mousedown: function(e){
            e.preventDefault();
            startX = e.clientX;
            startY = e.clientY;
            config.start.call($current_this, {type: 'start', x: startX, y: startY, direction: ''}, e);
          },
          mousemove: function(e){
            e.preventDefault();
            if ( global.is_global_mousedown_state ) {
              detectMouse(e);
              config.move.call($current_this, {type: 'move', x: distanceX, y: distanceY, direction: direction}, e);
            }
          },
          mouseup: function(e){
            e.preventDefault();
            detectMouse(e);
            config.end.call($current_this, {type: 'end', x: distanceX, y: distanceY, direction: direction}, e);
          }
        };

        function detectMouse(e){
          distanceX = global.parseInt(e.clientX - startX,10);
          distanceY = global.parseInt(e.clientY - startY,10);
          directionX = distanceX > 0 ? 'right' : 'left';
          directionY = distanceY > 0 ? 'down' : 'up';
          direction = directionX + ' ' +directionY;
        }

        $current_this.on( supportsTouch ? touchEvents : mouseEvents );

      });
    };

  }

})(window, window.jQuery);