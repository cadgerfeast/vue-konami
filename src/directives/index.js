var Konami = {
  name: 'konami',
  options: {
    bind (el, binding, vnode) {
      const handler = function (e) {
        el.__vueKonami__.value += e.keyCode + '-'
        if (el.__vueKonami__.value.includes(el.__vueKonami__.target)) {
          binding.value(e)
          el.__vueKonami__.value = ''
        }
        clearTimeout(el.__vueKonami__.timeoutEl)
        el.__vueKonami__.timeoutEl = setTimeout(function () {
          el.__vueKonami__.value = ''
        }, el.__vueKonami__.timeout)
      }
      el.__vueKonami__ = {
        handler: handler,
        value: '',
        target: ''
      }
      document.addEventListener('keydown', handler)
      var chain = '38-38-40-40-37-39-37-39-66-65-'
      var timeout = 3000
      if (binding.modifiers.custom) {
        if (vnode.context[binding.arg] && vnode.context[binding.arg].chain) {
          chain = vnode.context[binding.arg].chain + '-'
        } else {
          console.warn('VueKonami - Warning: No chain option has been found, using Konami instead.')
        }
        if (vnode.context[binding.arg] && vnode.context[binding.arg].timeout) {
          timeout = vnode.context[binding.arg].timeout
        }
      }
      el.__vueKonami__.target = chain
      el.__vueKonami__.timeout = timeout
    },
    unbind (el, binding) {
      document.removeEventListener('keydown', el.__vueKonami__.handler)
      el.__vueKonami__ = null
    }
  }
}

export default {
  Konami
}
