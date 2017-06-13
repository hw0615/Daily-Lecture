/*! DOM.Script.js @ 2017, yamoo9.net */

(function(global, document, _){
  'use strict';

  // ——————————————————————————————————————
  // 지난 시간에 만든 라이브러리 함수 활용
  // ——————————————————————————————————————

  var fds = _.id('FDS');
  // console.log('fds:', fds);
  var study_content = _.id('study-content');
  // console.log('study-content:', study-content);
  var study_content_lis = _.tagAll('li', study_content);
  // console.log('study_content_lis:', study_content_lis);
  var study_content_links = _.tagAll('a', study_content); // NodeList
  // console.log('study_content_links:', study_content_links);


  var study_content_first_child = _.first(study_content);
  // console.log('study_content_first_child:',study_content_first_child); 
  var study_content_last_child = _.last(study_content);
  // console.log('study_content_last_child:',study_content_last_child); 
  var study_content_first_child_next = _.next(study_content_first_child);
  // console.log('study_content_first_child_next:',study_content_first_child_next); 
  var study_content_last_child_prev = _.prev(study_content_last_child);
  // console.log('study_content_last_child_prev:',study_content_last_child_prev); 


  // <a> 요소에 이벤트 핸들링(속성 <--바인딩--> 함수(핸들러))
  // IE 8 구식 이벤트: on{event_name}
  // IE 9+ 신식 이벤트: addEventListener('event_name', handler);

  // 검증
  // console.log( Array.isArray(study_content_links) ); // false
  // console.log( _.type(study_content_links) );        // 'htmlcollection'

  // 유사 배열인 노드 집함(NodeList)를 순환(반복 처리)
  // 반복 처리하는 일: 이벤트 연결 <<->> 핸들러(함수)

  
  // 대상 찾기
  for ( var i = 0, l=study_content_links.length; i<l; i++) {
    var link = study_content_links.item(i);
    link.onclick = activeParent;
    // console.log('link.onclick', link.onclick);
  }

  function activeParent(){
    // 이벤트 핸들링 구문에서 this는 이벤트의 주인을 가리킨다.
    // console.log(this);
    // this 객체의 부모 객체를 찾아서 'active' 클래스 속성을 추가
    console.log('this.parentNode:', this.parentNode);
    // HTML DOM 방식에서
    // 요소노드에 className 속성 값을 설정
    // this.parentNoce.className = 'active';
    _.parent(this).className = 'active';
    // _.parent(this, 3).className += ' active';
    
    // 브라우저 기본 동작 차단 (Prevent Default Action)
    // 구형 방법
    return false;
  };

}) // (window, window.document, window.FDS);

;(function (global, $){
  'use strict';
  
  // <body> 내부의 모든 요소를 수집
  var body = $.tag('body'); // document.body
  var body_children = $.tagAll('*', body);
  // console.log('body_children:', body_children);

  // 수집된 요소를 순환 처리한다.
  var will_removed = [];
  for ( var i = body_children.length, child; child = body_children[--i]; ) {
    // 처리 과정에서 <script> 요소는 배제한다.
    var node_name = child.nodeName.toLowerCase();
    if ( node_name === 'script' ) { continue; }
    // console.log(node_name);
    // 나머지 요소 중, 자식이 없는 요소를 찾아서
    // 새로운 배열에 수집한다.
    // console.log( node_name, child.hasChildNodes() );
    if ( !child.hasChildNodes() ) {
      will_removed.push(child);
    }
  }
  will_removed.reverse();

})(window, window.FDS);

