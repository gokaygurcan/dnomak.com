<template lang="pug">
  .xl-p16.xl-mb16.xl-br8.xl-ba-white.xl-bw2.xl-bo-blue-300
    .wrap.xl-table.xl-center.xl-middle.xl-gutter-16
      .col.xl-width-72
        div(v-html="humansChatbotIcon")
      .col.xl-tal
        .xl-fs14.xl-lh24.xl-co-blue-300 Tüm sohbetleri <a href="http://blog.yavuzz.com" target="_blank" class="xl-fw700 xl-tdu xl-co-blue-300">Yavuz Kömeçoğlu</a> tarafından hazırlanan <a href="https://m.me/825654834274575" target="_blank" class="xl-fw700 xl-tdu xl-co-blue-300">Humans Chatbot</a>'u kullanarak görüntüleyin.
</template>

<script>
  export default {
    data () {
      return {
        humansChatbotIcon: `
          <svg width="56px" viewBox="0 0 322 324" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="facebook-messenger-white" transform="translate(-96.000000, -93.000000)" fill-rule="nonzero" fill="#1094F6">
                <path d="M257,93 C168.082,93 96,160.157 96,243 C96,290.205 119.412,332.311 156,359.807 L156,417 L210.819,386.727 C225.449,390.801 240.948,393 257,393 C345.918,393 418,325.843 418,243 C418,160.157 345.918,93 257,93 Z M273,295 L232,251 L152,295 L240,201 L282,245 L361,201 L273,295 Z" id="Shape"></path>
              </g>
            </g>
          </svg>
        `
      }
    }
  }
</script>
