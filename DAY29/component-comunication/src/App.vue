<template lang="pug">
  #app
    
    //- awesome-list(:items="[{text: 'hi'}, {text: 'hi2'}, {text: 'hi3'}]")
    //-   template(scope="props")
    //-     li {{ props.data}}

    app-layout(lang="ko-KR")
      template(scope="o" slot="header")
        h1.brand {{ o.brand }}
          p 슬롯 어케작동되는거야ㅡㅡ 
          | 스코프 지정했을때..
      ul
        li
          a(href="")
            | 상하이버거
        li
          a(href="")
            | 빅맥
        li
          a(href="")
            | 햄버거는 역시 버거킹
      div(slot="footer")
        p 왜 아까 나오던 푸터 밑 슬롯은 안들어오는거야


    //- h1 App에서 수신하는 Counter 컴포넌트의 목소리(with Global EventBus 객체)
    //- p {{ CountfromEventBus }}


    total-counter(
      :counters="[ 2, 68, 6 ]" 
      :app-mood="mood"
    )

    hr

    counter(:init-value="10" @click.native="detectAppEvent")
    ParentComp

    //- total-counter(:counters="[102, 1]")
    //- total-counter(:counters="[0]")
    //- total-counter(:counters="[12, 9, 2, 4, 7, -3]")


</template>

<script>
import EventBus from './_EventBus';
import ParentComp from './components/ParentComp';
import ChildComp from './components/ChildComp.vue';
import Counter from './components/Counter';
import TotalCounter from './components/TotalCounter';
import AppLayout from './components/AppLayout';
import AwesomeList from './components/AwesomeList'


export default {
  name: 'app',
  mounted () {
    EventBus.$on('to-evb', (a,b)=> {
      this.a = a;
      this.b = b;
    });
  },
  components: {
    ParentComp, TotalCounter, Counter,
    AppLayout, AwesomeList, EventBus
    // ChildComp
  },
  data () {
    return {
      mood: 'Happy',
      a: 0,
      b: 0
    }
  },
  computed: {
    countfromEventBus(){
      return `${this.a} / ${this.b}`;
    }
  },
  methods: {
    detectAppEvent(e){
      console.log('clicked detectAppEvent');
      console.log(e.target);
    }
  }
}
</script>

<style lang="sass">
  html
    font-size: 100%
    background: #fff
  body
    margin: 0
  #app
    padding: 1.4em
  .component
    display: flex
    flex-direction: column
    justify-content: center
    align-items: flex-start
    padding: 1.4em
    border: 3px solid currentColor
    h1
      font-weight: 100
    ul
      list-style: none
      padding-left: 0
</style>


