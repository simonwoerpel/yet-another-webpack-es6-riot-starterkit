import renderChart from './render.js'

<bar-chart class={ _C() }>

  <div id='my-chart'></div>

  this.on('mount', () => renderChart('#my-chart'))

</bar-chart>
