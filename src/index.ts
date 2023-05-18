// Types
import type { Directive } from 'vue';

export type KonamiCallback = (e: KeyboardEvent) => void;

export type KonamiOptions = {
  chain: string[];
  timeout: number;
  callback: KonamiCallback;
};

export interface HTMLKonamiElement extends HTMLElement {
  _konami?: {
    chain: string;
    value: string[];
    timeout: number;
    timeoutRef?: number;
    keydownHandler: KonamiCallback;
  }
}

export type KonamiBinding = KonamiCallback|KonamiOptions;

export const vKonami: Directive<HTMLKonamiElement, KonamiBinding> = {
  mounted (el, binding) {
    let chain = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'B', 'A'].join('-').toLowerCase();
    let timeout = 3000;
    let callback: KonamiCallback|null = null;
    if (typeof binding.value === 'function') {
      callback = binding.value;
    } else if (typeof binding.value === 'object') {
      if (binding.value.chain) {
        chain = binding.value.chain.join('-').toLowerCase();
      }
      if (binding.value.timeout) {
        timeout = binding.value.timeout;
      }
      if (binding.value.callback) {
        callback = binding.value.callback;
      }
    }
    el._konami = {
      chain,
      value: [],
      timeout,
      keydownHandler (e: KeyboardEvent) {
        if (el._konami) {
          el._konami.value.push(e.key.toLowerCase());
          if (el._konami.value.join('-').includes(el._konami.chain)) {
            callback?.(e);
            el._konami.value = [];
          }
          clearTimeout(el._konami.timeoutRef);
          el._konami.timeoutRef = window.setTimeout(() => {
            if (el._konami) {
              el._konami.value = [];
            }
          }, el._konami.timeout);
        }
      }
    };
    window.addEventListener('keydown', el._konami.keydownHandler);
  },
  unmounted (el) {
    if (el._konami) {
      clearTimeout(el._konami.timeoutRef);
      window.removeEventListener('keydown', el._konami.keydownHandler);
      delete el._konami;
    }
  }
};
