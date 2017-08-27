<template lang="pug">
  div
    header-view
    .xl-pt24.xl-px24
      div.xl-maw1280.xl-ma
        nuxt
        footer-view
</template>

<script>
  import HeaderView from '../components/HeaderView.vue'
  import FooterView from '../components/FooterView.vue'

  export default {
    components: {
      HeaderView,
      FooterView
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
