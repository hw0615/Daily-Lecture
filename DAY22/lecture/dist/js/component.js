'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (global, $) {
  'use strict';

  var Notification = function () {
    function Notification(selector) {
      var _this = this;

      _classCallCheck(this, Notification);

      if ($.type(selector) !== 'string') {
        throw 'CSS 선택자를 전달해주세요';
      }
      if (selector.trim() === '') {
        throw '빈 문자열 입니다.';
      }
      if (!this) {
        throw 'new Notification()으로 실행해 주세요';
      }
      this.$els = $(selector);
      this.$els.each(function (i) {
        var $el = _this.$els.eq(i);
        $el.find('.delete').on('click', _this.close.bind($el));
      });
    }

    _createClass(Notification, [{
      key: 'close',
      value: function close() {
        this.remove();
      }
    }]);

    return Notification;
  }();

  global.Notification = Notification;
})(window, window.jQuery);

(function (global, $, Notification) {
  'use strict';

  // 객체 지향 코드를 사용한 예
  // new Notification('.site-noti');

  // jQuery 코드 스타일 예

  $('.site-noti').find('.delete').on('click', function () {
    $(this).parent().remove();
  });
})(window, window.jQuery, window.Notification);

// 내 실습
// (function (global, $){
//   'use strict';
//    let show_modal = $('.show-modal')
//    let buttons = $('.modal button')

//    show_modal.on('click', function(){
//      $(this).next().addClass('is-active');
//    })

//    buttons.on('click', function(){
//      $('.is-active').removeClass('is-active');
//    })


// })(window, window.jQuery);


// Show Modal
(function (global, $) {
  'use strict';

  var $modal = $('.show-modal-target');

  // Show Modal 버튼 제어 (이벤트 핸들링)
  $('.show-modal').on('click', function (e) {
    $modal.addClass('is-active');
  });

  $modal.on('click', function (e) {
    var $e_target = $(e.target);
    if ($e_target.is('.delete') || $e_target.is('.modal-background') || $e_target.filter(':contains("Cancel")').length && $e_target[0].localName === 'button') {
      $modal.removeClass('is-active');
    }
  });

  // Modal 요소 표시 상태 제어 함수
});(function (global, $) {
  'use strict';

  // 생성자 함수

  function Modal(selector) {
    this.$els = $(selector);
  }

  // 프로토타입 객체
  Modal.prototype.open = function () {};
  Modal.prototype.close = function () {};

  // 외부에 공개
  var fds_modal = new Modal('.fds-modal');
})(window, window.jQuery);

(function (global, $) {
  'use strict';

  // 지역 내에서 사용할 변수

  var filtered_data = void 0,
      original_data = void 0;
  var limit_count = 10;

  // 지역 내 사용할 함수
  function limitTo(data, n) {
    return data.slice(0, n);
  }

  // Ajax를 사용해서 API로부터 데이터를 가져오기
  var api_address = 'https://api.myjson.com/bins/f0etn';

  $.get(api_address).then(function (data) {
    // 39 총 데이터 중에 사용하고자 하는 데이터를 제한
    original_data = data;
    filtered_data = limitTo(data, limit_count);
    render(filtered_data);
  });

  // render() 함수를 통해 화면에 데이터를 순환하여 템플릿 토대로
  // 동적 마크업 작성 후, DOM을 구현한다.
  function render(data) {
    var media_template = '';
    data.forEach(function (item) {
      // 데이터
      var id = item.id;
      var name = item.firstName + ' ' + item.lastName;
      var image = item.image;
      var bio = item.bio;
      // 템플릿에 데이터 바인딩
      media_template += '\n        <article class="media">\n          <figure class="media-left">\n            <p class="image is-64x64">\n              <img src="' + image + '" alt>\n            </p>\n          </figure>\n          <div class="media-content">\n            <div class="content">\n              <p>\n                <strong>' + name + '</strong> <small>@' + name + '</small>\n                <br>\n                ' + bio + '\n              </p>\n            </div>\n          </div>\n          <div class="media-right">\n            <button class="delete" type="button" aria-label="button"></button>\n          </div>\n        </article>\n      ';
    });

    var $media_group = $('.media-object-container').html(media_template);
    bindEvents($media_group);
  }

  function bindEvents($container) {
    var $del_btns = $container.find('.delete');
    $del_btns.on('click', function () {
      var $remove_el = $(this).parents('.media.box');
      $remove_el.css('position', 'relative').animate({
        'right': '-800px',
        'height': 0
      }, 1000, function () {
        $remove_el.remove();
      });
    });
  }
})(window, window.jQuery);