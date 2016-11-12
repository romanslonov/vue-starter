import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '@pages/Home.vue'

export default new Router({
    mode: 'hash',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        { path: '/', component: Home },
        { path: '*', component: Home }
    ]
})
