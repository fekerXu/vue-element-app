import Vue from 'vue'
import Router from 'vue-router'
import homeRouter from './home'
import articleRouter from './article'
import communityRouter from './community'
import tutorialRouter from './tutorial'
import mineRouter from './mine'
Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		homeRouter,
		articleRouter,
		communityRouter,
		tutorialRouter,
		mineRouter,
		{
			path: '/*',
			redirect: '/home'
		}
	]
})
