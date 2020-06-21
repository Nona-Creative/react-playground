import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import sinon from 'sinon'

import CounterList from './CounterList.component'

describe('modules/Counter/CounterList/CounterList.component', () => {
  let sandbox = null

  beforeEach(() => {
    sandbox = sinon.createSandbox()
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('render', () => {
    it('should render successfully with all optional props', () => {
      const onSelectCounterStub = sandbox.stub()
      const counters = [
        { id: '1', label: 'COUNTER 1', count: 5 },
        { id: '2', label: 'COUNTER 2', count: 10 },
        { id: '3', label: 'COUNTER 3', count: 15 },
      ]
      const { getAllByRole } = render((
        <CounterList
          onSelectCounter={onSelectCounterStub}
          counters={counters}
        />
      ))
      const listItems = getAllByRole('listbox')
      expect(listItems).toHaveLength(3)
      // TODO: test list is correctly rendered
    })

    it('should render successfully with no optional props', () => {
      const onSelectCounterStub = sandbox.stub()
      render((
        <CounterList
          onSelectCounter={onSelectCounterStub}
        />
      ))
      // TODO: test empty view is correctly rendered
    })
  })

  describe('handlers (select counter)', () => {
    it('should call select handler with expected id when a counter clicked', () => {
      const onSelectCounterStub = sandbox.stub()
      const counters = [
        { id: '1', label: 'COUNTER 1' },
        { id: '2', label: 'COUNTER 2' },
      ]
      const { getAllByRole } = render((
        <CounterList
          onSelectCounter={onSelectCounterStub}
          counters={counters}
        />
      ))
      const listItems = getAllByRole('listbox')
      expect(listItems).toHaveLength(2)

      // when ... we click the counter 2
      fireEvent.click(listItems[1])

      // then ... should have called select handler with counter 2's id
      sinon.assert.calledOnce(onSelectCounterStub)
      sinon.assert.calledWithExactly(onSelectCounterStub, '2')
    })
  })
})
