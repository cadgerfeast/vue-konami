# vue-konami

[![Version](https://badge.fury.io/js/vue-konami.svg)](https://www.npmjs.com/package/vue-konami)
[![Downloads](https://img.shields.io/npm/dt/vue-konami.svg)](https://www.npmjs.com/package/vue-konami)
[![License](https://img.shields.io/npm/l/vue-konami.svg)](https://github.com/cadgerfeast/vue-konami/blob/master/LICENSE)

<p align="center"><br/><img width="200" src="https://vue-konami.cadgerfeast.com/icons/vue-konami.svg" alt="Vue Konami Icon"/><br/><br/></p>

> The indispensable directive for VueJS

## Documentation

[Full documentation website can be found here.](https://vue-konami.cadgerfeast.com)

> If targeting Vue2, please read [Legacy docs](./DOCS.md#vue2-legacy)

## Installation

``` bash
npm install vue-konami --save
```

## Usage

### Simple

``` html
<div v-konami="easterEgg"></div>

<script setup>
  const easterEgg = () => {
    alert('easterEgg');
  };
</script>
```

### Advanced

``` html
<div v-konami="easterEgg"></div>

<script setup>
  const easterEgg = {
    timeout: 500,
    chain: ['A', 'Z', 'E', 'R', 'T', 'Y'],
    callback: () => {
      alert('easterEgg');
    }
  };
</script>
```

## Contributors

<table>
  <tbody>
    <tr>
      <td align="center">
        <a href="https://github.com/cadgerfeast">
          <img src="https://github.com/cadgerfeast.png?size=100" alt="cadgerfeast" width="100px" style="min-width: 100px">
          <br/>
          <span>cadgerfeast</span>
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/Aterbonus">
          <img src="https://github.com/Aterbonus.png?size=100" alt="Aterbonus" width="100px" style="min-width: 100px">
          <br/>
          <span>Aterbonus</span>
        </a>
      </td>
    </tr>
  </tbody>
</table>

## License

MIT
