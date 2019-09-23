import Directives from './directives';

export function VueKonami (Vue) {
  for (var directive in Directives) {
    Vue.directive(Directives[directive].name, Directives[directive].options);
  }
}

export default VueKonami;
