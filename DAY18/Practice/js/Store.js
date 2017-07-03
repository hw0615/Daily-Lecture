/*! Store.js @ 2017, yamoo9.net */
var Store = function(global){
  'use strict';

  // 비공개 데이터
  var state = [];
  var config = {};

  // 옵션 설계
  // 사용자가 옵션 전달을 필수로 할 것인가? required: true
  // 사용자가 기본 데이터를 설정하도록 할 것인가? default: []
  // 사용자가 어떤 데이터 포멧으로 설정하도록 할 것인지? types: 'any'
  var default_settings = {
    required: false,
    default: [],
    types: 'any'
  };

  var type = function(o) {
    return Object.prototype.toString.call(o).slice(8,-1).toLowerCase();
  };

  var makeArray = function(o) {
    return Array.prototype.slice.call(o);
  };

  // 믹스인 패턴을 활용하는 유틸리티 함수
  var mixin = function() {
    var args = Store.makeArray(arguments);
    for (var i=0, l=args.length; i<l; i++) {
      if ( Store.type(args[i]) !== 'object' ) {
        throw '전달인자로 객체만 허용합니다.';
      }
    }
    var mixin_obj = args.shift();
    var next = args.shift();
    do {
      // mixin_obj <- o2 복제(합성)
      for ( var prop in next ) {
        if ( next.hasOwnProperty(prop) ) {
          mixin_obj[prop] = next[prop];
        }
      }
      next = args.shift();
    } while ( next );

    return mixin_obj;
  };

  // ——————————————————————————————————————
  // 생성자 함수(Class)
  // ——————————————————————————————————————
  function Store(options) {
    // new를 사용하지 않을 경우 사용자에게 경고!!!
    if ( !(this instanceof Store) ) {
      throw 'new Store() 형태로 사용하셔야 합니다.';
    }
    // 전달 받은 옵션을 사용하여 객체를 초기화
    this.init(options);
  };

  // ——————————————————————————————————————————————
  // 생성자 함수의 메서드(Static Method, Class Method)
  // ——————————————————————————————————————————————
  Store.include = function(key, value) {
    if ( key && typeof key === 'string' ) {
      Store[key] = value;
    }
    if ( key && !key.length && typeof key === 'object' ) {
      for (var prop in key) {
        if ( key.hasOwnProperty(prop) ) {
          Store[prop] = key[prop];
        }
      }
    }
  };

  Store.include({
    type: type,
    mixin: mixin,
    makeArray: makeArray,
    // 기본 설정을 사용자로 하여금 수정하게 할 것이라면?
    // 아래와 같이 공개할 수 있다.
    default_settings: default_settings
  });

  // ——————————————————————————————————————
  // 프로토타입 객체(Prototype)
  // ——————————————————————————————————————
  // 생성된 모든 객체가 공유하는 멤버(Member)
  // 프로토타입 객체를 참조하는 별칭(Alias) 설정
  Store.fn = Store.prototype = {
    constructor: Store,
    version: '0.0.1',
    init: function(options){
      // options 검증
      // 옵션이 없거나, 배열이라면?
      if ( Array.isArray(options) ) {
        state = options;
      }
      // 옵션이 객체라면?
      if ( options && !Array.isArray(options) && typeof options === 'object' ) {
        // 옵션 객체 (사용자 전달한 옵션)
        // 개발자가 기본 설정한 객체와 사용자가 전달한 옵션 객체를 합친다.
        // 믹스인 패턴을 사용한 유틸리티 함수가 필요하다.
        mixin(config, default_settings, options);
        state = config.default;
      }
    },
    create: function(o){
      if ( config.types !== 'any' ) {
        // 'string'
        // 'string, number'.split(',')
      }
      state.push(o);
    },
    get: function(){},
    update: function(){},
    delete: function(){}
  };

  // 생성자 함수 외부에 공개
  return Store;

}(window);