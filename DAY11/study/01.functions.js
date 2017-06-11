/*! 01.functions.js @ 2017, yamoo9.net */

// ——————————————————————————————————————————————————————
// 함수
// ——————————————————————————————————————————————————————

// ------------------------------------------------------
// 지난 시간 내용 복습

// 함수 선언/호출
// 함수 영역(범위)
// 스코프 체이닝
// this 컨텍스트(Context)
// Arguments(전달인자)와 Parameters(매개변수)
// Arguments(전달인자) 객체
// 재귀(再歸) 함수
// 함수 프로토타입 객체의 능력
//  .call()
//  .apply()
//  .bind()
// 즉시 실행 함수 (IIFE)
// 모듈(Module) 패턴
// 노출(명시적 공개) 패턴
// 네임스페이스 패턴
// 클로저(Closures)


// ------------------------------------------------------
// 엄격모드(Strict)
// 과도기 quirks mode
// strict mode
// Scope 마다 mode 변경
// IIFE 패턴 내에 'use strict' 모드를 사용하자.
(function (global){
    // ES5에서 추가된 엄격 모드(Strict Mode)는 기능 추가가 아닌,
    // 오류 발생 가능성이 있는 코드를 제거하는 역할을 한다.
    // 엄격 모드를 지원하는 브라우저에서는 오류 발생 가능성이 있는 코드 작성 시 오류를 발생하지만,
    // 지원하지 않는 구형 브라우저는 이를 단순하게 무시한다. 즉, 호환성에 문제는 없다.
    // (하위 호환성 유지) 엄격 모드는 개별적인 유효범위(함수, 전역 유효범위 등)
    // 내부 첫 라인에 아래와 같은 문자열을 선언하면 된다.
    'use strict';

    // yamoo9 = '야무';       // [X]
    global.yamoo9 = '야무'    // [O]
    console.log('yamoo9:', yamoo9);
})(window); 


// 주의!!!
// JavaScript 파일 병합(Combine, Merge) 시에
// IIFE 패턴은 문제를 일으킬 소지가 있다.

(function(global){
  // dom-helper.js
  'use strict';
  // ....
})(window)

;(function(global){
  // dom-framework.js
  'use strict';
  // ....
})(window);

// JavaScript는 객체를 생성할 때
// 무엇을 사용하나?

// 생성자 함수: Constructor Function
// 생성자 함수.prototype ===> {}


// 네임스페이스 객체 선언
// IIFE 패턴 사용
var fds = function(){
  // 엄격모드 발동
  'use strict';

  // 사용자 정의 객체(UI 컴포넌트) 생성자 함수
  var Slider = function(min, max, value, step){
    'use strict';
    // new 키워드 없이 생성자 함수를 사용하면
    // this는 의도치 않은 객체를 가리켜 프로그램을 고장낸다.

    // new를 강제화 하는 패턴
    if ( this.constructor !== Slider ) {
      return new Slider(min, max, value, step);
    }

    console.log('this ------', this);

    this.min = min || 0;
    this.max = max || 100;
    this.value = value || 0;
    this.step = step || 1;
  };

  Slider.prototype = {
    constructor: Slider,
    move: function() {},
    stop: function() {}
  };
  // 노출 패턴
  return  {
    // UI 카테고리
    ui: {
      Slider: Slider
    }
  };

}();

// 생성자 함수
function Fan(name) {
    // 'use strict';
    // 엄격 모드를 사용하면 this는 명시적으로 함수를 실행한 대상이 없어
    // undefined 이다. (검증) TypeError: Cannot set property 'name' of undefined
    console.log(this);
    this.name = name;
}

// 엄격 모드를 사용하지 않을 경우
new Fan();  // this === Fan {}
Fan();      // this === window {}

// 엄격 모드를 사용할 경우
new Fan();  // this === Fan {}
Fan();      // this === undefined (명시적으로 실행하지 않아서)

// ------------------------------------------------------
// Javascript 함수는 일급객체(시민)

// Javascript 함수는 일반 함수로서
// 때론 생성자 함수, 함수의 인자, 함수의 반환 값(클로저), 객체의 멤버, 배열의 원소로서 다양하게 사용된다.

// 일급객체(First-Class Object)의 특징

// 변수, 데이터 구조 안에 담을 수 있다.
// 인자(Parameter, Argument)로 전달할 수 있다.
// 반환 값(Return Value)으로 사용할 수 있다.
// 런타임(실행) 중에 생성할 수 있다.
// 할당에 사용된 이름과 관계 없이 고유하게 식별할 수 있다.

// CASE 1. 변수에 함수를 할당할 수 있다.
var showMeTheMoney = function() {};
// CASE 2. 함수의 인자로 함수가 전달될 수 있다.
function lifeCycle(callback) {
    typeof callback === 'function' && callback();
}
// 콜백 패턴
lifeCycle(function(){
    console.log('전달된 함수가 lifeCycle 함수 내에서 실행(callback)되었다.');
});
// CASE 3. 함수의 반환 값으로 함수를 내보낼 수 있다.
var fn = (function (global){
    'use strict';
    return function() {};
})(window);
// CASE 4. 객체의 속성으로 함수를 설정할 수 있다. (메소드)
var obj = {
    member : fn
}
// CASE 5. 배열의 원소(Item)로 함수를 메모리할 수 있다.
var fnStack = [obj.member];



// ------------------------------------------------------
// JavaScript는 객체 지향 언어

// Javascript는 잘 알려진 객체 지향 언어의 Class와는 다른 방법(Prototype)으로 객체 지향을 구현할 수 있다.
// (ECMAScript 2015(ES6)에서는 Class를 사용할 수 있다) Javascript가 지원하는 프로토타입(Prototype)은
// 코드를 재사용하는 방법 중 하나로 객체의 능력을 상속(Inheritance) 할 수 있도록 구현한다.

// 사용자가 생성한 모든 함수는 prototype 속성(프로퍼티)을 가지는데 이는 프로토타입은 객체(빈 객체)를 참조한다.
// 프로토타입 객체에 멤버를 추가하면 상속을 통해 생성자를 통해 생성된 객체(인스턴스)는 이를 물려받아 사용가능하다.
