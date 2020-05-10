Redux Selector :: Reselect
===

Design
---

### state selectors

data
```text
 - CounterDetailComponentSelector : { counterId, count, label }
 - CounterListComponentSelector : { counters }
 - countersSelector : { counters }
```

roles
```text
 - CounterDetailComponentSelector : select props for CounterDetail component 
 - CounterListComponentSelector : select props for CounterList component
 - countersSelector : select and denormalize counters state
```

files
```text
+-- modules
    +-- Counter
        +-- CounterDetail
            +-- CounterDetail.selectors.js { CounterDetailComponentSelector }
        +-- CounterList
            +-- CounterList.selectors.js { CounterListComponentSelector }
        +-- counters.selectors.js { countersSelector }
```

Code
---

###### CounterDetail

src/modules/Counter/CounterDetail/CounterDetail.selectors.js

{lang=javascript}
<<[](../src/modules/Counter/CounterDetail/CounterDetail.selectors.js)

src/modules/Counter/CounterDetail/CounterDetail.selectors.test.js

{lang=javascript}
<<[](../src/modules/Counter/CounterDetail/CounterDetail.selectors.test.js)

src/modules/Counter/CounterList/CounterList.selectors.js

{lang=javascript}
<<[](../src/modules/Counter/CounterList/CounterList.selectors.js)

src/modules/Counter/CounterList/CounterList.selector.test.js

{lang=javascript}
<<[](../src/modules/Counter/CounterList/CounterList.selectors.test.js)

src/modules/Counter/counters.selectors.js

{lang=javascript}
<<[](../src/modules/Counter/counters.selectors.js)

src/modules/Counter/counters.selectors.test.js

{lang=javascript}
<<[](../src/modules/Counter/counters.selectors.test.js)
