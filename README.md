# Apple TV Card (with JavaScript and CSS)

![version](https://img.shields.io/npm/v/apple-tv-card)
![downloads](https://img.shields.io/npm/dt/apple-tv-card)
![license](https://img.shields.io/npm/l/apple-tv-card)
[![Gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg)](https://gitmoji.dev)

An Apple TV Card with hover animation and parallax effect.


## Demo

![Animation](docs/demo.gif)

[Live-Demo](https://marcreichel.github.io/apple-tv-card/)


## Installation

### Via NPM

```bash
  npm install apple-tv-card --save
```

and add to your HTML:

```html
<link href="node_modules/apple-tv-card/dist/main.css" rel="stylesheet">
<script src="node_modules/apple-tv-card/dist/main.js" defer></script>
```

### Via yarn

```bash
  yarn add apple-tv-card
```

and add to your HTML:

```html
<link href="node_modules/apple-tv-card/dist/main.css" rel="stylesheet">
<script src="node_modules/apple-tv-card/dist/main.js" defer></script>
```

### Directly via CDN

```html
<link href="//unpkg.com/apple-tv-card@latest/dist/main.css" rel="stylesheet">
<script src="//unpkg.com/apple-tv-card@latest/dist/main.js" defer></script>
```


## Setup


Add the card to your HTML:

```html
<div class="apple-tv-card-container" style="width:300px;">
    <div class="apple-tv-card">
        <div class="content"></div>
        <div class="parallax-content">
            <div style="width:5em;height:5em;border:1em dashed white;"></div>
        </div>
    </div>
    <div class="apple-tv-card-title">
        Your awesome card
    </div>
</div>
```


## Authors

- [@marcreichel](https://www.github.com/marcreichel)


## Contributing

Contributions are always welcome!
