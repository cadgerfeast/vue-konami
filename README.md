# Vue Konami

[![Version](https://badge.fury.io/js/vue-konami.svg)](https://www.npmjs.com/package/vue-konami)
[![Build](https://travis-ci.org/cadgerfeast/vue-konami.svg?branch=master)](https://travis-ci.org/cadgerfeast/vue-konami)
[![Downloads](https://img.shields.io/npm/dt/vue-konami.svg)](https://www.npmjs.com/package/vue-konami)
[![Coverage Status](https://coveralls.io/repos/github/cadgerfeast/vue-konami/badge.svg?branch=master)](https://coveralls.io/github/cadgerfeast/vue-konami?branch=master)
[![License](https://img.shields.io/npm/l/vue-konami.svg)](https://github.com/cadgerfeast/vue-konami/blob/master/LICENSE)

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

Alternatively you can reference the script in your HTML:

``` html
<script src="path/to/vue-konami.umd.js"></script>
<!-- CDN -->
<script src="https://unpkg.com/vue-konami/dist/vue-konami.umd.js"></script>
```

## Usage

Simplest usage:

``` html
<div v-konami="callback"></div>
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
        // A-Z-E-R-T-Y
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

## Contributors

<table>
  <tbody>
    <tr>
      <td align="center">
        <a href="https://github.com/cadgerfeast">
          <img src="https://github.com/cadgerfeast.png?size=100" alt="cadgerfeast" width="100px">
          <br/>
          <span>cadgerfeast</span>
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/Aterbonus">
          <img src="https://github.com/Aterbonus.png?size=100" alt="Aterbonus" width="100px">
          <br/>
          <span>Aterbonus</span>
        </a>
      </td>
    </tr>
  </tbody>
</table>

## License

MIT
