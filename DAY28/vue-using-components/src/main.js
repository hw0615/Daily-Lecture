import Vue from 'vue';
import App from './App.vue';

// 글로벌 Vue 컴포넌트 등록
// import AppHeadline from './components/AppHeadline'
// Vue.component('app-headline', AppHeadline); 

// Root Component 
new Vue({
  el: '#app',
  render: h => h(App)
});
