<template lang="pug">
  .xl-tal.xl-p8.xl-px24.xl-ba-black-500.xl-co-white
    .xl-maw1280.xl-ma
      .wrap.xl-middle.sm-1
        .col.xl-2-3
          .wrap.xl-auto.xl-middle.xl-left.xl-gutter-16.sm-1.sm-center
            .col.sm-pt8
              nuxt-link.xl-vam.xl-dib.xl-fs16.xl-co-gray-500.xl-fw700(to="/") DNOMAK.COM
            .col.sm-hidden
              .xl-w4.xl-h40.xl-br4.xl-ba-white
            template(v-if="$route.name === 'index'")
              .col.xl-tac
                .xl-h56.xl-lh56.xl-vam.xl-dib.xl-fs24.xl-co-white(href="https://github.com/dnomak/svg-turkiye-haritasi", target="_blank") Doğukan Güven Nomak
            template(v-if="$route.name === 'svg-turkiye-haritasi'")
              .col.xl-tac
                a.xl-h56.xl-lh56.xl-vam.xl-dib.xl-fs24.xl-co-white(href="https://github.com/dnomak/svg-turkiye-haritasi", target="_blank") {{ $t('pages.svgTurkeyMap.title') }}
            template(v-if="$route.params.username")
              .col.xl-tac
                a.xl-h56.xl-lh56.xl-vam.xl-dib.xl-fs24.xl-co-white(href="https://youtube.com/dnomak", target="_blank") YouTube
        .col.xl-1-3.xl-tar.sm-tac
          .xl-cp.xl-ffscp.xl-vam.xl-px8.xl-px8.xl-m8.xl-dib.xl-fs14.xl-lh24.xl-fw400.xl-br4.xl-co-gray-500.xl-ba-black-300(v-if="$t('lang') === 'tr'" @click.stop.prevent="set('en')") English
          .xl-cp.xl-ffscp.xl-vam.xl-px8.xl-px8.xl-m8.xl-dib.xl-fs14.xl-lh24.xl-fw400.xl-br4.xl-co-gray-500.xl-ba-black-300(v-if="$t('lang') === 'en'" @click.stop.prevent="set('tr')") Türkçe
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    layout: 'main',
    data () {
      return {
      }
    },
    methods: mapActions('i18n', ['set'])
  }
</script>
