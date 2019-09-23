import VueKonami from './cjs';
export { VueKonami } from './cjs';

export default VueKonami;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueKonami);
}
