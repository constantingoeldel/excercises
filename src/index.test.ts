import {
  camelCase,
  concatenateArrays,
  getMiddleValue,
  getNumTrues,
  getNumTruesWithReducer,
  getUniqueValues,
  inArray,
  includesAllLetters,
  bouncingBall,
} from './index'

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
  it('Should return a CamelCased string', function () {
    expect(camelCase('')).toEqual('')
    expect(camelCase('test case')).toEqual('TestCase')
    expect(camelCase('camel case method')).toEqual('CamelCaseMethod')
    expect(camelCase('say hello ')).toEqual('SayHello')
    expect(camelCase(' camel case word')).toEqual('CamelCaseWord')
  })
})
describe('Which are in?', () => {
  it('Basic tests', () => {
    let a2 = ['lively', 'alive', 'harp', 'sharp', 'armstrong']
    let a1 = ['arp', 'live', 'strong']
    expect(inArray(a1, a2)).toEqual(['arp', 'live', 'strong'])
    a1 = ['xyz', 'live', 'strong']
    expect(inArray(a1, a2)).toEqual(['live', 'strong'])
    a1 = ['live', 'strong', 'arp']
    expect(inArray(a1, a2)).toEqual(['arp', 'live', 'strong'])
  })
})
describe('Bouncing balls', () => {
  it('Basic tests', () => {
    expect(bouncingBall(3.0, 0.66, 1.5)).toEqual(3)
    expect(bouncingBall(30.0, 0.66, 1.5)).toEqual(15)
    expect(bouncingBall(30, 0.75, 1.5)).toEqual(21)
    expect(bouncingBall(30, 0.4, 10)).toEqual(3)
  })
})
