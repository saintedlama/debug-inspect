# debug-inspect

Got tired of writing

```
const util = require('util');
const debug = require('debug')('some:name:space');

debug(util.inspect(obj, { depth: 10 }));
```

:tada:

    npm i debug-inspect

```
const debugInspect = require('debug-inspect')('some:name:space');
debugInspect({ a: { b: { c: { d: { e: { greetings: 'Hello from e'}}}}}});
```

Use debug already? Want to avoid
```
const debug = require('debug')('some:name:space');
const debugInspect = require('debug-inspect')('some:name:space');
```

:tada:

```
const debug = require('debug')('some:name:space');
const debugInspect = require('debug-inspect')(debug);
```
