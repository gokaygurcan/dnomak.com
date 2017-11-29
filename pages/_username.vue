<template lang="pug">
  .wrap.xl-gutter-24.md-1
    .col.xl-2-3
      Udemy
      .xl-tal.xl-co-black-500.xl-br8.xl-ba-white.xl-bw2.xl-bo-gray-200.xl-p24.lg-px16
        .wrap.xl-auto.xl-gutter-16.xl-middle.xl-pr
          .col.sm-hidden(v-if='human.username')
            .avatar--human.xl-br8(:style="{ 'background-image': 'url(/img/avatar/' + human.username + '.jpg)' }")
          .col
            .xl-mb4
              .wrap.xl-auto.xl-middle.xl-gutter-8
                .col
                  .xl-dib.xl-fs28.xl-fw600.xl-lh40 {{ human.name }}
                .col(v-for='tag in human.tags')
                  .xl-dib.xl-ba-black-500.xl-co-white.xl-py4.xl-px8.xl-br4.xl-ffscp.xl-fs14.xl-my8 {{ tag.name }}
            div.xl-lh24(v-if='human.title')
              |{{ human.title }}
            .youtube
              a.pulse(target='_blank', href='https://www.youtube.com/channel/UCbu25feEIe6fY9fZx8BCMSA?sub_confirmation=1') ABONE OL
        .xl-oh.xl-br8.xl-lh0.xl-mt24
          .embed-responsive.embed-responsive-16by9(v-if='videoLoading')
            .embed-responsive-item
          .xl-db
            youtube.xl-br8.embed-responsive.embed-responsive-16by9(v-if='!videoLoading', :video-id='human.videoId', @ready='ready', :player-vars='{ autoplay: 1, start: questionTime, rel: 0 }')
          .wrap.xl-auto.xl-left.xl-gutter-8.xl-middle.xl-pt24.xl-ffscp.xl-lh20(v-if='accounts.length')
            .col.xl-co-gray-500.xl-fs14
              | {{ $t("globals.socialMedia") }}:
            .col(v-for='account in accounts')
              a.xl-dib.xl-co-black-500.ho-co-black-500.xl-fs14.xl-tdu(:href="`${account.website.url}${account.username}`", target="_blank") {{ account.website.name }}
      FooterView
    .col.xl-1-3
      SidebarPatreon
      .xl-mb16(v-if='times.length')
        .xl-bo-gray-200.xl-bwl2.xl-bwr2.xl-bwt2.xl-ba-gray-200.xl-p16.xl-brt8.xl-fw600.xl-fs18
          | {{ $t("globals.questions") }}
        .xl-ba-white.xl-fs14.xl-lh20.xl-brb8.xl-bo-gray-200.xl-bw2.xl-oh
          .xl-ba-gray-100
            span(v-for='time in times')
              a.xl-db.xl-py8.xl-px16.ho-ba-gray-100.ho-co-black-500.ho-bo-gray-200.xl-ba-white.xl-co-black-500.xl-bwt1.xl-bo-gray-200.xl-cp(@click.stop.prevent="changeQuestionTime(time.second)", :class="{'active': time.second === questionTime}")
                span.xl-1-1.xl-db.xl-wsnw.xl-oh.xl-toe(v-if="$t('lang') === 'tr'") {{ time.question.name }}
                span.xl-1-1.xl-db.xl-wsnw.xl-oh.xl-toe(v-if="$t('lang') === 'en'") {{ time.question.nameEnglish }}
      SidebarHumansChatbot
      SidebarMailChimp
      SidebarGraphcool
</template>

<script>
  import Udemy from '../components/Udemy.vue'
  import SidebarPatreon from '../components/SidebarPatreon.vue'
  import SidebarHumansChatbot from '../components/SidebarHumansChatbot.vue'
  import SidebarMailChimp from '../components/SidebarMailChimp.vue'
  import SidebarGraphcool from '../components/SidebarGraphcool.vue'
  import FooterView from '../components/FooterView.vue'

  export default {
    layout: 'main',
    async asyncData ({ store, params, error, payload }) {
      let data = payload
      if (data) {
        return {
          human: data,
          times: data.times,
          accounts: data.accounts
        }
      } else {
        await store.dispatch('humans/getHuman', params.username)
        await store.dispatch('accounts/getAllAccounts', params.username)
        await store.dispatch('times/getAllTimes', params.username)
        return {
          human: store.getters['humans/human'],
          times: store.getters['times/times'],
          accounts: store.getters['accounts/accounts']
        }
      }
    },
    head () {
      return {
        title: this.human.name,
        meta: [
          { name: 'description', hid: 'description', content: this.human.title },
          // Open Grapg
          { name: 'og:title', content: this.human.name },
          { name: 'og:description', content: this.human.title },
          { name: 'og:type', content: 'website' },
          { name: 'og:url', content: `http://dnomak.com/${this.human.username}` },
          { name: 'og:image', content: `http://dnomak.com/img/avatar/${this.human.username}.jpg` },
          // Twitter Card
          { name: 'twitter:card', content: 'summary' },
          { name: 'twitter:site', content: '@dnomak' },
          { name: 'twitter:title', content: this.human.name },
          { name: 'twitter:description', content: this.human.title },
          { name: 'twitter:image', content: `http://dnomak.com/img/avatar/${this.human.username}.jpg` },
          { name: 'twitter:image:alt', content: this.human.name }
        ]
      }
    },
    data () {
      return {
        questionTime: 0,
        player: {
          j: {
            currentTime: 0
          }
        },
        playerSecond: null,
        videoLoading: false,
        graphCoolIcon: `
          <svg stroke="none" fill="rgba(39,174,96,1)" style="width: 40px; height: 46px;" xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="66 46 18 21"><path d="M82.18 53.28c-.92-.52-2.07.16-2.26.27l-3.96 2.26a1.53 1.53 0 0 0-1.98.05 1.57 1.57 0 0 0-.31 1.97c.38.65 1.17.93 1.87.66.7-.26 1.11-.99.98-1.73l3.95-2.26.02-.01c.26-.16.86-.41 1.14-.25.2.12.32.5.33 1.07v4.99c0 .47-.25.9-.65 1.13l-5.68 3.3c-.4.23-.89.23-1.3 0l-5.67-3.3c-.4-.24-.65-.66-.65-1.13v-6.61c0-.47.25-.9.65-1.13l5.14-2.99c.49.57 1.31.7 1.95.32.64-.38.92-1.17.67-1.87-.25-.71-.97-1.12-1.7-1-.73.12-1.28.76-1.29 1.51l-5.3 3.08c-.74.43-1.2 1.22-1.2 2.08v6.6c0 .86.46 1.65 1.2 2.08l5.68 3.3c.74.43 1.65.43 2.39 0l5.68-3.3c.74-.43 1.19-1.22 1.2-2.08v-4.8c.01-1.12-.29-1.86-.9-2.21z"></path></svg>
        `
      }
    },
    created () {
      /* TODO: Video dakikasına göre sorunun aktif olması kısmı video hızlandırıldığında
               sıkıntılı çalışıyor bu kısmın tekrar gözden geçirilmesi gerekli */
      setInterval(() => {
        const playerSecond = parseInt(this.player.j.currentTime, 10)
        this.times.forEach((time) => {
          if (playerSecond === time.second) {
            this.questionTime = time.second
          }
        })
      }, 1000)
    },
    methods: {
      ready (player) {
        this.player = player
      },
      changeQuestionTime (questionTime) {
        this.videoLoading = true
        setTimeout(() => {
          this.questionTime = parseInt(questionTime, 10)
          this.videoLoading = false
        }, 1)
      }
    },
    components: {
      Udemy,
      SidebarPatreon,
      SidebarHumansChatbot,
      SidebarMailChimp,
      SidebarGraphcool,
      FooterView
    }
  }
</script>

<style>
  .avatar--human {
    width: 100px;
    height: 100px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
  .embed-responsive {
    position: relative;
    display: block;
    height: 0;
    padding: 0;
    overflow: hidden;
  }
  .embed-responsive .embed-responsive-item,
  .embed-responsive iframe,
  .embed-responsive embed,
  .embed-responsive object,
  .embed-responsive video {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
    background: #000000;
  }
  .embed-responsive-16by9 {
    padding-bottom: 56.25%;
  }
  .embed-responsive-4by3 {
    padding-bottom: 75%;
  }
  .active,
  .active:hover {
    background-color: #1094F6;
    color: #FFFFFF;
  }
  .youtube {
    position: absolute;
    right: 8px;
    bottom: 0;
  }
  .pulse {
    display: block;
    display: inline-block;
    height: 40px;
    line-height: 40px;
    color: #fff;
    padding-left: 24px;
    padding-right: 24px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    border-radius: 4px;
    background: #FF0000;
    cursor: pointer;
    box-shadow: 0 0 0 rgba(255,0,0, 0.4);
    animation: pulse 1s infinite;
  }

  @-webkit-keyframes pulse {
    0% {
      -webkit-box-shadow: 0 0 0 0 rgba(255,0,0, 0.4);
    }
    70% {
        -webkit-box-shadow: 0 0 0 10px rgba(255,0,0, 0);
    }
    100% {
        -webkit-box-shadow: 0 0 0 0 rgba(255,0,0, 0);
    }
  }
  @keyframes pulse {
    0% {
      -moz-box-shadow: 0 0 0 0 rgba(255,0,0, 0.4);
      box-shadow: 0 0 0 0 rgba(255,0,0, 0.4);
    }
    70% {
        -moz-box-shadow: 0 0 0 10px rgba(255,0,0, 0);
        box-shadow: 0 0 0 10px rgba(255,0,0, 0);
    }
    100% {
        -moz-box-shadow: 0 0 0 0 rgba(255,0,0, 0);
        box-shadow: 0 0 0 0 rgba(255,0,0, 0);
    }
  }
</style>
