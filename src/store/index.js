import { createStore } from 'vuex'

import messages from './messages';
import user from './user';
import rooms from './rooms';
import utils from './utils';

const store = createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    checkAuth(context){}
  },
  modules: {
    messages,rooms,user,utils
  }
})
export default store;
