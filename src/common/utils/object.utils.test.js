import assert from 'assert'
import parametrize from 'js-parametrize'

import * as SUT from './object.utils'

describe('object utils', () => {
  parametrize([
    // anywhere
    ['products', 'PRODUCTS COMP'],
    ['products/1', 'PRODUCTS COMP'],
    ['products/1/child', 'PRODUCTS COMP'],
    ['parent/products', 'PRODUCTS COMP'],
    ['parent/products/child', 'PRODUCTS COMP'],
    ['parent/products/123', 'PRODUCTS N COMP'],
    ['parent/products/456', 'PRODUCTS N COMP'],
    // beginning
    ['contact', 'CONTACT COMP'],
    ['parent/contact', 'CHILD CONTACT COMP'],
    // end
    ['about', 'ABOUT COMP'],
    ['parent/about', 'ABOUT COMP'],
    ['about/child', 'ABOUT PARENT COMP'],
  ], (key, expected) => {
    it('should return the first matched view', () => {
      const obj = {
        'home': 'HOME COMP',
        '^parent/products/\\d+$': 'PRODUCTS N COMP',
        'products': 'PRODUCTS COMP',
        'parent/products': 'CHILD PRODUCTS COMP',
        '^contact': 'CONTACT COMP',
        'parent/contact': 'CHILD CONTACT COMP',
        'about$': 'ABOUT COMP',
        'parent/about': 'ABOUT CHILD COMP',
        'about/child': 'ABOUT PARENT COMP',
      }
      const result = SUT.pickByKeyRegex(obj, key)
      assert.deepEqual(result, expected)
    })
  })
})
