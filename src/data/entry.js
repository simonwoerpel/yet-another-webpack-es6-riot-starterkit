/*
 * entry point for datasets used in your interactive.
 *
 * export data as is or multiple datasets as an object
 *
 * pro trick: don't use dsv-loader for larger csv-files,
 * better load them via raw-loader and parse via d3.csvParse
 * (to avoid increasing build size)
 *
 */

import {csvParse} from '../lib/d3.js'

const data = require('raw-loader!./example.csv')
export default csvParse(data)
