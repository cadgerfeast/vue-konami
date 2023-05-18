import { createApp } from 'vue';
import { vKonami } from 'vue-konami';

createApp({
  setup () {
    function easterEgg () {
      alert('easterEgg');
    }
    return {
      easterEgg
    };
  },
  directives: {
    konami: vKonami
  }
}).mount('#app')
