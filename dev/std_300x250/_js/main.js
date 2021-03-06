
import {size} from '../../_common/js/common.js'


function start(){
	const tl = new TimelineMax()
	tl.set('.frame1', {opacity:1})
	tl.to('.bg', .8, {x:-600, ease:Power3.easeInOut, scale:.5})

	const {w, h} = size
	const ww = w*2
	const hh = h*2


	tl.from('.t1', 1, {clip:`rect(0px, 0px, ${hh}px, 0px)`, ease:Power3.easeInOut}, '-=.2')
	tl.from('.t2a', .9, {clip:`rect(0px, 0px, ${hh}px, 0px)`, ease:Power3.easeInOut}, '-=.5')
	tl.from('.t2b', .9, {clip:`rect(0px, ${ww}px, ${hh}px, ${ww}px)`, ease:Power3.easeInOut}, '-=.6')
	tl.from('.t3', .4, {opacity:0})	

	tl.to('.text', .3, {opacity:0}, '+=2')


	tl.add('f2', '+=.3')
	tl.set('.frame2', {opacity:1}, 'f2')	
	tl.to('.bg', .5, {opacity:.7}, 'f2')
	tl.from('.t4', .3, {opacity:0, scale:.4, ease:Power4.easeInOut})
	tl.from('.logo_big', .3, {opacity:0}, '+=.2')
	tl.from('.footer', .3, {opacity:0}, '+=.5')


	// tl.gotoAndPlay('f2')

}

start()


module.exports = {};

