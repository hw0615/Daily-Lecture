/*! dom.script.js @ 2017, yamoo9.net */
(function(global, _){
  'use strict';

  var document = global.document;

  // ——————————————————————————————————————
  // 생성 (Creating)
  // ——————————————————————————————————————

  // 동적으로 요소노드를 생성
  // var list = document.createElement('ul');
  // var list_item = document.createElement('li');
  // var headline = document.createElement('h2');
  // var list_link = document.createElement('a');
  // var list_img = document.createElement('img');

  var list      = _.createEl('ul');
  var list_item = _.createEl('li');
  var headline  = _.createEl('h2', '새로운 것은 존재하지 않는다. 아직 내가 못 본 것일 뿐.');
  var list_link = _.createEl('a');
  var list_img  = _.createEl('img');

  console.groupCollapsed('요소노드 검증');

  console.log('list:', list);
  console.log('list_item:', list_item);
  console.log('list_link:', list_link);
  console.log('list_img:', list_img);
  console.log('list.nodeType:', list.nodeType);
  console.log('list_item.nodeType:', list_item.nodeType);
  console.log('list_link.nodeType:', list_link.nodeType);
  console.log('list_img.nodeType:', list_img.nodeType);

  console.groupEnd('요소노드 검증');

  // 동적으로 속성노드를 생성 (거의 사용되지 않음)
  // 생성된 <a> 요소에 href 속성을 설정(생성해서)
  var list_link_href = document.createAttribute('href');
  // 생성된 <img> 요소에 src, alt 속성을 설정(생성해서)
  var list_img_src = document.createAttribute('src');
  var list_img_alt = document.createAttribute('alt');

  // 동적으로 생성된 속성노드의 노드 값을 설정
  list_link_href.nodeValue = 'https://github.com/yamoo9';
  list_img_src.nodeValue = 'https://unsplash.it/300/200/?random';
  list_img_alt.nodeValue = 'architecture';

  // 동적 생성된 속성노드 확인(검토)
  console.groupCollapsed('속성노드 검증');

  console.log('list_link_href:', list_link_href);
  console.log('list_img_src:', list_img_src);
  console.log('list_img_alt:', list_img_alt);
  console.log('list_link_href.nodeType:', list_link_href.nodeType);
  console.log('list_img_src.nodeType:', list_img_src.nodeType);
  console.log('list_img_alt.nodeType:', list_img_alt.nodeType);

  console.groupEnd('속성노드 검증');

  // 동적으로 텍스트노드 생성
  // var headline_text = document.createTextNode('새로운 것은 존재하지 않는다. 아직 내가 못 본 것일 뿐.');
  // var headline_text = _.createText('새로운 것은 존재하지 않는다. 아직 내가 못 본 것일 뿐.');

  console.groupCollapsed('텍스트노드 검증');

  // console.log('headline_text:', headline_text);
  // console.log('headline_text.nodeType:', headline_text.nodeType); // 3

  console.groupEnd('텍스트노드 검증');

  // ——————————————————————————————————————
  // 조작 (Manipulation)
  // ——————————————————————————————————————

  // 요소노드를 요소노드에 붙이려면?
  // 부모노드.appendChild(자식노드)
  // ul
  //  li
  //    h2
  //    a(href)
  //      img(src, alt)
  // list.appendChild(list_item);
  // list_item.appendChild(headline);
  // list_item.appendChild(list_link);
  // list_link.appendChild(list_img);
  _.appendChild(list, list_item);
  _.appendChild(list_item, headline);
  _.appendChild(list_item, list_link);
  _.appendChild(list_link, list_img);
  console.log('list:', list);

  // 속성노드를 요소노드에 붙이려면?
  list_link.setAttributeNode(list_link_href);
  list_img.setAttributeNode(list_img_alt);
  list_img.setAttributeNode(list_img_src);

  // 텍스트노드를 요소노드에 붙이려면?
  // headline.appendChild(headline_text);
  // _.appendChild(headline, headline_text);


}) // (window, window.FDS);

;(function(global, document, _){
  'use strict';

  // unsplash.it 이미지 소스 인덱스/대체텍스트 데이터
  var data = [
    {
      index: '1068',
      alt: '푸른 빛 탁자'
    },
    {
      index: '1017',
      alt: '광활한 산맥'
    },
    {
      index: '1067',
      alt: '빛이 스며드는 해안 도시 풍경'
    },
    {
      index: '1060',
      alt: '커피 향기 가득한 매장'
    },
    {
      index: '1042',
      alt: '수 놓은 별 빛이 흐른다'
    },
    {
      index: '1039',
      alt: '녹색 산림 위 폭포수'
    },
    {
      index: '1027',
      alt: '우수에 찬 눈빛의 여인'
    },
    {
      index: '1013',
      alt: '하얀 차량 내부에서 전화 통화 중인 여인'
    },
    {
      index: '977',
      alt: '아름다운 버섯과 빛의 향연'
    },
    {
      index: '859',
      alt: '강렬한 인상을 주는 붉은 벽과 노란 대문'
    },
  ];

  data.push({
    index: 1062,
    alt: '청순 Dog~~'
  });
  
  // 미션! 하드코딩하지 않고, 동적으로 코드를 생성/붙여보자.
  // 내비게이션 인디케이터를 동적으로 생성한다.

  // 동적 생성해야 할 템플릿 코드
  // <li role="presentation">
  //   <a href class="photo-showcase-indicator" role="tab">
  //     <img src="https://unsplash.it/100/100?image=" alt="">
  //   </a>
  // </li>
  var controller = _.selector('.photo-showcase-controller [role=tablist]');

  for ( var i = 0, l = data.length ; i<l ; ++i ){
    var item  = data[i];
    var index = item.index;
    var alt   = item.alt;

    var li = _.createEl('li');
    li.setAttribute('role', 'presentation');

    var a = _.createEl('a');
    a.setAttribute('role', 'tab');  

    a.setAttribute('href', '');
    a.setAttribute('class', 'photo-showcase-indicator');

    var img = _.createEl('img');
    img.setAttribute('src', 'https://unsplash.it/100/100?image=' + index);
    img.setAttribute('alt', alt);

    _.appendChild(li, a)
    _.appendChild(a, img)
    _.appendChild(controller, li)


    // 반복문안에 function이 있는건 좋지 않다. (학습목적으로 사용)
    
  
    // i 값을 11로만 출력하는 코드

    // a.onclick = function(){
    //   console.log(i)
    //   return false;
    // }


    // 클로저 함수 황용예시
    // 방법 1.

    // a.onclick = function(index) {
    //   return function(){
    //     console.log(this, index);
    //     return false;
    //   };
    // }(i);


    // 방법 2.
    // 이벤트 바인딩 (속성 <-> 함수)

    //   a.onclick = changeShowcaseView(i)

    //   // 이벤트 핸들러(함수) 정의
    //   function changeShowcaseView(index){
    //     return function() {
    //       // this === 클릭한 <a>
    //       console.log(this, index);
    //       // 기본 동작 차단 (구형)
    //       return false;
    //     }
    // }


    // 방법 3.
    // JavaScript 객체는 속성을 만들기가 너~~~~~~~무쉽다.
    // 객체의 속성을 추가하여 메모리하라.
    // a????? <a> 요소노드 === JavaScript 객체
    a.index = i;
    a.onclick = changeShowcaseView;
    
    // function changeShowcaseView(){
    //     // this === 클릭한 <a>
    //     console.log(this, this.index);
    //     // 기본 동작 차단 (구형)
    //     return false;
    //   }

  
    // 방법 3.
    function changeShowcaseView() {
    // this === 클릭한 <a>
    // console.log(this, this.index);
    var source = data[this.index];
    var showcase = _.selector('.photo-showcase img');
    showcase.setAttribute('alt', source.alt);
    var showcase_old_src = showcase.getAttribute('src');

    // 방법 1.
    // .slice(), .indexOf() 를 활용한 예시
    var end_index = showcase_old_src.indexOf('=') + 1;
    var showcase_new_src = showcase_old_src.slice(0, end_index) + source.index;

    // 방법 2.
    // RegExp, replace() 를 활용한 예시
    var showcase_new_src = showcase_old_src.replace(/=.+/, function(){
      return '=' + source.index;
      
    });

    showcase.setAttribute('src', showcase_new_src);
    // 기본 동작 차단 (구형)
    return false;
  };

  // ------------------------------------------
  // 수업 중에 살펴본 String.prototype 객체의 메서드
  // .charAt(index)
  // .substring(start[, end])
  // .substr(start[, length])
  // .indexOf(string)
  // .slice(start[, end])
  // .split(string) => array
  // .replace(string|regexp, string|function)

  // str = https://unsplash.it/900/420?image=1068

    // ex) str.replace('=', '+')
    // ex) str.replace(/=/, function() {
    //   console.log(arguments);
    // })
    // ex) str.replace(/=/, function($1, $2, $3) {
    //   console.log(arguments);
    // })
  }

  // --------------
  // 접근성 개선
  var container       = _.selector('.photo-showcase-container');
  var indicator_first = _.selector('li:first-child a', controller);
  var indicator_last  = _.selector('li:last-child a', controller);
  var container_active = 'active';

  // focus, blur 이벤트 감지
  indicator_first.onfocus = function() {
    // container 요소에 활성화 클래스를 추가한다.
    var container_class = container.getAttribute('class');
    container_class += ' ' + container_active;
    container.setAttribute('class', container_class);
  };
  indicator_last.onblur = function() {
    // container 요소에 활성화 클래스를 제거한다.
    var container_class = container.getAttribute('class');
    container_class = container_class.replace(/active/, '').trim();
    container.setAttribute('class', container_class);
  };
}) (window, window.document, window.FDS);