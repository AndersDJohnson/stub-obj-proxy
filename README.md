# stub-obj-proxy

Make stub objects using Proxies, supporting null-safe deep path access, function calls, `for` loops, etc.

Useful for mocking out objects in tests, e.g., the `window` global.

```js
import stubObjProxy from 'stub-obj-proxy'

global.window = stubObjProxy()
```

Other file:

```js
console.log(window.a.b.c)

window.a.b.c = 'foo' // Note: sets do not persist

for (let e in window.a.b.c) {
  console.log(e)
}

window.a.b.c.hasOwnProperty('ok') // true

'ok' in window.a.b.c // true
```
