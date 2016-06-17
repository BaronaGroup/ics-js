import propertyTest from '../../helpers/propertyTest'

propertyTest('DTSTAMP', {
  transformableValue: new Date('1991-03-07T19:00:00Z'),
  transformedValue: '19910307T190000Z'
})

propertyTest('DTSTAMP', {
  transformableProps: {VALUE: 'DATE'},
  transformableValue: new Date('1991-03-07'),
  transformedValue: '19910307'
})
