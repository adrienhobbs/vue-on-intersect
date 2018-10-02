import Vue from 'vue'
import observer from './observer'

const VueIntersectPlugin = {
  install: function() {
    Vue.directive('on-intersect', {
      bind(elm, binding, vnode) {
        observer.observe({ elm, ...binding.value, vnode })
      }
    })
  }
}

export default VueIntersectPlugin
