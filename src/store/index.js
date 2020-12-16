/** Combine all module */
import Vuex from 'vuex';
import Vue from 'vue';
import images from './modules/images';

// Load Vuex
Vue.use(Vuex);

// Create Store
export default new Vuex.Store({
    modules: {
        images
    }
});