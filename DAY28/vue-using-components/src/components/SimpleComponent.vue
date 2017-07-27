<template lang="pug">
  div
    button.button(@click="updateCount") update count
    span.box {{ count }}
</template>

<script>
const _data = {
  count: 0
}
export default {
  data(){
    return _data;
  },
  methods: {
    updateCount(){
      this.count++;
    }
  }
}
</script>

<style lang="sass" scoped>
.button
  margin-bottom: 1em
</style>
