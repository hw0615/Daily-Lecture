<template lang="pug">
  ul.awesome-list
    slot(
      v-for="item in items"  
      :data="item.text"
    )  
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>


