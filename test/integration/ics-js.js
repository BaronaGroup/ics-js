/* eslint-env mocha */

import assert from 'assert'
import * as ICS from '../../src'

const cal = new ICS.VCALENDAR()

cal.addProp('VERSION', 2)
cal.addProp('PRODID', 'XYZ Corp')

const event = new ICS.VEVENT()

event.addProp('UID', '1')
event.addProp('DTSTAMP', new Date('2015-07-18'), { VALUE: 'DATE' })
event.addProp('SUMMARY', 'Birthdate')
event.addProp('DTSTART', new Date('1991-03-07T07:00:00Z'), { VALUE: 'DATE-TIME' })
event.addProp('DTEND', new Date('1991-03-07T19:30:00Z'))

const eventAlarm = new ICS.VALARM()

eventAlarm.addProp('ACTION', 'DISPLAY')
eventAlarm.addProp('TRIGGER', '-PT12H')
eventAlarm.addProp('DESCRIPTION', 'Event reminder')

const todo = new ICS.VTODO()

todo.addProp('UID', '1')
todo.addProp('DTSTAMP', new Date('2015-07-18T10:00:00Z'))
todo.addProp('DUE', new Date('2015-07-19T10:00:00Z'))
todo.addProp('SUMMARY', 'To Do (the purpose of creating this long string is to test the 75 character limit per the RFC)')
todo.addProp('CATEGORIES', ['WORK', 'FAMILY'])

event.addComponent(eventAlarm)

cal.addComponent(event)
cal.addComponent(todo)

const icsString = 'BEGIN:VCALENDAR\r\n' +
                  'VERSION:2.0\r\n' +
                  'PRODID:XYZ Corp\r\n' +
                  'BEGIN:VEVENT\r\n' +
                  'UID:1\r\n' +
                  'DTSTAMP;VALUE=DATE:20150718\r\n' +
                  'SUMMARY:Birthdate\r\n' +
                  'DTSTART;VALUE=DATE-TIME:19910307T070000Z\r\n' +
                  'DTEND:19910307T193000Z\r\n' +
                  'BEGIN:VALARM\r\n' +
                  'ACTION:DISPLAY\r\n' +
                  'TRIGGER:-PT12H\r\n' +
                  'DESCRIPTION:Event reminder\r\n' +
                  'END:VALARM\r\n' +
                  'END:VEVENT\r\n' +
                  'BEGIN:VTODO\r\n' +
                  'UID:1\r\n' +
                  'DTSTAMP:20150718T100000Z\r\n' +
                  'DUE:20150719T100000Z\r\n' +
                  'SUMMARY:To Do (the purpose of creating this long string is to test the 75 c\r\n' +
                  ' haracter limit per the RFC)\r\n' +
                  'CATEGORIES:WORK,FAMILY\r\n' +
                  'END:VTODO\r\n' +
                  'END:VCALENDAR'

describe('ics-js', () => {
  describe('creating an ICS file', () => {
    it('should return an ICS file as a string', () => {
      assert.equal(cal.toString(), icsString)
    })
  })
})
