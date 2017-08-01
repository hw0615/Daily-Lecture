<template lang="pug">
  #app
    //- header.page-header
    //-   h1 Heading
    //-     img(ref="logo_img" src="./assets/logo.png", alt="Vue")
    //-   main.page-main
    //-     p {{ logo_alternate_text }}
    //- footer.page-footer

    //- component 'message'

    button.open-modal.button(@click="openModal") {{ 'Open Modal' | uppercase }}

    fds-message(class="is-primary")
    //- props 사용할 경우
    //- fds-message(heading="알림" class="is-warning")
    //-   p Lorem ipsum dolo
    fds-message(class="is-warning")
      //- named slot 사용할 경우
      h3(slot="heading") 알림
      //- p Lorem ipsum dolor sit amet.

      //- scoped slot을 사용할 경우
      //- template(slot="heading" scope="props")
      //-   h3 {{ props.message }}

      p 오늘은 마지막 수업

    fds-message
      h3(slot="heading") 통화 변경
      p 오늘 특가 이벤트! {{  }}에 모십니다.
    
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

    button.button.is-info(
      @click="openModal"
    ) Open Modal
</template>

<script>
import FdsMessage from './components/FDS/Message';
import FdsModal from './components/FDS/Modal';

export default {
  name: 'app',
  components: {
    FdsMessage, FdsModal
  },
  filters: {
    currency: (value, sign="원") => {
      if ( sign !== '원' ) {
        return sign + value;
      } else {
        return value + sign; 
      }
    }
  },
  mounted: {
    openModal() {
      this.$refs.my_modal.visible = true;
    }
    // let app = this.$el;
    // this.logo_alternate_text = app.querySelector('img').getAttribute('alt');
    // this.logo_alternate_text = this.$refs.logo_img.alt; // HTML_DOM
    // console.log(this.$refs.logo_img)
    // this.logo_src = this.$refs.logo_img.src; // HTML_DOM
  },
  data () {
    return {
      // logo_alternate_text: '',
      // logo_src: ''
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
    +size(100vw 80vh)
</style>
