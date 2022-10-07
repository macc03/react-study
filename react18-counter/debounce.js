'use strict'

export function debounce(fn, delay) {
  let timeout = null
  let that
  return function(...args) {
    if (timeout)  clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(that, args)
    }, delay)
  }
}