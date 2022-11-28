import { createStore } from 'vuex'

import messages from './messages';
import user from './user';
import rooms from './rooms';
import utils from './utils';
import { auth } from '../firebase';

const store = createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    checkAuth({commit}){
      auth.onAuthStateChanged(()=>{
        if(user){
          commit("user/setUser",user);
        }else{
          commit("user/setUser",null);
        }

      });
    }
  },
  modules: {
    messages,rooms,user,utils
  }
})
export default store;

store.dispatch("checkAuth");
