<template lang="pug">
  div.total-counter
    div.total-count {{ total_count }}
    counter(
      v-for="(counter,index) in mine_counters"
      :key="index"
      :init-value="counter" 
      :index="index"
      :app-mood="appMood"
      @changeCount="recieveCount"
    )
</template>

<script>
import Counter from './Counter';
export default {
  components: { Counter },
  props: {
    counters: {
      type: Array,
      required: true
    },
    appMood: String
  },
  data () {
    return { 
      // 부모로부터 전달받은 초기 데이터를 복사해서
      // 컴포넌트 자신의 로컬 데이터로 사용한다.
      mine_counters: this.counters.slice()
    }
  },
  computed: {
    total_count(){
      return this.mine_counters.reduce((prev, next)=>prev+next);
      // let total = 0;
      // this.counters.forEach(count=>total+=count);
      // return total;
    }
  },
  methods: {
    recieveCount(index, count){
      this.mine_counters.splice(index, 1, count);
    }
  }
}
</script>

<style lang="sass">
  .total-counter
    min-width: 320px
    margin: 20px
    border: 4px solid #cacaca
    border-radius: 9px
    padding: 20px
  .total-count
    text-align: center
    margin:
      left: -20px
      right: -20px
    padding-bottom: 10px
    font-size: 30px
    color: #acacac
    background: linear-gradient(180deg, transparent 40%, rgba(#afafaf, 0.1))
    border-bottom: 2px solid #eee
    margin-bottom: 20px
</style>