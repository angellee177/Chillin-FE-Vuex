<template>
    <div>
        <div class="search">
            <form @submit="onSubmit">
                <input type="text" v-model.trim="tags" placeholder="Search images by tags.">
                <input type="submit" value="Submit">
            </form>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: "SearchBar",
    data: () => ({
        tags: ''
    }),
    methods: {
        ...mapActions(['fetchImagesFeed']),
        onSubmit(e) {
            e.preventDefault();
           this.fetchImagesFeed(this.tags)
        }
    },
    computed: mapGetters(['imagesFeeds']),
    created() {
        this.fetchImagesFeed();
    }
}
</script>
<style scoped>
    input {
        flex: 10;
        padding: 10px;
        border: 1px solid  #f59261;
        outline: 0;
    }
    input[type= "text"] {
        flex: 10;
        padding: 10px;
        border: 1px solid #f59261;
        outline: 0;
    }

    input[type= "submit"] {
        background: #f59261;
        color: white
    }
</style>