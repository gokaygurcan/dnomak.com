<template lang="pug">
  .container
    .xl-p16
      div
        input(type="text", v-model="keyword", @input="searchInTags" class="xl-bo-gray-200 xl-bw2 xl-mb16 xl-br4 xl-p8")
      .wrap.xl-5.xl-guttur-16
        .col(v-for="tag in allTags")
          div
            strong {{ tag.name }}
          div(v-for="human in tag.humans")
            nuxt-link.xl-cp.xl-co-black-500.xl-pt8.xl-dib(:to="human.username", exact)
              | {{ human.username }}
</template>

<script>
  /* eslint-disable import/no-extraneous-dependencies */

  import { mapGetters } from 'vuex';
  import cloneDeep from 'lodash/cloneDeep';
  import lowerCase from 'lodash/lowerCase';

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
    data() {
      return {
        keyword: null,
        allTags: null,
      };
    },
    created() {
      this.allTags = this.tags;
    },
    methods: {
      // TODO: Bu kısım tekrar yazılacak
      searchInTags() {
        const keyword = lowerCase(this.keyword);
        let filteredTags = [];
        if (keyword) {
          this.tags.forEach((tag) => {
            const tempTag = cloneDeep(tag);
            tempTag.humans = tempTag.humans.filter(human =>
              lowerCase(human.name).includes(keyword) || lowerCase(human.title).includes(keyword),
            );
            filteredTags.push(tempTag);
          });
        } else {
          filteredTags = this.tags;
        }
        this.allTags = filteredTags;
      },
    },
    computed: {
      ...mapGetters('tags', [
        'tags',
      ]),
    },
  };
</script>
