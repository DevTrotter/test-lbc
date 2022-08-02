import { getLoggedUserId } from '../getLoggedUserId'

describe('getLoggedUserId', () => {
  it('should return logged user id', () => {
    const expected = 3

    expect(getLoggedUserId()).toEqual(expected)
  })
})