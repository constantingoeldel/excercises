import { concatenateArrays, getMiddleValue, getNumTrues, getNumTruesWithReducer, getUniqueValues, includesAllLetters } from './index'

describe('Array manipulation', () => {
  it('returns the middle value of a two-dimensional array', () => {
    const array = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]
    expect(getMiddleValue(array)).toBe(5)
  })

  it('returns the number of true values in an array containing only booleans', () => {
    const array = [true, true, false, true, true, false, false]
    expect(getNumTrues(array)).toBe(4)
  })

  it('Do the same thing but use a reducer this time', () => {
    const array = [true, true, false, true, true, false, false]
    expect(getNumTruesWithReducer(array)).toBe(4)
  })

  it('takes a dynamic number of arrays and concatinates them', () => {
    const array = ['this', 'should', 'be', 'followed', 'by']
    const expected = ['this', 'should', 'be', 'followed', 'by', 'this', 'should', 'be', 'followed', 'by', 'this', 'should', 'be', 'followed', 'by']
    expect(concatenateArrays(array, array, array)).toEqual(expected)
  })

  it('returns only unique values of an array', () => {
    const array = [true, false, true, 1, 2, 3, 2, 'hello', 'world', 'hello']
    expect(getUniqueValues(array)).toEqual([true, false, 1, 2, 3, 'hello', 'world'])
  })
})
describe('String manipulation', () => {
  it('Checks if all letters of the alphabet are included in string', () => {
    expect(includesAllLetters('Pack my box with five dozen liquor jugs')).toBe(true)
    expect(includesAllLetters('This string does not contain all letters')).toBe(false)
    expect(includesAllLetters('')).toBe(false)
  })
})
