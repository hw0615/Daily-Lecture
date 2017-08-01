<template lang="pug">
  .modal(v-if="is_visible" class="is-active")
    .modal-background(@click="closeModal")
    .modal-content.box
      slot
        p Default Modal Content.
    button.modal-close.is-close(
      @click="closeModal"
      :aria-label="close_message")
</template>

<script>
export default {
  props: {
    close_message: {
      type: String,
      dafault: 'Close Modal'
    },
    is_visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return{
    // 부모로 부터 전달받은 값을 복사
    visible: this.is_visible
    }
  },
  methos: {
    closeModal(){
      this.visible = false;
    }
  }
}
</script>
