<template lang="pug">
  div.xl-p16
    | {{ human.name }}
    div(v-for="account in accounts")
      div {{ account.website.name }}
    div(v-for="time in times")
      div {{ time.question.name }}
</template>

<script>
  /* eslint-disable import/no-extraneous-dependencies */

  import { mapGetters } from 'vuex';

  export default {
    async fetch({ store, params }) {
      await store.dispatch('humans/getHuman', params.id);
      await store.dispatch('accounts/getAllAccounts', params.id);
      await store.dispatch('times/getAllTimes', params.id);
    },
    layout: 'main',
    head() {
      return {
        title: this.human.name,
      };
    },
    computed: {
      ...mapGetters('humans', [
        'human',
      ]),
      ...mapGetters('accounts', [
        'accounts',
      ]),
      ...mapGetters('times', [
        'times',
      ]),
    },

  };
</script>
