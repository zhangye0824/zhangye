import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
let store = new Vuex.Store({
    state: {
        msg: 'this is store',
        num: 0
    },
    getters: {
        doubleNum(state) {
            return state.num * 2;
        }
    },
    mutations: {
        addNum(state) {
            state.num += 3;
        },
        reduceNum(state) {
            state.num -= 5;
        },
        resetNum(state) {
            state.num = 0;
        }
    },
    actions: {
        resetNum(store) {
            console.log('actions', arguments);
            setTimeout(() => {
                store.commit('resetNum');
            }, 2000)
        }
    },
    modules: {
        child: {
            state: {
                num: 100
            },
            mutations: {
                addNum(state) {
                    state.num += 3;
                },
                reduceNum(state) {
                    state.num -= 5;
                },
                resetNum(state) {
                    state.num = 0;
                }
            },
            getters: {
                bmDoubleNum(state) {
                    return state.num * 2;
                }
            }
        },
    }
});