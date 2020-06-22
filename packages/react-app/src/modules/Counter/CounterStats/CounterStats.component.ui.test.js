import React from 'react'
import { MemoryRouter as Router } from 'react-router-dom'
import { render } from '@testing-library/react'
import sinon from 'sinon'

import CounterStats from './CounterStats.component'

describe('modules/Counter/CounterList/CounterList.component', () => {
  let sandbox = null

  beforeEach(() => {
    sandbox = sinon.createSandbox()
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('render', () => {
    it('should render successfully with all counters', () => {
      const counters = [
        { id: '1', label: 'COUNTER 1', count: 5 },
        { id: '2', label: 'COUNTER 2', count: 10 },
        { id: '3', label: 'COUNTER 3', count: 15 },
      ]

      const { getAllByRole } = render((
        <Router>
          <CounterStats
            counters={counters}
          />
        </Router>
      ))
      const listItems = getAllByRole('listitem')
      expect(listItems).toHaveLength(3)
    })

    it('should render successfully with 1 counter', () => {
      const counters = [
        { id: '1', label: 'COUNTER 1', count: 5 },
        { id: '2', label: 'COUNTER 2', count: 10 },
        { id: '3', label: 'COUNTER 3', count: 15 },
      ]

      const { getAllByTestId } = render((
        <Router>
          <CounterStats
            counters={counters}
            viewCounter='1'
          />
        </Router>
      ))

      const divs = getAllByTestId('counter-div')
      expect(divs).toHaveLength(1)
    })
  })
})
