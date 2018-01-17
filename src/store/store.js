import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export const store = new Vuex.Store({
  strict: true,
    state: {
        object: {
          field1: 1
        }
    },
    getters: {
        getObject: (state) => {
            return state.object;
        }
    },
    mutations: {
        mutateObject: (state, payload) => {
            state.object.field1 = payload
        }
    },
    actions: {
        mutateObject: (context, payload) => {
                context.commit('mutateObject', payload);
        }
    }
})
