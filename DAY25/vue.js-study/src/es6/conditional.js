
/*! main.js @ 2017, yamoo9.net */

// 오늘 배운 것
// 인스턴스
// 라이프사이클훅
// 메서드
// 조건부 렌더링
// v-if, v-else, v-esle-if, v-show
// 리스트 렌더링
// v-for 객체, 배열, 숫자, 문자
// v-for="alias in(of) data"
// v-for="(alias,index) in(of) array"
// v-for="(value,key,index) in(of) object"
// 디렉티브
// v-text, v-html, v-once, v-cloak
// v-on, v-bind, v-model



((global, $)=>{
  'use strict';

  // 마운트 엘리먼트 설정
  // 데이터 설정
  // true or false 값을 가진 데이터 속성을 추가

  let data = {
    is_login: false,
    numbers: 10,
    users: [
      {
        name: '김민기',
        img: 'https://search.pstatic.net/common?type=o&size=120x150&quality=95&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F201608%2F20160816113515714-5897352.jpg',
        id: '@mk.kim',
        bio: 'iure nulla distinctio vero, non itaque pariatur unde exercitationem enim alias labore eligendi.'
      },
      {
        name: '김진아',
        img: 'https://search.pstatic.net/common?type=o&size=120x150&quality=95&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2F53%2F201007211101455201.jpg',
        id: '@hm.song',
        bio: 'Voluptates doloremque illum error, odit quibusdam maiores sint, consequatur.'
      },
      {
        name: '유건',
        img: 'https://search.pstatic.net/common?type=o&size=120x150&quality=95&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2F149%2F201107201212419221.jpg',
        id: '@sy.choun',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
      }
    ],
    metopo: {
      concept: '막춤',
      who: '막장 드라마 주인공'
    },
    new_content: ''
  };

  let methods = {
    changeMode() {
      this.is_login = !this.is_login;
    },
    destroyVueInstance() {
      this.$destroy();
    },
    addNewContent(e) {
      this.new_content = e.target.value;
    }
  };

  let bootstrap = {
    el: '#app',
    data,
    methods,

    // Life Cycle Hook //
    // beforeCreate, created
    // beforeMount, mounted
    // beforeUpdate, updated
    // beforeDestroy, destroyed

    // created () {
    // console.log('Created');
    // },
    // beforeMount () {
    //   console.log('before Mount');
    //   console.log(this.users);
    // },
    mounted () {
      // Vue + DOM 스크립팅, jQuery 스크립팅
      console.log('Mounted');
      $('.add-content-btn').on('click', function(){
        console.log('click');
        var $prev = $(this).prev();
        console.log($prev.length);
        var o = global.app.metopo;
        var key = 'user_input';
        var value = $prev.val();
        // Vue 생성자 함수의 메서드인 set()을 사용하는 방법
        Vue.set(o, key, value);
        // Vue{} 인스턴스(객체) 메서드를 사용하는 방법
        // Vue{} 등록된 methods 안의 this.$set()
        $prev.val('');
      });
    }
  };

  // 뷰 객체 생성
  global.app = new Vue(bootstrap);

})(window, window.jQuery);

(function(global, $, Vue){
  'use strict';

  $('.add-content-btn').on('click', function(){
    var $prev = $(this).prev();
    var o = global.app.metopo;
    var key = 'user_input';
    var value = $prev.val();
    // Vue 생성자 함수의 메서드인 set()을 사용하는 방법
    Vue.set(o, key, value);
    // Vue{} 인스턴스(객체) 메서드를 사용하는 방법
    // Vue{} 등록된 methods 안의 this.$set()
    $prev.val('');
  });

}); //(window, window.jQuery, window.Vue);


// ——————————————————————————————————————
// Vue 반응성(Reactivity) 시스템의 비밀
// ES5 `Object.defineProperty()` 사용
// IE 9+ 지원 (Vue가 IE 8-를 지원 안하는 이유)
// ——————————————————————————————————————

const fds = {};

{
  let name = '';
  let notify = msg => console.log(msg);
  Object.defineProperty(fds, 'name', {
    // enumerable: true,
    // configurable: true,
    get() {
      return name;
    },
    set(v) {
      notify('update: ' + v);
      name = v;
    }
  });
}