import graphConnection from '../../globals/graph'
import { store } from '../../globals/mixins'
import { gql } from '../../globals/utils'
import sortBy from 'lodash/sortBy'

const queryAllTimes = graphConnection.graph.query(gql`($username: String!) {
  allTimes(filter: {human: {username: $username}}) {
    second
    human {
      username
    }
    question {
      name
      nameEnglish
    }
  }
}`)

export default store({
  state: {
    times: []
  },
  getters: {
    times: state => sortBy(state.times, ['second']),
    timeByQuestionId: state => questionId => state.times.filter(
      times => times.id === questionId
    )[0]
  },
  actions: {
    async getAllTimes ({ commit }, username) {
      const times = await queryAllTimes({ username })
      commit('SET_ALL_TIMES', times.allTimes)
    }
  },
  mutations: {
    SET_ALL_TIMES (state, result) {
      state.times = result
    }
  }
})
