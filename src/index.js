'use strict'

if (module.hot) {
  module.hot.accept()
}

// import 'babel-polyfill'
import './styles/index.scss'

// load config
const config = require('json-loader!./config.json')

// include mixins
import getClass from './mixins/class_name.js'
riot.mixin(getClass(config.global.cssNamespace))
// maybe you need german number formatting:
// import numberFormat from './mixins/number_format.js'
// riot.mixin(numberFormat)

// load riot components
import './components/my-interactive-viz.tag'

// import mount util function
import mount from './util/mount.js'

// mount components:
mount('my-interactive-viz', config)
