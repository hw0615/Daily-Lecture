<template lang="pug">
  div.component
    h1 {{ mine }}
    h3 상위 컴포넌트로 부터 전달 받은 속성들
    ul
      li {{ parentName }}
      li {{ temp }}
      li Computed: {{ mine_propMessage }}
      //- li Data: {{ mine_prop_msg }}
    //- button(
    //-   type="button"
    //-   @click="mine_prop_msg = 'change data from child component'")
    //-   | Chanage Prop Message
</template>

<script>
export default {
  // 상위 컴포넌트로부터 전달된 속성을 받기 위해서는
  // props를 통해 명시적 선언을 해야 한다.

  // props: ['parentName', 'temp', 'prop-message'],
  // 부모로부터 전달받은 속성 검증 시스템
  // 유형(Type) 검증, 
  // 필수(Required) 검증, 
  // 기본 값(Default Value) 설정
  // 사용자 정의 유효성검사(validator) 설정
    // 결과가 거짓이면 Vue에서 오류 메시지 보여줌
  props: {
    parentName: {
      type: String,
      validator(v){
        return v.trim() !== '';
      }
    },
    temp: {
      type: Number,
      required: true
    },
    propMessage: {
      type: Array,
      // required: false,
      // 주의!! 참조형 데이터의 경우, 함수를 통해 객체를 반환해야 한다.
      default: function() {
        return ['오늘도'];
      }
    }
  },

  data () {
    return {
        mine: 'Child Component',
        mine_prop_msg: this.propMessage,
        copyed_message: []
    }
  },
  computed: {
    mine_propMessage() {
      this.copyed_message = this.propMessage;
      return this.copyed_message.join(' ');
    }
  }
}
</script>

<style lang="sass" scoped>
.component
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  margin: 1em
  padding: 1.4em
  border: 3px solid currentColor
  color: #957f65
  h1
    font-weight: 100

  ul
    padding-left: 0
</style>

