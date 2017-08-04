import { store } from '@/components/global/mixins';
import { graph } from '@/graph';

const allHumans = graph.query(`{
  allHumans {
    name
    title
    username
    videoId
    tags {
      name
    }
  }
}`);

/* eslint-disable no-param-reassign */
export default store({
  state: {
    humans: [],
  },
  getters: {
    humans: state => state.humans,
    humanByUsername: state => username => state.humans.filter(
      humans => humans.username === username,
    )[0],
  },
  actions: {
    async allHumans({ commit }) {
      const humans = await allHumans();
      commit('SET_HUMANS', humans.allHumans);
    },
  },
  mutations: {
    SET_HUMANS(state, result) {
      state.humans = result;
    },
  },
});
