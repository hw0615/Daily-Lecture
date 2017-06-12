/*! FDS.js @ 2017, yamoo9.net */

var FDS = function(global){

  // ——————————————————————————————————————
  // JavaScript 유틸리티 함수
  // ——————————————————————————————————————

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
  function randomNumber(n) {
    n = n || 2; // 0, 1
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
    if ( !('length' in o) ) { return []; }
    return Array.prototype.slice.call(o);
  }

  // ——————————————————————————————————————
  // DOM 검증 유틸리티 함수
  // ——————————————————————————————————————
  function isElNode(node) {
    return node.nodeType === 1;
  }
  function validateElNode(el_node) {
    if ( !el_node || !isElNode(el_node) ) {
      throw '요소노드를 반드시 전달해야 합니다';
    }
  }

  // ——————————————————————————————————————
  // DOM 선택 API: 유틸리티 함수
  // ——————————————————————————————————————
  function id(name) {
    validateError(name, '!string', '전달인자는 문자여야 합니다.');
    return document.getElementById(name);
  }
  function tagAll(name, context) {
    validateError(name, '!string', '전달인자는 문자여야 합니다.');
    if ( context && !isElNode(context) ) {
      throw '두번째 전달인자는 요소노드여야 합니다.';
    }
    return (context||document).getElementsByTagName(name);
  }
  function tag(name, context) {
    return tagAll(name, context)[0];
  }
  // ——————————————————————————————————————
  // DOM 탐색 API: 유틸리티 함수
  // ——————————————————————————————————————

  // function firstChild(el_node) {
    //   // 전달인자 검증
    //   if ( !el_node || el_node.nodeType !== 1 ) {
    //     throw '요소노드를 반드시 전달해야 합니다';
    //   }
    //   // IE 9+
    //   // return el_node.firstElementChild;
    //   // IE 8- 지원하는 크로스 브라우징 유틸리티 함수를 만든다면?
    //   // if ( 'firstElementChild' in Element.prototype ) {
    //   if ( el_node.firstElementChild ) {
    //     return el_node.firstElementChild;
    //   } else {
    //     return children[ --children.length ];
    //   }
  // }

  var firstChild = function(){
    var _firstChild = null;
    // 조건을 1번만 확인
    if ( 'firstElementChild' in Element.prototype ) {
      _firstChild = function(el_node) {
        validateElNode(el_node);
        return el_node.firstElementChild;
      };
    } else {
      _firstChild = function(el_node) {
        validateElNode(el_node);
        return el_node.children[0];
      };
    }
    return _firstChild;
  }();
  var lastChild = function(){
    var _lastChild = null;
    if ( 'lastElementChild' in Element.prototype ) {
      _lastChild = function(el_node) {
        validateElNode(el_node);
        return el_node.lastElementChild;
      };
    } else {
      _lastChild = function(el_node) {
        validateElNode(el_node);
        var children = el_node.children;
        return children[ --children.length ];
      };
    }
    return _lastChild;
  }();
  var nextSibling = function($$) {
    var _nextSibling;
    if ( 'nextElementSibling' in $$ ) {
      _nextSibling = function(el_node) {
        validateElNode(el_node);
        return el_node.nextElementSibling;
      };
    } else {
      _nextSibling = function(el_node) {
        validateElNode(el_node);
        do {
          el_node = el_node.nextSibling;
        } while(el_node && !isElNode(el_node));
      };
      return el_node;
    }
    return _nextSibling;
  }(Element.prototype);

  var previousSibling = function() {
    var _previousSibling;
    if ( 'previousElementSibling' in Element.prototype ) {
      _previousSibling = function(el_node) {
        validateElNode(el_node);
        return el_node.previousElementSibling;
      };
    } else {
      _previousSibling = function(el_node) {
        validateElNode(el_node);
        do {
          el_node = el_node.previousSibling;
        } while(el_node && !isElNode(el_node));
        return el_node;
      };
    }
    return _previousSibling;
  }();

  // ---------------------------------------
  // 반환: FDS 네임스페이스 객체
  return {
    info: {
      version: '0.0.1',
      author: 'yamoo9',
      url: 'https://yamoo9.github.io/FDS',
      license: 'MIT'
    },
    // 공개 API
    // JavaScript 유틸리티
    isNumber:      isNumber,
    isFunction:    isFunction,
    isArray:       isArray,
    isObject:      isObject,
    makeArray:     makeArray,
    validateError: validateError,
    // DOM 선택 API: 유틸리티
    id: id,
    tagAll: tagAll,
    tag: tag,
    // DOM 탐색 API: 유틸리티
    first: firstChild,
    last: lastChild,
    prev: previousSibling,
    next: nextSibling
  };

}(window);