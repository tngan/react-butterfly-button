react-butterfly-button
===========

[![Build Status](https://travis-ci.org/tngan/react-butterfly-button.svg?branch=master)](https://travis-ci.org/tngan/react-butterfly-button)
[![devDependencies Status](https://david-dm.org/tngan/react-butterfly-button/dev-status.svg)](https://david-dm.org/tngan/react-butterfly-button?type=dev)

<img src="http://zippy.gfycat.com/ColorfulShortKarakul.gif" alt="normal-login" width="30%">

## Installation

You can use yarn or npm to install this module

```sh
$ npm install --save react-butterfly-button
# or
$ yarn add react-butterfly-button --save
```

## Get started

`ButterflyButton` is a react component that renders a split button overlaid on an image. The button can be customized using the `props` defined in the next section. The following shows how simple it can be created.

```jsx
import React, { Component } from 'react';
import ButterflyButton, { TB, LR, C } from 'react-butterfly-button';

class App extends Component {
  render() {
    return (
      <ButterflyButton
        type={LR}
        data-image-src='http://image.flaticon.com/icons/svg/136/136530.svg'
        data-wing1-icon-class='fa fa-remove'
        data-wing1-onclick={() => alert('click wing1')}
        data-wing2-icon-class='fa fa-remove'
        data-wing2-onclick={() => alert('click wing2')}
      />
    );
  }
}

ReactDOM.render(<App />, document.body);
```

## Props

`ButterflyButton` can be customized by using the following.

Properties              | Type      | Description
----------------------- | --------- | -----------
`size`                  | `string`  | size of the button, default to `4em`
`type`                  | `string`  | a [button type](#button-types)
`data-image-src`        | `string`  | image link
`data-transition`       | `string`  | transition time when mouse is hovered, default to `0.5s`
`data-wing1-icon-class` | `string`  | font awesome class for left/top split (e.g. `fa fa-remove`)
`data-wing1-onclick`    | `function`| callback function for onClick handling on left/top split
`data-wing1-style`      | `object`  | a [split style](#split-styles)
`data-wing2-icon-class` | `string`  | font awesome class for right/bottom split (e.g. `fa fa-remove`)
`data-wing2-onclick`    | `function`| callback function for onClick handling on right/bottom split
`data-wing2-style`      | `object`  | right/bottom [split style](#split-styles)

### Remarks

`data-wing2-*` is only required when using left-right and top-bottom split.

## Button types and split styles

`ButterflyButton` also provides some helpers to make easier configuration as follows.

```js
import ButterflyButton, { TB, LR, C } from 'react-butterfly-button';
```

### Button types

Type     | Description
-------- | ------------
`TB`     | top-bottom split
`LR`     | left-right split
`C`      | no split

### Split styles

Prop                    | Type      | Description
----------------------- | --------- | -----------
`backgroundColor`       | `string`  | background color of split (css's `background-color`)
`fontColor`             | `string`  | font color of split (css's `color`)
`fontSize`              | `string`  | font size of split (css's `font-size`)

## Development

After cloning and running `npm install`, you can use the following `npm` commands for easier development:

Command         | Description
--------------- | -----------
`npm test`      | run test suite
`npm run build` | build the module

## Credits

- Icon made by [Madebyoliver](http://www.flaticon.com/authors/madebyoliver) from www.flaticon.com 
