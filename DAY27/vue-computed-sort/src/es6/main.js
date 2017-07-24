/*! main.js @ 2017, yamoo9.net */
((global)=>{
  'use strict';

  global.app = new Vue({
    el: '.app',
    data: {
      a: 1,
      b: 8,
      c: {
        cup: '종이컵'
      },
      d: ''
    },
    computed: {
      computed_a(){
        return '계산된 `a` double 값:' + this.a * this.a;
      }
    },
    watch: {
      a(new_v, old_v){
        console.log('a ::: new_v: %s, old_v: %s', new_v, old_v);
        // 지연된 처리 (서버에서 데이터가 전송된 후 처리하는 것을 시뮬레이션)
        global.setTimeout(()=>this.d = new_v, 2000);
      },
      b: 'watch_b',
      c: {
        handler: function(n,o) { console.log('c ::: n: %s, o: %s', n, o); },
        deep: true
      }
    },
    method: {
      watch_b(value, old_value) {
        console.log('b ::: 현재 값: %s, 이전 값: %s', value, old_value);
      }
    }
  });

})(window);
