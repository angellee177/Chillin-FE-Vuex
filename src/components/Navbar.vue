<template>
    <div class="pure-menu pure-menu-horizontal">
        <div class="container">
            <router-link to="/" class="pure-menu-heading pure-menu-link">Chilli'n</router-link>
            <ul class="pure-menu-list">
                <li class="pure-menu-item">
                    <router-link to="/" class="pure-menu-link">Home</router-link>
                </li>
                <!-- <li class="navbar-menu-item">
                    <a href="" class="navbar-menu-link">Home</a>
                </li> -->
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: "Navbar",
}
</script>
<style scoped>
    .pure-menu {
        background-color: #f59261;
    }

    .pure-menu a {
        color: white;
        font-weight: bold;
    }

    .pure-menu a:hover {
        background-color: #ee844f;
        color: rgb(248, 248, 248);
    }
</style>