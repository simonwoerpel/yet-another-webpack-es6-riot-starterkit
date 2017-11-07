/*
 * simple shortcut to mount riot components
 *
 * dom elements must have a data attribute `data-riot-mount`
 * with the name of the riot tag as value to mount into.
 *
 * example:
 *    `mount('my-interactive-viz', opts)`
 *
 *    would mount the riot tag named `my-interactive-viz` into
 *    e.g. a div
 *      `<div data-riot-mount="my-interactive-viz"></div>`
 *    if present in dom, otherwise logs error to console.
 *
 *  @param opts object (optional) - mount options passed through to `riot.mount()`
 */

import {select} from '../lib/d3.js'

export default (name, opts={}) => {
  const selector = `[data-riot-mount="${name}"]`
  select(selector).node() ? riot.mount(selector, name, opts)
    : console.log(`Error: Element not found: ${name}`) // FIXME: throw real JS error
}
