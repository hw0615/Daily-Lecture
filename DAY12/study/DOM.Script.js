/*! DOM.Script.js @ 2017, yamoo9.net */

// HTML DOM
(function(global, document){
  'use strict';

  var html, head, body;
  html = document.documentElement;
  head = document.head;
  body = document.body;
  console.log('html:', !!html);               // 접근 가능
  console.log('head:', !!head);               // 접근 가능
  console.log('before load - body is:', !!body); // null 반환 (접근 X)

  // 초기화 함수
  // function init() {
  //   body = document.body;
  //   console.log('after load - body is:', !!body); // 접근 가능
  // }

  // window 객체의 onload 이벤트 속성에 함수를 할당 (시점에 함수 실행
  // window.onload = init;

  // body 바로 아래서 스크립트를 실행했을 때 h1 요소를 찾을 수 있나?
  var headline = document.getElementsByTagName('h1'); // ['h1']
  console.log('headline:', headline);
  console.log('headline[0].textContent:', headline[0].textContent);

}) // (window, window.document);

// Core(XML) DOM
;(function(global){
  'use strict';

  var document = global.document;
  var html = document.getElementsByTagName('html').item(0);
  var head = document.getElementsByTagName('head').item(0);
  var body = document.getElementsByTagName('body').item(0);

  // DOM API를 사용해서 노드리스트에 접근한 후, 개별 아이템을 추출
  var headline = document.getElementsByTagName('h1')[0];
  var abbr_in_headline = headline.getElementsByTagName('abbr')[0];

  console.log('headline:', headline);
  console.log('abbr_in_headline:', abbr_in_headline);

  // 부모노드(parentNode) 탐색
  console.log('h1 요소노드의 부모의 부모의 부모는?', headline.parentNode.parentNode.parentNode); // #document
  console.log('h1 요소노드의 부모의 부모의 부모는 document 객체?', headline.parentNode.parentNode.parentNode === document); // true
  console.log('document 객체의 부모노드는?', document.parentNode);     // null
  console.log('h1 요소의 부모노드는?', headline.parentNode);           // body
  console.log('abbr 요소의 부모노드는?', abbr_in_headline.parentNode); // h1

  // 자식노드(firstChild, lastChild) 탐색
  console.log('headline의 첫번째 자식은?', headline.firstChild); // 공백이 없다면 ? <abbr> : #text
  console.log('headline의 마지막 자식은?', headline.lastChild);  // ' Script'

  // 이전/다음 형제노드(previousSibing, nextSibing) 탐색
  console.log(abbr_in_headline.previousSibling); // ?
  console.log(abbr_in_headline.nextSibling);     // ?

  // 자식노드들 중에서 요소노드만 골라내기
  function onlyElementNodeCollection(el) {
    if ( !el || el.nodeType !== 1 ) { throw '요소노드를 전달하세요'; }
    var el_childs = el.childNodes;
    var collection = [];
    // 순환문을 돌려서 요소 노드만 별도로 수집한 객체를 변수에 참조해보자.
    // 노드.nodeType (요소노드 = 1, 속성노드 = 2, 텍스트노드 = 3, 주석노드 = 8)
    for ( var i=0, l=el_childs.length; i<l; i++ ) {
      var child = el_childs[i];
      // if ( child.nodeType === 1 ) {
      //   collection.push(child);
      // }
      if ( child.nodeType !== 1 ) { continue; }
      collection.push(child);
    }
    return collection;
  }
  // 위의 로직을 가진 유틸리티 함수를 만들어 보자.
  var result = onlyElementNodeCollection(headline);
  // 결과 확인
  console.log(result);

}) // (window);

// DOM API (탐색(Travelsing) 속성)
;(function(global){
  'use strict';
  var document = global.document;

  // NODE.childNodes   VS   NODE.children
  // childNodes 는 모든 자식 노드를 반환
  // children 은 자식 중, 요소노드만 반환

  var target = document.getElementById('target-parent');
  // console.log(target);
  console.log('target.childNodes:', target.childNodes);
  console.log('target.children:', target.children);

  console.log('target.firstChild === target.childNodes[0]:', target.firstChild === target.childNodes[0]);
  console.log('target.lastChild === target.childNodes[target.childNodes.length - 1]:', target.lastChild === target.childNodes[target.childNodes.length - 1]);

}) // (window);

;(function(global){
  'use strict';

  var document = global.document;

  // ——————————————————————————————————————
  // Node Info.
  // ——————————————————————————————————————
  // nodeName
  // nodeType
  // nodeValue
  var target_parent, target_headline, target_abbr;

  target_parent   = document.getElementById('target-parent');
  target_headline = target_parent.firstChild;
  target_headline = target_parent.getElementsByTagName('h1').item(0);
  target_abbr     = target_headline.firstChild;
  target_abbr     = target_headline.getElementsByTagName('abbr')[0];

  console.log('target_parent.nodeName:',target_parent.nodeName);    //  nodeName  : DIV, tagName (DOM Lv3까지 표준)
  console.log('target_parent.localName:',target_parent.localName);  //  nodeName  : div  // IE 검증 필요
  console.log('target_parent.nodeType:',target_parent.nodeType);    //  nodeType  : 1 === document.ELEMENT_NODE
  console.log('target_parent.nodeValue:', target_parent.nodeValue); //  nodeValue : null

  console.log('target_headline.nodeName:',target_headline.nodeName);    //  nodeName  : #text | H1
  console.log('target_headline.nodeType:',target_headline.nodeType);    //  nodeType  : 3     | 1
  console.log('target_headline.nodeValue:', target_headline.nodeValue); //  nodeValue :       | null

  // TypeError 오류 발생: Cannot read property 'nodeName' of null
  console.log('target_abbr.nodeName:',target_abbr.nodeName);    //  nodeName  : Error | ABBR
  console.log('target_abbr.nodeType:',target_abbr.nodeType);    //  nodeType  : Error | 1
  console.log('target_abbr.nodeValue:', target_abbr.nodeValue); //  nodeValue : Error | null

  // ---------------------------------------
  // 정리!
  //
  // 요소노드는 nodeType 속성 값이 1 이며, nodeName 값은 요소의 이름을 대문자로 반환한다.
  // 요소노드는 nodeValue 속성 값을 가지지 않지만, textContent, innerText 속성으로 값을 도출할 수 있다.
  // 텍스트노드는 nodeType 속성 값이 3 이며, nodeName 속성 값은 '#text' 를 반환한다.
  // 텍스트노드는 nodeValue 속성 값을 문자 값으로 반환한다.

  // 지금까지 배운 노드의 정보
  // NODE.nodeType
  // NODE.nodeName
  // NODE.nodeValue
  // NODE.parentNode
  // NODE.firstChild
  // NODE.lastChild
  // NODE.previousSibling
  // NODE.nextSibling
  // NODE.childNodes
  // NODE.children

}) // (window);

;(function(global){
  'use strict';

  var document = global.document;

  var target_parent, target_headline, target_abbr;

  // id(), tag() 유틸리티 함수를 정의해보자.
  var id, tag, tagAll;
  id = function(name) {
    return document.getElementById(name);
  };
  // tag = function(name, context) {
  //   return (context || document).getElementsByTagName(name);
  // };
  // 응용: tagAll() 함수를 만들어, tag() 와 용도를 달리 해보자.
  // tagAll()
  tagAll = function(name, context) {
    return (context || document).getElementsByTagName(name);
  };
  tag = function(name, context) {
    return tagAll(name, context)[0];
  };

  target_parent   = id('target-parent');
  target_headline = tag('h1');
  target_abbr     = tag('abbr', target_parent);
  var element_all = tagAll('*');

  console.log('target_parent:', target_parent);
  console.log('target_headline:', target_headline);
  console.log('target_abbr:', target_abbr);
  console.log('element_all:', element_all);

}) (window);

;(function(global, $){
  'use strict';

  var document = global.document;

  // id?, tag?, tagAll?

  var target_parent   = $.id('target-parent'),
      target_headline = $.tag('h1'),
      target_abbr     = $.tag('abbr' ,target_headline),
      all_els         = $.tagAll('*', target_parent);

  console.log('target_parent:', target_parent);
  console.log('target_headline:', target_headline);
  console.log('target_abbr:', target_abbr);
  console.log('all_els:', all_els);

  // FDS 네임스페이스 객체의 first() 탐색 메서드 활용
  var target_first = $.first(target_parent);
  console.log('target_first:', target_first);
  var target_first_first = $.first(target_first);
  console.log('target_first_first:', target_first_first);

  var html_lastChild = $.last(document.documentElement);
  console.log('html_lastChild:', html_lastChild);
  var head_lastChild = $.last(document.head);
  console.log('head_lastChild:', head_lastChild);
  var body_lastChild = $.last(document.body);
  console.log('body_lastChild:', body_lastChild);

}) // (window, window.FDS);

;(function(global, document, $){
  'use strict';

  function nextEl(el) {
    // 반복 구문 수행
    // el 다음 노드를 찾아서
    // 요소 노드인지 확인
    // 아니면... 다시
    // el 다음 노드를 찾아서
    // 요소 노드인지 확인
    do { el = el.nextSibling; }
    while( el && el.nodeType !== 1 );
    return el;
  }

  function prevEl(el) {
    do { el = el.previousSibling; }
    while(el && el.nodeType !== 1);
    return el;
  }

  // $.prev(), $.next() 활용 예시
  var head_first_next = $.next( $.first(document.head) );
  var body_last_prev  = $.prev( $.last(document.body) );

  console.log('head_first_next:', head_first_next);
  console.log('body_last_prev:', body_last_prev);

}) //(window, window.document, window.FDS);