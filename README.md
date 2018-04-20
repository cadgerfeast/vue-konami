# Vue Konami

<p align="center">A simple, yet totally indispensable directive for Vue.js applications.</p>

<p align="center">
  <a href="https://travis-ci.org/j2pichon/vue-konami">
    <img src="https://travis-ci.org/j2pichon/vue-konami.svg?branch=master" alt="Build Status">
  </a>
  <a href="https://www.npmjs.com/package/vue-konami">
    <img src="https://img.shields.io/npm/dt/vue-konami.svg" alt="Downloads">
  </a>
  <a href="https://www.npmjs.com/package/vue-konami">
    <img src="https://img.shields.io/npm/l/vue-konami.svg" alt="License">
  </a>
</p>

## Installation

``` bash
npm install vue-konami --save
```

Use it as a plugin:

``` javascript
import Vue from 'vue'
import VueKonami from 'vue-konami'

Vue.use(VueKonami)
```

Alternativelly you can reference the script and the stylesheet in your HTML:
``` html
<script src="path/to/vue-konami.min.js"></script>
```

## Usage

Simplest usage:

``` html
<div v-konami="callback"><div>
```

Advanced usage:

``` html
<div v-konami:opts.custom="easterEgg"></div>
<script>
export default {
  name: 'Konami',
  data () {
    return {
      opts: {
        timeout: 3000,
        chain: '65-90-69-82-84-89'
      }
    }
  },
  methods: {
    easterEgg () {
      console.log('I\'m a totally useful easter egg.')
    }
  }
}
</script>
```

Available options:

| Name     | Description                               | Default                                  |
|:---------|:------------------------------------------|:-----------------------------------------|
| timeout  | Time the user have to type the chain      | `3000`                                   |
| chain    | The chain (KeyCodes separated by hyphens) | `38-38-40-40-37-39-37-39-66-65` (Konami) |

## License

MIT
