import graphConnection from '../../globals/graph'
import { store } from '../../globals/mixins'
import { gql } from '../../globals/utils'

const queryHuman = graphConnection.graph.query(gql`($username: String!) {
  Human(username: $username) {
    id
    name
    title
    username
    videoId
    tags {
      name
    }
  }
}`)

const queryAllHumans = graphConnection.graph.query(gql`{
  allHumans(orderBy: createdAt_DESC, filter: { private: false }) {
    id
    name
    title
    username
    videoId
    tags {
      name
    }
  }
}`)

export default store({
  state: {
    human: [],
    humans: []
  },
  getters: {
    human: state => state.human,
    humans: state => state.humans
  },
  actions: {
    async getHuman ({ commit }, username) {
      const results = await queryHuman({ username })
      commit('SET_HUMAN', results.Human)
    },
    async getAllHumans ({ commit }) {
      const humans = await queryAllHumans()
      commit('SET_ALL_HUMANS', humans.allHumans)
    }
  },
  mutations: {
    SET_HUMAN (state, results) {
      state.human = results
    },
    SET_ALL_HUMANS (state, result) {
      state.humans = result
    }
  }
})
