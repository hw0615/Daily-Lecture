<template lang="pug">
  li.app-task
    icon-github
      slot
</template>

<script>
import IconGithub from '../icon/GitHub.vue';
export default {
  components: { IconGithub }
}

</script>
