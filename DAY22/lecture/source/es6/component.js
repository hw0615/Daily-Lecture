(function (global, $){
  'use strict';
  
  class Notification {
    constructor(selector) {
      if ( $.type(selector) !== 'string' ) { throw 'CSS 선택자를 전달해주세요'; }
      if ( selector.trim() === '' ) { throw '빈 문자열 입니다.'; }
      if ( !this ) { throw 'new Notification()으로 실행해 주세요'; }
      this.$els = $(selector);
      this.$els.each (i => {
        let $el = this.$els.eq(i);
        $el.find('.delete').on('click', this.close.bind($el));  
       });
    }
    close() {
      this.remove();
    }
  }

  global.Notification = Notification;

})(window, window.jQuery);

(function (global, $, Notification){
  'use strict';

  // 객체 지향 코드를 사용한 예
  // new Notification('.site-noti');

  // jQuery 코드 스타일 예
  $('.site-noti').find('.delete').on('click',function() {
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
(function (global, $){
  'use strict';
   
  let $modal = $('.show-modal-target');

  // Show Modal 버튼 제어 (이벤트 핸들링)
  $('.show-modal').on('click', function(e){
    $modal.addClass('is-active');
  });

  $modal.on('click', function(e){
    let $e_target = $(e.target);
    if (
      $e_target.is('.delete') ||
      $e_target.is('.modal-background') ||
      $e_target.filter(':contains("Cancel")').length && $e_target[0].localName === 'button'
    ) {
      $modal.removeClass('is-active');
    }
  });

  // Modal 요소 표시 상태 제어 함수

}) // (window, window.jQuery);

;(function (global, $){
  'use strict';

   // 생성자 함수
   function Modal(selector){
     this.$els = $(selector);
   }

   // 프로토타입 객체
   Modal.prototype.open = function(){}
   Modal.prototype.close = function(){}

   // 외부에 공개
   var fds_modal = new Modal('.fds-modal');

    

})(window, window.jQuery);

(function (global, $){
  'use strict';
  
  // 지역 내에서 사용할 변수
  let filtered_data, original_data;
  let limit_count = 10;

  // 지역 내 사용할 함수
  function limitTo(data, n) {
    return data.slice(0, n);
  }

  // Ajax를 사용해서 API로부터 데이터를 가져오기
  let api_address = `https://api.myjson.com/bins/f0etn`;

  $.get(api_address).then(data => {
    // 39 총 데이터 중에 사용하고자 하는 데이터를 제한
    original_data = data;
    filtered_data = limitTo(data, limit_count);
    render(filtered_data);
  });

  // render() 함수를 통해 화면에 데이터를 순환하여 템플릿 토대로
  // 동적 마크업 작성 후, DOM을 구현한다.
  function render(data) {
    let media_template = '';
    data.forEach(item => {
      // 데이터
      let id    = item.id;
      let name  = `${item.firstName} ${item.lastName}`;
      let image = item.image;
      let bio   = item.bio;
      // 템플릿에 데이터 바인딩
      media_template += `
        <article class="media">
          <figure class="media-left">
            <p class="image is-64x64">
              <img src="${image}" alt>
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>${name}</strong> <small>@${name}</small>
                <br>
                ${bio}
              </p>
            </div>
          </div>
          <div class="media-right">
            <button class="delete" type="button" aria-label="button"></button>
          </div>
        </article>
      `;
    });

    let $media_group = $('.media-object-container').html(media_template);
    bindEvents($media_group);

  }

  function bindEvents($container) {
    let $del_btns = $container.find('.delete');
    $del_btns.on('click', function(){
      let $remove_el = $(this).parents('.media.box');
        $remove_el
          .css('position', 'relative')
          .animate({
            'right': '-800px',
            'height': 0
          }, 1000, function() {
            $remove_el.remove();
          });
    });
  }
  
})(window, window.jQuery);