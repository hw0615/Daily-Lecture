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


// ------------------------------------------------------
// 즉시 실행 함수 (IIFE)
// https://en.wikipedia.org/wiki/Immediately-invoked_function_expression

// 함수 실행(호출) <- 이름(함수 이름, 함수 값을 참조하는 변수 이름)
// 이름이 없는 함수 (익명 함수, 무명 함수)

// 이름 호출 없이 즉시 실행되는 JavaScript 프로그래밍 언어의 관용어구: 이디엄(idiom)
// (function(){}());
// (function(){})();

// 객체 값을 변수에 참조한 예
var memorial_card = {};

// IIFE 패턴을 사용하여 실행된 결과 값 객체를 반환 받은 변수 예
var another_memorial_card = (function(){
  return {};
}());


// ------------------------------------------------------
// 모듈(Module) 패턴
// JavaScript 모듈 이라는 것을 지원하지 않음(ES5)
// Front-End Env. 확장자가 .js 인 파일이 자체로 독립적이지 않다. (충돌 가능성 높다)
// Back-End Env. 확장자가 .js 인 파일은 자체로 독립적이다. (충돌 X)

// 웹 브라우저에서 아래 파일들을 읽어들이면 모두 전역에 노출된 상태이기에
// 같은 이름의 변수, 함수는 충돌이 발생하게 되고, 프로그램은 망가지게 된다.

// module-A.js
// module-B.js
// module-C.js
// module-D.js

// JavaScript 에서는 모듈 패턴이 없지만, IIFE 패턴을 활용하여 모듈처럼 사용한다.
// 결국 모듈이란? 전역과 구분되는 영역이 존재하면, 그 내부의 변수, 함수는
// 외부에 노출되지 않기에 안전하게 프로그래밍이 유지된다.

// IIFE 패턴을 사용하였기에 전역과 구분되는 영역(모듈)을 만들었지만,
// 외부에서 접근이 원천 봉쇄되기 때문에 내부의 프로그래밍 만 동작하게 되고,
// 외부에서는 접근 조차 할 수 없어 재사용 할 수 없는 문제에 직면한다.

// 노출(명시적 공개) 패턴
// 함수가 반환(return)하는 값(객체, 배열, 함수, 숫자, 문자, 불리언, null)

// 네임스페이스 패턴
// 전역에서 접근 가능한 객체(Namespace)를 하나 정의한 후,
// 각 모듈의 코드 로직을 Namespace 객체의 속성에 할당하자.

// ------------------------------------------------------
// 클로저(Closures)
// 함수(함수)
// 모듈 패턴

// Mission 1.
// increaseCount() 함수를 작성해보세요.

// 전역 변수 count 를 선언해야 함수가 접근해서 값을 변경
// var count = 0;

// function increaseCount() {
//   // 어떻게 해야 count가 1씩 증가하게 될까?
//   // var count = 0;
//   return ++count;
// }

// increaseCount(); // 1
// increaseCount(); // 2
// increaseCount(); // 3
// increaseCount(); // 4

// 클로저 예제
// 외부 함수

// var countMaker = function() {
//   var count = 0;
//   // 내부 함수
//   function increaseCount() {
//     // 어떻게 해야 count가 1씩 증가하게 될까?
//     // var count = 0;
//     return ++count;
//   }
//   // 내부 함수를 외부로 내보낸다.
//   return increaseCount;
// };


// 클로저 예제
// 외부 함수
var countDownMaker = function(n) {
    var count = n || 10;
    // 내부 함수
    // 함수 정의 없이 함수 값을 바로 반환 할 수 있다.
    return function (step) {
        // 어떻게 해야 count가 1씩 감소하게 될까?
        // var count = 0;
        return count - (step || 1);
    }
    // 내부 함수를 외부로 내보낸다.
    // return increaseCount;
};

var countDown10 = countDownMaker(); // return function() {}
var countDown20 = countDownMaker(20);
var countDown45 = countDownMaker(45);
var countDown100 = countDownMaker(100);


var countUpMaker = function(n) {
    n = n || 10;
    return function (step) {
        return n + (step || 1);
    };
};

var countUp10 = countUpMaker(); // return function() {}
var countUp20 = countUpMaker(20);
var countUp45 = countUpMaker(45);
var countUp100 = countUpMaker(100);

// 카운트를 관리하는 객체
function makeCountManager(init_count) {
    // 관리할 카운트 값을 초기화
    var memoried_count = init_count = init_count || 0;
    return{
        // 카운트 증가 메서드
        increase: function(step) {
            init_count += (step || 1);
            return init_count;
        },
        // 카운트 감소 메서드
        decrease: function(step) {
            init_count -= (step || 1);
            return init_count;
        },
        // 카운트 초기화 메서드
        reset: function(value) {
            init_count = value || memoried_count;
        },
        // 현재 카운트 값을 반환하는 메서드
        getCount: function() {
            return innit_count;
        }
    };
}

// 함수를 반환하는 함수

// ------------------------------------------------------
// 엄격모드(Strict)

// ES5에서 추가된 엄격 모드(Strict Mode)는 기능 추가가 아닌,
// 오류 발생 가능성이 있는 코드를 제거하는 역할을 한다.

// 엄격 모드를 지원하는 브라우저에서는 오류 발생 가능성이 있는 코드 작성 시 오류를 발생하지만,
// 지원하지 않는 구형 브라우저는 이를 단순하게 무시한다. 즉, 호환성에 문제는 없다.
// (하위 호환성 유지) 엄격 모드는 개별적인 유효범위(함수, 전역 유효범위 등)
// 내부 첫 라인에 아래와 같은 문자열을 선언하면 된다.



// ------------------------------------------------------
// Javascript 함수는 일급객체

// Javascript 함수는 일반 함수로서
// 때론 생성자 함수, 함수의 인자, 함수의 반환 값, 객체의 멤버, 배열의 원소로서 다양하게 사용된다.

// 일급객체(First-Class Object)의 특징

// 변수, 데이터 구조 안에 담을 수 있다.
// 인자(Parameter, Argument)로 전달할 수 있다.
// 반환 값(Return Value)으로 사용할 수 있다.
// 런타임(실행) 중에 생성할 수 있다.
// 할당에 사용된 이름과 관계 없이 고유하게 식별할 수 있다.

// CASE 1. 변수에 함수를 할당할 수 있다.
// CASE 2. 함수의 인자로 함수가 전달될 수 있다.
// CASE 3. 함수의 반환 값으로 함수를 내보낼 수 있다. (객체도 가능)
// CASE 4. 객체의 속성으로 함수를 설정할 수 있다. (메소드)
// CASE 5. 배열의 원소(Item)로 함수를 메모리할 수 있다.



// ------------------------------------------------------
// JavaScript는 객체 지향 언어

// Javascript는 잘 알려진 객체 지향 언어의 Class와는 다른 방법(Prototype)으로 객체 지향을 구현할 수 있다.
// (ECMAScript 2015(ES6)에서는 Class를 사용할 수 있다) Javascript가 지원하는 프로토타입(Prototype)은
// 코드를 재사용하는 방법 중 하나로 객체의 능력을 상속(Inheritance) 할 수 있도록 구현한다.

// 사용자가 생성한 모든 함수는 prototype 속성(프로퍼티)을 가지는데 이는 프로토타입은 객체(빈 객체)를 참조한다.
// 프로토타입 객체에 멤버를 추가하면 상속을 통해 생성자를 통해 생성된 객체(인스턴스)는 이를 물려받아 사용가능하다.
