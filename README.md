# js-dom-factories
*js-dom-factories* provides some helper functions for creating virtual
DOM elements. It's a simple alternative to JSX.<br>

Currently adapters for the following UI libraries are available:

- React
- DIO

Moreover, *js-dom-factories* also provides a adapter
called "univeral" which generates library independent
virutal UI elements (which is only useful in very special
cases where you need your own UI component tree, independent of any other UI library):

```javascript
{
    type: ....,
    props: { ... },  // or null
    children: [...], // or null
    isElement: true  // always true
}
```
### Project installation and build

```
git clone https://github.com/js-works/js-dom-factories.git
cd js-dom-factories
npm install
npm run all
```

### Using *js-dom-factories* in your own projects

```
npm install --save js-dom-factories
```

## Usage

### Importing js-dom-factories

```javascript
// If you want to use js-dom-factories for React or React Native
import h from 'js-dom-factories/react';

// If you want to use js-dom-factories for DIO 
import h from 'js-dom-factories/dio';

// If you want to use js-dom-factories to generate universal UI elements
import h from 'js-dom-factories/universal';
```

### Example

```javascript
import { Html } from 'js-dom-factories/react';

const { button, div } = Html;

const content =
    div({ id: 'container', className: 'box' },
        div(null,
            button(null, 'Some button')),
        div(null,
           button(null, 'Some other button')));
```

## Note

If you prefer  hyperscript to the simple factories provided by *js-dom-factories*
then have a look at [js-hyperscript](https://github.com/js-works/js-hyperscript).

## Project status

The project is in alpha - don't use it yet.
