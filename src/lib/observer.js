import ObserverItem from './observer-item'
const uuidv4 = require('uuid/v4')

const Observer = (function() {
  const items = []
  const Observers = {}

  // adds 100 steps to observer
  const buildThresholdList = numSteps => {
    var thresholds = []
    for (var i = 1.0; i <= numSteps; i++) {
      var ratio = i / numSteps
      thresholds.push(ratio)
    }
    thresholds.push(0)
    return thresholds
  }

  // updates an observer item with current observer props
  const handleUpdate = entries => {
    entries.forEach(entry => {
      const item = items.filter(item => item.id === entry.target.dataset.id)[0]
      item.update(entry)
    })
  }

  // creates observer with supplied rootmargin
  const createObserver = (rootMargin, threshold) => {
    return new IntersectionObserver(handleUpdate, {
      root: null,
      rootMargin,
      threshold: buildThresholdList(threshold)
    })
  }

  // create an observer and observer item
  const observe = ({
    elm,
    threshold = 100,
    topOffset = '0%',
    bottomOffset = '0%',
    once = true,
    vnode
  }) => {
    const newItem = Object.create(ObserverItem)
    const rootMargin = `${topOffset} 0px ${bottomOffset} 0px`

    // if an observer with the same root margin exists, use it, otherwise create a new one.
    Observers[rootMargin] =
      Observers[rootMargin] || createObserver(rootMargin, threshold)
    Observers[rootMargin].observe(elm)

    const uid = uuidv4()

    newItem.once = once
    newItem.elm = elm
    elm.dataset.id = uid

    newItem.observer = Observers[rootMargin]
    newItem.id = uid
    vnode.context.uuid = uid

    newItem.vnode = vnode
    items.push(newItem)
  }

  return {
    observe
  }
})()

export default Observer
