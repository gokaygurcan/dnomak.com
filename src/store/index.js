import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

// Module Stores
import TagsStore from '@/components/modules/tags/store';
import HumansStore from '@/components/modules/humans/store';
import TimesStore from '@/components/modules/times/store';
import AccountsStore from '@/components/modules/accounts/store';

// Global Stores
import i18n from './modules/i18n';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    i18n,
    // components
    tags: TagsStore,
    humans: HumansStore,
    times: TimesStore,
    accounts: AccountsStore,
  },
  plugins: [createPersistedState()],
});
