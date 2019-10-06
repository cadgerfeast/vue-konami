const Konami = require('../src/directives').default.Konami;

const konamiCode = '38-38-40-40-37-39-37-39-66-65-';
const defaultTimeout = 3000;

let el = null;
let binding = {
  value: () => {},
  modifiers: {}
};
let vnode = {
  context: {}
};

describe('index.js', () => {
  beforeEach(() => {
    el = document.createElement('div');
    jest.spyOn(document, 'addEventListener');
    jest.spyOn(window, 'clearTimeout');
  });
  it('should import', () => {
    expect(Konami.name).toBe('konami');
  });
  it('should bind - konami', () => {
    Konami.options.bind(el, binding, vnode);
    expect(document.addEventListener).toHaveBeenCalled();
    expect(el.__vueKonami__.target).toEqual(konamiCode);
    expect(el.__vueKonami__.timeout).toEqual(defaultTimeout);
  });
  it('should bind - custom empty - should be default', () => {
    jest.spyOn(console, 'warn').mockImplementation(() => { return; });
    binding = {
      ...binding,
      arg: 'dummy',
      modifiers: {
        custom: {}
      }
    };
    Konami.options.bind(el, binding, vnode);
    expect(document.addEventListener).toHaveBeenCalled();
    expect(console.warn).toHaveBeenCalledWith('VueKonami - Warning: No chain option has been found, using Konami instead.');
    expect(el.__vueKonami__.target).toEqual(konamiCode);
    expect(el.__vueKonami__.timeout).toEqual(defaultTimeout);
  });
  it('should bind - custom', () => {
    binding = {
      ...binding,
      arg: 'dummy',
      modifiers: {
        custom: {}
      }
    };
    vnode = {
      ...vnode,
      context: {
        dummy: {
          chain: '38-38',
          timeout: 1000
        }
      }
    };
    Konami.options.bind(el, binding, vnode);
    expect(document.addEventListener).toHaveBeenCalled();
    expect(el.__vueKonami__.target).toEqual(vnode.context.dummy.chain + '-');
    expect(el.__vueKonami__.timeout).toEqual(vnode.context.dummy.timeout);
  });
  it('should dispatch konami event', async (done) => {
    el.addEventListener('konami', () => {
      done();
    });
    const keyCode = 38;
    const event = new KeyboardEvent('keydown', {'keyCode': keyCode});
    jest.spyOn(binding, 'value');
    Konami.options.bind(el, { modifiers: {} }, vnode);
    document.dispatchEvent(event);
    expect(window.clearTimeout).toHaveBeenCalled();
    expect(el.__vueKonami__.value).toEqual(keyCode + '-');
    el.__vueKonami__.value = konamiCode;
    document.dispatchEvent(event);
  });
  it('should call handler', async (done) => {
    const keyCode = 38;
    const event = new KeyboardEvent('keydown', {'keyCode': keyCode});
    jest.spyOn(binding, 'value');
    Konami.options.bind(el, binding, vnode);
    document.dispatchEvent(event);
    expect(window.clearTimeout).toHaveBeenCalled();
    expect(el.__vueKonami__.value).toEqual(keyCode + '-');
    el.__vueKonami__.value = konamiCode;
    document.dispatchEvent(event);
    expect(binding.value).toHaveBeenCalledWith(event);
    expect(el.__vueKonami__.value).toEqual('');
    document.dispatchEvent(event);
    expect(el.__vueKonami__.value).toEqual(keyCode + '-');
    setTimeout(() => {
      expect(el.__vueKonami__.value).toEqual('');
      done();
    }, defaultTimeout + 100);
  });
  it('should unbind', () => {
    jest.spyOn(document, 'removeEventListener');
    const timeoutEl = null;
    const handler = null;
    el.__vueKonami__ = {
      timeoutEl: timeoutEl,
      handler: handler
    };
    Konami.options.unbind(el, binding);
    expect(window.clearTimeout).toHaveBeenCalledWith(timeoutEl);
    expect(document.removeEventListener).toHaveBeenCalledWith('keydown', handler);
    expect(el.__vueKonami__).toBe(null);
  });
});
