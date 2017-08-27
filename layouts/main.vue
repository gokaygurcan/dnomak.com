<template lang="pug">
  div
    HeaderView
    .xl-pt24.xl-px24
      div.xl-maw1280.xl-ma
        nuxt
</template>

<script>
  import HeaderView from '../components/HeaderView.vue'

  export default {
    components: {
      HeaderView
    }
  }
</script>

<style>
  ul.links {
    margin-left: 24px;
    padding-top: 8px;
    padding-bottom: 8px;
    list-style-type: disc;
    list-style-position: inside;
  }
</style>
