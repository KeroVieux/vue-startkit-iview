import axios from 'axios'
import iView from 'iview'
import Moment from 'moment'
import Vue from 'vue'
import AlloyLever from 'alloylever'
import 'vue2-animate/src/vue2-animate.less'
import './assets/less/custom-theme.less'
import './assets/sass/screen.scss'
import App from './App'
import router from './router'
import store from './vuex/store'
import Config from './assets/config/arguments.config'
import ConsoleTrigger from './assets/config/console_trigger'

const _ = require('lodash')

const currentEnv = Config.dev

Moment.locale('zh-CN')
AlloyLever.config({
  entry: '#entryVconsole',
})
ConsoleTrigger(currentEnv.DEBUG)

_.assign(window, {
  _,
  Vue,
  store,
  Moment,
  axios,
  currentEnv,
})

axios.defaults.baseURL = currentEnv.apiServer
Vue.config.devtools = currentEnv.DEVTOOLS
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

