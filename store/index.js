/* eslint-disable import/no-extraneous-dependencies */

import Vuex from 'vuex';

// Global Stores
import i18n from '../store/globals/i18n';

// Module Stores
import TagsStore from '../store/modules/tags';
import HumansStore from '../store/modules/humans';
import AccountsStore from '../store/modules/accounts';
import TimesStore from '../store/modules/times';

export default () => new Vuex.Store({
  modules: {
    // globals
    i18n,
    // modules
    tags: TagsStore,
    humans: HumansStore,
    accounts: AccountsStore,
    times: TimesStore,
  },
});
