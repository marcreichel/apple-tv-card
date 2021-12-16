# Apple TV Card (with JavaScript and CSS)

[![CodeFactor](https://www.codefactor.io/repository/github/marcreichel/apple-tv-card/badge/main)](https://www.codefactor.io/repository/github/marcreichel/apple-tv-card/overview/main)
![version](https://img.shields.io/npm/v/apple-tv-card)
![downloads](https://img.shields.io/npm/dt/apple-tv-card)
![license](https://img.shields.io/npm/l/apple-tv-card)
[![Gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg)](https://gitmoji.dev)

An Apple TV Card with hover animation and parallax effect.


## Demo

![Animation](docs/demo.gif)

[Live-Demo](https://marcreichel.github.io/apple-tv-card/)


## Installation

### Via a package manager

#### NPM

```shell
npm install apple-tv-card --save
```

#### yarn

```shell
yarn add apple-tv-card
```

### Directly via CDN

Insert inside the head of your HTML:

```html
<link href="//unpkg.com/apple-tv-card@latest/dist/main.css" rel="stylesheet">
<script src="//unpkg.com/apple-tv-card@latest/dist/main.js" defer></script>
```

## Set up

> **Please note**: This step is only necessary when you used a package manager for installation.

### Require the JavaScript

```javascript
require('apple-tv-card');
```

### Import the CSS

```css
@import "~apple-tv-card/dist/main.css";
```

## Usage

Add the card to your HTML:

```html
<div class="apple-tv-card-container" style="width:300px;">
    <div class="apple-tv-card">
        <div class="content" style="background-image:url(...);">
            <!-- Any non-parallax content -->
        </div>
        <div class="parallax-content">
            <!-- Example -->
            <div style="width:5em;height:5em;border:1em dashed white;"></div>
            <!-- End: Example -->
        </div>
    </div>
    <div class="apple-tv-card-title">
        Your awesome card
    </div>
</div>
```


## Credits

- [@marcreichel](https://www.github.com/marcreichel)
- [All Contributors](https://github.com/marcreichel/apple-tv-card/contributors)


## Known Issues

- Card title not displayed correctly in Safari


## Contributing

Contributions are always welcome!
