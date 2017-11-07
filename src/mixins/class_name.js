// riot mixin for computing class names
//
// it takes a global `cssNamespace` on init that becomes prefix for all classes.
//
// components can have the `ref`-attribute set to append this (say, the name for this component) to the
// global prefix
//
// components then have `this.getClass` that computes the acutal class name for something, e.g:
//    global namespace is 'foo', components ref-attr is 'bar', then
//      `getClass('title')` results in a class named 'foo-bar__title'
//     if ref is undefined, `getClass('title')` becomes 'foo-title'

export default cssNamespace => {
  return {
    _C: function(name, mod=null) {
      // FIXME
      const ref = this.opts.ref || this.opts.css || this.css || this.opts.dataIs || this.root.localName
      const part = ref ? `${cssNamespace}-${ref}` : false
      const cssClass = name ?
        part ? `${part}__${name}` : `${cssNamespace}-${name}`
        : part
      return mod ? `${cssClass} ${cssClass}--${mod}` : cssClass
    }
  }
}
