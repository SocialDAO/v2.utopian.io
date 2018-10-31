// import vue and vuex.
import Vue from 'vue'
import Vuex from 'vuex'

// import store modules.
import api from './api'
import auth from './auth'
import blockchainSteem from './blockchains/steem'
import users from './users'
import utils from './utils'

// join modules.
const modules = {
  api,
  auth,
  blockchainSteem,
  users,
  utils
}

// enable vuex.
Vue.use(Vuex)

export default function () {
  const store = new Vuex.Store({
    modules
  })

  return store
}
