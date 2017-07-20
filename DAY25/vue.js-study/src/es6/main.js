/*! main.js @ 2017, yamoo9.net */
// 지난 시간 공부한 내용 정리
// new Vue() 생성자 함수를 사용해서 객체를 생성
// 생성된 Vue{} 객체는 실제 문서에 존재하는 하나의 요소에 마운트
// el 속성 -> 마운트(Mount) 요소의 선택자 문자열로 설정
// 뷰 객체가 소유하는 데이터(자신만의)
// data 속성 -> 객체({}) 할당.
// 객체는 참조형이기에 외부에서 컨트롤.
// 반응성(Reactivity)이 설정되기 위해서는
// 초기 준비과정(Bootstraping)에서 설정되어야 한다.
// data 속성은 뷰 객체({})의 속성으로 프록시(Proxy)된다.

// Vue{}
// state   데이터(data)
// view    템플릿(template)
// actions 메서드(methods)
((global)=>{
  'use strict';

  // 뷰 객체 생성
  // .$el 속성        : 마운트 된 실제 문서 객체
  // .$mount() 메서드  : 마운트할 요소를 설정(lazy setting)
  let app = global.app = new Vue({
    el: '#app',
    // template: '#app-template',
    // template: '<div></div><div></div>',
    data: {
      info: {
        author: 'yamoo9',
        org: 'Instructor'
      },
      components: [
        'tab',
        'tabs',
        'carousel',
        'accordian',
        'global navigation bar'
      ],
      raw_html: `
        <h1 class="tit_daum #logosearch">
          <span>{{ info.org }}</span>
          <a rel="home" href="http://www.daum.net/" class="link_daum #logo">
            <img src="https://t1.daumcdn.net/daumtop_chanel/op/20170315064553027.png" width="180" height="94" id="daum" class="img_thumb" alt="Daum">
          </a>
        </h1>
      `
    }
  });

  // 지연된 마운팅 처리
  // global.setTimeout(()=>{
  //   app.$mount('#app');
  // }, 2000);

})(window);