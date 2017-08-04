import { store } from '@/components/global/mixins';
import { graph } from '@/graph';

const allTags = graph.query(`{
  allTags {
    name
    humans(
      orderBy: createdAt_DESC,
      filter: {
        private: false
      }) {
      name
      title
      username
      private
    }
  }
}`);

/* eslint-disable no-param-reassign */
export default store({
  state: {
    tags: [],
  },
  getters: {
    tags: state => state.tags,
  },
  actions: {
    async allTags({ commit }) {
      const tags = await allTags();
      commit('SET_TAGS', tags.allTags);
    },
  },
  mutations: {
    SET_TAGS(state, result) {
      state.tags = result;
    },
  },
});
