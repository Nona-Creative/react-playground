import React from 'react'
import { render } from '@testing-library/react'

import App from './App'

describe('modules/App', () => {
  describe('render', () => {
    it('should render successfully', () => {
      const { getByText } = render(<App />)
      const linkElement = getByText(/REACT Playground/i)
      expect(linkElement).toBeInTheDocument()
    })
  })
})
