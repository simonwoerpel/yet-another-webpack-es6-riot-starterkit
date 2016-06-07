'use strict'

if (module.hot) {
  module.hot.accept()
}

import 'babel-polyfill'
import '../styles/index.scss'


const number = 123
const output = `A number: ${number}`


// media
require.context('../media/', true, /^\.\/.*\.(gif|png|jpg|pdf)/)
