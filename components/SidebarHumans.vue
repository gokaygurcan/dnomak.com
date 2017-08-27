<template lang="pug">
  .xl-mb16
    .xl-pr
      .search-icon.xl-vam.xl-dib.xl-lh0.xl-pa.xl-r16.xl-tty-50p.xl-t50p(v-html='searchIcon')
      input(v-model="keyword", @input="searchInHumans", :placeholder="$t('globals.searchPlaceholder')").xl-1-1.xl-db.xl-h56.xl-ba-white.xl-bw2.xl-bo-gray-200.xl-br8.xl-mb8.xl-brb0.xl-pl16.pl-co-gray-300.xl-fs16
    .xl-ba-white.xl-fs14.xl-lh20.xl-br8.xl-bo-gray-200.xl-bw2.xl-os
      .humans
        .xl-db.xl-py8.xl-px16.xl-co-black-500(v-if="!AllHumans.length")
          .xl-db.xl-wsnw.xl-oh.xl-toe Aradığın insanı bulamadım!
          .xl-db.xl-wsnw.xl-oh.xl-toe.xl-co-gray-500.xl-fsi En kısa zamanda sohbet yapmaya çalışacağım.
        nuxt-link(v-for="human in AllHumans", :key="human.username").xl-db.xl-py8.xl-px16.ho-ba-gray-100.ho-co-black-500.ho-bo-gray-200.xl-ba-white.xl-co-black-500.xl-bwt1.xl-bo-gray-200.xl-cp(:to="human.username")
          .xl-db.xl-wsnw.xl-oh.xl-toe {{ human.name }}
          .xl-db.xl-wsnw.xl-oh.xl-toe.xl-co-gray-500.xl-fsi {{ human.title }}
</template>

<script>
  import { mapGetters } from 'vuex'
  import lowerCase from 'lodash/lowerCase'

  export default {
    layout: 'main',
    computed: {
      ...mapGetters('humans', [
        'humans'
      ])
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
</style>
