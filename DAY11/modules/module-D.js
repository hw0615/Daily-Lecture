// 전역(Global Scope)
// 변수, 함수 선언 => 전역 변수, 전역 함수 => 전역 객체 속성/메서드

var m4 = (function(global, fds){

  var module = 'module is "컴퓨터 환경에서 교환 가능한 구성부분(단위)".';

  console.log('module:', module);

  // return module;

  fds.module_desc = module;

})(window, (window.fds = window.fds || {}));