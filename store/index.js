import Vuex from 'vuex'

import i18n from '../store/globals/i18n'

import TagsStore from '../store/modules/tags'
import HumansStore from '../store/modules/humans'
import AccountsStore from '../store/modules/accounts'
import TimesStore from '../store/modules/times'

export default () => new Vuex.Store({
  modules: {
    i18n,
    tags: TagsStore,
    humans: HumansStore,
    accounts: AccountsStore,
    times: TimesStore
  }
})
