<template lang="pug">
  .wrap.xl-2.xl-center.xl-ffscp.xl-co-gray-500.xl-pt24.xl-pb24.lg-1
    .col.lg-hidden
    .col.xl-fs14.xl-tar.lg-tac
      a.xl-di.xl-co-gray-500(href='http://flexible.gs', target='_blank')
        span.xl-di.xl-vam.xl-pr8 Flexible Grid System'i
        span.xl-co-red-300
          span.xl-dib.xl-vam.xl-lh0(v-html='heartIcon')
          span.xl-di.xl-vam.xl-pl8 Seviyorum
</template>

<script>
  export default {
    data () {
      return {
        heartIcon: `
          <svg fill="#F72848" width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        `
      }
    }
  }
</script>
