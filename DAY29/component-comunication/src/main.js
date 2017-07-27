import Vue from 'vue';
import App from './App';

// Vue 폼 유효성 검사
  // input, textarea, select, ..., => v-model
  // Modifiers: .lazy, .number, .trim
  // multi: checkbox, multiple ... []

// Vue 컴포넌트 (중첩)
  // Define Global Component: Vue.component(id, {})
  // SET: Vue.component(id, {}) === function(constructor, class)
  // GET: Vue.component(id)
  // ParentComponent: <slot>
  // ChildComponent: <slot>
  // <parent>
  //   <child>Child content</child>
  // <parent>

new Vue({
  el: '#app',
  render: h => h(App)
});