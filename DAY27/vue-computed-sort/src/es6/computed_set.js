/*! main.js @ 2017, yamoo9.net */
((global)=>{
  'use strict';

  var app = new Vue({
    el: '.app',

    data: {
      search: '',
      movies: [
        '덩케르크',
        '오츠',
        '위시어폰',
        '100미터',
        '우리를 침범하는 것들',
        '프란츠',
        '바람의 춤꾼',
        '47미터',
        '불온한 당신',
        '다크 나이트',
        '서서평, 천천히 평온하게',
        '군함도',
        '첫키스만 50번째',
        '내 사랑',
        '박열',
        '파밍 보이즈',
        '스파이더맨: 홈커밍',
      ],
      user: {
        first_name: 'james',
        last_name: 'apolo'
      }
    },

    computed: {

      // computed 속성: GETTER
      // full_name(){
      //   return `${this.user.first_name} ${this.user.last_name}`;
      // },

      // computed 속성: SETTER
      full_name: {
        get() {
          return `${this.user.first_name} ${this.user.last_name}`;
        },
        set(v){
          let name = v.split(' ');
          this.user.first_name = name.shift();
          this.user.last_name = name.pop();
        }
      },

      searched_movie(){
        return this.movies.filter(movie=>movie.includes(this.search.trim()));

        // ES5
        // this.movies.filter(function(movie){
        //   if ( movie.indexOf(this.search) > -1 ) {
        //     return movie;
        //   }
        // }, this);
      },
    },

    methods: {
      // 사용자 입력에 따라 search 데이터를 변경해주는 메서드
      inputChangeSearch(event){
        this.search = event.target.value;
      }
    }

  });



})(window);
