<template>
    <div>
        <div class="images">
            <!-- need v-bind:key that should be unique -->
            <!-- <div v-for="image in imagesFeeds" v-bind:key="image.id">
                 <img :src="image.Static_URL" class="image" />
            </div> -->
        </div>
    </div>
</template>
<script>
export default {
    name: 'SearchResult'
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