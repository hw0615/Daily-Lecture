// 전역(Global Scope)
// 변수, 함수 선언 => 전역 변수, 전역 함수 => 전역 객체 속성/메서드


// 전역
// Public

// 외부에 변수로 공개하는 방법
// var m1 = (function (){
// }());

// 네임스페이스 패턴을 활용하는 방법
(function (global, $){
  // 지역
  // 은폐(Private)된 공간이 형성
  var module = function() {
    console.log('A file. Function.');
  };

  console.log('isType(module, "function"):', isType(module, "function"));  
  
  // 외부에서 접근 가능하도록 공개
  // return module;

  // 전역에 명시적으로 공개하는 방법
  // 네임스페이스 객체를 사용하여 속성으로 모듈 로직을 할당(공개)
  // 전역에 fds 변수가 null, undefined 이거나,
  // fds 변수에 할당되어 있는 값이 객체(object)가 아닌 경우
  // 조건은 참이다.

  // if ( !global.fds || !isObject(fds) ) {
    // 전역 fds 변수에 빈 객체로 초기화 하라.
    // global.fds = {};
  // }

  // fds 변수는 확실하게 객체이다.
  // global.fds.sayWhatTypeOfFunction = module;
  $.sayWhatTypeOfFunction = module;

// }(window));
})(window, (window.fds = window.fds || {}));
