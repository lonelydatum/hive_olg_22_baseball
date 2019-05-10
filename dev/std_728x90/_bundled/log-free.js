(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

TweenLite.defaultEase = Power2.easeInOut;

exports.size = size;

},{}],2:[function(require,module,exports){
'use strict';

var _commonJsCommonJs = require('../../_common/js/common.js');

function start() {
	var tl = new TimelineMax();
	tl.set('.frame1', { opacity: 1 });
	tl.to('.bg', .8, { x: -364, opacity: 1, ease: Power3.easeInOut, scale: .5 });

	var w = _commonJsCommonJs.size.w;
	var h = _commonJsCommonJs.size.h;

	var ww = w * 2;
	var hh = h * 2;

	tl.from('.t1', 1.6, { clip: 'rect(0px, 0px, ' + hh + 'px, 0px)', ease: Power3.easeInOut }, '-=.7');
	tl.from('.swoosh', 1.3, { clip: 'rect(0px, ' + ww + 'px, ' + hh + 'px, ' + ww + 'px)', ease: Power3.easeInOut }, '-=1.0');

	tl.to('.text', .3, { opacity: 0 }, '+=1.3');

	tl.add('f2', '+=.3');
	tl.set('.frame2', { opacity: 1 }, 'f2');
	// tl.to('.bg', .5, {opacity:.7}, 'f2')
	tl.from('.t4', .3, { opacity: 0, scale: .4, ease: Power4.easeInOut });
	tl.from('.logo_big', .3, { opacity: 0 }, '+=.2');
	tl.from('.footer', .3, { opacity: 0 }, '+=.5');

	// tl.gotoAndPlay('f2')
}

start();

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
