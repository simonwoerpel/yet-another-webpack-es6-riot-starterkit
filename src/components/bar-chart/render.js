import {select} from '../../lib/d3.js'
import data from '../../data/entry.js'

export default domQs => {
  const element = select(domQs)
  console.log(element)
  console.log(data)
  // do some d3 stuff here
}
