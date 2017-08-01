<template lang="pug">
  transition(
    :duration="3000"
    enter-active-class="animated flipInX"
    leave-active-class="animated flipOutX"
  )
    .modal(v-if="visible" class="is-active")
      .modal-background(@click="closeModal")
      .modal-content.box
        slot
          p Default Model Content.
      button.modal-close.is-large(
        @click="closeModal"
        :aria-label="close_message"
      )
</template>

<script>
export default {
  props: {
    close_message: {
      type: String,
      default: 'Close Modal'
    },
    is_visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      visible: this.is_visible
    }
  },
  methods: {
    closeModal(){
      this.visible = false;
    }
  }
}
</script>