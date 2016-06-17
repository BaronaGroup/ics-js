import propertyTest from '../../helpers/propertyTest'

propertyTest('EXDATE', {
  transformableValue: [new Date('1991-03-07T09:00:00Z'), new Date('1991-07-11T20:00:00Z')],
  transformedValue: '19910307T090000Z,19910711T200000Z'
})

propertyTest('EXDATE', {
  transformableProps: {VALUE: 'DATE'},
  transformableValue: [new Date('1991-03-07'), new Date('1991-07-11')],
  transformedValue: '19910307,19910711'
})
