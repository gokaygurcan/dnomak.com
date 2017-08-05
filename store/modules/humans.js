/* eslint-disable no-param-reassign */

import { graph } from '../../globals/graph';
import { store } from '../../globals/mixins';
import { gql } from '../../globals/utils';

const queryHuman = graph.query(gql`($id: String!) {
  Human(username: $id) {
    name
    title
    username
    videoId
    tags {
      name
    }
  }
}`);

const queryAllHumans = graph.query(gql`{
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

export default store({
  state: {
    human: [],
    humans: [],
  },
  getters: {
    human: state => state.human,
    humans: state => state.humans,
  },
  actions: {
    async getHuman({ commit }, id) {
      const results = await queryHuman({ id });
      commit('SET_HUMAN', results.Human);
    },
    async getAllHumans({ commit }) {
      const humans = await queryAllHumans();
      commit('SET_ALL_HUMANS', humans.allHumans);
    },
  },
  mutations: {
    SET_HUMAN(state, results) {
      state.human = results;
    },
    SET_ALL_HUMANS(state, result) {
      state.humans = result;
    },
  },
});
