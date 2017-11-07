// riot mixin for formatting numbers to german locale
import * as d3 from '../lib/d3.js'

const loc = d3.formatLocale({
  thousands: '.',
  decimal: ',',
  grouping: [3]
})

const format = loc.format(',')

module.exports = {_f: val => val && format(val)}
