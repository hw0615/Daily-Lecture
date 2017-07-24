/*! main.js @ 2017, yamoo9.net */
((global)=>{
  'use strict';

  var app = new Vue({
    el: '.app',
    created() {
      this.one_piece = global.one_piece;
      this.one_piece_keys = Object.keys(this.one_piece[0]);
      this.one_piece_keys.forEach(key=>{
        // 반응성 속성 설정
        
        // Vue 스태틱 메서드 사용
        // Vue.set(this.sort_states, key, 1);

        // Vue 인스턴스 메서드 사용
        this.$set(this.sort_states, key, 1);
      });
    },

    data: {
      search: '',
      sort_by: '',
      sort_states: {},
      one_piece_keys: [],
      one_piece: []
    },

    computed: {

      // 사용자가 입력한 정보와 일치하는 내용을 포함한 집합을 반환하는 계산된 속성
      filtered_one_piece(){
        let onepiece = this.one_piece;
        let search   = this.search.trim();
        let sort     = this.sort_by;
        let sort_state = this.sort_states[sort];
        // 조건 1. 사용자가 정보를 입력한 경우
        if ( search ) {
          onepiece = onepiece.filter(member => Object.values(member).some(value => value.includes(search)));
        }

        // 조건 2. 사용자가 정렬 버튼을 누른 경우
        if (sort) {
          // 배열 onepiece를 복사한 후,
          // 복사된 데이터(배열)을 순환 처리 비교 정렬(sort)
          // 결과 반환
          onepiece = onepiece.slice().sort((a,b)=>{
            a = a[sort];
            b = b[sort];
            // console.log('a: %s, b: %s', a, b);
            return ( a > b ? 1 : a < b ? -1 : 0) * sort_state;
          });
        }
        return onepiece;
      }
    },

    methods: {
      // 사용자 입력에 따라 search 데이터를 변경해주는 메서드
      inputChangeSearch(event){
        this.search = event.target.value;
      },
      sortBy(key){
        // 사용자가 선택한 정렬 버튼의 key 값을
        // 데이터 정렬에 사용하고자 this.sort_by에 할당 하였다.
        this.sort_by = key;
        this.sort_states[key] = this.sort_states[key] * -1;
      },
      toggleLabel(key){
        return this.sort_states[key] > 0 ? '오름차순 정렬' : '내림차순 정렬';
      },
      toggleClass(key){
        return this.sort_states[key] > 0 ? 'fa-sort-up' : 'fa-sort-down';
      },
      readableContent(content){
        switch(content){
        case 'name': return '이름';
        case 'shortname': return '애칭';
        case 'nickname': return '별명';
        case 'image': return '사진';
        case 'regiment': return '소속';
        case 'devil_fruit': return '악마의 열매';
        case 'position': return '직위';
        case 'wanted': return '현상금';
        case 'bio': return '소개';
        }
      },
      ellipseContent(content, limit=100, suffix='...'){
        if ( typeof content !== 'string' ) {
          throw '첫번째 인자는 문자열로 전달해주세요.';
        }
        return content.slice(0,limit) + suffix;
      }
    } 
  });



})(window);
