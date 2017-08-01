<template lang="pug">

  #app

    button.open-modal.button(@click="openModal") {{ 'Open Modal' | uppercase }}

    fds-message(animation-type="slide")
      //- fds-message(heading="알림" class="is-warning")
      //-   p 오늘은 우리 수업의 마지막 날입니다. 행쇼~!

    fds-message(animation-type="fade" class="is-info")
      h3(slot="heading") 알림
      //- scoped slot을 사용할 경우
      //- template(slot="heading" scope="props")
      //-   h3 {{ props.message }}
      p 오늘은 우리 수업의 마지막 날입니다. 행쇼~!

    fds-message
      h3(slot="heading") 통화 변경
      p 어제 특가 이벤트! {{ 3000 | currency }}에 모십니다.
      p 오늘 특가 이벤트! {{ 500000 | currency('$', 2) }}에 모십니다.

    fds-modal(
      ref="my_modal"
      close_message="close lightbox"
    )
      .image.is-16by9
        img(
          src="//lorempicsum.com/up/1280/720/2"
          alt="animation UP"
        )
      //- .content
        //- h3 VueJS 컴포넌트
        //- p 하이 모달
</template>

<script>
  import Vue from 'vue';
  import FdsMessage from './components/FDS/Message';
  import FdsModal from './components/FDS/Modal';
  export default {
    name: 'app',
    components: {
      FdsMessage, FdsModal
    },
    filters: {
      currency: ( value, symbol='', decimal=0 ) => {
        // 의존하는 모듈 vue2-filter 검증
        let vue2Filter = Vue.filter('currency');
        if ( vue2Filter ) {
          value = vue2Filter(value, symbol, decimal);
        } else {
          throw `\n
  vue2-filters 모듈을 설치한 후, 사용해주세요.
  $ npm install vue2-filters
  import Vue2Filters from 'vue2-filters';
  Vue.use(Vue2Filters);\n
`
        }
        if ( symbol.trim() !== "" ) {
          return value;
        } else {
          return value + '원';
        }
      },
      // currency: (value, sign="원") => {
      //   let number = null;
      //   if ( Vue.filter('number') ) {
      //     number = Vue.filter('number');
      //   }
      //   value = number(value);
      //   if ( sign !== '원' ) {
      //     return sign + value;
      //   } else {
      //     return value + sign;
      //   }
      // }
    },
    methods: {
      openModal(){
        this.$refs.my_modal.visible = true;
      }
    }
  }
</script>

<style lang="sass">
  @import "~yamoo9"
  html
    font-size: 100%
    background: #fff
  body
    margin: 0
    width: 80vw
    margin:
      top: 40px
      left: auto
      right: auto
    // text-align: center
  .open-modal
    margin-bottom: 20px

  .fade-enter,
  .fade-leave-to
    opacity: 0
  .fade-enter-active,
  .fade-leave-active
    transition: all 0.5s ease-in-out

  .slide-enter,
  .slide-leave-to
    opacity: 0
    transform: translateX(-100vw)
  .slide-enter-active,
  .slide-leave-active
    transition: all 0.5s ease-in-out

  .slide-in-enter
  .slide-in-enter
  .slide-in-enter

  // 애니메이션 정의
  // 슬라이드-인
  @keyframes slide-in
    from
      opacity: 0
      transform: translateX
</style>