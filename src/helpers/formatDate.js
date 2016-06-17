import leftpad from 'left-pad'

/**
 * Format a Date object to a valid string.
 *
 * @private
 * @param {Date} date - Date to format.
 * @param {boolean} [includeTime=true] - Determine if time is included in the string.
 */
export default (date, includeTime = true) => {
  let string

  if (!includeTime) {
    string =
      date.getFullYear() +
      leftpad(date.getMonth() + 1, 2, 0) +
      leftpad(date.getDate(), 2, 0)
  } else {
    string =
      date.getUTCFullYear() +
      leftpad(date.getUTCMonth() + 1, 2, 0) +
      leftpad(date.getUTCDate(), 2, 0) +
      'T' +
      leftpad(date.getUTCHours(), 2, 0) +
      leftpad(date.getUTCMinutes(), 2, 0) +
      leftpad(date.getUTCSeconds(), 2, 0) +
      'Z'
  }

  return string
}
