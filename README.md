# Axiosware

Axios [middleware](https://redux.js.org/advanced/middleware) for Redux.

```js
npm install axiosware
```

```js
import axiosware from 'axiosware';
```

## Why Do I Need This?

TODO

## Motivation

TODO

## Installation

```bash
npm install axiosware
```

Then, to enable the Axios middleware, use
[`applyMiddleware()`](https://redux.js.org/api/applymiddleware):

```js
import { createStore, applyMiddleware } from 'redux';
import axiosware from 'axiosware';
import rootReducer from './reducers/index';

const store = createStore(rootReducer, applyMiddleware(axiosware));
```

## License

MIT
