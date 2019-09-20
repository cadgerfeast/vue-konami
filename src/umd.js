import VueKonami from './cjs'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueKonami)
}
