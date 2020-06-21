import { denormalize } from './data'

describe('common/utils/data', () => {
  describe('denormalize', () => {
    it('should denormalize provided data as expected, associating as requested', () => {
      const normalizedData = {
        123: { label: 'VALUE 1' },
        456: { label: 'VALUE 2' },
        789: { label: 'VALUE 3' },
      }
      const keyProp = 'KEY'
      const result = denormalize(keyProp)(normalizedData)
      const expected = [
        { KEY: '123', label: 'VALUE 1' },
        { KEY: '456', label: 'VALUE 2' },
        { KEY: '789', label: 'VALUE 3' },
      ]
      expect(result).toEqual(expected)
    })
  })
})
