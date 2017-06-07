/*! FDS.js @ 2017, yamoo9.net */

// 전역과 구분되는 독립된 공간을 형성
// 모듈을 구현해서 내부에 접근 가능한 객체를 만들자.

// var FDS = function (){

//     var fds = '프론트엔드 개발 스쿨';
//     console.log(fds);

// }();

var FDS = function (){


    function type(data) {
        return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
    }

    function isType(data, kind) {
        // validateError()를 사용하여 오류 조건을 발생시킴:
        // kind 데이터 유형이 'string'이 아니면(!), 오류를 발생시킨다. (설정 메시지 출력)
        validateError(kind, '!string', '2번째 전달인자는 문자열이어야 합니다');
        return type(data) === kind;
    }

    function validateError(data, kind, error_message) {
        data = type(data);
        if ( kind.indexOf('!') === 0 ) {
            if ( data !== kind.slice(1) ) { throw error_message || '두 값이 다르기에 오류입니다.'; }
        } else {
            if ( data === kind ) { throw error_message || '두 값은 동일하기에 오류입니다.'; }
        }
        return '오류는 발생하지 않았습니다';
    }
  
    function randomNumber(n){
        n = n || 2; // 0,1
        validateError(n, '!number', '숫자 값을 전달해주세요.');
        return Math.floor( Math.random() * n );
    }

    function randomMinMax(min, max) {
        validateError(min, '!number', '첫번째 인자 최솟값을 전달해주세요.');
        validateError(max, '!number', '두번째 인자 최댓값를 전달해주세요.');
        max = max - min;
        return Math.round( Math.random() * max ) + min;
    }

    function randomRange(n1, n2) {
        var min, max;
        min = Math.min(n1, n2);
        max = Math.max(n1, n2);
        return randomMinMax(min, max);
    }

    function isNumber(data) {
        return isType(data, 'number') && !Number.isNaN(data);
    }
   
    function isString(data) {
        return isType(data, 'string');
    }
   
    function isBoolean(data) {
        return isType(data, 'boolean');
    }
  
    function isFunction(data) {
        return isType(data, 'function');
    }
    
    function isArray(data) {
        return isType(data, 'array');
    }
   
    function isObject(data) {
        return isType(data, 'object');
    }

    function makeArray(o) {
        // var array = [];
        // if ( !('length' in o) ) { return []; }
        // for ( var i=0; i<o.length; i++ ) {
        //   array.push(o[i]);
        // }
        // return array;
        if ( !('length' in o) ) { return []; }
        // 메서드 빌려쓰기 패턴
        return Array.prototype.slice.call(o); // silce(0)을 적용시켜야 함
    } 

    // 클로저를 기억하는 객체를 반환
    // 전역에서 접근 가능한 네임스페이스 객체 FDS
    return{
        info: {
            version: '0.0.1',
            author: '',
            url: ''
        },
        // 공개 API
        isNumber:        isNumber,
        isFunction:      isFunction,
        isArray:         isArray,
        isObject:        isObject,
        makeArray:       makeArray,
        validateError:   validateError
    };

}(window); // IIFE 패턴 사용