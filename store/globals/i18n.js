export default {
  namespaced: true,
  state: {
    locale: 'tr'
  },
  getters: {
    locale: state => state.locale
  }
}
