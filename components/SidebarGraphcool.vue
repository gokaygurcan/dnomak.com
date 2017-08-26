<template lang="pug">
  div
    a.xl-p16.xl-br8.xl-ba-black-500.xl-bw2.xl-bo-black-500.xl-cp.xl-db(href='https://www.graph.cool/?utm_medium=partner&utm_source=dnomak.com', target='_blank')
      .wrap.xl-auto.xl-center.xl-middle.xl-gutter-16
        .col
          .xl-co-black-100.xl-fs18.xl-lh24.xl-fw600 {{ $t("globals.dataSponsor") }}
        .col.xl-lh0
          div(v-html='graphCoolIcon')
        .col
          .xl-fw600.xl-ls1.xl-fs20.xl-lh24(style="color: #27ae60;") GRAPHCOOL
    .xl-tac
      a.xl-ffscp.xl-fs14.xl-tac.xl-co-gray-500.xl-my24.xl-dib.xl-lh24(href='https://github.com/dnomak/dnomak.com', target='_blank')
        | {{ $t("globals.contribute") }}
</template>

<script>
  export default {
    data () {
      return {
        graphCoolIcon: `
          <svg stroke="none" fill="rgba(39,174,96,1)" style="width: 40px; height: 46px;" xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="66 46 18 21"><path d="M82.18 53.28c-.92-.52-2.07.16-2.26.27l-3.96 2.26a1.53 1.53 0 0 0-1.98.05 1.57 1.57 0 0 0-.31 1.97c.38.65 1.17.93 1.87.66.7-.26 1.11-.99.98-1.73l3.95-2.26.02-.01c.26-.16.86-.41 1.14-.25.2.12.32.5.33 1.07v4.99c0 .47-.25.9-.65 1.13l-5.68 3.3c-.4.23-.89.23-1.3 0l-5.67-3.3c-.4-.24-.65-.66-.65-1.13v-6.61c0-.47.25-.9.65-1.13l5.14-2.99c.49.57 1.31.7 1.95.32.64-.38.92-1.17.67-1.87-.25-.71-.97-1.12-1.7-1-.73.12-1.28.76-1.29 1.51l-5.3 3.08c-.74.43-1.2 1.22-1.2 2.08v6.6c0 .86.46 1.65 1.2 2.08l5.68 3.3c.74.43 1.65.43 2.39 0l5.68-3.3c.74-.43 1.19-1.22 1.2-2.08v-4.8c.01-1.12-.29-1.86-.9-2.21z"></path></svg>
        `
      }
    }
  }
</script>
