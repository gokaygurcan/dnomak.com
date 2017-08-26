import graphConnection from '../../globals/graph'
import { store } from '../../globals/mixins'
import { gql } from '../../globals/utils'

const queryAllTags = graphConnection.graph.query(gql`{
  allTags {
    name
    humans(orderBy: createdAt_DESC, filter: { private: false }) {
      name
      title
      username
      private
    }
  }
}`)

export default store({
  state: {
    tags: []
  },
  getters: {
    tags: state => state.tags
  },
  actions: {
    async getAllTags ({ commit }) {
      const tags = await queryAllTags()
      commit('SET_ALL_TAGS', tags.allTags)
    }
  },
  mutations: {
    SET_ALL_TAGS (state, result) {
      state.tags = result
    }
  }
})
