
import {size} from '../../_common/js/common.js'


function start(){
	const tl = new TimelineMax()
	tl.set('.frame1', {opacity:1})
	tl.to('.bg', .8, {x:-610, y:-232, opacity:1, ease:Power3.easeInOut, scale:.5})

	const {w, h} = size
	const ww = w*2
	const hh = h*2


	tl.to('.t1a', .6, {clip:`rect(0px, 1220px, ${hh}px, 0px)`, ease:Power3.easeInOut}, '-=.6')
	tl.to('.t1a', .5, {clip:`rect(0px, 1510px, ${hh}px, 0px)`, ease:Power3.easeInOut}, '+=0')
	tl.to('.t1a', .5, {clip:`rect(0px, 1860px, ${hh}px, 0px)`, ease:Power3.easeInOut}, '+=0')
	tl.to('.swoosh', .6, {clip:`rect(0px, ${1900}px, ${hh}px, ${1500}px)`, ease:Power3.easeInOut}, '-=.3')



	tl.to('.text', .3, {opacity:0}, '+=1.3')


	tl.add('f2', '+=.3')
	tl.set('.frame2', {opacity:1}, 'f2')	
	// tl.to('.bg', .5, {opacity:.7}, 'f2')
	tl.from('.t4', .3, {opacity:0, scale:.4, x:"-=70", y:"-=22", ease:Power4.easeInOut})
	tl.from('.logo_big', .3, {opacity:0}, '+=.2')
	tl.from('.footer', .3, {opacity:0}, '+=.5')


	// tl.gotoAndPlay('f2')

}

start()


module.exports = {};

