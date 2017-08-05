<template lang="pug">
  .container
    .xl-p16
      .wrap.xl-5.xl-guttur-16
        .col(v-for="tag in tags")
          div
            strong {{ tag.name }}
          div(v-for='human in tag.humans')
            nuxt-link.xl-cp.xl-co-black-500.xl-pt8.xl-dib(:to="human.username", exact)
              | {{ human.username }}
</template>

<script>
  /* eslint-disable import/no-extraneous-dependencies */

  import { mapGetters } from 'vuex';

  export default {
    async fetch({ store }) {
      await store.dispatch('tags/getAllTags');
    },
    layout: 'main',
    head() {
      return {
        title: 'Doğukan Güven Nomak',
      };
    },
    computed: {
      ...mapGetters('tags', [
        'tags',
      ]),
    },
  };
</script>
