import * as SUT from './router.utils'

describe('common/redux/router.utils', () => {
  describe('getLastParamFromRouterState', () => {
    it('should get the last param from counter state', () => {
      // when ... we want to extract that id
      // then ... it should extract as expected

      const payload = {
        location: {
          pathname: '/counter/COUNTERID',
        },
      }

      const result = SUT.getLastParamFromRouterState(payload)
      expect(result).toEqual('COUNTERID')
    })
  })
})
