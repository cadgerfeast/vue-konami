// Helpers
import { Component } from 'vue';
import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { vKonami, HTMLKonamiElement } from '../src/index';

const SimpleComponent: Component = {
  setup () {
    return {
      easterEgg: vi.fn()
    };
  },
  template: '<div v-konami="easterEgg"></div>'
};
const CustomComponent: Component = {
  setup () {
    return {
      easterEgg: {
        timeout: 500,
        chain: ['A', 'Z', 'E', 'R', 'T', 'Y'],
        callback: vi.fn()
      }
    };
  },
  template: '<div v-konami="easterEgg"></div>'
};

describe('vKonami', () => {
  it('should export the directive', () => {
    expect(vKonami).toBeDefined();
  });
  it('should be initialized with simple function', () => {
    const wrapper = mount(SimpleComponent, {
      global: {
        directives: {
          konami: vKonami
        }
      }
    });
    const el = wrapper.element as HTMLKonamiElement;
    expect(el._konami!.chain).toEqual('arrowup-arrowup-arrowdown-arrowdown-arrowleft-arrowright-arrowleft-arrowright-b-a');
    expect(el._konami!.timeout).toEqual(3000);
  });
  it('should be initialized with custom options', () => {
    const wrapper = mount(CustomComponent, {
      global: {
        directives: {
          konami: vKonami
        }
      }
    });
    const el = wrapper.element as HTMLKonamiElement;
    expect(el._konami!.chain).toEqual('a-z-e-r-t-y');
    expect(el._konami!.timeout).toEqual(500);
  });
  it('should trigger callback if maching chain', async () => {
    vi.useFakeTimers();
    const wrapper = mount(CustomComponent, {
      global: {
        directives: {
          konami: vKonami
        }
      }
    });
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'A' }));
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Z' }));
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'E' }));
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'R' }));
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'T' }));
    vi.advanceTimersByTime(1000);
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Y' }));
    expect(wrapper.vm.easterEgg.callback).not.toHaveBeenCalledOnce();
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'A' }));
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Z' }));
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'E' }));
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'R' }));
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'T' }));
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Y' }));
    expect(wrapper.vm.easterEgg.callback).toHaveBeenCalledOnce();
  });
  it('should remove references when removing element', () => {
    const wrapper = mount(SimpleComponent, {
      global: {
        directives: {
          konami: vKonami
        }
      }
    });
    const el = wrapper.element as HTMLKonamiElement;
    wrapper.unmount();
    expect(el._konami).toBeUndefined();
  });
});
