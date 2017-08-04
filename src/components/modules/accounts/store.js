import { store } from '@/components/global/mixins';
import { graph } from '@/graph';

const allAccounts = graph.query(`($username: String!) {
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
}`);

/* eslint-disable no-param-reassign */
export default store({
  state: {
    accounts: [],
  },
  getters: {
    accounts: state => state.accounts,
  },
  actions: {
    async allAccounts({ commit }, username) {
      const accounts = await allAccounts({ username });
      commit('SET_ACCOUNTS', accounts.allAccounts);
    },
  },
  mutations: {
    SET_ACCOUNTS(state, result) {
      state.accounts = result;
    },
  },
});
