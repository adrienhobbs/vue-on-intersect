# Vue-On-Intersect

** IN DEVELOPMENT **
Easily observe changes in an elements viewport location.
Reuses observers, if multiple elements share the same offset for improved performance.

Designed to help you improve performance and integrate interactivity in response to an element's position on the page.

Example use cases:

1. Trigger an animation on elements entering and exiting the viewport.
2. Lazy loading an image when an element is 10% below the viewport.

See [Demo](https://adrienhobbs.github.io/vue-on-intersect/).

This uses the [`Interaction Observer API`](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

- Make sure to include the [`polyfill`](https://github.com/w3c/IntersectionObserver/blob/master/polyfill/README.md) to support older browsers.

# Installation

```
npm install --save vue-on-intersect
```

# Importing

### Register Directive

```javascript
import Vue from 'vue'
import VueOnIntersect from 'vue-on-intersect'

Vue.use(VueOnIntersect)
```

# Usage

Use the `v-on-intersect` directive to integrate visibility updates into your own components.

Declare the directive in your template with any of the following options:

| PropName     |  Type   | Default | Description                                                                                                                                                                                        |
| ------------ | :-----: | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| once         | BOOLEAN | false   | Update only on first intersect?                                                                                                                                                                    |
| topOffset    | STRING  | "0%"    | When to trigger visibility updates. See Offsets for an explanation.                                                                                                                                |
| bottomOffset | STRING  | "0%"    | When to trigger visibility updates. See Offsets for an explanation.                                                                                                                                |
| threshold    | NUMBER  | 100     | A number indicating at what percentage(s) of the target's visibility the observer is updated. At the default of 100, updates will happen each percent increase/decrease in visibility from 0 - 100 |

```html
<MyComponent v-on-intersect="options">
```

Vue-On-Intersect will update the reactive properties directly on your component.

| PropName          |  Type   | Description                                        |
| ----------------- | :-----: | :------------------------------------------------- |
| isIntersecting    | BOOLEAN | Component is in viewport                           |
| isAbove           | BOOLEAN | Component is above viewport                        |
| isBelow           | BOOLEAN | Component is below viewport                        |
| isPartiallyAbove  | BOOLEAN | Component is in viewport, but also above viewport  |
| isPartiallyBelow  | BOOLEAN | Component is in viewport, but also below viewport  |
| intersectionRatio | NUMBER  | Amount of component visible. Decimal between 0 - 1 |

Make sure to subscribe to these reactive properties by the declaring them in your component's data object or using the VueOnIntersect Mixin.

```javascript
import {VueOnIntersectMixin} from 'VueOnIntersect'

export default {
  name: 'MyComponent',
  // USING MIXIN
  mixins: [VueOnIntersectMixin],
  data() {
    return {
      options: {
        once: false,
        topOffset: '-20%',
        bottomOffset: '-20%',
      }
      // DECLARING DIRECTLY IN YOUR COMPONENT
      isIntersecting: null,
      intersectionRatio: null,
      isAbove: null,
      isBelow: null,
      isPartiallyAbove: null,
      isPartiallyBelow: null
    }
  }
}
```

# Offsets

The default offsets will trigger visibility changes when your component enters/exits the viewport at the top or bottom. You can change this behavior by providing your own offsets object. Negative offsets are triggered inside of the viewport, while positive offsets are triggered outside the viewport.

> For visibility changes to trigger when an element is outside the viewport use a positive number.

```javascript
// Visibility changes occur 10% above the top of the viewport, and 10% below the bottom of the viewport. Example Use: Lazy Loading.
const topOffset = '10%'
const bottomOffset = '10%'
```

> For visibility changes to trigger when an element is inside the viewport use a negative number.

```javascript
// Visibility changes occur 10% below the top of the viewport, and 10% above the bottom of the viewport. Example Use: Animating as element enters view.
const topOffset = '-10%'
const bottomOffset = '-10%'
```

This is a new package, in active development. Please submit any issues or feature requests [here](https://github.com/adrienhobbs/vue-on-intersect/issues).
