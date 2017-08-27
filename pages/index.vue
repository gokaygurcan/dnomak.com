<template lang="pug">
  .wrap.xl-gutter-24.md-1
    .col.xl-2-3
      .xl-tal.xl-p24.xl-co-black-500.xl-br8.xl-ba-white.xl-bw2.xl-bo-gray-200
        .wrap.xl-table.xl-gutter-24.md-normal.md-1
          .col.xl-width-168
            .xl-dib.xl-mb8.xl-lh0.xl-br8.xl-oh.xl-w144.xl-h144
              img.xl-h144(src="/img/avatar/dnomak.jpg", alt="Doğukan Güven Nomak")
          .col
            .xl-lh40.xl-fs18.xl-fw300
              div {{ $t('pages.index.line01') }}
              div {{ $t('pages.index.line02') }}
              div(v-html="$t('pages.index.line03')")
              div
                | <a href="http://flexible.gs" target="_blank" class="xl-di xl-fw600 xl-tdu xl-co-black-500">Flexible Grid System</a>,&nbsp;<a href="https://github.com/pixelperfectcss" target="_blank" class="xl-di xl-fw600 xl-tdu xl-co-black-500">Pixel Perfect CSS</a> ve <nuxt-link to="svg-turkiye-haritasi" class="xl-di xl-fw600 xl-tdu xl-co-black-500">SVG Türkiye Haritası</nuxt-link to="svg-turkiye-haritasi"> adında Open Source olarak geliştirdiğim projelerim var. Yeni projelerden haberdar olmak istersen beni diğer sosyal medya hesaplarından takip edebilirsin :)
              ul.links
                li
                  a.xl-di.xl-co-black-500.xl-fs18.xl-fw600.xl-tdu(href="https://youtube.com/dnomak", target="_blank")
                    | YouTube
                li
                  a.xl-di.xl-co-black-500.xl-fs18.xl-fw600.xl-tdu(href="https://twitter.com/dnomak", target="_blank")
                    | Twitter
                li
                  a.xl-di.xl-co-black-500.xl-fs18.xl-fw600.xl-tdu(href="https://github.com/dnomak", target="_blank")
                    | GitHub
                li
                  a.xl-di.xl-co-black-500.xl-fs18.xl-fw600.xl-tdu(href="https://instagram.com/dnomak", target="_blank")
                    | Instagram
                li
                  a.xl-di.xl-co-black-500.xl-fs18.xl-fw600.xl-tdu(href="https://linkedin.com/in/dnomak", target="_blank")
                    | Linkedin
                li
                  a.xl-di.xl-co-black-500.xl-fs18.xl-fw600.xl-tdu(href="https://facebook.com/dnomak", target="_blank")
                    | Facebook
              div {{ $t('pages.index.line05') }}
      FooterView
    .col.xl-1-3
      SidebarPatreon
      SidebarHumans
      SidebarMailChimp
      SidebarGraphcool
</template>

<script>
  import SidebarPatreon from '../components/SidebarPatreon.vue'
  import SidebarHumans from '../components/SidebarHumans.vue'
  import SidebarMailChimp from '../components/SidebarMailChimp.vue'
  import SidebarGraphcool from '../components/SidebarGraphcool.vue'
  import FooterView from '../components/FooterView.vue'

  export default {
    layout: 'main',
    async fetch ({ store }) {
      await store.dispatch('humans/getAllHumans')
    },
    head () {
      return {
        title: 'Doğukan Güven Nomak',
        meta: [
          { name: 'description', hid: 'description', content: 'Frontend Developer' },
          // Open Grapg
          { name: 'og:title', content: 'Doğukan Güven Nomak' },
          { name: 'og:description', content: 'Frontend Developer' },
          { name: 'og:type', content: 'website' },
          { name: 'og:url', content: `http://dnomak.com` },
          { name: 'og:image', content: `http://dnomak.com/img/avatar/dnomak.jpg` },
          // Twitter Card
          { name: 'twitter:card', content: 'summary' },
          { name: 'twitter:site', content: '@dnomak' },
          { name: 'twitter:title', content: 'Doğukan Güven Nomak' },
          { name: 'twitter:description', content: 'Frontend Developer' },
          { name: 'twitter:image', content: `http://dnomak.com/img/avatar/dnomak.jpg` },
          { name: 'twitter:image:alt', content: 'Doğukan Güven Nomak' }
        ]
      }
    },
    components: {
      SidebarPatreon,
      SidebarHumans,
      SidebarMailChimp,
      SidebarGraphcool,
      FooterView
    }
  }
</script>
