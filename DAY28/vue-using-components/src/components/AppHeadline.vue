<template lang="pug">
  div.content
    h1 {{ headline }}
    h3 {{ subheadline }}
    p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur quis iure, et, enim quisquam mollitia aliquam pariatur eveniet incidunt sit in explicabo sapiente esse aut consequatur quod iusto. Quos, eum.
    simple-comp
</template>

<script>
import SimpleComp from './SimpleComponent.vue';
export default {
  name: 'app-headline',
  components: {
    SimpleComp
  },
  data () {
    return {
      headline: 'App Headline',
      subheadline: 'App Subheadline'
    }
  }
}
</script>

<style lang="sass">
</style>
