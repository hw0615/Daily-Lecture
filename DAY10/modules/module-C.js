// 전역(Global Scope)
// 변수, 함수 선언 => 전역 변수, 전역 함수 => 전역 객체 속성/메서드

var m3 = (function(global, fds){

  var _module = ['module-A', 'module-B'];

  console.log('type(_module):', type(_module));

  // return module;

  fds.module_collection = _module;

})(window, (window.fds = window.fds || {}));