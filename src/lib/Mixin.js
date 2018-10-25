const VueIntersectMixin = {
  name: 'VueIntersectMixin',
  props: {
    topOffset: {
      default: '-20%'
    },
    bottomOffset: {
      default: '-20%'
    }
  },
  data() {
    return {
      isIntersecting: null,
      intersectionRatio: null,
      isAbove: null,
      isBelow: null,
      isPartiallyAbove: null,
      isPartiallyBelow: null
    }
  }
}

export default VueIntersectMixin
