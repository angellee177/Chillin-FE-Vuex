<template>
    <div>
        <div class="row" style="padding-top: 30px">
            <div class="col-md-6">
                <SearchBar />
            </div>
            <div class="col-md-6"></div>
        </div>
        <!-- need v-bind:key that should be unique -->
        <div class="row">
            <div class="col-md-12 images">
                <div v-for="image in imagesFeeds" v-bind:key="image.id">
                    <img :src="image.Static_URL" class="image" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import SearchBar from './SearchBar';

export default {
    name: "Images",
    components: {
        SearchBar
    },
    methods: {
        ...mapActions(['fetchImagesFeed']),
    },
    computed: mapGetters(['imagesFeeds']),
    created() {
        this.fetchImagesFeed();
    }
}
</script>
<style scoped>
    .images {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
    }

    .image {
        /* border: 1px solid #ccc; */
        width: 200px;
        height: 150px;
        padding: 1rem;
        border-radius: 5px;
        text-align: center;
        position: relative;
        cursor: pointer;
    }
</style>