// 전역(Global Scope)
// 변수, 함수 선언 => 전역 변수, 전역 함수 => 전역 객체 속성/메서드

var m2 = (function(global, $){
  var module = function() {
    console.log('B file. Function.');
  };

  console.log('isArray(module):', isArray(module));

  // return module;

  // if ( !global.fds || !isObject(global.fds) ) {
  //   global.fds = {};
  // }

  $.sayWhatTypeOfMethod = module;

// DI: 개발에 필요한 의존 모듈을 주입
})(window, (window.fds = window.fds || {}));