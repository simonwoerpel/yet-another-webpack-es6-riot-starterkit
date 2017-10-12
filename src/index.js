'use strict'

if (module.hot) {
  module.hot.accept()
}

// import 'babel-polyfill'
import './styles/index.scss'

import './components/hello-world.tag'
riot.mount('*')
