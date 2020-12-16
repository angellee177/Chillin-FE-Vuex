/** to import state, and action*/
import axios from 'axios';

const state = {
    images      : [],
    searchList  : []
};

// parse the data to Todos.vue
const getters = {
    imagesFeeds       : (state) => state.images,
    // displaySearchList : (state) => state.searchList, 
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
    },
    // async searchImages({ commit }, images) {
      
    //     const response = await axios.get(`https://chillin-api.herokuapp.com/api/v1/feed/search?tags=${images}`);

    //     commit('listSearch', response.data.result);
    // }
};

const mutations = {
    listFeed    : (state, images)       => (state.images        = images),
    // listSearch  : (state, searchList)   => (state.images        = images)
};

export default {
    state, 
    getters,
    actions,
    mutations
}
