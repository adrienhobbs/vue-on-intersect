<template>
  <div style="height: 60vh;">
    {{isIntersecting}}
    {{intersectionRatio}}
    {{isAbove}}
    {{isBelow}}
    {{isPartiallyAbove}}
    {{isPartiallyBelow}}
  </div>
</template>

<script>

export default {
  name: 'SlotScopeExample',
  props: ['isIntersecting', 'intersectionRatio',
  'isAbove', 'isBelow', 'isPartiallyAbove', 'isPartiallyBelow']
}
</script>

