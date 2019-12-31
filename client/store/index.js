
import Vuex from 'vuex';
import User from './User';

const createStore = () => {
    return new Vuex.Store({
        namespaced: true,
        modules: {
           user: User
        }
    });
};

export default createStore
