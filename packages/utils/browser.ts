import domObjects from './domObjects'
import * as is from './is'
import win from './window'

const browser = {
  init,
  supportsTouch: null as boolean,
  supportsPointerEvent: null as boolean,
  isIOS7: null as boolean,
  isIOS: null as boolean,
  isIe9: null as boolean,
  isOperaMobile: null as boolean,
  prefixedMatchesSelector: null as string,
  pEventTypes: null as {
    up: string,
    down: string,
    over: string,
    out: string,
    move: string,
    cancel: string,
  },
  wheelEvent: null as string,
}

function init (window) {
  const Element = domObjects.Element
  const navigator  = win.window.navigator

  // Does the browser support touch input?
  browser.supportsTouch = ('ontouchstart' in window) ||
    (is.func(window.DocumentTouch) && domObjects.document instanceof window.DocumentTouch)

  // Does the browser support PointerEvents
  browser.supportsPointerEvent = !!domObjects.PointerEvent

  browser.isIOS = (/iP(hone|od|ad)/.test(navigator.platform))

  // scrolling doesn't change the result of getClientRects on iOS 7
  browser.isIOS7 = (/iP(hone|od|ad)/.test(navigator.platform) &&
           /OS 7[^\d]/.test(navigator.appVersion))

  browser.isIe9 = /MSIE 9/.test(navigator.userAgent)

  // Opera Mobile must be handled differently
  browser.isOperaMobile = (navigator.appName === 'Opera' &&
    browser.supportsTouch &&
    /Presto/.test(navigator.userAgent))

  // prefix matchesSelector
  browser.prefixedMatchesSelector = 'matches' in Element.prototype
    ? 'matches'
    : 'webkitMatchesSelector' in Element.prototype
      ? 'webkitMatchesSelector'
      : 'mozMatchesSelector' in Element.prototype
        ? 'mozMatchesSelector'
        : 'oMatchesSelector' in Element.prototype
          ? 'oMatchesSelector'
          : 'msMatchesSelector'

  browser.pEventTypes = (domObjects.PointerEvent && (navigator.maxTouchPoints || navigator.msMaxTouchPoints)
    ? (domObjects.PointerEvent === window.MSPointerEvent
      ? {
        up:     'MSPointerUp',
        down:   'MSPointerDown',
        over:   'mouseover',
        out:    'mouseout',
        move:   'MSPointerMove',
        cancel: 'MSPointerCancel',
      }
      : {
        up:     'pointerup',
        down:   'pointerdown',
        over:   'pointerover',
        out:    'pointerout',
        move:   'pointermove',
        cancel: 'pointercancel',
      })
    : null)

  // because Webkit and Opera still use 'mousewheel' event type
  browser.wheelEvent = 'onmousewheel' in domObjects.document ? 'mousewheel' : 'wheel'
}

export default browser
