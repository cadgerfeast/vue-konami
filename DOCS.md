# Documentation

## Vue2 (Legacy)

### Installation

``` bash
npm install vue-konami@1.2.0 --save
```

### Usage

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

### Simple

Simplest usage:

``` html
<div v-konami="myMethod"></div>
```

### Advanced

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
