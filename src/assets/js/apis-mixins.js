/**
 * Created by PetitKero on 13/10/2016.
 */

import queryString from 'query-string'

/**
 * This provides mixins used for common api in the Vue components.
 * Before you begin to used it , plz inject this mixins in the components
 * like mixins: [ApiMixin]
 *
 * @mixin
 */

const ApiMixin = {
  async apiArticles(arg = { method: 'get', params: {} }) {
    iView.LoadingBar.start()
    let [err, req] = [null, null]
    switch (arg.method) {
      case 'post':
        [err, req] = await To(axios.post('articles/', arg.params))
        break
      case 'patch':
        [err, req] = await To(axios.patch(`articles/${arg.params.article_id}`, arg.params))
        break
      default:
        [err, req] = await To(axios.get(`articles/${arg.params && arg.params.article_id ? arg.params.article_id : ''}?${queryString.stringify(arg.params)}`))
    }
    return this.globalCB(err, req)
  },
  /**
   * Generate the logs on server , when the user have done something sensitive with server requires,
   * such like login/send msg/delete data.
   * @param {object} params request_name, request_path, request_params, blablabla
   * @returns {object} error or not
   */
  async sendLog(params) {
    const res = await axios.post(`${currentEnv.logsUrl}/logs`, params)
    return res.data
  },
  /**
   * Get information of ldap user from server,
   * ordinary for fetch a specific user's info
   * @param {object} arg depId: 'CR0032000059', oprId: 'ANXING'
   * @returns {object} object of user's info
   */
  async apiLdapUsers(arg) {
    const req = await axios.get(`${currentEnv.wxServer}/api/qy-wexin/ldap-users?${queryString.stringify(arg)}`)
    return req.data
  },
  /**
   * Get information of wx user from server,
   * ordinary for detect a user's auth when it entered app at once
   * @param {object} params agentId, code, fake
   * @returns {object} { error: null, ldapUserInfo: [], weixinUserInfo:{} }
   */
  async apiWxUser(params) {
    const req = await axios.get(`${currentEnv.wxServer}/api/qy-wexin/user_detail?${queryString.stringify(params)}`)
    return req.data
  },
  globalCB(err, req) {
    if (err) {
      this.$Loading.error()
      this.$Message.error(_.toString(err))
      return { error: _.toString(err) }
    } else if (req && req.data && req.data.status === 401) {
      this.$Loading.error()
      this.$Message.error('请先登录')
      this.$router.push('/entrances/signin')
    } else if (req && req.data && req.data.error) {
      this.$Loading.error()
      this.$Message.error(req.data.error)
    }
    this.$Loading.finish()
    return req.data
  },
}

export default {
  methods: ApiMixin,
}
