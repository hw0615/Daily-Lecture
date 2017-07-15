/*! main.js @ 2017, yamoo9.net */

// Card 컴포넌트 정의
// Card Component using jQuery Library //
(function(global, $){
  'use strict';

  // ----------------------------------------------------------------------
  // jQuery 로드 여부 검증
  if (!$) { throw 'jQuery에 의존하는 컴포넌트입니다. jQuery를 로드해주세요.' }

  // ----------------------------------------------------------------------
  // 비공개 지역 함수
  function bind(card) {
    // let $collection = [$toggle, $save, $edit, $delete];
    // $($collection).on('click',detectButtons);

    // $toggle
    //   .add($save)
    //   .add($edit)
    //   .add($delete).on('click',detectButtons);

    card._$toggle.on('click', onClickToggle.bind(card._$toggle, card));
    card._$save.on('click', onClickSave.bind(card._$save, card));
    card._$edit.on('click', onClickEdit.bind(card._$edit, card));
    card._$delete.on('click', onClickDelete.bind(card._$delete, card));
    }
    function onClickToggle(card, e){
      e.preventDefault();
      card.toggleContent();
    }
    function onClickSave(card, e){
      e.preventDefault();
      card.save();
    }
    function onClickEdit(card, e){
      e.preventDefault();
      card.edit();
    }
    function onClickDelete(card, e){
      e.preventDefault();
      card.delete();
    }

  // -----------------------------------------------------------------------
  // Constructor
  function Card(o) {
    // new 를 강제화하는 검증
    if (!this) { throw 'new Card() 문법으로 사용해주세요.'; }
    // 초기에 카드 컴포넌트로 사용할 DOM 요소를 jQuery화
    this._$card = $(o);
    // 카드 컴포넌트 초기화
    this.init();
  }

  // -----------------------------------------------------------------------  
  // Prototype
  Card.fn = Card.prototype = {
    constructor: Card,
    version: '1.0.0',
    init: function(){
      // card {} 내부 버튼 컴포넌트 참조
      this._$toggle = this._$card.find('.card-toggle-btn');
      this._$save   = this._$card.find('.card-save-btn');  
      this._$edit   = this._$card.find('.card-edit-btn');
      this._$delete = this._$card.find('.card-delete-btn');
      // 이벤트 바인딩
      // card {} 전달
      bind(this);
    },
    isOpenedContent: function() {
      return !this._$toggle.attr('aria-label').includes('open');
    },
    openContent: function(){
      var change_open_text = this._$toggle.attr('aria-label').replace('open', 'close');
      this._$toggle.attr('aria-label', change_open_text);
      this._$toggle.find('.fa-angle-up').addClass('fa-angle-down').removeClass('fa-angle-up');
      this._$card.find('.card-content').slideDown(100);
    },
    closeContent: function(){
      var $toggle = this._$toggle;
      // 'close content -> 'open content'
      var change_open_text = $toggle.attr('aria-label').replace('close', 'open');
      $toggle.attr('aria-label', change_open_text);
      // 'down' -> 'up'
      $toggle.find('.fa-angle-down').addClass('fa-angle-up').removeClass('fa-angle-down');
      // content 슬라이드 위 방향으로 닫기
      this._$card.find('.card-content').slideUp(100);
    },
    toggleContent: function(){
      this.isOpenedContent() ? this.closeContent() : this.openContent();
    },
    save: function(){
      this._$card.find('.content *:not(br,hr)').removeAttr('conteteditable');
      // Ajax Communication -> data transfer
    },
    edit: function(){
      this._$card.find('.content *:not(br,hr)').attr('conteteditable', true).eq(0).focus();
    },
    delete: function(){
      this._$card.remove();
    }
  };

  // -----------------------------------------------------------------------  
  // Export
  $.Card = Card;

})(window, window.jQuery);


// Card 컴포넌트 사용
(function (global, $){
  'use strict';   
   
  // var $card = $('.twitter-card');

  // $card.on('click', function(){
  //   $.shake( $card );
  // });
  
  global.t_card = new $.Card('.twitter-card');
  global.f_card = new $.Card('.facebook-card');

  global.t_card.toggleContent();
  global.f_card.toggleContent();

  $('.demo-radio').find('[role="tab"]').on('click', function(){
    $(this).parent().radioClass('is-active');
  });

})(window, window.jQuery);