
import {size} from '../../_common/js/common.js'


function start(){
	const tl = new TimelineMax()
	tl.set('.frame1', {opacity:1})
	tl.from('.bg', .8, {x:-30, ease:Power3.easeInOut, scale:.6})

	const {w, h} = size
	const ww = w*2
	const hh = h*2


	tl.from('.t1', .4, {clip:`rect(0px, 120px, ${hh}px, 0px)`, ease:Power3.easeInOut}, '-=.2')
	tl.from('.t2a', .6, {clip:`rect(0px, 20px, ${hh}px, 0px)`, ease:Power3.easeInOut})
	tl.from('.t2b', .6, {clip:`rect(0px, ${590}px, ${hh}px, ${590}px)`, ease:Power3.easeInOut}, '-=.3')
	tl.from('.t3', .4, {opacity:0})	

	tl.to('.text', .3, {opacity:0}, '+=2')


	tl.add('f2', '+=.3')
	tl.set('.frame2', {opacity:1}, 'f2')	
	// tl.to('.bg', .5, {opacity:.7}, 'f2')
	tl.from('.t4', .3, {opacity:0, scale:.4, ease:Power4.easeInOut})
	tl.from('.logo_big', .3, {opacity:0}, '+=.2')
	tl.from('.footer', .3, {opacity:0}, '+=.5')


	// tl.gotoAndPlay('f2')

}

start()


module.exports = {};

