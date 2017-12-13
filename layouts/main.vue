<template lang="pug">
  div
    HeaderView
    .xl-pt24.xl-px24
      div.xl-maw1280.xl-ma
        nuxt
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import HeaderView from '../components/HeaderView.vue'

  export default {
    created () {
      this.$i18n.locale = this.$store.getters['i18n/locale']
    },
    watch: {
      locale () {
        this.$i18n.locale = this.locale
      }
    },
    computed: {
      ...mapGetters('i18n', ['locale'])
    },
    methods: {
      ...mapActions('i18n', ['set'])
    },
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
  .udemy-wrap {
    border-color: #28DFCD;
    background-color: white;
  }
  .udemy-image {
    background: url('https://dnomak.com/img/web-gelistiricisi-olmanin-temelleri.jpg');
    height: 124px;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }
  .udemy-content {
    background-color: rgba(40 223, 205, 0.1);
  }
  .udemy-button {
    background: #28DFCD;
  }
</style>
