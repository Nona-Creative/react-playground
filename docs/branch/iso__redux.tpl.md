Redux
===

Design
---

### Feature module structure

> Goal is a structure that allows as much decoupling between feature modules as possible

```text
+-- modules
    +-- App
    +-- Counter
        +-- CounterDetail ... detail view
        +-- CounterSummary ... summary view (used in list view)
        +-- Counters ... list view
        +-- ... common files
        +-- ... redux files
```

### Redux module structure

> Goal is a structure that separates reducer and store (and middleware) code as much as possible

```text
+-- common
    +-- redux
        +-- reducers.js
        +-- store.js
```

### Redux state

> On top of feature module goals stated above, goal is also Redux reducer filenames that correspond to the Redux state tree

tree
```text
 - counters : { [id]: { label, count } }
 - selectedCounter : id
```

files
```text
+-- modules
    +-- Counter
        +-- counters.reducer.js
        +-- selectedCounter.reducer.js
```

Code
---

###### Store

src/common/redux/store.js

{lang=javascript}
<<[](../packages/react-app/src/common/redux/store.js)

###### Root Reducer

src/common/redux/reducers.js

{lang=javascript}
<<[](../packages/react-app/src/common/redux/reducers.js)

###### React changes

src/index.js

```javascript
import { Provider } from 'react-redux'

import store from './store'
```
{lang=javascript,crop-query=(context(.ReactDOM.render,0,4))}
<<[](../packages/react-app/src/index.js)

###### Counter module

src/modules/Counter/CounterList/CounterList.container.js

{lang=javascript}
<<[](../packages/react-app/src/modules/Counter/CounterList/CounterList.container.js)

src/modules/Counter/CounterDetail/CounterDetail.container.js

{lang=javascript}
<<[](../packages/react-app/src/modules/Counter/CounterDetail/CounterDetail.container.js)

src/modules/Counter/counters.reducer.test.js

{lang=javascript}
<<[](../packages/react-app/src/modules/Counter/counters.reducer.test.js)

src/modules/Counter/counters.reducer.js

{lang=javascript}
<<[](../packages/react-app/src/modules/Counter/counters.reducer.js)

src/modules/Counter/selectedCounter.reducer.test.js

{lang=javascript}
<<[](../packages/react-app/src/modules/Counter/selectedCounter.reducer.test.js)

src/modules/Counter/selectedCounter.reducer.js

{lang=javascript}
<<[](../packages/react-app/src/modules/Counter/selectedCounter.reducer.js)
