# node-env

<!-- [![build status][1]][2] [![dependency status][3]][4]

[![browser support][5]][6] -->

Just require the NODE_ENV environmental variable

## Example

```js
var NODE_ENV = require("node-env")

if (NODE_ENV === "production") {
    /* serious time */
} else if (NODE_ENV === "development") {
    /* fs.watch the entire disk!! */
}
```

## Installation

`npm install node-env`

## Contributors

 - Raynos

## MIT Licenced

  [1]: https://secure.travis-ci.org/Raynos/node-env.png
  [2]: https://travis-ci.org/Raynos/node-env
  [3]: https://david-dm.org/Raynos/node-env.png
  [4]: https://david-dm.org/Raynos/node-env
  [5]: https://ci.testling.com/Raynos/node-env.png
  [6]: https://ci.testling.com/Raynos/node-env
