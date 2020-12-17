/** to import state, and action*/
import axios from 'axios';

const state = {
    images      : []
};

// parse the data to Todos.vue
const getters = {
    imagesFeeds       : (state) => state.images
};

const actions = {
    async fetchImagesFeed({ commit }, images) {
        if(images === undefined) {
            const response = await axios.get('https://chillin-api.herokuapp.com/api/v1/feed/list')
            commit('listFeed', response.data.result);
        } else {
            const response = await axios.get(`https://chillin-api.herokuapp.com/api/v1/feed/search?tags=${images}`);
            commit('listFeed', response.data.result);
        }
    }
};

const mutations = {
    listFeed    : (state, images)       => (state.images        = images)
};

export default {
    state, 
    getters,
    actions,
    mutations
}
