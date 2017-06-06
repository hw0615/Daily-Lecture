/*! 01.functions.js @ 2017, yamoo9.net */

// ——————————————————————————————————————
// 함수
// ——————————————————————————————————————

// ---------------------------------------
// 함수 선언하기
// 1. 함수 식(익명함수)을 변수에 할당 (대입) -> 참조
var registerUserInfo = function() { console.log ('registerUserInfo 함수 실행'); };
// 2. 함수 이름을 붙여서 선언하기 -> 함수 선언문
function getUserInfo() { console.log('getUserInfo 함수 실행'); }


// ---------------------------------------
// 함수 호출하기
// 함수인지 검증 후 실행

// if[문]을 사용한 예
if ( isFunction(registerUserInfo) ) {
    registerUserInfo();
}

// [식] 논리연산자(&&,||)를 사용한 예
// m1 && m2: m1이 참일 때 m2도 실행
// m1 || m2: m1이 거짓일 때 m2가 실행
isFunction(getUserInfo) && getUserInfo();


// ---------------------------------------
// 함수 범위(영력, Scope)
// 전역, 지역
// ES6 이전의 환경에서는 범위는 함수 영역 밖에 존재하지 않는다.

// ---------------------------------------
// 스코프 체인(Scope Chain)

// Global Scope
var g_scope = '전역 변수';
// Local Scope (in function)
function localScope() {
    // 함수 안 (지역)
    // 1. 변수 영역
    // 2. parameters(매개변수) 영역
    // 3. 함수를 포함하는 상위 영역
    // 4. 전역
    // 5. ReferenceError 발생!
    console.log('g_scope:', g_scope);


    // 함수는 실행 가능
    innerScopeFn();
    // 스코프 호이스팅 현상 발생
    function innerScopeFn() {
        console.log('l_scope:', l_scope); // ???
        var l_scope = '지역 변수';
    }
}


// ---------------------------------------
// this 컨텍스트
// 

// 전역 함수 정의
// window 전역 객체의 속성(메서드)
function whoCallMe() {
    // this는 자신(this)을 포함하는 함수를 실행시킨 컨텍스트 객체(주체)
    console.log('this', this);
}
// 명시적 함수 실행
window.whoCallMe(); // this -> window {}

// 암시적 함수 실행
whoCallMe(); // this -> window {}

// 객체의 속성(메서드) 정의
var me = {
    whatIsThis: function() {
        console.log('this:', this);
    }
};

// 명시적 함수(객체.속성(메서드)) 실행
me.whatIsThis(); // this -> me {}


// ---------------------------------------
// Arguments(전달인자)와 Parameters(매개변수)
function displayBlockElement(el) {
    // 매개변수 e1 = 전달인자;
    // el = <element id = "app"></element>;
    // var 를 사용하는 것은 일반 변수
    // 함수의 선언 구문 () 괄호 안에 선연된 변수 === 매개변수(parameters)
    // 함수 로직
    // 전달 받은 요소의 display 스타일 속성 값을 'block'으로 설정한다.
    el.style.display = 'block';
    // CSS 속성(2개 이상의 음절로 구분되는)을 적용한 예시
    el.style.borderTopColor = '#4321fe';
    el.style['margin-right'] = '1rem';
}

// 함수가 실행될 떄,
// 무엇을 전달할 것인가?
// 전달인자(arguments)
// displayBlockElement ( document.getElementById('app') ); // <element id ="app"></element>
 
// this 참조 검증
// 전역 함수를 정의
// 전역 함수 명시적 실행
// 전역 함수 암시적 실행을 통해 this 가 참조하는 객체가 무엇인지 확인
// 전역에서 this는 무엇을 참조(가리키나)?

// 사용자 객체를 정의
// 사용자 객체의 메서드로 이미 정의된 바 있는 전역 함수를 참조 시켜본다.. (함수이름 O, 함수이름() X)
// 사용자 객체의 메서드를 실행해 봄으로서 this 가 참조하는 객체를 확인한다.


// ---------------------------------------
// Arguments(전달인자) 객체

// 수의 합을 반환하는 함수
function sum(n1, n2, n3, n4, n5) {
    // 전달된 인자가 몇 개인지 모를때?
    // 인자를 집합으로 만들면?
    // 사용자가 전달한 인자들을 집합(Array)의 아이템으로 설정해보세요.

    var num_collection = [n1, n2, n3 ,n4 ,n5];
    num_collection.push(n3);
    num_collection.push(n4);
    num_collection.push(n5);

    // num_collection.length === 5

    // length를 알고 있는 당신?
    // 구문 반복 처리
    // while, do ~ while, for
    var l = num_collection.length; // l === 5
    var result = 0;
    while (l--) {
        var n = num_collection[l]; // 4, 3, 2, 1
        if ( !isNumber(n) ) { throw '오류' }
        result += n;
    }
    return result;
}

function anotherSum() {
  // 사용자가 함수를 실행할 때, 전달한 인자의 집합 객체를 참조하는 변수 제공
  // 유사 배열(Array like Object): 배열과 비슷
  // 배열처럼 length 속성을 가진다.

  // arguments // [1, 2], [1, 2, 3, 4, 5], [1010, 100, 210, 35, -20]

  // for ( var n, k=0, i=0, l=arguments.length; i<l; ++i ) {
  //   n= arguments[i];
  //   k += n;
  // }
  // return k;

  for ( var n=0, i=0, l=arguments.length; i<l; ++i ) {
    n += arguments[i];
  }
  return n;
}

var r1 = anotherSum(1, 2); // 2
var r2 = anotherSum(1, 2, 3, 4, 5); // 5
var r3 = anotherSum(1010, 100, 210, 35, -20); // 5

console.log('r1:', r1);
console.log('r2:', r2);
console.log('r3:', r3);


// ---------------------------------------------------
// arguments 객체는 배열일까?
function argumentsObjectIsntArray() {
    // arguments 객체는 유사 배열로
    // length 속성을 가지지만,
    // 배열의 메서드를 사용할 수는 없다.
    // arguments.callee - 사용 하지 말 것
    console.log(arguments);
    console.log(arguments.length);
    console.log('arguments.push', !!arguments.push);
}

argumentsObjectIsntArray();
argumentsObjectIsntArray([9, 8, 7]);

// ---------------------------------------------------
// arguments 객체는 배열이 아닌데, 배열처럼 사용할 수 없을까?
function argumentsConvertArray() {
  var args = makeArray(arguments);
  console.log(!!args.push); // true
}

// [4, null, [1, 3]]
argumentsConvertArray(4, null, [1, 3])



// ---------------------------------------
// 재귀(再歸) 함수
// 자신을 다시 호출하는 함수
// arguments.callee - 주의! 사용하지 마세요.

// 팩토리얼(Factorial)
// http://www.mathatube.com/images/factorials.JPG
// 1! = 1 = 1
// 2! = 2 x 1 = 2
// 3! = 3 x 2 x 1 = 6
// 4! = 4 x 3 x 2 x 1 = 24
// 5! = 5 x 4 x 3 x 2 x 1 = 120

function factorial(n) {
    if ( n < 2 ) { return 1; }
    // 로직 (반복 순환 처리, 조건이 거짓이 나오게 하여 무한 루프에 빠지지 않게 처리...)
    // 재귀 함수가 아닌, 반복문을 활용한 예
    // var nn = n;
    // do { nn *= --n; }
    // while (n > 1);
    // return nn;

    // 재귀 함수를 활용한 예
    // 2 x 1
    // 3 x 2 x 1
    return n * factorial(--n);
}





// ---------------------------------------
// Number.prototype
// String.prototype
// Boolean.prototype
// Array.prototype
// Object.prototype
//
// 함수 프로토타입 객체가 가진 능력
// .call()
// .apply()
// .bind()    <- 2009, ES5 (IE 9+)
// Function.prototype

// Function.prototype {}
// console.dir(Function.prototype);

// 일반적인 함수 실행에서의 this
// (객체.) 함수() // this === 객체
var electric_fan = {
    name: '선풍기',
    on: function(power, time) {
        console.log('this:', this);
        power = power || 1;
        time = time || 1;
        console.log(this.name + '를 파워' + power +' 만큼 '+ time +'시간 동안 세게 가동하다');
    },
    off: function() {
        console.log('this:', this);
        console.log(this.name + '를 가동 중지하다');
    },
}

// .call(), .apply() 실행에서의 this
// this 컨텍스트 객체를 교체(변경)할 수 있다.
// (객체.)함수.call(컨텍스트 객체, 전달인자(각각 콤마로 구분 전달));
// (객체.)함수.apply(컨텍스트 객체 전달인자(배열로 묶어서 전달));

// .bind() 에서의 this
// 상황에 따라서 함수를 바로 실행시키지 않고, 나중에 임의로 실행시켜야 하는 상황
// this는 컨텍스트 객체를 교체, 전달인자를 2번째 인자 값으로 전달할 수 있다.
// call, apply 와의 차이점!!!! 바로 실행되지 않는다.

var winPowerTime = electric_fan.on.bind(window);

// Q. bind()는 call() 처럼 전달 인자를 콤마로 구분해서 전달하나?
//    아니면 apply() 처럼 전달인자를 배열로 묶어서 전달하나?

// A. 테스트 결과 call() 처럼 콤마로 구분해서 전달해야 하며,
//    배열로 묶어 전달할 경우, 첫번째 인자로 배열이 전달된다.




// ---------------------------------------
// 즉시 실행 함수 (IIFE)

// ---------------------------------------
// 모듈 패턴

// ---------------------------------------
// 클로저(Closures)

// ---------------------------------------
// 엄격모드(Strict)

// ES5에서 추가된 엄격 모드(Strict Mode)는 기능 추가가 아닌,
// 오류 발생 가능성이 있는 코드를 제거하는 역할을 한다.

// 엄격 모드를 지원하는 브라우저에서는 오류 발생 가능성이 있는 코드 작성 시 오류를 발생하지만,
// 지원하지 않는 구형 브라우저는 이를 단순하게 무시한다. 즉, 호환성에 문제는 없다.
// (하위 호환성 유지) 엄격 모드는 개별적인 유효범위(함수, 전역 유효범위 등)
// 내부 첫 라인에 아래와 같은 문자열을 선언하면 된다.



// ---------------------------------------
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



// ---------------------------------------
// JavaScript는 객체 지향 언어

// Javascript는 잘 알려진 객체 지향 언어의 Class와는 다른 방법(Prototype)으로 객체 지향을 구현할 수 있다.
// (ECMAScript 2015(ES6)에서는 Class를 사용할 수 있다) Javascript가 지원하는 프로토타입(Prototype)은
// 코드를 재사용하는 방법 중 하나로 객체의 능력을 상속(Inheritance) 할 수 있도록 구현한다.

// 사용자가 생성한 모든 함수는 prototype 속성(프로퍼티)을 가지는데 이는 프로토타입은 객체(빈 객체)를 참조한다.
// 프로토타입 객체에 멤버를 추가하면 상속을 통해 생성자를 통해 생성된 객체(인스턴스)는 이를 물려받아 사용가능하다.

var multi = function(){
    var k = 0
    for (var i in arguments)
    k *= arguments[i]
    return k
} 
multi(3,4,6,7,9) 