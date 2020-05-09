Redux
---

### src/common/redux/store.js

Here we add a Redux store ....

{lang=javascript}
<<[](../src/common/redux/store.js)


### src/common/redux/reducers.js

Here wse add our root reducers ...

{lang=javascript}
<<[](../src/common/redux/reducers.js)

### src/index.js
```javascript
import { Provider } from 'react-redux'

import store from './store'
```
{lang=javascript,crop-query=(context(.ReactDOM.render,0,4))}
<<[](../src/index.js)

src/modules/Counter/Counter.container.js

{lang=javascript}
<<[](../src/modules/Counter/Counter.container.js)

src/modules/Counter/Counter.reducer.test.js

{lang=javascript}
<<[](../src/modules/Counter/Counter.reducer.test.js)

src/modules/Counter/Counter.reducer.js

{lang=javascript}
<<[](../src/modules/Counter/Counter.reducer.js)
