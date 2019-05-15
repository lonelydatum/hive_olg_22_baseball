
import {size} from '../../_common/js/common.js'


function start(){
	const tl = new TimelineMax()
	tl.set('.frame1', {opacity:1})
	tl.to('.bg', .8, {x:-320, opacity:1, ease:Power3.easeInOut, scale:.5})

	const {w, h} = size
	const ww = w*2
	const hh = h*2


	tl.to('.t1a', .6, {clip:`rect(0px, 806px, ${hh}px, 0px)`, ease:Power3.easeInOut}, '-=.6')
	tl.to('.t1a', .5, {clip:`rect(0px, 986px, ${hh}px, 0px)`, ease:Power3.easeInOut}, '+=0')
	tl.to('.t1a', .5, {clip:`rect(0px, 1196px, ${hh}px, 0px)`, ease:Power3.easeInOut}, '+=0')
	tl.to('.swoosh', .6, {clip:`rect(0px, ${1226}px, ${hh}px, ${950}px)`, ease:Power3.easeInOut}, '-=.2')



	tl.to('.text', .3, {opacity:0}, '+=1.3')


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

