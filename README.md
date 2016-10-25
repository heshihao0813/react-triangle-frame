# react-triangle-frame
React high-order component that adds a frame with a triangle pointer around the wrapped component.

## Installation

```sh
$ npm install react-triangle-frame --save
```

## Example

```javascript
import React from 'react'
import TriangleFrame from 'react-triangle-frame'

import ColorPicker from '/components/ColorPicker'

// default frame
const DefaultWrapper = TriangleFrame()(ColorPicker)

// custom frame
const CustomerWrapper = TriangleFrame({
    color: 'yellow',
    borderColor: 'red',
    position: 'right'
})(ColorPicker)
```

![screenshot](https://github.com/heshihao0813/react-triangle-frame/blob/master/screenshot.PNG)

## API

### TriangleFrame([config])(ComposedComponent)

Optionally you could pass a custom config:

###config.color###

**[String]** = `#fff`

Background color of the frame.

###config.borderColor###

**[String]** = `rgba(0, 0, 0, 0.15)`

Border color of the frame.

###config.position###

**[String]** = `top`

Position of the triangle pointer, which could be `top`/`bottom`/`left`/`right`.
