import { createApp } from 'vue';
import { vKonami } from 'vue-konami';

createApp({
  setup () {
    return {
      easterEgg: {
        timeout: 500,
        chain: ['A', 'Z', 'E', 'R', 'T', 'Y'],
        callback: () => {
          alert('easterEgg');
        }
      }
    };
  },
  directives: {
    konami: vKonami
  }
}).mount('#app')
