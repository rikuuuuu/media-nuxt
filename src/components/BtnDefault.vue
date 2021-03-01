<template>
    <button class="BtnDefault" type="button" name="button">{{ btnText }}</button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {

    }
  },
  props: [
    'btnText',
  ]
})
</script>

<style scoped>

</style>