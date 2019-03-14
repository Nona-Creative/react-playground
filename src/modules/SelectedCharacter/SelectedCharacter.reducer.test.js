import assert from 'assert'
import parametrize from 'js-parametrize'

import SUT from './SelectedCharacter.reducer'
import { selectCharacter } from '../Characters/Characters.reducer'

describe('SelectedCharacter reducer', () => {
  describe('setSelectedCharacterId', () => {
    parametrize([
      [selectCharacter],
    ], [
      [-1, 3, 3],
      [2, 3, 3],
      [3, -1, -1],
    ], (action, state, id, expected) => {
      it('should set selected character id as expected', () => {
        // given ... the provided state
        // when ... we perform provided action with the provided id as payload
        const result = SUT(state, action(id))

        // then ... should set selected character id to expected value
        assert.strictEqual(result, expected)
      })
    })
  })
})
