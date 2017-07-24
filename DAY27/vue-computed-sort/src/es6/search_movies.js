/*! main.js @ 2017, yamoo9.net */
((global)=>{
  'use strict';

  // Vue 객체
  //   - State (Model, `data`, `computed`)
  //   - View (`template`)
  //   - Actions (`methods`)

  // computed properties   VS   Methods

  var app = new Vue({
    el: '.app',
    // 데이터에 등록된 속성은 컴퓨티드에서 사용할 수 없다.
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
      ]
    },

    // 의존 속성(data에 등록된 속성)
    // 변경 시점: 의존하는 data 속성이 변하면, 1회 변경 처리
    computed: {
      // Getter Function
      // 의존 data 속성: this.search
      // this.search 값이 변경되면?
      // 무엇을 해야하나?
      // this.movies 데이터(배열)를 필터링
      // 필터링 조건: this.search 값을 포함하는 데이터를 가진 집합을 필터링해야 한다.
      searched_movie(){
        // let copyed_movies = this.movies.slice();

        // ES6
        return this.movies.filter(movie=>movie.includes(this.search.trim()));
      
        // ES5
        // this.movies.filter(function(movie){
        //   if ( movie.indexOf(this.search) > -1 ) {
        //     return movie;
        //   }
        // }, this);
        
      }
    },

    // 메서드
    // 함수(전달인자)
    // 가상 문서객체모델이 구성될 때 마다 다시 실행
    methods: {
      // 사용자 입력에 따라 search 데이터를 변경해주는 메서드
      inputChangeSearch(event){
        this.search = event.target.value;
      }
    }

  });



})(window);
