# Apple TV Card (with JavaScript and CSS)

![version](https://img.shields.io/npm/v/@marcreichel/apple-tv-card?style=for-the-badge)
![downloads](https://img.shields.io/npm/dt/@marcreichel/apple-tv-card?style=for-the-badge)
[![](https://img.shields.io/jsdelivr/npm/hm/%40marcreichel%2Fapple-tv-card?style=for-the-badge)](https://www.jsdelivr.com/package/npm/@marcreichel/apple-tv-card)
[![CodeFactor](https://img.shields.io/codefactor/grade/github/marcreichel/apple-tv-card?style=for-the-badge
)](https://www.codefactor.io/repository/github/marcreichel/apple-tv-card/overview/main)
![license](https://img.shields.io/npm/l/@marcreichel/apple-tv-card?style=for-the-badge)

An Apple TV Card with hover animation and parallax effect.


## Demo

![Animation](docs/demo.gif)

[Live Demo](https://marcreichel.github.io/apple-tv-card/)

[See It In Action](https://marcreichel.github.io/apple-tv/)


## Installation

### Via a package manager

#### NPM

```shell
npm install @marcreichel/apple-tv-card --save
```

#### yarn

```shell
yarn add @marcreichel/apple-tv-card
```

### Directly via CDN

Insert inside the head of your HTML:

```html
<link href="//cdn.jsdelivr.net/npm/@marcreichel/apple-tv-card@latest/dist/main.css" rel="stylesheet">
<script src="//cdn.jsdelivr.net/npm/@marcreichel/apple-tv-card@latest/dist/main.js" defer></script>
```

## Set up (only necessary for NPM and Yarn)

### Require the JavaScript

```javascript
require('@marcreichel/apple-tv-card');
```

### Import the CSS

```css
@import "~@marcreichel/apple-tv-card/dist/main.css";
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

Any known issues can be found [here](https://github.com/marcreichel/apple-tv-card/issues?q=is%3Aopen+is%3Aissue+label%3Abug).

## Contributing

Contributions are always welcome!
