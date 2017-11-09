import graphConnection from '../../globals/graph'
import { store } from '../../globals/mixins'
import { gql } from '../../globals/utils'

const queryAllAccounts = graphConnection.graph.query(gql`($username: String!) {
  allAccounts(filter: {human: {username: $username}}) {
    username
    website {
      url
      name
    }
    human {
      username
    }
  }
}`)

export default store({
  state: {
    accounts: []
  },
  getters: {
    accounts: state => state.accounts
  },
  actions: {
    async getAllAccounts ({ commit }, username) {
      const accounts = await queryAllAccounts({ username })
      commit('SET_ALL_ACCOUNTS', accounts.allAccounts)
    }
  },
  mutations: {
    SET_ALL_ACCOUNTS (state, result) {
      state.accounts = result
    }
  }
})
