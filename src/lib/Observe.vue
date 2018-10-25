<template>
  <div v-on-intersect="{topOffset, bottomOffset, once: false}">
    <slot :isIntersecting="isIntersecting"
          :intersectionRatio="intersectionRatio"
          :isAbove="isAbove"
          :isBelow="isBelow"
          :isPartiallyAbove="isPartiallyAbove"
          :isPartiallyBelow="isPartiallyBelow" />
  </div>
</template>

<script>
import VuexMixin from './Mixin'

export default {
  name: 'Observe',
  mixins: [VuexMixin],
}
</script>

