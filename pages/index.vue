<template lang="pug">
  .wrap.xl-gutter-24.md-1
    .col.xl-8-12
      .xl-tal.xl-px24.xl-mb24.xl-py16.xl-co-black-500.xl-br8.xl-ba-white.xl-bw2.xl-bo-gray-200.md-mb16
        .wrap.xl-table.xl-gutter-24.md-normal.md-1
          .col.xl-width-168
            .xl-dib.xl-mb8.xl-lh0.xl-br8.xl-oh.xl-w144.xl-h144
              img.xl-h144(src='~/assets/img/dnomak.jpg', alt='Doğukan Güven Nomak')
          .col
            .xl-lh40.xl-fs18.xl-fw300
              | Herkese Merhaba,
              br
              | Adım Doğukan Güven Nomak. Protel'de Frontend Developer olarak çalışmaktayım.
              br
              | <a href="https://youtube.com/dnomak" target="_blank" class="xl-di xl-fw600 xl-tdu xl-co-black-500">YouTube</a> üzerinde Developer ve Designer arkadaşlarla birlikte çeşitli seriler altında video içerikler üreterek bu işe olan aşkımızı ve motivasyonumuzu arttırmaya çalışıyoruz :)
              br
              | <a href="http://flexible.gs" target="_blank" class="xl-di xl-fw600 xl-tdu xl-co-black-500">Flexible Grid System</a> ve <nuxt-link to="/svg-turkiye-haritasi" class="xl-di xl-fw600 xl-tdu xl-co-black-500">SVG Türkiye Haritası</nuxt-link to="/svg-turkiye-haritasi"> adında Open Source olarak geliştirdiğim iki projem var. Yeni projelerden haberdar olmak istersen beni diğer sosyal medya hesaplarından takip edebilirsin :)
              br
              ul.social-media
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
              | Görüşmek üzere, Sevgilerimle.
    .col.xl-4-12
      a.xl-pr.xl-lh56.xl-1-1.xl-fs18.xl-fw600.xl-db.xl-lh0.xl-co-white.xl-br8.xl-mb16.xl-tac(href="https://www.patreon.com/bePatron?u=5286443", target="_blank", style="background-color: #F96854;")
        .xl-pa.xl-l16
          span.xl-vam.xl-dib.xl-lh0(v-html='patreonIcon')
        .xl-di.xl-vam Become a Patron!
      .xl-mb16
        .xl-pr
          .search-icon.xl-vam.xl-dib.xl-lh0.xl-pa.xl-r16.xl-tty-50p.xl-t50p(v-html='searchIcon')
          input(v-model="keyword", @input="searchInHumans", :placeholder="$t('globals.searchPlaceholder')").xl-1-1.xl-db.xl-h56.xl-ba-white.xl-bw2.xl-bo-gray-200.xl-br8.xl-mb8.xl-brb0.xl-pl16.lg-pl8.md-pl16.pl-co-gray-300.xl-fs16
        .xl-ba-white.xl-fs14.xl-lh20.xl-br8.xl-bo-gray-200.xl-bw2.xl-os
          .humans
            .xl-db.xl-py8.xl-px16.xl-co-black-500(v-if="!AllHumans.length")
              .xl-db.xl-wsnw.xl-oh.xl-toe Aradığın insanı bulamadım!
              .xl-db.xl-wsnw.xl-oh.xl-toe.xl-co-gray-500.xl-fsi En kısa zamanda sohbet yapmaya çalışacağım.
            nuxt-link(v-for="human in AllHumans", :key="human.id").xl-db.xl-py8.xl-px16.ho-ba-gray-100.ho-co-black-500.ho-bo-gray-200.xl-ba-white.xl-co-black-500.xl-bwt1.xl-bo-gray-200.xl-cp(:to="human.username", exact)
              .xl-db.xl-wsnw.xl-oh.xl-toe {{ human.name }}
              .xl-db.xl-wsnw.xl-oh.xl-toe.xl-co-gray-500.xl-fsi {{ human.title }}
      form.wrap.xl-mb16(:action='`//flexible.us8.list-manage.com/subscribe/post?u=0cfb9d416ef45eba73b6368b6&id=${$t("mailchimp.id")}`', method='post', name='mc-embedded-subscribe-form', target='_blank')
        .col.xl-7-12
          input(type='email', name='email', :placeholder='$t("mailchimp.emailAddress")', class='xl-1-1 xl-db xl-h56 xl-ba-white xl-bw2 xl-bo-green-300 xl-brl8 xl-brr0 xl-pl16 pl-co-gray-300 xl-fs16')
          div(style='position: absolute; left: -5000px;')
            input(type='text', :name='$t("mailchimp.name")', tabindex='-1')
        .col.xl-5-12
          input(type='submit', name='subscribe', :value='$t("mailchimp.subscribe")', class='xl-1-1 xl-db xl-lh56 xl-h56 xl-co-white xl-ba-green-300 xl-fw600 xl-brr8 xl-fs18 xl-brl0')
      a.xl-p16.xl-br8.xl-ba-black-500.xl-bw2.xl-bo-black-500.xl-cp.xl-db(href='https://www.graph.cool/?utm_medium=partner&utm_source=dnomak.com', target='_blank')
        .wrap.xl-auto.xl-center.xl-middle.xl-gutter-16
          .col
            .xl-co-black-100.xl-fs18.xl-lh24.xl-fw600 {{ $t("globals.dataSponsor") }}
          .col.xl-lh0
            div(v-html='graphCoolIcon')
          .col
            .graphcool-color.xl-fw600.xl-ls1.xl-fs20.xl-lh24 GRAPHCOOL
      .xl-tac
        a.xl-ffscp.xl-fs14.xl-tac.xl-co-gray-500.xl-my24.xl-dib.xl-lh24(href='https://github.com/dnomak/dnomak.com', target='_blank')
          | {{ $t("globals.contribute") }}
</template>

<script>
  import { mapGetters } from 'vuex'
  import lowerCase from 'lodash/lowerCase'

  export default {
    async fetch ({ store }) {
      await store.dispatch('humans/getAllHumans')
    },
    layout: 'main',
    head () {
      return {
        title: 'Doğukan Güven Nomak'
      }
    },
    data () {
      return {
        AllHumans: null,
        keyword: null,
        searchIcon: `
          <svg fill="#000000" height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
        `,
        patreonIcon: `
          <svg viewBox="0 0 569 546" style="width: 36px; height: 36px;" xmlns="http://www.w3.org/2000/svg"><circle fill="#052D49" cx="362.589996" cy="204.589996" r="204.589996"></circle><rect fill="#FFFFFF" x="0" y="0" width="100" height="545.799988"></rect></svg>
        `,
        graphCoolIcon: `
          <svg stroke="none" fill="rgba(39,174,96,1)" style="width: 40px; height: 46px;" xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="66 46 18 21"><path d="M82.18 53.28c-.92-.52-2.07.16-2.26.27l-3.96 2.26a1.53 1.53 0 0 0-1.98.05 1.57 1.57 0 0 0-.31 1.97c.38.65 1.17.93 1.87.66.7-.26 1.11-.99.98-1.73l3.95-2.26.02-.01c.26-.16.86-.41 1.14-.25.2.12.32.5.33 1.07v4.99c0 .47-.25.9-.65 1.13l-5.68 3.3c-.4.23-.89.23-1.3 0l-5.67-3.3c-.4-.24-.65-.66-.65-1.13v-6.61c0-.47.25-.9.65-1.13l5.14-2.99c.49.57 1.31.7 1.95.32.64-.38.92-1.17.67-1.87-.25-.71-.97-1.12-1.7-1-.73.12-1.28.76-1.29 1.51l-5.3 3.08c-.74.43-1.2 1.22-1.2 2.08v6.6c0 .86.46 1.65 1.2 2.08l5.68 3.3c.74.43 1.65.43 2.39 0l5.68-3.3c.74-.43 1.19-1.22 1.2-2.08v-4.8c.01-1.12-.29-1.86-.9-2.21z"></path></svg>
        `
      }
    },
    created () {
      this.AllHumans = this.humans
    },
    methods: {
      searchInHumans () {
        const keyword = lowerCase(this.keyword)
        if (keyword) {
          this.AllHumans = this.humans.filter(human =>
            lowerCase(human.name).includes(keyword) || lowerCase(human.title).includes(keyword)
          )
        } else {
          this.AllHumans = this.humans
        }
      }
    },
    computed: {
      ...mapGetters('humans', [
        'humans'
      ])
    }
  }
</script>

<style scopped>
  .humans {
    max-height: 284px;
    overflow: scroll;
  }
  .humans > *:first-child {
    border-top: 0!important;
  }
  .search-icon svg {
    fill: #E8E8E8;
  }
  .social-media {
    margin-left: 24px;
    padding-top: 8px;
    padding-bottom: 8px;
    list-style-type: disc;
    list-style-position: inside;
  }
  .graphcool-color {
    color: #27ae60;
  }
</style>
