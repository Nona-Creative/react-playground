Redux :: Middleware
===

Design
---

### Redux module structure

> Goal is a structure that separates reducer, store and middleware code as much as possible

```text
+-- common
    +-- redux
        +-- middleware.js
        +-- reducers.js
        +-- store.js
```


Code
---

###### Store

src/common/redux/store.js

{lang=javascript}
<<[](../packages/react-app/src/common/redux/store.js)

###### Reducers

src/common/redux/reducers.js

{lang=javascript}
<<[](../packages/react-app/src/common/redux/reducers.js)

###### Middleware

src/common/redux/middleware.js

{lang=javascript}
<<[](../packages/react-app/src/common/redux/middleware.js)
