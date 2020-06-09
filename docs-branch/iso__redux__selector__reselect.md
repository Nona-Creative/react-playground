# Redux Selector :: Reselect

## Design

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

## Code

###### CounterDetail

src/modules/Counter/CounterDetail/CounterDetail.selectors.js

```javascript
import { createSelector } from 'reselect'
import { prop, path } from 'ramda'

export const CounterDetailComponentSelector = createSelector(
  [
    prop('selectedCounter'),
    prop('counters'),
  ],
  (
    selectedCounter,
    counters,
  ) => ({
    counterId: selectedCounter,
    count: path([selectedCounter, 'count'], counters),
    label: path([selectedCounter, 'label'], counters),
  }),
)
```

src/modules/Counter/CounterDetail/CounterDetail.selectors.test.js

```javascript
import { CounterDetailComponentSelector } from './CounterDetail.selectors'

describe('modules/Counter/CounterDetail/CounterDetail.selector', () => {
  it('should select props required by CounterDetail component as expected', () => {
    // given ... 3 counters and a selected counter
    const state = {
      selectedCounter: '456',
      counters: {
        123: { label: 'COUNTER 1', count: 5 },
        456: { label: 'COUNTER 2', count: 10 },
        789: { label: 'COUNTER 3', count: 15 },
      },
    }

    // when ... we select for CounterDetail component's props
    // then ... should return as expected
    const result = CounterDetailComponentSelector(state)
    expect(result).toEqual({
      counterId: '456',
      count: 10,
      label: 'COUNTER 2',
    })
  })
})
```

src/modules/Counter/CounterList/CounterList.selectors.js

```javascript
import { createSelector } from 'reselect'

import { countersSelector } from '../counters.selectors'

export const CounterListComponentSelector = createSelector(
  [
    countersSelector,
  ],
  ({ counters }) => ({ counters }),
)
```

src/modules/Counter/CounterList/CounterList.selector.test.js

```javascript
import { keys } from 'ramda'

import { CounterListComponentSelector } from './CounterList.selectors'

describe('modules/Counter/CounterList/CounterList.selector', () => {
  it('should select props required by CounterList component as expected', () => {
    // given ... 3 counters
    const state = {
      counters: {
        1: { label: 'COUNTER 1', count: 5 },
        2: { label: 'COUNTER 2', count: 10 },
        3: { label: 'COUNTER 3', count: 15 },
      },
    }

    // when ... we select for CounterList component's props
    // then ... should return all expected keys
    const result = CounterListComponentSelector(state)
    expect(keys(result)).toEqual([
      'counters',
    ])
  })
})
```

src/modules/Counter/counters.selectors.js

```javascript
import { createSelector } from 'reselect'
import { prop } from 'ramda'

import { denormalize } from '../../common/utils/data'

export const countersSelector = createSelector(
  [
    prop('counters'),
  ],
  counters => ({
    counters: denormalize('id')(counters),
  }),
)
```

src/modules/Counter/counters.selectors.test.js

```javascript
import { countersSelector } from './counters.selectors'

describe('modules/Counter/counters.selector', () => {
  it('should select counters as expected', () => {
    // given ... 3 counters
    const state = {
      counters: {
        1: { label: 'COUNTER 1', count: 5 },
        2: { label: 'COUNTER 2', count: 10 },
        3: { label: 'COUNTER 3', count: 15 },
      },
    }

    // when ... we select counters
    // then ... should denormalize and return as expected
    const result = countersSelector(state)
    expect(result).toEqual({
      counters: [
        { id: '1', label: 'COUNTER 1', count: 5 },
        { id: '2', label: 'COUNTER 2', count: 10 },
        { id: '3', label: 'COUNTER 3', count: 15 },
      ],
    })
  })
})
```

