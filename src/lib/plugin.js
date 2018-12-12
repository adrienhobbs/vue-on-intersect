import * as Components from './index'
import observer from './observer'

const VueIntersectPlugin = {
  install: function(Vue) {
    Vue.directive('on-intersect', {
      bind(elm, binding, vnode) {
        observer.observe({ elm, ...binding.value, vnode })
      }
    })
    Object.keys(Components)
      .filter(componentName => componentName !== 'default')
      .forEach(componentName => {
        Vue.component(componentName, Components[componentName])
      })
  }
}

export default VueIntersectPlugin
