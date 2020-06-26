import * as SUT from './counter.utils'

describe('modules/Counter/counters.utils', () => {
  describe('getCounterIdFromPayload', () => {
    it('should get the counter Id from the url string', () => {
      // given ... a counter id in url
      // when ... we want to extract that id
      // then ... it should extract as expected

      const payload = {
        location: {
          pathname: '/counter/COUNTERID',
        },
      }

      const result = SUT.getCounterIdFromPayload(payload)
      console.log(result)
      expect(result).toEqual('COUNTERID')
    })
  })
})
