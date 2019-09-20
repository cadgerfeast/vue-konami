import Directives from './directives'

function VueKonami (Vue, options) {
  for (var directive in Directives) {
    Vue.directive(Directives[directive].name, Directives[directive].options)
  }
}
export default VueKonami
