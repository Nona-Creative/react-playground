Base
===

Design
---

### feature module structure

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

Code
---

##### Entry point

src/index.js

{lang=javascript}  
<<[](../src/index.js)


##### App Component

src/modules/App/App.component.js

{lang=javascript}  
<<[](../src/modules/App/App.component.js)

###### Counter module

src/modules/Counter/CounterSummary/CounterSummary.component.js

{lang=javascript}
<<[](../src/modules/Counter/CounterSummary/CounterSummary.component.js)

src/modules/Counter/CounterList/CounterList.component.js

{lang=javascript}
<<[](../src/modules/Counter/CounterList/CounterList.component.js)

src/modules/Counter/CounterDetail/CounterDetail.component.js

{lang=javascript}
<<[](../src/modules/Counter/CounterDetail/CounterDetail.component.js)
