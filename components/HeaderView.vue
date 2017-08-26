<template lang="pug">
  .xl-tal.xl-py24.xl-px24.xl-ba-black-500.xl-co-white
    .xl-maw1280.xl-ma
      .wrap.xl-auto.xl-middle.xl-left.md-1.xl-gutter-16.md-center
        .col
          nuxt-link.xl-h40.xl-lh40.xl-vam.xl-dib.xl-fs24.xl-co-black-200.xl-fw700(to="/") dnomak.com
        template(v-if="$route.name === 'svg-turkiye-haritasi'")
          .col.md-hidden
            .xl-w4.xl-h40.xl-br4.xl-ba-white
          .col.xl-tac
            a.xl-h40.xl-lh40.xl-vam.xl-dib.xl-fs30.xl-co-white.md-mt16(href="https://github.com/dnomak/svg-turkiye-haritasi", target="_blank") SVG Türkiye Haritası
        template(v-if="$route.params.username")
          .col.md-hidden
            .xl-w4.xl-h40.xl-br4.xl-ba-white
          .col.xl-tac
            a.xl-h40.xl-lh40.xl-vam.xl-dib.xl-fs30.xl-co-white.md-mt16(href="https://youtube.com/dnomak", target="_blank") YouTube
</template>
