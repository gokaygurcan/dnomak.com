<template lang="pug">
  a.xl-pr.xl-lh56.xl-1-1.xl-fs18.xl-fw600.xl-db.xl-lh0.xl-co-white.xl-br8.xl-mb16.xl-tac(href="https://www.patreon.com/bePatron?u=5286443", target="_blank", style="background-color: #F96854;")
    span.xl-vam.xl-dib.xl-lh0(v-html='patreonIcon')
    .xl-di.xl-vam.xl-pl8 Become a Patron!
</template>

<script>
  export default {
    data () {
      return {
        patreonIcon: `
          <svg viewBox="0 0 569 546" style="width: 30px; height: 30px;" xmlns="http://www.w3.org/2000/svg"><circle fill="#052D49" cx="362.589996" cy="204.589996" r="204.589996"></circle><rect fill="#FFFFFF" x="0" y="0" width="100" height="545.799988"></rect></svg>
        `
      }
    }
  }
</script>
