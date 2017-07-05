/*! Store.js @ 2017, yamoo9.net */
var Store = function(global){
  'use strict';

  // 설정 객체
  var config = {};
  // 기본 옵션 설계
  var default_settings = {
    required: false,
    default: [],
    types: 'any'
  };

  // 비공개 데이터
  var state = [];
  // 데이터 유형 체크 함수
  var type = function(o) {
    return Object.prototype.toString.call(o).slice(8,-1).toLowerCase();
  };
  // 배열 변경 함수
  var makeArray = function(o) {
    return Array.prototype.slice.call(o);
  };
  // 믹스인 패턴을 활용하는 유틸리티 함수
  var mixin = function() {
    var args = makeArray(arguments);
    for (var i=0, l=args.length; i<l; i++) {
      if ( type(args[i]) !== 'object' ) { throw '전달인자로 객체만 허용합니다.' }
    }
    var mixin_obj = args.shift();
    var next = args.shift();
    do {
      for ( var prop in next ) {
        if ( next.hasOwnProperty(prop) ) { mixin_obj[prop] = next[prop]; }
      }
      next = args.shift();
    } while ( next );
    return mixin_obj;
  };
  // 유형 체크 함수
  var checkTypes = function(o, types) {
    var valid = false;
    var config_arr = String(types).split(',');
    if ( !o ) { throw '검증할 데이터(첫번째 전달인자)를 전달해주세요'; }
    for ( var i=0, item; (item=config_arr[i++]); ) {
      if ( item.trim() === type(o) ) { return true; }
    }
    if (!valid) { throw '허용되지 않은 데이터 타입입니다. 허용된 데이터 타입은 ' + readableType(config.types) + '입니다.' }
  };
  var readableType = function(type) {
    switch(type) {
      case 'number': return '숫자(number)';
      case 'string': return '문자(string)';
      case 'boolean': return '불리언(boolean)';
      case 'function': return '함수(function)';
      case 'array': return '배열(array)';
      case 'object': return '객체(object)';
      default:
        return '복합 데이터 유형(' + type + ')';
    }
  }

  // ——————————————————————————————————————
  // 생성자 함수(Class)
  // ——————————————————————————————————————
  function Store(options) {
    // new를 사용하지 않을 경우 사용자에게 경고!!!
    if ( !(this instanceof Store) ) { throw 'new Store() 형태로 사용하셔야 합니다.' }
    // 전달 받은 옵션을 사용하여 객체를 초기화
    this.init(options);
  };

  // ——————————————————————————————————————————————
  // 생성자 함수의 메서드(Static Method, Class Method)
  // ——————————————————————————————————————————————
  Store.include = function(key, value) {
    if ( key && typeof key === 'string' ) { Store[key] = value }
    if ( key && !key.length && typeof key === 'object' ) {
      for (var prop in key) {
        if ( key.hasOwnProperty(prop) ) { Store[prop] = key[prop] }
      }
    }
  };

  Store.include({
    type:      type,
    mixin:     mixin,
    makeArray: makeArray,
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
      // 기본 옵션 required 값이 true 일 경우, 반드시 데이터를 초기에 설정해야 한다.
      if ( default_settings.required ) {
        if ( !options ) { throw '초기 데이터를 반드시 전달해야 합니다.' }
      }
      // options 검증
      // 옵션이 없다면?
      if ( !options ) {
        mixin(config, default_settings, {});
      }
      // 옵션이 배열이라면?
      if ( type(options) === 'array' ) {
        mixin(config, default_settings, { default: options });
      }
      // 옵션이 객체라면?
      if ( type(options) === 'object' ) {
        mixin(config, default_settings, options);
      }
      state = config.default;
    },
    create: function(o){
      if (!o) { throw '생성할 데이터를 전달해야 합니다.' }
      if ( config.types !== 'any' ) { checkTypes(o, config.types); }
      state.push(o);
    },
    has: function(index) {
      if (type(index) !== 'number') { throw '인덱스는 숫자여야 합니다.'; }
      return !!state[index];
    },
    get: function(index){
      if ( (type(index) === 'undefined') && index !== 0) { return state; }
      var has_index = this.has(index);
      if ( !has_index ) { throw '존재하지 않는 데이터입니다.' }
      if (has_index && index > -1) { return state[index]; }
    },
    update: function(index, item){
      if ( (!index && index !== 0) || !this.has(index)) { throw '해당 인덱스(첫번째 인자) 데이터가 없습니다.' }
      if ( config.types !== 'any' ) { checkTypes(item, config.types); }
      state.splice(index, 1, item);
    },
    delete: function(index){
      if (!index || !this.has(index)) { throw '제거할 인덱스(첫번째 인자) 데이터가 없습니다.' }
      state.splice(index, 1);
    }
  };

  // 생성자 함수 외부에 공개
  return Store;

}(window);