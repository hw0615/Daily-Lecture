<template lang="pug">
  div.component
    h1 {{ mine }}
    label
      input(type="checkbox" v-model="message" value="오늘도")
      | 오늘도
    label
      input(type="checkbox" v-model="message" value="내일도")
      | 내일도
    label
      input(type="checkbox" v-model="message" value="행복하길")
      | 행복하길
    label
      input(type="checkbox" v-model="message" value="불행하길")
      | 불행하길
    child(
      class="child-component"
      parent-name="ParentComponent"
      :temp="1990"
      :prop-message="message"

    )
</template>

<script>
import EventBus from '../EventBus.js';
import ChildComp from './ChildComp';
export default {
  components: {
    'child': ChildComp
  },
  mounted () {
    EventBus.$on('to-evb', (a,b)=> {
      this.k = a * b;
    })
  },
  props: ['name'],
  data() {
    return {
      k: 0,
      // 부모에서 전달된 속성 유형이 참조형이라면
      // 객체, 배열이라면... 자식은 그 데이터를 그대로 사용하여 수정하면 안된다.
      // 방법 1. 복사해서 사용해야 한다.
      // 방법 2. 부모에게 수정 요청을 한다.(이벤트 발신)
      message: ['오늘', '하루도', '행복하길'],
      mine: 'Parent Component'
    }
  }
}
</script>

<style lang="sass" scoped>
.component
  display: flex
  justify-content: center
  align-items: center
  margin: 1em
  padding: 1.4em
  border: 3px solid currentColor
  color: #c5af95
  h1
    font-weight: 100
</style>

