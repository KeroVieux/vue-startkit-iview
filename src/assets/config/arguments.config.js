export default {
  dev: {
    fakeUser: true,
    postLogs: false,
    DEBUG: true,
    env: 'dev',
  },
  sit: {
    env: 'sit',
    apiUrl: 'http://xxx',
    contextPatch: '',
    others: {
      x: 1,
      y: 2,
      z: 3,
    },
  },
  prd: {
    env: 'prd',
    apiUrl: 'http://xxx',
    contextPatch: '',
    others: {
      x: 1,
      y: 2,
      z: 3,
    },
  },
  uat: {
    env: 'uat',
    apiUrl: 'http://xxx',
    contextPatch: '',
    others: {
      x: 1,
      y: 2,
      z: 3,
    },
  },
}
