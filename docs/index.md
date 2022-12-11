---
title: Vue Konami
---
# Vue Konami

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=cadgerfeast_vue-konami&metric=alert_status)](https://sonarcloud.io/dashboard?id=cadgerfeast_vue-konami)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=cadgerfeast_vue-konami&metric=coverage)](https://sonarcloud.io/dashboard?id=cadgerfeast_vue-konami)
[![Version](https://badge.fury.io/js/vue-konami.svg)](https://www.npmjs.com/package/vue-konami)
[![Downloads](https://img.shields.io/npm/dt/vue-konami.svg)](https://www.npmjs.com/package/vue-konami)
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
<!-- VueJS -->
<script src="https://unpkg.com/vue"></script>
<!-- VueKonami -->
<script src="path/to/vue-konami.umd.js"></script>
<!-- CDN -->
<script src="https://unpkg.com/vue-konami"></script>
```

## Usage

Simplest usage:

``` html
<div v-konami="myMethod"></div>
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

VueJS directives does not support literal expressions.
If you do not want to have a method inside your Vue component, you can use VueKonami this way:

``` html
<!-- Method -->
<div v-konami @konami="showEasterEgg = !showEasterEgg"></div>
<div v-if="showEasterEgg">My super EasterEgg</div>
<script>
export default {
  name: 'Konami',
  data () {
    return {
      showEasterEgg: false
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
