import propertyTest from '../../helpers/propertyTest'

propertyTest('LAST_MODIFIED', {
  transformableValue: new Date('1991-03-07T09:00:00Z'),
  transformedValue: '19910307T090000Z'
})
