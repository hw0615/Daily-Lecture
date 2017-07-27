<template lang="pug">
  #app.container(v-cloak)
    .columns
      .column.is-6.is-offset-3

        div.content
          strong hi,
          //- span (is="icon-github")
          strong vue.js

        span.select.is-small  
          select(v-model="choice_component")
            option(
              v-for="comp in components"
              :disabled="!comp.value"
              :value="comp.value"
            ) {{ comp.text }}

          //- option(value="" disabled) 로드할 컴포넌트를 선택해주세요.
          //- option(value="app-headline") app-headline
          //- option(value="icon-github") icon-github
        hr

        .box
          div(v-if="!choice_component") 다이내믹 컴포넌트 로케이션
          div(v-else :is="choice_component")

        hr

        table.table.is-bordered
          //- caption(is="table-caption")
          table-caption
          thead
            tr
              th 부모 컴포넌트
              th 데이터
              th 메서드
          tbody
            tr
              td no
              td headline, subheadline
              td getHeadline, getSubheadline


        
        hr

        app-tasks



</template>

<script>
// Vue CLI 환경 === Node.js 환경(Back-End)
// 필요한 개발 의존 모듈은 로드 후에 사용 가능
import Vue from 'vue';

// JS 파일 로드 예시
// import AppHeadline from './components/AppHeadline';

import AppHeadline from './components/AppHeadline.vue';
import IconGithub from './components/icon/GitHub.vue';
import TableCaption from './components/table/TableCaption.vue';
import AppTasks from './components/ui/AppTasks.vue';

console.log(typeof IconGithub)

// Vue.component('app-headline', {
//   template: `
//     <div class="component-root">
//       <h3>{{ headline }}</h3>
//     </div>
//   `,
//   // 루트 Vue 인스턴스가 아닌,
//   // 컴포넌트 정의에서는 data는 반드시 함수여야 한다.
//   // 그리고 객체를 반환해야 한다.
//   data(){
//     return {
//     headline: 'App Headline'
//     }
//   }
// });

export default {
  name: 'app',
  components: {
    AppTasks,
    AppHeadline,
    IconGithub,
    TableCaption
  },
  mounted () {
    // 글로벌 Vue 컴포넌트가 등록되어 있는지 검증
    // console.log(!!Vue.component('app-headline'));
    // let appHeadline = Vue.component('app-headline');
    // console.log(typeof appHeadline);
    // new AppHeadline();
    
    // window.setTimeout(()=> this.choice_component = 'icon-github', 4000);
  },
  data () {
    return {
      subject: 'Vue 컴포넌트 학습',
      choice_component: '',
      components: [
        { text: '로드할 컴포넌트를 선택', value:''},
        { text: '앱 헤드라인', value:'app-headline'},
        { text: '아이콘 깃헙', value:'icon-github'},
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
[v-cloak]
  display: none
html
  font-size: 100%
  background: #fff
body
  margin: 0
#app
  margin-top: 50px
.a11y-hidden
  position: absolute
  overflow: hidden
  width: 1px
  height: 1px
  margin: -1px
  left: -9999em
</style>
