import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import sinon from 'sinon'

import Counter from './Counter.component'

describe('modules/Counter/Counter.component', () => {
  let sandbox = null

  beforeEach(() => {
    sandbox = sinon.createSandbox()
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('render', () => {
    it('should render successfully', () => {
      const onIncrementStub = sandbox.stub()
      const onDecrementStub = sandbox.stub()
      render((
        <Counter
          onIncrement={onIncrementStub}
          onDecrement={onDecrementStub}
        />
      ))
    })
  })

  describe('handlers (increment, decrement)', () => {
    it('should call increment and decrement handlers as expected when click the corresponding buttons', () => {
      const onIncrementStub = sandbox.stub()
      const onDecrementStub = sandbox.stub()
      const { getByTestId } = render(
        <Counter
          onIncrement={onIncrementStub}
          onDecrement={onDecrementStub}
        />,
      )

      // when ... we click the increment button
      const incrementButton = getByTestId('button-increment')
      fireEvent.click(incrementButton)

      // then ... should have called increment handler with the expected amount
      sinon.assert.notCalled(onDecrementStub)
      sinon.assert.calledOnce(onIncrementStub)
      sinon.assert.calledWithExactly(onIncrementStub, 1)

      // when ... we click the decrement button
      const decrementButton = getByTestId('button-decrement')
      fireEvent.click(decrementButton)

      // then ... should have called decrement handler with the expected amount
      sinon.assert.calledOnce(onIncrementStub)
      sinon.assert.calledOnce(onDecrementStub)
      sinon.assert.calledWithExactly(onDecrementStub, 1)
    })
  })
})
