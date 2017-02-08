import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [

]

export const router = new VueRouter({
	routes: routes,
	scrollBehavior (to, from, savedPosition) {
		return { x: 0, y: 0 }
	}
})

function scrollToTop(scrollDuration) {
	var cosParameter = window.scrollY / 2,
	scrollCount = 0,
	oldTimestamp = performance.now();
	function step (newTimestamp) {
		scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
		if (scrollCount >= Math.PI) window.scrollTo(0, 0);
		if (window.scrollY === 0) return;
		window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)));
		oldTimestamp = newTimestamp;
		window.requestAnimationFrame(step);
	}
	window.requestAnimationFrame(step);
}
