import axios from 'axios'
import iView from 'iview'
import Moment from 'moment'
import Vue from 'vue'
import LocalForage from 'localforage'
import 'vue2-animate/src/vue2-animate.less'
import './assets/less/custom-theme.less'
import './assets/sass/screen.scss'
import App from './App'
import router from './router'
import store from './vuex/store'
import fnMixin from './assets/js/fn-mixins'
import Config from './assets/config/arguments.config'
import ConsoleTrigger from './assets/config/consoleTrigger'

const _ = require('lodash')

const currentEnv = Config.dev

Moment.locale('zh-CN')
if (currentEnv.DEBUG && fnMixin.methods.urlParam('vConsole') === 'true') {
  require('vconsole/dist/vconsole.min')
}
ConsoleTrigger(currentEnv.DEBUG)

_.assign(window, {
  _,
  Vue,
  store,
  Moment,
  axios,
  LocalForage,
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
  store,
  router,
  template: '<App/>',
  components: { App },
})

