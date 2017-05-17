import axios from 'axios'
import iView from 'iview'
import Moment from 'moment'
import Vue from 'vue'
import 'vue2-animate/src/vue2-animate.less'
import './assets/less/custom-theme.less'
import './assets/sass/screen.scss'
import App from './App'
import router from './router'
import store from './vuex/store'
// import Config from './assets/config/arguments.config'

const _ = require('lodash')

const currentEnv = Config.dev

Moment.locale('zh-CN')

_.assign(window, {
  _,
  Vue,
  store,
  Moment,
  axios,
  rtpToken: null,
  userToken: null,
  currentUser: null,
  currentEnv,
})

axios.defaults.baseURL = 'https://api.github.com'
Vue.config.devtools = currentEnv.testingMode
Vue.use(iView)
router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  next()
})
router.afterEach(() => {
  iView.LoadingBar.finish()
})
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
})

