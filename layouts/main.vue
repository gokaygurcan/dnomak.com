<template lang="pug">
  div.xl-m40
    header-view
    nuxt
    footer-view
</template>

<script>
  import HeaderView from '../components/HeaderView.vue';
  import FooterView from '../components/FooterView.vue';

  export default {
    components: {
      HeaderView,
      FooterView,
    },
  };
</script>
