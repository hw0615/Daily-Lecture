<template lang="pug">
  div.counter
    button.button.is-increase(@click="increaseCount" type="button") Count Up
    input.print-count(type="number" v-model.number="count")
    button.button.is-decrease(@click="decreaseCount" type="button") Count Down
</template>

<script>
import EventBus from '../EventBus.js';
export default {
  data() {
    return { count: this.initValue }
  },
  props: {
    initValue: {
      type: Number,
      default: 0
    },
    index: {
      type: Number,
      default: 0
    },
    appMood: String
  },
  watch: {
    count(new_value, old_value) {
      // console.log('new: %s, old: %s', new_value, old_value);
      // console.log(new_value > old_value ? '증가' : '감소');
      this.dispatchCount();
    }
  },
  // computed: {
  //   print_count() { return 'Count Value is' + this.count; }
  // },
  methods: {
    increaseCount(){ 
      this.count++; 
      // 부모 컴포넌트에 이벤트 방출
      this.dispatchCount();
    },
    decreaseCount(){ 
      this.count--; 
      this.dispatchCount();
    },
    dispatchCount(){
      // 부모 컴포넌트에 이벤트 발신
      this.$emit('changeCount', this.index, this.count);
      // 글로벌 이벤트 
    },
    resetCount(){ this.count = this.initValue; }
  }
}
</script>

<style lang="sass">
  .counter
    display: flex
    justify-content: center
    align-items: center
    min-width: 320px
    padding-bottom: 20px
    border-bottom: 4px solid #ededed
    margin-bottom: 20px
    &:last-child
      padding-bottom: 0
      border-bottom: none
      margin-bottom: 0
    input
      margin:
        left: 10px
        right: 10px
      border: 4px solid #ededed
      padding: 0.5em
</style>

