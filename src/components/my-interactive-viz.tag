import './bar-chart/bar-chart.tag'

<my-interactive-viz class={ _C() }>

  <p class={ _C('msg', 'my-modifier') }>{ msg }</p>

  <bar-chart />

  this.msg = 'hello world'

</my-interactive-viz>
