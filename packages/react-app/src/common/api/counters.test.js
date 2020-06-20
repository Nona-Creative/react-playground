import sinon from 'sinon'

import * as SUT from './counters'
import {
  API_URL,
  API_ENDPOINT_COUNTERS,
} from './constants'

describe('common/api', () => {
  let sandbox = null

  beforeEach(async () => {
    sandbox = await sinon.createSandbox()
  })

  afterEach(async () => {
    await sandbox.restore()
  })

  describe('getCounters', () => {
    it('should retrieve counters as expected', async () => {
      // given ... API will respond successfully
      const getStub = sandbox.stub().resolves({ data: 'RESULT DATA'})
      const axiosStub = { get: getStub }

      // when ... we get counters
      const getCounters = SUT.getCounters(axiosStub)
      const result = await getCounters()

      // then ... should return response data, after correctly retrieving counters
      expect(result).toEqual('RESULT DATA')
      sinon.assert.calledWithExactly(getStub, `${API_URL}${API_ENDPOINT_COUNTERS}`)
    })

    it('should fail as expected if cannot retrieve counters', async () => {
      // given ... API will respond with an error
      const getStub = sandbox.stub().rejects('ERROR MESSAGE')
      const axiosStub = { get: getStub }

      // when ... we get counters
      const getCounters = SUT.getCounters(axiosStub)

      // then ... should return response data, after correctly retrieving counters
      await expect(getCounters()).rejects.toEqual(new Error('API Error: could not retrieve counters'))
      sinon.assert.calledWithExactly(getStub, `${API_URL}${API_ENDPOINT_COUNTERS}`)
    })
  })
})
