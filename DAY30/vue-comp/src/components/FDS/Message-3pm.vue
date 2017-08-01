<template lang="pug">
  .message
    .message-header
      //- props 예시
      //- h4 {{ heading }}
      
      //- named slot 예시
      //- slot(name="heading")
      //-   | Message Component

      //- scoped slot 예시
      slot(name="heading" message="Notify Component")
      button.delete(
        @close
        aria-label="close message"
      )
    .message-body
      slot
        p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, distinctio.
</template>

<script>
export default {
  // props: ['heading'],
  props: {
    heading: {
      type: String,
      default: 'Message Component'
    }
  },
  data() {
    return {
      is_visible: true
    }
  },
  methos: {
    close() {
      this.is_visible = false;
    }
  }
}
</script>


<style lang="sass" scoped>

</style>

