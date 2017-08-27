<template lang="pug">
  .xl-tal.xl-p8.xl-px24.xl-ba-black-500.xl-co-white
    .xl-maw1280.xl-ma
      .wrap.xl-auto.xl-middle.xl-left.xl-gutter-16
        .col
          nuxt-link.xl-h56.xl-lh56.xl-vam.xl-dibxl-fs14.xl-co-gray-500.xl-fw700(to="/") DNOMAK.COM
        template(v-if="$route.name === 'svg-turkiye-haritasi'")
          .col
            .xl-w4.xl-h40.xl-br4.xl-ba-white
          .col.xl-tac
            a.xl-h56.xl-lh56.xl-vam.xl-dib.xl-fs24.xl-co-white(href="https://github.com/dnomak/svg-turkiye-haritasi", target="_blank") SVG Türkiye Haritası
        template(v-if="$route.params.username")
          .col
            .xl-w4.xl-h40.xl-br4.xl-ba-white
          .col.xl-tac
            a.xl-h56.xl-lh56.xl-vam.xl-dib.xl-fs24.xl-co-white(href="https://youtube.com/dnomak", target="_blank") YouTube
</template>
