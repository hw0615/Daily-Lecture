import Vue from 'vue';
import Vue2Filters from 'vue2-filters';
import App from './App';

// Vue v2 Filters 플러그인 사용 설정
Vue.use(Vue2Filters);

// 글로벌 Vue 필터 정의
Vue.filter('uppercase', v => v.toString().toUpperCase());
Vue.filter('lowercase', v => v.toString().toLowerCase());
Vue.filter('number', v => {
  // 숫자(문자) => 문자화
  // 1000 + ''
  // String(1000)
  // (1000).toString()
  // 문자 => 배열화
  // '1000'
  // ['1','0','0','0']
  // 배열의 원소를 Reverse
  // ['1','0','0','0'].reverse()
  // 0001
  v = v.toString().split('').reverse();
  // for문을 사용하여 각 원소를 순환합니다.
  // 3자리 마다, 콤마(,)를 추가 삽입합니다.
  // 000,1
  // 배열을 reverse() 한 후, join() 합니다.
  // 1,000
  // 문자 값을 반환합니다.
  for(let i=0, vl=v.length; i < vl; i+=3) {
    i > 0 && v.splice(i, 1, v[i]+',');
  }
  return v.reverse().join('');
});

new Vue({
  el: '#app',
  render: h => h(App)
});