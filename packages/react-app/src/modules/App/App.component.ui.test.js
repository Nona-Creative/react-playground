import React from 'react'
import { render } from '@testing-library/react'

import App from './App.component'

describe('modules/App/App.component', () => {
  describe('render', () => {
    it('should render successfully', () => {
      render(<App />)
    })
  })
})
