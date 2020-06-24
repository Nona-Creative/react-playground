import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import sinon from 'sinon'

import Counter from './CounterDetail.component'

describe('modules/Counter/CounterDetail/CounterDetail.component', () => {
  let sandbox = null

  beforeEach(() => {
    sandbox = sinon.createSandbox()
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('render', () => {
    it('should render successfully with all optional props', () => {
      const onIncrementStub = sandbox.stub()
      const onDecrementStub = sandbox.stub()
      const onNavigateToOverviewStub = sandbox.stub()
      render((
        <Counter
          onIncrement={onIncrementStub}
          onDecrement={onDecrementStub}
          onNavigateToOverview={onNavigateToOverviewStub}
          counterId={333}
          count={2}
        />
      ))
      // TODO: test count and buttons are rendered
    })

    it('should render successfully with no optional props', () => {
      const onIncrementStub = sandbox.stub()
      const onDecrementStub = sandbox.stub()
      const onNavigateToOverviewStub = sandbox.stub()
      render((
        <Counter
          onIncrement={onIncrementStub}
          onDecrement={onDecrementStub}
          onNavigateToOverview={onNavigateToOverviewStub}
        />
      ))
      // TODO: test "no selected counter" view is rendered
    })
  })

  describe('handlers (increment, decrement)', () => {
    it('should call increment and decrement handlers as expected when click the corresponding buttons', () => {
      const onIncrementStub = sandbox.stub()
      const onDecrementStub = sandbox.stub()
      const onNavigateToOverviewStub = sandbox.stub()
      const { getByTestId } = render(
        <Counter
          onIncrement={onIncrementStub}
          onDecrement={onDecrementStub}
          onNavigateToOverview={onNavigateToOverviewStub}
          counterId={333}
          count={2}
        />,
      )

      // when ... we click the increment button
      const incrementButton = getByTestId('button-increment')
      fireEvent.click(incrementButton)

      // then ... should have called increment handler with the expected id and amount
      sinon.assert.notCalled(onDecrementStub)
      sinon.assert.calledOnce(onIncrementStub)
      sinon.assert.calledWithExactly(onIncrementStub, 333, 1)

      // when ... we click the decrement button
      const decrementButton = getByTestId('button-decrement')
      fireEvent.click(decrementButton)

      // then ... should have called decrement handler with the expected id and amount
      sinon.assert.calledOnce(onIncrementStub)
      sinon.assert.calledOnce(onDecrementStub)
      sinon.assert.calledWithExactly(onDecrementStub, 333, 1)
    })
  })
})
