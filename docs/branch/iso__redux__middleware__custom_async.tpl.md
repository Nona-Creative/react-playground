Redux :: Middleware :: Custom Async
===

Design
---

### Actions

 - `API_GET_COUNTERS` : signals intention to retrieve counters from API (command action)
 - `API_GET_COUNTERS_SUCCESS` : notifies us that retrieve counters from API succeeded (notification action)
 - `API_GET_COUNTERS_FAILURE` : notifies us that retrieve counters from API failed (notification action)
 - `SET_COUNTERS` : signals intention to update counters state (documentation action)

### Middleware

##### counters init `countersInitFlow`

> starts the API get counters flow
> on App initialization

on `APP_INIT` dispatches `apiGetCounters`

##### API get counters `apiGetCountersFlow`

> gets counters from API
> and either succeeds with the response data
> or fails with the received error message

on `API_GET_COUNTERS` fetches counters from API and dispatches either `apiGetCountersSuccess` 
or `apiGetCountersFailure` with API response or error (respectively)

##### counters init `setCountersFlow`

> signals intention to update state
> with list of counters returned from API

on `API_GET_COUNTERS_SUCCESS` dispatches `setCounters` with action payload


Code
---

### Common

###### Store & Reducers

> Our common store and reducer files are unchanged

 - `src/common/redux/store.js`
 - `src/common/redux/reducers.js`

###### Middleware

> We have just registered our custom Feature Module level middleware in common middleware

`src/common/redux/middleware.js`

{lang=javascript}
<<[](../packages/react-app/src/common/redux/middleware.js)

### Feature Modules

###### Actions

`src/modules/Counter/counters.reducer.js`

{lang=javascript,crop-query=(.API_GET_COUNTERS-.setCounters)}
<<[](../packages/react-app/src/modules/Counter/counters.reducer.js)

###### Reducers

`src/modules/Counter/counters.reducer.js`

{lang=javascript,crop-query=(.overwriteCounters)}
<<[](../packages/react-app/src/modules/Counter/counters.reducer.js)

{lang=javascript,crop-query=(.reducer)}
<<[](../packages/react-app/src/modules/Counter/counters.reducer.js)

`src/modules/Counter/counters.reducer.test.js`

{lang=javascript,crop-query=('overwriteCounters')}
<<[](../packages/react-app/src/modules/Counter/counters.reducer.test.js)

###### Middleware

`src/modules/Counter/counters.middleware.js`

{lang=javascript}
<<[](../packages/react-app/src/modules/Counter/counters.middleware.js)

`src/modules/Counter/counters.middleware.test.js`

{lang=javascript}
<<[](../packages/react-app/src/modules/Counter/counters.middleware.test.js)

###### Middleware
